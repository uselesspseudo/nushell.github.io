import{_ as n,o,c as l,a as e,t as s,d as t,e as r}from"./app.d8025251.js";const c={},h={id:"frontmatter-title-for-shells",tabindex:"-1"},d=e("a",{class:"header-anchor",href:"#frontmatter-title-for-shells","aria-hidden":"true"},"#",-1),i=t(),p=t(" for shells"),u={class:"command-title"},_=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; shells </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Enter a new shell at parent path &#39;..&#39; and show all opened shells</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> enter <span class="token punctuation">..</span><span class="token punctuation">;</span> shells
</code></pre></div><p>Show currently active shell</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> shells <span class="token operator">|</span> where active <span class="token operator">==</span> <span class="token boolean">true</span>
</code></pre></div>`,7);function f(a,g){return o(),l("div",null,[e("h1",h,[d,i,e("code",null,s(a.$frontmatter.title),1),p]),e("div",u,s(a.$frontmatter.shells),1),_])}const x=n(c,[["render",f],["__file","shells.html.vue"]]);export{x as default};