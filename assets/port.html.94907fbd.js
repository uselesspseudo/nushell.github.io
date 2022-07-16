import{_ as s,o as r,c as n,a as e,t,d as o,e as d}from"./app.a5cac4f6.js";const c={},i={id:"frontmatter-title",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),p=o(),h={style:{"white-space":"pre-wrap"}},u=d(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; port (start) (end)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>start</code>: The start port to scan (inclusive)</li><li><code>end</code>: The end port to scan (inclusive)</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>get free port between 3121 and 4000</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> port <span class="token number">3121</span> <span class="token number">4000</span>
</code></pre></div><p>get free port from system</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> port
</code></pre></div>`,9);function m(a,_){return r(),n("div",null,[e("h1",i,[l,p,e("code",null,t(a.$frontmatter.title),1)]),e("div",h,t(a.$frontmatter.usage),1),u])}var g=s(c,[["render",m],["__file","port.html.vue"]]);export{g as default};
