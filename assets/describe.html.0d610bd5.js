import{_ as t,o as r,c as n,a as e,t as s,d as o,e as c}from"./app.a5cac4f6.js";const d={},i={id:"frontmatter-title",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),l=o(),h={style:{"white-space":"pre-wrap"}},_=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; describe </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Describe SQLite database constructed query</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> foo.db <span class="token operator">|</span> into db <span class="token operator">|</span> <span class="token keyword">select</span> col_1 <span class="token operator">|</span> from table_1 <span class="token operator">|</span> describe
</code></pre></div>`,5);function u(a,f){return r(),n("div",null,[e("h1",i,[p,l,e("code",null,s(a.$frontmatter.title),1)]),e("div",h,s(a.$frontmatter.usage),1),_])}var m=t(d,[["render",u],["__file","describe.html.vue"]]);export{m as default};
