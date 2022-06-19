import{_ as t,u as n,o as r,c as o,a as e,t as s,d as c,e as p}from"./app.cf355bdc.js";const l={computed:{frontmatter(){return n().value}}},i={id:"frontmatter-title",tabindex:"-1"},d=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=c(),g={style:{"white-space":"pre-wrap"}},u=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; get (cell_path) ...rest --ignore-errors --sensitive</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>cell_path</code>: the cell path to the data</li><li><code>...rest</code>: additional cell paths</li><li><code>--ignore-errors</code>: return nothing if path can&#39;t be found</li><li><code>--sensitive</code>: get path in a case sensitive manner</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Extract the name of files as a list</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> get name
</code></pre></div><p>Extract the name of the 3rd entry of a file list</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> get name.2
</code></pre></div><p>Extract the name of the 3rd entry of a file list (alternative)</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> get <span class="token number">2</span>.name
</code></pre></div><p>Extract the cpu list from the sys information record</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> sys <span class="token operator">|</span> get cpu
</code></pre></div><p>Getting Path/PATH in a case insensitive way</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token variable">$env</span> <span class="token operator">|</span> get paTH
</code></pre></div><p>Getting Path in a case sensitive way, won&#39;t work for &#39;PATH&#39;</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token variable">$env</span> <span class="token operator">|</span> get -s Path
</code></pre></div>`,17);function f(m,v,_,k,x,a){return r(),o("div",null,[e("h1",i,[d,h,e("code",null,s(a.frontmatter.title),1)]),e("div",g,s(a.frontmatter.usage),1),u])}var y=t(l,[["render",f],["__file","get.html.vue"]]);export{y as default};