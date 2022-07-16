import{_ as t,o as r,c as n,a as e,t as s,d as o,e as i}from"./app.a5cac4f6.js";const c={},d={id:"frontmatter-title",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=o(),p={style:{"white-space":"pre-wrap"}},m=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; from ssv --noheaders --aligned-columns --minimum-spaces</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--noheaders</code>: don&#39;t treat the first row as column names</li><li><code>--aligned-columns</code>: assume columns are aligned</li><li><code>--minimum-spaces {int}</code>: the minimum spaces to separate columns</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Converts ssv formatted string to table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;FOO   BAR
1   2&#39;</span> <span class="token operator">|</span> from ssv
</code></pre></div><p>Converts ssv formatted string to table but not treating the first row as column names</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;FOO   BAR
1   2&#39;</span> <span class="token operator">|</span> from ssv -n
</code></pre></div>`,9);function u(a,f){return r(),n("div",null,[e("h1",d,[l,h,e("code",null,s(a.$frontmatter.title),1)]),e("div",p,s(a.$frontmatter.usage),1),m])}var _=t(c,[["render",u],["__file","from_ssv.html.vue"]]);export{_ as default};
