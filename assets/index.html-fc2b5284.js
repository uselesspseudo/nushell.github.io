import{_ as r,M as l,p as o,q as i,Q as e,t as a,N as s,a1 as t}from"./framework-344bb0e4.js";const c={},d=e("h3",{id:"instalacion-rapida",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#instalacion-rapida","aria-hidden":"true"},"#"),a(" Instalación rápida")],-1),h=e("h4",{id:"ultima-version",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ultima-version","aria-hidden":"true"},"#"),a(" Ultima versión")],-1),p={href:"https://github.com/nushell/nushell/releases",target:"_blank",rel:"noopener noreferrer"},u={href:"https://crates.io",target:"_blank",rel:"noopener noreferrer"},_=t(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cargo</span> <span class="token function">install</span> nu
</code></pre></div><h4 id="instalacion-a-traves-de-resolvedores-de-paquetes" tabindex="-1"><a class="header-anchor" href="#instalacion-a-traves-de-resolvedores-de-paquetes" aria-hidden="true">#</a> Instalación a través de resolvedores de paquetes</h4>`,2),f={href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"},g=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[a("$ brew "),e("span",{class:"token function"},"install"),a(` nushell
`)])])],-1),v={href:"https://scoop.sh",target:"_blank",rel:"noopener noreferrer"},x=t(`<div class="language-powershell" data-ext="powershell"><pre class="language-powershell"><code>$ scoop install nu
</code></pre></div><h4 id="inicia-la-shell" tabindex="-1"><a class="header-anchor" href="#inicia-la-shell" aria-hidden="true">#</a> Inicia la shell</h4><div class="language-text" data-ext="text"><pre class="language-text"><code>$ nu
</code></pre></div>`,3);function b(m,k){const n=l("ExternalLinkIcon");return o(),i("div",null,[d,h,e("p",null,[a("Instala la última versión en la "),e("a",p,[a("pagina de releases"),s(n)])]),e("p",null,[a("Desde la fuente en "),e("a",u,[a("crates.io"),s(n)]),a(":")]),_,e("p",null,[a("En "),e("a",f,[a("Homebrew"),s(n)]),a(":")]),g,e("p",null,[a("En "),e("a",v,[a("Scoop"),s(n)]),a(":")]),x])}const I=r(c,[["render",b],["__file","index.html.vue"]]);export{I as default};