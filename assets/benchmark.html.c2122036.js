import{_ as r,u as s,o as n,c,a as e,t,d as o,e as d}from"./app.aeb1065a.js";const i={computed:{frontmatter(){return s().value}}},h={id:"frontmatter-title",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),p=o(),u={style:{"white-space":"pre-wrap"}},m=d(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; benchmark (block)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>block</code>: the block to run</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Benchmarks a command within a block</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> benchmark <span class="token punctuation">{</span> <span class="token function">sleep</span> 500ms <span class="token punctuation">}</span>
</code></pre></div>`,7);function _(f,k,b,g,x,a){return n(),c("div",null,[e("h1",h,[l,p,e("code",null,t(a.frontmatter.title),1)]),e("div",u,t(a.frontmatter.usage),1),m])}var B=r(i,[["render",_],["__file","benchmark.html.vue"]]);export{B as default};