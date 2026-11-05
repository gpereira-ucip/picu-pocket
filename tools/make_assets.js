// Generates brand assets (emblem, wordmark, icons, Garrahan crop) into assets/ and icons in the repo root.
// Run: node tools/make_assets.js   (needs Playwright; fonts in tools/fonts)
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
const R=path.resolve(__dirname,'..');const A=p=>path.join(R,'assets',p);
const NAVY='#1F5368',DEEP='#17384A',TERRA='#C27F62',GOLD='#D9A441',CREAM='#F6F2EA';
function gear(cx,cy,r,n,fill,hole){let t='';const d=2*Math.PI*r/(n*2);
 return `<g><circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}"/><circle cx="${cx}" cy="${cy}" r="${r+0.9}" fill="none" stroke="${fill}" stroke-width="${(r*0.38).toFixed(2)}" stroke-dasharray="${d.toFixed(2)} ${d.toFixed(2)}"/><circle cx="${cx}" cy="${cy}" r="${(r*0.42).toFixed(2)}" fill="${hole}"/></g>`}
// Round AR-UCIP emblem redrawn in the Picu Pocket palette. viewBox 0 0 100 100
const emblem=(bg)=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><clipPath id="c"><circle cx="50" cy="50" r="43.5"/></clipPath><linearGradient id="h" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2A6B84"/><stop offset="1" stop-color="${NAVY}"/></linearGradient></defs>
<circle cx="50" cy="50" r="47" fill="${bg}" stroke="${NAVY}" stroke-width="2.6"/>
<g clip-path="url(#c)"><path fill="url(#h)" d="M27 100 C28 88 28 80 24 72 C16 66 12 54 14 42 C16 26 30 14 48 13 C62 12 72 21 73 34 C73.5 38 75 42 78 49 C79.500 52 78 54 75.500 55 C76.500 57.500 76 59 74.500 60.500 C75.500 62.500 75 65 73.500 66.500 C74 70 72 73 67 74 C65 79 64 84 65 100 Z"/></g>
<circle cx="46" cy="39" r="19.500" fill="#DCE8EC"/><circle cx="46" cy="39" r="19.500" fill="none" stroke="${CREAM}" stroke-width="3" stroke-dasharray="1.9 1.9"/><circle cx="46" cy="39" r="16" fill="#EAF1F3" stroke="#B7CBD3" stroke-width=".8"/>
${gear(41,35,6.5,10,TERRA,'#EAF1F3')}${gear(54,40.500,3.600,8,GOLD,'#EAF1F3')}${gear(47.500,50,3.200,8,TERRA,'#EAF1F3')}
</svg>`;
fs.writeFileSync(A('emblem.svg'),emblem(CREAM));
const font=(w)=>`@font-face{font-family:M;font-weight:${w};src:url(file://${R}/tools/fonts/montserrat-latin-${w}-normal.woff2)}`;
const page=`<style>${font(800)}${font(900)}body{margin:0;background:transparent}</style><canvas id=c></canvas>`;
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1400,height:600}});
const tmp=require('os').tmpdir()+'/arucip-assets.html';fs.writeFileSync(tmp,page);await p.goto('file://'+tmp);await p.waitForTimeout(300);
const png=async(fn,args)=>Buffer.from(await p.evaluate(fn,args),'base64');
const imgs={};for(const k of ['light','dark'])imgs[k]=fs.readFileSync(A(`staff-wordmark-orig-${k}.png`)).toString('base64');
// Wordmark: ARUCI (Montserrat, matched to original cap height) + original staff-P crop
for(const k of ['light','dark']){
 const buf=await png(async([b64,col])=>{await document.fonts.load('800 169px M');
  const im=new Image();im.src='data:image/png;base64,'+b64;await im.decode();
  const c=document.getElementById('c');const x=c.getContext('2d');
  const cap=118,fs=Math.round(cap/0.7),y0=38+cap;           // baseline aligned with original caps
  x.font=`800 ${fs}px M`;const w=Math.ceil(x.measureText('ARUCI').width)-6;
  const gap=16;c.width=w+gap+126+6;c.height=225;
  x.font=`800 ${fs}px M`;x.fillStyle=col;x.letterSpacing='-2px';x.fillText('ARUCI',2,y0);
  x.drawImage(im,2,0,126,225,w+gap,0,126,225);                 // P + Aesculapius staff
  return c.toDataURL('image/png').split(',')[1]},[imgs[k],k==='light'?DEEP:'#CBE6EE']);
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
