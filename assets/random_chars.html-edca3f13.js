import{_ as s,p as n,q as o,Q as a,t as r,v as t,a1 as d}from"./framework-344bb0e4.js";const c={},h={id:"frontmatter-title-for-random",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-random","aria-hidden":"true"},"#",-1),l={class:"command-title"},p=d(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; random chars --length</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--length {int}</code>: Number of chars</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Generate random chars</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> random chars

</code></pre></div><p>Generate random chars with specified length</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> random chars <span class="token parameter variable">-l</span> <span class="token number">20</span>

</code></pre></div>`,9);function m(e,u){return n(),o("div",null,[a("h1",h,[i,r(),a("code",null,t(e.$frontmatter.title),1),r(" for random")]),a("div",l,t(e.$frontmatter.random),1),p])}const _=s(c,[["render",m],["__file","random_chars.html.vue"]]);export{_ as default};