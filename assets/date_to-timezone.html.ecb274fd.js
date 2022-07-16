import{_ as s,o as n,c as o,a as e,t,d as r,e as i}from"./app.a5cac4f6.js";const c={},d={id:"frontmatter-title",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),l=r(),h={style:{"white-space":"pre-wrap"}},u=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; date to-timezone (time zone)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>time zone</code>: time zone description</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text ext-text"><pre class="language-text"><code>Use &#39;date list-timezone&#39; to list all supported time zones.
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Get the current date in UTC+05:00</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> now <span class="token operator">|</span> <span class="token function">date</span> to-timezone +0500
</code></pre></div><p>Get the current local date</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> now <span class="token operator">|</span> <span class="token function">date</span> to-timezone <span class="token builtin class-name">local</span>
</code></pre></div><p>Get the current date in Hawaii</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> now <span class="token operator">|</span> <span class="token function">date</span> to-timezone US/Hawaii
</code></pre></div><p>Get the current date in Hawaii</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&quot;2020-10-10 10:00:00 +02:00&quot;</span> <span class="token operator">|</span> <span class="token function">date</span> to-timezone <span class="token string">&quot;+0500&quot;</span>
</code></pre></div>`,15);function g(a,m){return n(),o("div",null,[e("h1",d,[p,l,e("code",null,t(a.$frontmatter.title),1)]),e("div",h,t(a.$frontmatter.usage),1),u])}var _=s(c,[["render",g],["__file","date_to-timezone.html.vue"]]);export{_ as default};
