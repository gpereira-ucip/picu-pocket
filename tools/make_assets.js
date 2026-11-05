// Generates brand assets (emblem, wordmark, icons, Garrahan crop) into assets/ and icons in the repo root.
// Run: node tools/make_assets.js   (needs Playwright; fonts in tools/fonts)
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
const R=path.resolve(__dirname,'..');const A=p=>path.join(R,'assets',p);
const SIL=JSON.parse(fs.readFileSync(path.join(R,'assets','head-silhouette.json'),'utf8'));
const K=47/SIL.ring.r,HT=`translate(50 50) scale(${(K/SIL.S).toFixed(5)}) translate(${-SIL.ring.cx*SIL.S} ${-SIL.ring.cy*SIL.S})`;
const NAVY='#1F5368',DEEP='#17384A',TERRA='#C27F62',GOLD='#D9A441',CREAM='#F6F2EA';
function gear(cx,cy,r,n,fill,hole){let t='';const d=2*Math.PI*r/(n*2);
 return `<g><circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}"/><circle cx="${cx}" cy="${cy}" r="${r+0.9}" fill="none" stroke="${fill}" stroke-width="${(r*0.38).toFixed(2)}" stroke-dasharray="${d.toFixed(2)} ${d.toFixed(2)}"/><circle cx="${cx}" cy="${cy}" r="${(r*0.42).toFixed(2)}" fill="${hole}"/></g>`}
// Round emblem: head profile with a gear "brain", lit from the upper left. viewBox 0 0 100 100
function gear2(cx,cy,r,n,id){let t='';const ro=r*1.16,ri=r*0.92;let d='';
 for(let i=0;i<n;i++){const a0=i/n*2*Math.PI,w=Math.PI/n*0.58,q=(a)=>[cx+Math.cos(a)*ro,cy+Math.sin(a)*ro],z=(a)=>[cx+Math.cos(a)*ri,cy+Math.sin(a)*ri];
  const pts=[z(a0-w*1.25),q(a0-w*0.8),q(a0+w*0.8),z(a0+w*1.25)];d+=(i?'L':'M')+pts.map(x=>x[0].toFixed(2)+' '+x[1].toFixed(2)).join('L');}
 return `<g filter="url(#sh)"><path d="${d}Z" fill="url(#${id})"/><circle cx="${cx}" cy="${cy}" r="${(r*0.95).toFixed(2)}" fill="url(#${id})"/><circle cx="${cx}" cy="${cy}" r="${(r*0.62).toFixed(2)}" fill="none" stroke="#fff" stroke-opacity=".28" stroke-width=".6"/><circle cx="${cx}" cy="${cy}" r="${(r*0.34).toFixed(2)}" fill="#E9F0F2" stroke="#00000033" stroke-width=".5"/><ellipse cx="${(cx-r*0.35).toFixed(2)}" cy="${(cy-r*0.45).toFixed(2)}" rx="${(r*0.45).toFixed(2)}" ry="${(r*0.22).toFixed(2)}" fill="#fff" opacity=".35" transform="rotate(-30 ${cx} ${cy})"/></g>`}
const HEAD='M29 101 C30 91 31 84 30 77.500 C21 73 13.500 63.500 13 51 C12.500 31 27 14.500 47 13.500 C62 12.800 74 22 75.500 35.500 C76 39.500 77.500 43.500 79.500 48 C81 51 83 54.500 84.500 57 C85.200 58.300 84.300 59.600 82.300 59.800 C82.200 61.200 81.800 62.200 80.600 62.800 C81.200 64.300 80.600 65.700 79.200 66.300 C79.600 68.200 79 70 77.200 71.300 C75 73.500 71 74.800 67.500 75.300 C66.300 80 66 89 68 101 Z';
const emblem=(bg)=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs>
<clipPath id="c"><circle cx="50" cy="50" r="44.600"/></clipPath>
<radialGradient id="bgr" cx="38%" cy="28%" r="85%"><stop offset="0" stop-color="#FFFEFA"/><stop offset=".6" stop-color="${bg}"/><stop offset="1" stop-color="#E4D9C4"/></radialGradient>
<linearGradient id="rg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2F7A94"/><stop offset=".55" stop-color="${NAVY}"/><stop offset="1" stop-color="#0F2F3E"/></linearGradient>
<linearGradient id="gd" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F3D58B"/><stop offset=".5" stop-color="${GOLD}"/><stop offset="1" stop-color="#9C6F22"/></linearGradient>
<linearGradient id="tc" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#E7A88A"/><stop offset=".5" stop-color="${TERRA}"/><stop offset="1" stop-color="#8E4E36"/></linearGradient>
<linearGradient id="hd" x1=".08" y1=".02" x2=".95" y2=".98"><stop offset="0" stop-color="#4C93AB"/><stop offset=".42" stop-color="#27677E"/><stop offset="1" stop-color="#123647"/></linearGradient>
<radialGradient id="gl" cx="42%" cy="34%" r="70%"><stop offset="0" stop-color="#FFFFFF"/><stop offset=".7" stop-color="#E3EDF0"/><stop offset="1" stop-color="#B9CDD4"/></radialGradient>
<linearGradient id="rim" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".7" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#CFE9F2" stop-opacity=".9"/></linearGradient>
<linearGradient id="nk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#000" stop-opacity=".38"/><stop offset="1" stop-color="#000" stop-opacity="0"/></linearGradient>
<linearGradient id="ringg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2F7A94"/><stop offset="1" stop-color="#123647"/></linearGradient>
<filter id="sh" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx=".5" dy=".9" stdDeviation=".7" flood-color="#10222B" flood-opacity=".45"/></filter>
<filter id="blur"><feGaussianBlur stdDeviation="1.6"/></filter><filter id="blur2" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="22"/></filter>
</defs>
<circle cx="50" cy="51.500" r="47" fill="#10222B" opacity=".18" filter="url(#blur)"/>
<circle cx="50" cy="50" r="47" fill="url(#bgr)"/>
<circle cx="50" cy="50" r="46.600" fill="none" stroke="url(#ringg)" stroke-width="2.800"/>
<circle cx="50" cy="50" r="44.200" fill="none" stroke="${GOLD}" stroke-width=".7" opacity=".85"/>
<clipPath id="hc"><path transform="${HT}" d="${SIL.d}"/></clipPath>
<g clip-path="url(#c)"><g clip-path="url(#hc)">
 <path transform="${HT}" d="${SIL.d}" fill="url(#hd)"/>
 <g filter="url(#blur2)"><path transform="${HT} translate(14 16)" d="${SIL.d}" fill="none" stroke="#06202C" stroke-opacity=".4" stroke-width="60"/></g>
 <g filter="url(#blur2)"><path transform="${HT} translate(-9 -11)" d="${SIL.d}" fill="none" stroke="#DDF1F7" stroke-opacity=".34" stroke-width="34"/></g>
 <ellipse cx="50" cy="83" rx="16" ry="5.5" fill="#04141C" opacity=".28" filter="url(#blur)"/>
</g>
 <path transform="${HT}" d="${SIL.d}" fill="none" stroke="url(#rim)" stroke-width="9" stroke-linejoin="round"/>
 <ellipse cx="34" cy="17" rx="22" ry="5.5" fill="#fff" opacity=".16" transform="rotate(-24 34 17)" clip-path="url(#hc)"/>
</g>
<circle cx="47.600" cy="37.700" r="22.800" fill="#0E2A38" opacity=".38" filter="url(#blur)" transform="translate(.8 1.500)"/>
<circle cx="47.600" cy="37.700" r="22.600" fill="#CBDAE0"/>
<circle cx="47.600" cy="37.700" r="22.600" fill="none" stroke="${CREAM}" stroke-width="2.200" stroke-dasharray="1.500 1.500"/>
<circle cx="47.600" cy="37.700" r="19.600" fill="url(#gl)" stroke="#8FA9B3" stroke-width=".9"/>
<path d="M29 31 A19.600 19.600 0 0 1 46 18.200" fill="none" stroke="#fff" stroke-opacity=".75" stroke-width="1.300" stroke-linecap="round"/>
<path d="M31 51 A19.600 19.600 0 0 0 62 49" fill="none" stroke="#5C7C89" stroke-opacity=".35" stroke-width="1.400" stroke-linecap="round"/>
${gear2(39.500,35.500,6.800,10,'tc')}${gear2(53,38.500,3.600,8,'gd')}${gear2(48.500,47.500,3.100,8,'tc')}
</svg>`;
fs.writeFileSync(A('emblem.svg'),emblem(CREAM));
const font=(w)=>`@font-face{font-family:M;font-weight:${w};src:url(file://${R}/tools/fonts/montserrat-latin-${w}-normal.woff2)}`;
const page=`<style>${font(800)}${font(900)}body{margin:0;background:transparent}</style><canvas id=c></canvas>`;
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1400,height:600}});
const tmp=require('os').tmpdir()+'/arucip-assets.html';fs.writeFileSync(tmp,page);await p.goto('file://'+tmp);await p.waitForTimeout(300);
const png=async(fn,args)=>Buffer.from(await p.evaluate(fn,args),'base64');
const imgs={};for(const k of ['light','dark'])imgs[k]=fs.readFileSync(A(`staff-wordmark-orig-${k}.png`)).toString('base64');
// Wordmark: "AR" and "UCIP" in two palette colors; P = original staff-P crop recolored to the UCIP color.
// WM=terra|gold|inv selects the color pairing (default terra).
const WMS={terra:{light:['#B8694B',DEEP],dark:['#EDAE91','#CBE6EE']},gold:{light:['#B8862B',DEEP],dark:['#E9C36F','#CBE6EE']},inv:{light:[DEEP,'#B8694B'],dark:['#CBE6EE','#EDAE91']}};
const WM=WMS[process.env.WM||'terra'];
for(const k of ['light','dark']){
 const buf=await png(async([b64,c1,c2])=>{await document.fonts.load('800 169px M');
  const im=new Image();im.src='data:image/png;base64,'+b64;await im.decode();
  const c=document.getElementById('c');const x=c.getContext('2d');
  const cap=118,fs=Math.round(cap/0.7),y0=38+cap;
  x.font=`800 ${fs}px M`;x.letterSpacing='-2px';
  const wAR=x.measureText('AR').width,wAll=Math.ceil(x.measureText('ARUCI').width)-6;
  const gap=16;c.width=wAll+gap+126+6;c.height=225;
  x.font=`800 ${fs}px M`;x.letterSpacing='-2px';
  x.fillStyle=c1;x.fillText('AR',2,y0);x.fillStyle=c2;x.fillText('UCI',2+wAR,y0);
  const t=document.createElement('canvas');t.width=126;t.height=225;const tx=t.getContext('2d');
  tx.drawImage(im,2,0,126,225,0,0,126,225);tx.globalCompositeOperation='source-in';tx.fillStyle=c2;tx.fillRect(0,0,126,225);
  x.drawImage(t,wAll+gap,0);
  return c.toDataURL('image/png').split(',')[1]},[imgs[k],WM[k][0],WM[k][1]]);
 fs.writeFileSync(A(`wordmark-${k}.png`),buf)}
// Garrahan logo crop from user's screenshot
const s2=fs.readFileSync('/tmp/s2.png').toString('base64');
const g=await png(async b64=>{const im=new Image();im.src='data:image/png;base64,'+b64;await im.decode();
 const sx=290,sy=1420,sw=690,sh=260;const c=document.getElementById('c');c.width=sw;c.height=sh;const x=c.getContext('2d');x.fillStyle='#fff';x.fillRect(0,0,sw,sh);x.drawImage(im,sx,sy,sw,sh,0,0,sw,sh);return c.toDataURL('image/png').split(',')[1]},s2);
fs.writeFileSync(A('fundacion-garrahan.png'),g);
// Icons
async function icon(file,size,scale,bgGrad){
 const svg=emblem('#FBF8F1').replace('<svg ','<svg width="100%" height="100%" ');
 await p.setViewportSize({width:size,height:size});
 await p.setContent(`<style>html,body{margin:0;height:100%}body{background:radial-gradient(circle at 50% 38%,#FFFDF8,${CREAM} 55%,#E9E0CF);display:grid;place-items:center;overflow:hidden}div{width:${scale*100}%;height:${scale*100}%;filter:drop-shadow(0 ${size*0.02}px ${size*0.035}px rgba(23,56,74,.28))}</style><div>${svg}</div>`);
 await p.waitForTimeout(150);await p.screenshot({path:file,omitBackground:false})}
await icon(path.join(R,'icon-512.png'),512,0.80);await icon(path.join(R,'icon-192.png'),192,0.80);
await icon(path.join(R,'icon-maskable-512.png'),512,0.62);await icon(path.join(R,'apple-touch-icon.png'),180,0.80);
await icon(A('favicon-64.png'),64,0.88);
await b.close()})();
