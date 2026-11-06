const fs=require('fs'),path=require('path');
const dir=path.basename(__dirname)==='scripts'?path.resolve(__dirname,'..'):path.join(__dirname,'T-Lucas43'),assets=dir+'/assets';
const photo=fs.readFileSync(assets+'/portrait.png').toString('base64');
const xml=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;');
const css=`text{font-family:Arial,Helvetica,sans-serif} .mono{font-family:Consolas,monospace} .muted{fill:#8993ae} .white{fill:#f4f1ff} .small{font-size:17px;letter-spacing:3px} @media(prefers-reduced-motion:reduce){*{animation:none!important}}`;
function svg(w,h,title,defs,body){return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${xml(title)}"><title>${xml(title)}</title><style>${css}</style><defs>${defs}</defs>${body}</svg>`;}
const defs=`<linearGradient id="bg" x2="1" y2="1"><stop stop-color="#0c1022"/><stop offset=".55" stop-color="#100f23"/><stop offset="1" stop-color="#080b15"/></linearGradient><radialGradient id="aurora"><stop stop-color="#7354ff" stop-opacity=".45"/><stop offset="1" stop-color="#7354ff" stop-opacity="0"/></radialGradient><radialGradient id="blue"><stop stop-color="#13c9ea" stop-opacity=".26"/><stop offset="1" stop-color="#13c9ea" stop-opacity="0"/></radialGradient><linearGradient id="ink"><stop stop-color="#fff"/><stop offset="1" stop-color="#b6a5ff"/></linearGradient><linearGradient id="ring"><stop stop-color="#a68aff"/><stop offset=".5" stop-color="#59e8ff"/><stop offset="1" stop-color="#9874ff"/></linearGradient><clipPath id="portrait"><circle cx="941" cy="296" r="143"/></clipPath><clipPath id="type"><rect x="112" y="561" width="0" height="40"><animate attributeName="width" values="0;950;950;0" keyTimes="0;.32;.94;1" dur="12s" repeatCount="indefinite"/></rect></clipPath><filter id="glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3"/></filter>`;
let stars='';for(let i=0;i<65;i++){let x=27+(i*173)%1220,y=40+(i*97)%590,r=i%6===0?2:1;stars+=`<circle cx="${x}" cy="${y}" r="${r}" fill="${i%2?'#b5a1ff':'#7cc8ff'}" opacity=".3"><animate attributeName="opacity" values=".12;.75;.12" dur="${3+i%5}s" begin="-${i%7}s" repeatCount="indefinite"/></circle>`;}
let grid='';for(let i=0;i<15;i++){let x=100+i*90;grid+=`<path d="M640 410L${x*2-640} 720"/>`;}for(let i=0;i<7;i++){let y=425+i*i*7;grid+=`<path d="M0 ${y}H1280"/>`;}
const hero=svg(1280,720,'Tarcísio Lucas — desenvolvedor full stack, 7º período de Engenharia de Software na UEPA. Retrato com órbitas animadas.',defs,`
<rect width="1280" height="720" rx="24" fill="url(#bg)"/><ellipse cx="970" cy="260" rx="430" ry="380" fill="url(#aurora)"><animate attributeName="rx" values="430;490;430" dur="10s" repeatCount="indefinite"/></ellipse><ellipse cx="1060" cy="440" rx="330" ry="260" fill="url(#blue)"/>${stars}<g stroke="#a28aff" opacity=".08" fill="none">${grid}</g>
<path d="M36 80V36H80M1200 36H1244V80M36 640V684H80M1200 684H1244V640" fill="none" stroke="#a99aff" stroke-width="1" opacity=".5"/>
<text x="67" y="67" class="mono small" fill="#bbaaff">TL / ENGINEERING &amp; EXPERIENCE</text><text x="1210" y="67" text-anchor="end" class="mono" fill="#6c7896" font-size="16">T-LUCAS43</text>
<rect x="67" y="128" width="293" height="35" rx="17" fill="#1f1c3d" stroke="#7863c0" stroke-opacity=".4"/><circle cx="85" cy="145" r="4" fill="#74ecd9"><animate attributeName="opacity" values="1;.25;1" dur="2.6s" repeatCount="indefinite"/></circle><text x="102" y="151" fill="#c8bdff" class="mono" font-size="15" letter-spacing="1">IDEIAS → PRODUTOS DIGITAIS</text>
<text x="62" y="266" font-size="100" font-weight="800" letter-spacing="-5" fill="url(#ink)">Tarcísio</text><text x="62" y="371" font-size="112" font-weight="800" letter-spacing="-6" fill="url(#ink)">Lucas<tspan fill="#78e5ff">.</tspan></text>
<text x="68" y="430" font-size="31" fill="#d4caff" letter-spacing="1">Desenvolvedor full stack</text><text x="68" y="472" font-size="21" fill="#96a1be">Interfaces que conectam. Sistemas que resolvem.</text>
<circle cx="941" cy="296" r="180" fill="#111229" fill-opacity=".7"/><circle cx="941" cy="296" r="171" fill="none" stroke="#8268e9" stroke-opacity=".22" stroke-width="17" filter="url(#glow)"/>
<g><ellipse cx="941" cy="296" rx="225" ry="89" fill="none" stroke="url(#ring)" stroke-width="1.5" opacity=".55" transform="rotate(-37 941 296)"/><ellipse cx="941" cy="296" rx="225" ry="89" fill="none" stroke="url(#ring)" stroke-width="1" opacity=".35" transform="rotate(37 941 296)"/>
<circle cx="941" cy="296" r="171" fill="none" stroke="url(#ring)" stroke-width="3" stroke-dasharray="510 80 80 50 100 255"><animateTransform attributeName="transform" type="rotate" from="0 941 296" to="360 941 296" dur="18s" repeatCount="indefinite"/></circle>
<circle cx="941" cy="296" r="157" fill="none" stroke="#72dcff" stroke-opacity=".5" stroke-width="1" stroke-dasharray="3 10"><animateTransform attributeName="transform" type="rotate" from="360 941 296" to="0 941 296" dur="30s" repeatCount="indefinite"/></circle>
<image x="798" y="153" width="286" height="286" href="data:image/png;base64,${photo}" xlink:href="data:image/png;base64,${photo}" clip-path="url(#portrait)" preserveAspectRatio="xMidYMid slice"/>
<g><circle cx="941" cy="125" r="6" fill="#82edff"/><circle cx="941" cy="125" r="11" fill="#82edff" opacity=".17"/><animateTransform attributeName="transform" type="rotate" from="0 941 296" to="360 941 296" dur="18s" repeatCount="indefinite"/></g></g>
<rect x="820" y="458" width="242" height="45" rx="22" fill="#151b2e" stroke="#65518d"/><text x="941" y="487" text-anchor="middle" font-size="19" fill="#c5b9ff" class="mono">UEPA · 7º PERÍODO</text>
<rect x="67" y="542" width="1146" height="110" rx="15" fill="#070b16" fill-opacity=".85" stroke="#2a2b48"/><text x="88" y="587" fill="#74ecd9" class="mono" font-size="27">❯</text><g clip-path="url(#type)"><text x="116" y="587" class="mono" font-size="23" fill="#ddd6ff">criando interfaces, APIs e experiências digitais_</text></g><text x="92" y="625" class="mono" font-size="16" fill="#7884a3">NORIUM &amp; NORA <tspan fill="#393c59">/</tspan> ELARES <tspan fill="#393c59">/</tspan> WEB DEVELOPMENT</text>
`);
fs.writeFileSync(assets+'/hero-orbit.svg',hero);
function section(title,subtitle){return svg(1280,116,title,'',`<path d="M0 115H1280" stroke="#24233c"/><text x="2" y="34" class="mono" fill="#9381e4" font-size="16" letter-spacing="4">${subtitle}</text><text x="0" y="86" class="white" font-size="41" font-weight="700">${title}</text><path d="M1000 62H1280" stroke="#493a70"/><circle cx="1000" cy="62" r="5" fill="#b39aff"><animate attributeName="cx" values="1000;1275;1000" dur="8s" repeatCount="indefinite"/></circle>`);}
fs.writeFileSync(assets+'/section-work.svg',section('Ideias que viraram projetos.','01 / SELECTED WORK'));
fs.writeFileSync(assets+'/section-stack.svg',section('Do primeiro pixel ao banco de dados.','02 / TECH &amp; TOOLING'));
const projects=[
 {file:'work-norium',name:'NORIUM & NORA',tag:'ORGANIZAÇÃO · COLABORAÇÃO · ASSISTÊNCIA',line:'Um ecossistema para conectar pessoas, trabalho e ideias.',stack:'REACT / TYPESCRIPT / PYTHON / FASTAPI',color:'#8d9fff',letter:'N',label:'EXPLORAR O ECOSSISTEMA'},
 {file:'work-elares',name:'ELARES',tag:'SOLUÇÕES DE GESTÃO',line:'Beauty e Barber: tecnologia para o dia a dia dos negócios.',stack:'NEXT.JS / TYPESCRIPT / POSTGRESQL',color:'#cf9fff',letter:'E',label:'CONHECER OS PROJETOS'},
 {file:'work-web',name:'WEB EXPERIENCES',tag:'TURISMO · SERVIÇOS · INTERAÇÃO',line:'Identidade, interfaces e experiências que saem do papel.',stack:'VOYA / D’HAGES / RUSH LAN / ZONA 7',color:'#67e5eb',letter:'W',label:'VER MAIS REPOSITÓRIOS'}
];
for(let i=0;i<projects.length;i++){const p=projects[i];let lines='';for(let k=0;k<7;k++){lines+=`<ellipse cx="1100" cy="142" rx="${50+k*15}" ry="${100-k*10}" fill="none" stroke="${p.color}" stroke-width="1" opacity="${.09+k*.025}" transform="rotate(${k*18} 1100 142)"><animateTransform attributeName="transform" type="rotate" from="${k*18} 1100 142" to="${k*18+360} 1100 142" dur="${35+k*3}s" repeatCount="indefinite"/></ellipse>`;}
 fs.writeFileSync(assets+'/'+p.file+'.svg',svg(1280,290,p.name+': '+p.line,`<linearGradient id="b"><stop stop-color="#111322"/><stop offset="1" stop-color="#111023"/></linearGradient><radialGradient id="r"><stop stop-color="${p.color}" stop-opacity=".15"/><stop offset="1" stop-color="${p.color}" stop-opacity="0"/></radialGradient>`,`<rect x="1" y="1" width="1278" height="288" rx="20" fill="url(#b)" stroke="#29283f"/><circle cx="1110" cy="140" r="200" fill="url(#r)"/>${lines}<text x="1100" y="167" text-anchor="middle" fill="${p.color}" opacity=".75" font-size="82" font-weight="800">${p.letter}</text><text x="40" y="40" fill="${p.color}" class="mono" font-size="15" letter-spacing="2">0${i+1} / ${p.tag}</text><text x="37" y="103" class="white" font-weight="800" font-size="54" letter-spacing="-2">${xml(p.name)}</text><text x="40" y="146" font-size="23" fill="#b6bad0">${p.line}</text><text x="40" y="190" class="mono" fill="${p.color}" opacity=".7" font-size="17">${p.stack}</text><path d="M40 218H1220" stroke="#29283f"/><text x="40" y="258" class="mono" fill="#bfc2d8" font-size="16" letter-spacing="2">${p.label}</text><text x="1220" y="261" text-anchor="end" font-size="28" fill="${p.color}">↗</text>`));
}
let stack='';for(const [i,name,label] of [[0,'FRONTEND','React · Next.js · TypeScript'],[1,'BACKEND','Node.js · Python · APIs'],[2,'DADOS & FERRAMENTAS','PostgreSQL · MySQL · Git']]){let x=24+i*422;stack+=`<rect x="${x}" y="20" width="388" height="182" rx="17" fill="#111324" stroke="#2b2945"/><text x="${x+23}" y="64" class="mono" fill="#a99aff" font-size="17" letter-spacing="1">0${i+1} / ${xml(name)}</text><text x="${x+23}" y="109" fill="#e1ddef" font-size="23">${xml(label)}</text><path d="M${x+23} 155H${x+363}" stroke="#34304d" stroke-width="3"/><path d="M${x+23} 155H${x+363}" stroke="#9a83ff" stroke-width="3" stroke-dasharray="30 310"><animate attributeName="stroke-dashoffset" values="0;-340" dur="4s" begin="-${i}s" repeatCount="indefinite"/></path>`;}
fs.writeFileSync(assets+'/stack-flow.svg',svg(1280,225,'Tecnologias: React, Next.js, TypeScript, Node.js, Python, APIs, PostgreSQL, MySQL e Git.','',stack));
const footer=svg(1280,200,'Vamos transformar uma boa ideia em realidade. Conecte-se com Tarcísio Lucas no LinkedIn.',`<linearGradient id="f"><stop stop-color="#16122e"/><stop offset="1" stop-color="#0c1223"/></linearGradient>`,`<rect width="1280" height="200" rx="20" fill="url(#f)"/><text x="45" y="61" class="mono" font-size="15" fill="#9c8ed0" letter-spacing="4">LET’S BUILD SOMETHING</text><text x="41" y="116" font-size="42" fill="#eee9ff" font-weight="700">Uma boa ideia merece ganhar vida.</text><text x="45" y="159" font-size="20" fill="#b8accf">Vamos conversar sobre tecnologia, interfaces e produtos digitais.</text><circle cx="1194" cy="100" r="36" fill="none" stroke="#8c70d3"/><text x="1194" y="114" font-size="37" text-anchor="middle" fill="#ccb8ff">↗</text>`);
fs.writeFileSync(assets+'/connect.svg',footer);
for(const [name,label,color] of [['linkedin','LinkedIn','#9b8bff'],['instagram','Instagram','#c992ee'],['elares','Elares','#6bdde5']])fs.writeFileSync(assets+'/'+name+'.svg',svg(310,68,label,'',`<rect x="1" y="1" width="308" height="66" rx="12" fill="#111324" stroke="#35304c"/><circle cx="28" cy="34" r="4" fill="${color}"/><text x="50" y="43" fill="#e7defb" font-size="24" font-weight="600">${label}</text><text x="277" y="44" text-anchor="middle" fill="${color}" font-size="26">↗</text>`));
const readme=`<p align="center"><img src="assets/hero-orbit.svg" alt="Tarcísio Lucas — desenvolvedor full stack. Foto com moldura orbital animada. Engenharia de Software na UEPA, 7º período." width="100%" /></p>

<p align="center">
<a href="https://www.linkedin.com/in/tarcisio-lucas-io"><img src="assets/linkedin.svg" alt="LinkedIn" width="31%" /></a>
<a href="https://www.instagram.com/t__lucas.ai/"><img src="assets/instagram.svg" alt="Instagram" width="31%" /></a>
<a href="https://elares-el-assistant.shardweb.app/"><img src="assets/elares.svg" alt="Site da Elares" width="31%" /></a>
</p>

Sou **Tarcísio Lucas**, desenvolvedor full stack e estudante do **7º período de Engenharia de Software na UEPA**. Construo interfaces web, APIs e soluções de gestão. Meus projetos passam por colaboração com **Norium & Nora**, negócios com **Elares** e experiências digitais para turismo, serviços e entretenimento.

<img src="assets/section-work.svg" alt="Projetos em destaque" width="100%" />

<a href="https://github.com/T-Lucas43/Norium-nora"><img src="assets/work-norium.svg" alt="Norium e Nora — organização, colaboração e assistência. Explorar repositório." width="100%" /></a>

<p><a href="https://github.com/T-Lucas43/Norium-nora">Norium & Nora ↗</a> &nbsp; / &nbsp; <a href="https://github.com/T-Lucas43/norium-site">Site institucional ↗</a> &nbsp; / &nbsp; <a href="https://github.com/T-Lucas43/norium-whatsapp-api">WhatsApp API ↗</a></p>

<a href="https://github.com/T-Lucas43/elares-beauty"><img src="assets/work-elares.svg" alt="Elares — soluções de gestão. Conhecer Beauty e Barber." width="100%" /></a>

<p><a href="https://github.com/T-Lucas43/elares-beauty">Elares Beauty ↗</a> &nbsp; / &nbsp; <a href="https://github.com/T-Lucas43/barbearia-gestao">Elares Barber ↗</a> &nbsp; / &nbsp; <a href="https://elares-el-assistant.shardweb.app/">Site da Elares ↗</a></p>

<a href="https://github.com/T-Lucas43?tab=repositories"><img src="assets/work-web.svg" alt="Web Experiences — projetos de turismo, serviços e interação." width="100%" /></a>

<p><a href="https://github.com/T-Lucas43/voya-turismo">Voya Turismo ↗</a> &nbsp; / &nbsp; <a href="https://github.com/T-Lucas43/dhages-turismo">D’Hages Turismo ↗</a> &nbsp; / &nbsp; <a href="https://github.com/T-Lucas43/rushLan">Rush LAN ↗</a> &nbsp; / &nbsp; <a href="https://github.com/T-Lucas43/Zona_7">Zona 7 ↗</a> &nbsp; / &nbsp; <a href="https://github.com/T-Lucas43/Site_Camilly">Camilly Oliveira ↗</a></p>

<img src="assets/section-stack.svg" alt="Tecnologias que uso" width="100%" />

<img src="assets/stack-flow.svg" alt="Frontend: React, Next.js, TypeScript. Backend: Node.js, Python, APIs. Dados e ferramentas: PostgreSQL, MySQL, Git." width="100%" />

<details>
<summary><strong>Mais projetos & trajetória</strong></summary>

- [Desafio Compass — fundamentos de HTML, CSS e JavaScript](https://github.com/T-Lucas43/AWS_FS_JUL25_D01_COMPASS_-Desafio_01.-)
- [Edital UEPA](https://github.com/T-Lucas43/Edital-UEPA)
- [My Website · Catering](https://github.com/T-Lucas43/mywebsite)
- [Portfólio](https://github.com/T-Lucas43/portifolio)
- [Primeiro repositório](https://github.com/T-Lucas43/primeiro-repo)
- [Cyber Front · estrutura inicial](https://github.com/T-Lucas43/cyber-web-front)

</details>

<br />

<a href="https://www.linkedin.com/in/tarcisio-lucas-io"><img src="assets/connect.svg" alt="Vamos transformar uma boa ideia em realidade. Conversar no LinkedIn." width="100%" /></a>
`;
fs.writeFileSync(dir+'/README.md',readme);
fs.mkdirSync(dir+'/scripts',{recursive:true});
// Keep the authoring source and references in the repository for future updates.
if(path.resolve(__filename)!==path.resolve(dir+'/scripts/redesign-profile.cjs'))fs.copyFileSync(__filename,dir+'/scripts/redesign-profile.cjs');
fs.writeFileSync(dir+'/DESIGN.md',`# Identidade visual do perfil\n\nComposição própria em SVG, com retrato público do titular, órbitas, partículas, terminal, painéis de projetos e fluxo de tecnologias. Não altera a foto nativa do GitHub.\n\nReferências de pesquisa, sem reutilizar seus assets ou código:\n\n- https://github.com/abhisheknaiidu/awesome-github-profile-readme\n- https://ryme.md/\n- https://github.com/saroo98/profile-signal-kit\n- https://github.com/Saviru/GitBanner\n\nO GitHub remove scripts e estilos do HTML do README: https://github.com/github/markup#github-markup. As animações são declarativas dentro das imagens SVG; não há JavaScript executado no perfil nem dependência de geradores remotos.\n`);
console.log('Profile v2 generated. Hero bytes:',Buffer.byteLength(hero));
