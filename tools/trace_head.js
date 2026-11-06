// Traces the head silhouette from the ORIGINAL AR-UCIP logo (assets/source/ar-ucip-original.jpg)
// and writes assets/head-silhouette.json: {path, ring:{cx,cy,r}, disc:{cx,cy,r}} in the logo's own pixel units.
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
const R=path.resolve(__dirname,'..');
(async()=>{const b=await chromium.launch();const p=await b.newPage();
const b64=fs.readFileSync(R+'/assets/source/ar-ucip-original.jpg').toString('base64');
const out=await p.evaluate(async b64=>{
 const im=new Image();im.src='data:image/jpeg;base64,'+b64;await im.decode();
 const W=im.width,H=im.height,c=document.createElement('canvas');c.width=W;c.height=H;const x=c.getContext('2d');x.drawImage(im,0,0);
 const D=x.getImageData(0,0,W,H).data;const lum=i=>0.299*D[i*4]+0.587*D[i*4+1]+0.114*D[i*4+2];
 const sat=i=>{const r=D[i*4],g=D[i*4+1],bb=D[i*4+2];return Math.max(r,g,bb)-Math.min(r,g,bb)};
 // "ink" = not near-white
 const ink=new Uint8Array(W*H);for(let i=0;i<W*H;i++)ink[i]=lum(i)<205?1:0;
 // largest connected component of ink among rows below the arched text (ring+head)
 const lab=new Int32Array(W*H);let best=0,bestN=0,id=0;
 for(let s=0;s<W*H;s++){if(!ink[s]||lab[s])continue;id++;let n=0;const st=[s];lab[s]=id;while(st.length){const q=st.pop();n++;const qx=q%W,qy=(q/W)|0;
  for(const [dx,dy] of [[1,0],[-1,0],[0,1],[0,-1]]){const nx=qx+dx,ny=qy+dy;if(nx<0||ny<0||nx>=W||ny>=H)continue;const k=ny*W+nx;if(ink[k]&&!lab[k]){lab[k]=id;st.push(k)}}}
  if(n>bestN){bestN=n;best=id}}
 let x0=1e9,x1=-1,y0=1e9,y1=-1;for(let i=0;i<W*H;i++)if(lab[i]===best){const X=i%W,Y=(i/W)|0;x0=Math.min(x0,X);x1=Math.max(x1,X);y0=Math.min(y0,Y);y1=Math.max(y1,Y)}
 const cx=(x0+x1+1)/2,cy=(y0+y1+1)/2,r=((x1-x0+1)+(y1-y0+1))/4;
 // inside the ring: everything within r-3.2 that is not outside-white connected to the boundary
 const rin=r-3.2,inside=new Uint8Array(W*H);for(let Y=0;Y<H;Y++)for(let X=0;X<W;X++){const d=Math.hypot(X+.5-cx,Y+.5-cy);inside[Y*W+X]=d<=rin?1:0}
 const out=new Uint8Array(W*H);const st=[];
 for(let Y=0;Y<H;Y++)for(let X=0;X<W;X++){const i=Y*W+X;if(inside[i]&&!ink[i]){const d=Math.hypot(X+.5-cx,Y+.5-cy);if(d>rin-1.2&&!out[i]){out[i]=1;st.push(i)}}}
 while(st.length){const q=st.pop(),qx=q%W,qy=(q/W)|0;for(const [dx,dy] of [[1,0],[-1,0],[0,1],[0,-1]]){const nx=qx+dx,ny=qy+dy;if(nx<0||ny<0||nx>=W||ny>=H)continue;const k=ny*W+nx;if(inside[k]&&!ink[k]&&!out[k]){out[k]=1;st.push(k)}}}
 const head=new Uint8Array(W*H);for(let i=0;i<W*H;i++)head[i]=inside[i]&&!out[i]?1:0;
 // gear disc: light pixels (lum>170, low sat) fully enclosed in head + red gears
 // extend the neck straight down to the ring (the original neck merges with the ring)
 for(let X=0;X<W;X++){let mY=-1;for(let Y=0;Y<H;Y++)if(head[Y*W+X])mY=Y;if(mY>=Math.round(cy+rin*0.78)){for(let Y=mY;Y<H;Y++)head[Y*W+X]=1}}
 // upscale mask 8x smooth
 const S=8;const m=document.createElement('canvas');m.width=W;m.height=H;const mx=m.getContext('2d');const id2=mx.createImageData(W,H);
 for(let i=0;i<W*H;i++){id2.data[i*4]=id2.data[i*4+1]=id2.data[i*4+2]=head[i]?255:0;id2.data[i*4+3]=255}mx.putImageData(id2,0,0);
 const u=document.createElement('canvas');u.width=W*S;u.height=H*S;const ux=u.getContext('2d');ux.imageSmoothingEnabled=true;ux.imageSmoothingQuality='high';
 ux.filter='blur('+(S*0.9)+'px)';ux.drawImage(m,0,0,W*S,H*S);ux.filter='none';
 const UD=ux.getImageData(0,0,W*S,H*S).data;const UW=W*S,UH=H*S;const f=(X,Y)=>X<0||Y<0||X>=UW||Y>=UH?0:UD[(Y*UW+X)*4]>=128?1:0;
 const bin=document.createElement('canvas');bin.width=UW;bin.height=UH;const bx=bin.getContext('2d');const bi=bx.createImageData(UW,UH);for(let i=0;i<UW*UH;i++){const v=UD[i*4]>=128?0:255;bi.data[i*4]=bi.data[i*4+1]=bi.data[i*4+2]=v;bi.data[i*4+3]=255}bx.putImageData(bi,0,0);const maskPng=bin.toDataURL('image/png').split(',')[1];
 const sp=[];
 // disc: bright pixels inside head
 let dx0=1e9,dx1=-1,dy0=1e9,dy1=-1,rx=0,ry=0,rn=0;
 for(let Y=0;Y<H;Y++)for(let X=0;X<W;X++){const i=Y*W+X;if(!head[i])continue;const l=lum(i),s=sat(i);
  if(l>185&&s<40&&Math.hypot(X+.5-cx,Y+.5-cy)<rin){dx0=Math.min(dx0,X);dx1=Math.max(dx1,X);dy0=Math.min(dy0,Y);dy1=Math.max(dy1,Y)}
  if(D[i*4]>150&&D[i*4+1]<110){rx+=X+.5;ry+=Y+.5;rn++}}
 return{maskPng,W,H,ring:{cx,cy,r},disc:{x0:dx0,x1:dx1,y0:dy0,y1:dy1},red:{cx:rx/rn,cy:ry/rn,n:rn},S,poly:sp.map(q=>[+(q[0]/S).toFixed(2),+(q[1]/S).toFixed(2)]),headPx:head.reduce((a,b)=>a+b,0)}
},b64);
fs.writeFileSync(R+'/assets/source/head-mask.png',Buffer.from(out.maskPng,'base64'));delete out.maskPng;fs.writeFileSync(R+'/assets/source/head-trace-raw.json',JSON.stringify(out));
console.log(JSON.stringify({W:out.W,H:out.H,ring:out.ring,disc:out.disc,red:out.red,headPx:out.headPx}));
await b.close();
const potrace=require('potrace');const util=require('util');
const tr=util.promisify((f,o,cb)=>potrace.trace(f,o,cb));
const svg=await tr(R+'/assets/source/head-mask.png',{threshold:128,turdSize:200,alphaMax:1.25,optCurve:true,optTolerance:0.6,blackOnWhite:true});
const d=svg.match(/ d="([^"]+)"/)[1];
const S=out.S;fs.writeFileSync(R+'/assets/head-silhouette.json',JSON.stringify({d,S,ring:out.ring,disc:out.disc,red:out.red,W:out.W,H:out.H}));
console.log('path chars',d.length);})();
