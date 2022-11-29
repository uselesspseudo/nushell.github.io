import{_ as n,o as r,c as o,a,t,d as s,e as c}from"./app.d8025251.js";const i={},l={id:"frontmatter-title-for-filters",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),p=s(),h=s(" for filters"),m={class:"command-title"},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; wrap (name)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>name</code>: the name of the column</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Wrap a list into a table with a given column name</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> wrap num
</code></pre></div>`,7);function f(e,_){return r(),o("div",null,[a("h1",l,[d,p,a("code",null,t(e.$frontmatter.title),1),h]),a("div",m,t(e.$frontmatter.filters),1),u])}const g=n(i,[["render",f],["__file","wrap.html.vue"]]);export{g as default};