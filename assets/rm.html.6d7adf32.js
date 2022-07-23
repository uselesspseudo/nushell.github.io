import{_ as t,o as r,c as n,a as e,t as s,d as o,e as i}from"./app.424726ef.js";const l={},c={id:"frontmatter-title",tabindex:"-1"},d=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),p=o(),h={style:{"white-space":"pre-wrap"}},f=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; rm ...rest --trash --permanent --recursive --force --verbose --interactive</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: the file path(s) to remove</li><li><code>--trash</code>: use the platform&#39;s recycle bin instead of permanently deleting</li><li><code>--permanent</code>: don&#39;t use recycle bin, delete permanently</li><li><code>--recursive</code>: delete subdirectories recursively</li><li><code>--force</code>: suppress error when no file</li><li><code>--verbose</code>: make rm to be verbose, showing files been deleted</li><li><code>--interactive</code>: ask user to confirm action</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Delete or move a file to the system trash (depending on &#39;rm_always_trash&#39; config option)</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">rm</span> file.txt
</code></pre></div><p>Move a file to the system trash</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">rm</span> --trash file.txt
</code></pre></div><p>Delete a file permanently</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">rm</span> --permanent file.txt
</code></pre></div><p>Delete a file, and suppress errors if no file is found</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">rm</span> --force file.txt
</code></pre></div>`,13);function m(a,u){return r(),n("div",null,[e("h1",c,[d,p,e("code",null,s(a.$frontmatter.title),1)]),e("div",h,s(a.$frontmatter.usage),1),f])}var v=t(l,[["render",m],["__file","rm.html.vue"]]);export{v as default};