import{_ as s,u as n,o as r,c as o,a as e,t,d as c,e as i}from"./app.cf355bdc.js";const d={computed:{frontmatter(){return n().value}}},p={id:"frontmatter-title",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=c(),u={style:{"white-space":"pre-wrap"}},_=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; contains (pattern)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>pattern</code>: Regex pattern to be searched</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Returns boolean indicating if pattern was found</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>abc acb acb<span class="token punctuation">]</span> <span class="token operator">|</span> to-df <span class="token operator">|</span> contains ab
</code></pre></div>`,7);function f(m,g,x,b,k,a){return r(),o("div",null,[e("h1",p,[l,h,e("code",null,t(a.frontmatter.title),1)]),e("div",u,t(a.frontmatter.usage),1),_])}var w=s(d,[["render",f],["__file","_contains.html.vue"]]);export{w as default};