import{_ as o,o as p,c as r,a,t as s,d as e,e as t}from"./app.d8025251.js";const c={},i={id:"frontmatter-title-for-expression",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title-for-expression","aria-hidden":"true"},"#",-1),u=e(),d=e(" for expression"),h={class:"command-title"},m=t(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; quantile (quantile)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>quantile</code>: quantile value for quantile operation</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Quantile aggregation for a group-by</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>one <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>one <span class="token number">4</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>two <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
    <span class="token operator">|</span> into <span class="token function">df</span>
    <span class="token operator">|</span> group-by a
    <span class="token operator">|</span> agg <span class="token punctuation">(</span>col b <span class="token operator">|</span> quantile <span class="token number">0.5</span><span class="token punctuation">)</span>
</code></pre></div>`,7),k={id:"frontmatter-title-for-lazyframe",tabindex:"-1"},f=a("a",{class:"header-anchor",href:"#frontmatter-title-for-lazyframe","aria-hidden":"true"},"#",-1),_=e(),b=e(" for lazyframe"),g={class:"command-title"},x=t(`<h2 id="signature-1" tabindex="-1"><a class="header-anchor" href="#signature-1" aria-hidden="true">#</a> Signature</h2><p><code>&gt; quantile (quantile)</code></p><h2 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h2><ul><li><code>quantile</code>: quantile value for quantile operation</li></ul><h2 id="examples-1" tabindex="-1"><a class="header-anchor" href="#examples-1" aria-hidden="true">#</a> Examples</h2><p>quantile value from columns in a dataframe</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">6</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">4</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> quantile <span class="token number">0.5</span>
</code></pre></div>`,7);function q(n,v){return p(),r("div",null,[a("h1",i,[l,u,a("code",null,s(n.$frontmatter.title),1),d]),a("div",h,s(n.$frontmatter.expression),1),m,a("h1",k,[f,_,a("code",null,s(n.$frontmatter.title),1),b]),a("div",g,s(n.$frontmatter.lazyframe),1),x])}const z=o(c,[["render",q],["__file","quantile.html.vue"]]);export{z as default};