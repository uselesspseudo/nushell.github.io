import{_ as n,p as r,q as o,Q as e,t,v as s,a1 as i}from"./framework-344bb0e4.js";const d={},l={id:"frontmatter-title-for-debug",tabindex:"-1"},c=e("a",{class:"header-anchor",href:"#frontmatter-title-for-debug","aria-hidden":"true"},"#",-1),p={class:"command-title"},h=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; ast (pipeline)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>pipeline</code>: the pipeline to print the ast for</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Print the ast of a string</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> ast <span class="token string">&#39;hello&#39;</span>

</code></pre></div><p>Print the ast of a pipeline</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> ast <span class="token string">&#39;ls | where name =~ README&#39;</span>

</code></pre></div><p>Print the ast of a pipeline with an error</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> ast <span class="token string">&#39;for x in 1..10 { echo $x &#39;</span>

</code></pre></div>`,11);function g(a,u){return r(),o("div",null,[e("h1",l,[c,t(),e("code",null,s(a.$frontmatter.title),1),t(" for debug")]),e("div",p,s(a.$frontmatter.debug),1),h])}const m=n(d,[["render",g],["__file","ast.html.vue"]]);export{m as default};