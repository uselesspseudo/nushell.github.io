import{_ as t,u as n,o,c as r,a,t as s,d as c,e as l}from"./app.bf7b56eb.js";const d={computed:{frontmatter(){return n().value}}},p={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=c(),h={style:{"white-space":"pre-wrap"}},m=l(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; overlay add (name)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>name</code>: Module name to create overlay for</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text ext-text"><pre class="language-text"><code>This command is a parser keyword. For details, check
https://www.nushell.sh/book/thinking_in_nushell.html#parsing-and-evaluation-are-different-stages
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Create an overlay from a module</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> module spam <span class="token punctuation">{</span> <span class="token builtin class-name">export</span> def foo <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token string">&quot;foo&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
    overlay <span class="token function">add</span> spam
</code></pre></div><p>Create an overlay from a file</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;export env FOO { &quot;foo&quot; }&#39;</span> <span class="token operator">|</span> save spam.nu
    overlay <span class="token function">add</span> spam.nu
</code></pre></div>`,11);function f(g,_,v,k,x,e){return o(),r("div",null,[a("h1",p,[i,u,a("code",null,s(e.frontmatter.title),1)]),a("div",h,s(e.frontmatter.usage),1),m])}var y=t(d,[["render",f],["__file","overlay_add.html.vue"]]);export{y as default};