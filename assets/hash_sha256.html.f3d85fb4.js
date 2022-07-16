import{_ as n,o as t,c as r,a,t as s,d as o,e as i}from"./app.a5cac4f6.js";const c={},h={id:"frontmatter-title",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),p=o(),d={style:{"white-space":"pre-wrap"}},u=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; hash sha256 ...rest --binary</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: optionally sha256 hash data by cell path</li><li><code>--binary</code>: Output binary instead of hexadecimal representation</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>get a hexadecimaly encoded string of the sha256 digest of a string</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;abcdefghijklmnopqrstuvwxyz&#39;</span> <span class="token operator">|</span> <span class="token builtin class-name">hash</span> sha256
</code></pre></div><p>get the sha256 digest of a string in binary</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;abcdefghijklmnopqrstuvwxyz&#39;</span> <span class="token operator">|</span> <span class="token builtin class-name">hash</span> sha256 --binary
</code></pre></div><p>sha256 encode a file</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> ./nu_0_24_1_windows.zip <span class="token operator">|</span> <span class="token builtin class-name">hash</span> sha256
</code></pre></div>`,11);function g(e,_){return t(),r("div",null,[a("h1",h,[l,p,a("code",null,s(e.$frontmatter.title),1)]),a("div",d,s(e.$frontmatter.usage),1),u])}var b=n(c,[["render",g],["__file","hash_sha256.html.vue"]]);export{b as default};
