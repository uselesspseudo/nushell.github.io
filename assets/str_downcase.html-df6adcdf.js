import{_ as e,p as o,q as c,Q as a,t as n,v as t,a1 as p}from"./framework-344bb0e4.js";const r={},l={id:"frontmatter-title-for-strings",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-strings","aria-hidden":"true"},"#",-1),d={class:"command-title"},u=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; str downcase ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: For a data structure input, convert strings at the given cell paths</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Downcase contents</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;NU&#39;</span> <span class="token operator">|</span> str downcase
nu
</code></pre></div><p>Downcase contents</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;TESTa&#39;</span> <span class="token operator">|</span> str downcase
testa
</code></pre></div><p>Downcase contents</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>ColA ColB<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>Test ABC<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> str downcase ColA
╭───┬──────┬──────╮
│ <span class="token comment"># │ ColA │ ColB │</span>
├───┼──────┼──────┤
│ <span class="token number">0</span> │ <span class="token builtin class-name">test</span> │ ABC  │
╰───┴──────┴──────╯

</code></pre></div><p>Downcase contents</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>ColA ColB<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>Test ABC<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> str downcase ColA ColB
╭───┬──────┬──────╮
│ <span class="token comment"># │ ColA │ ColB │</span>
├───┼──────┼──────┤
│ <span class="token number">0</span> │ <span class="token builtin class-name">test</span> │ abc  │
╰───┴──────┴──────╯

</code></pre></div>`,13);function h(s,g){return o(),c("div",null,[a("h1",l,[i,n(),a("code",null,t(s.$frontmatter.title),1),n(" for strings")]),a("div",d,t(s.$frontmatter.strings),1),u])}const m=e(r,[["render",h],["__file","str_downcase.html.vue"]]);export{m as default};