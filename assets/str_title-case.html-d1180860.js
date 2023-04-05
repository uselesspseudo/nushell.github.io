import{_ as n,p as r,q as o,Q as a,t,v as e,a1 as c}from"./framework-344bb0e4.js";const l={},p={id:"frontmatter-title-for-strings",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-strings","aria-hidden":"true"},"#",-1),d={class:"command-title"},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; str title-case ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: For a data structure input, convert strings at the given cell paths</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>convert a string to Title Case</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;nu-shell&#39;</span> <span class="token operator">|</span> str title-case
Nu Shell
</code></pre></div><p>convert a string to Title Case</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;this is a test case&#39;</span> <span class="token operator">|</span> str title-case
This Is A Test Case
</code></pre></div><p>convert a column from a table to Title Case</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>title, count<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token string">&#39;nu test&#39;</span>, <span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> str title-case title
╭───┬─────────┬───────╮
│ <span class="token comment"># │  title  │ count │</span>
├───┼─────────┼───────┤
│ <span class="token number">0</span> │ Nu Test │   <span class="token number">100</span> │
╰───┴─────────┴───────╯

</code></pre></div>`,11);function h(s,g){return r(),o("div",null,[a("h1",p,[i,t(),a("code",null,e(s.$frontmatter.title),1),t(" for strings")]),a("div",d,e(s.$frontmatter.strings),1),u])}const k=n(l,[["render",h],["__file","str_title-case.html.vue"]]);export{k as default};