import{_ as t,u as r,o,c,a as e,t as s,d as n,e as i}from"./app.cf355bdc.js";const d={computed:{frontmatter(){return r().value}}},l={id:"frontmatter-title",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=n(),u={style:{"white-space":"pre-wrap"}},f=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; cp (source) (destination) --recursive --verbose --interactive --no-dereference</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>source</code>: the place to copy from</li><li><code>destination</code>: the place to copy to</li><li><code>--recursive</code>: copy recursively through subdirectories</li><li><code>--verbose</code>: do copy in verbose mode (default:false)</li><li><code>--interactive</code>: ask user to confirm action</li><li><code>--no-dereference</code>: If the -r option is specified, no symbolic links are followed.</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Copy myfile to dir_b</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">cp</span> myfile dir_b
</code></pre></div><p>Recursively copy dir_a to dir_b</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">cp</span> -r dir_a dir_b
</code></pre></div><p>Recursively copy dir_a to dir_b, and print the feedbacks</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">cp</span> -r -v dir_a dir_b
</code></pre></div><p>Move many files into a directory</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">cp</span> *.txt dir_a
</code></pre></div>`,13);function _(g,m,v,b,y,a){return o(),c("div",null,[e("h1",l,[p,h,e("code",null,s(a.frontmatter.title),1)]),e("div",u,s(a.frontmatter.usage),1),f])}var k=t(d,[["render",_],["__file","cp.html.vue"]]);export{k as default};