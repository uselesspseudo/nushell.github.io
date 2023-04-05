import{_ as s,p as o,q as c,Q as e,t as n,v as t,a1 as i}from"./framework-344bb0e4.js";const l={},r={id:"frontmatter-title-for-default",tabindex:"-1"},d=e("a",{class:"header-anchor",href:"#frontmatter-title-for-default","aria-hidden":"true"},"#",-1),p={class:"command-title"},u=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; join (right-table) (left-on) (right-on) --inner --left --right --outer</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>right-table</code>: The right table in the join</li><li><code>left-on</code>: Name of column in input (left) table to join on</li><li><code>right-on</code>: Name of column in right table to join on. Defaults to same column as left table.</li><li><code>--inner</code> <code>(-i)</code>: Inner join (default)</li><li><code>--left</code> <code>(-l)</code>: Left-outer join</li><li><code>--right</code> <code>(-r)</code>: Right-outer join</li><li><code>--outer</code> <code>(-o)</code>: Outer join</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Join two tables</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>a: <span class="token number">1</span> b: <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">join</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>a: <span class="token number">1</span> c: <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">]</span> a
╭───┬───┬───┬───╮
│ <span class="token comment"># │ a │ b │ c │</span>
├───┼───┼───┼───┤
│ <span class="token number">0</span> │ <span class="token number">1</span> │ <span class="token number">2</span> │ <span class="token number">3</span> │
╰───┴───┴───┴───╯

</code></pre></div>`,7);function h(a,f){return o(),c("div",null,[e("h1",r,[d,n(),e("code",null,t(a.$frontmatter.title),1),n(" for default")]),e("div",p,t(a.$frontmatter.default),1),u])}const b=s(l,[["render",h],["__file","join.html.vue"]]);export{b as default};