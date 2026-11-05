// Generates brand assets (emblem, wordmark, icons, Garrahan crop) into assets/ and icons in the repo root.
// Run: node tools/make_assets.js   (needs Playwright; fonts in tools/fonts)
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
const R=path.resolve(__dirname,'..');const A=p=>path.join(R,'assets',p);
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
<clipPath id="c"><circle cx="50" cy="50" r="43.200"/></clipPath>
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
<filter id="blur"><feGaussianBlur stdDeviation="1.6"/></filter>
</defs>
<circle cx="50" cy="51.500" r="47" fill="#10222B" opacity=".18" filter="url(#blur)"/>
<circle cx="50" cy="50" r="47" fill="url(#bgr)"/>
<circle cx="50" cy="50" r="46.600" fill="none" stroke="url(#ringg)" stroke-width="2.800"/>
<circle cx="50" cy="50" r="44.200" fill="none" stroke="${GOLD}" stroke-width=".7" opacity=".85"/>
<g clip-path="url(#c)">
 <path d="${HEAD}" fill="url(#hd)"/>
 <path d="M29 77.500 C40 82 55 80 67.500 75.300 L68 101 L29 101Z" fill="url(#nk)" opacity=".85"/>
 <path d="${HEAD}" fill="none" stroke="url(#rim)" stroke-width="1.400" stroke-linejoin="round"/>
 <path d="M24 28 C31 19 41 15.500 50 15.500" fill="none" stroke="#fff" stroke-opacity=".32" stroke-width="1.600" stroke-linecap="round"/>
 <path d="M75.500 35.500 C76 39.500 77.500 43.500 79.500 48" fill="none" stroke="#DDF1F7" stroke-opacity=".55" stroke-width=".9" stroke-linecap="round"/>
 <ellipse cx="66" cy="55" rx="3.200" ry="1.700" fill="#0E2A38" opacity=".28" filter="url(#blur)"/>
</g>
<circle cx="45.500" cy="39.500" r="20" fill="#0E2A38" opacity=".35" filter="url(#blur)" transform="translate(.8 1.400)"/>
<circle cx="45.500" cy="39.500" r="19.600" fill="#CBDAE0"/>
<circle cx="45.500" cy="39.500" r="19.800" fill="none" stroke="${CREAM}" stroke-width="1.700" stroke-dasharray="1.300 1.300"/>
<circle cx="45.500" cy="39.500" r="16.800" fill="url(#gl)" stroke="#8FA9B3" stroke-width=".9"/>
<path d="M30 34 A16.500 16.500 0 0 1 45 23.200" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="1.100" stroke-linecap="round"/>
<path d="M33 51 A16.500 16.500 0 0 0 58 47" fill="none" stroke="#5C7C89" stroke-opacity=".35" stroke-width="1.200" stroke-linecap="round"/>
${gear2(40.500,35.500,6.400,10,'tc')}${gear2(54,41,3.700,8,'gd')}${gear2(47,49.500,3.100,8,'tc')}
<ellipse cx="38" cy="14" rx="26" ry="6" fill="#fff" opacity=".22" transform="rotate(-14 38 14)" clip-path="url(#c)"/>
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
