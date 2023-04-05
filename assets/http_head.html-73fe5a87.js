import{_ as n,p as o,q as r,Q as e,t,v as s,a1 as d}from"./framework-344bb0e4.js";const c={},i={id:"frontmatter-title-for-network",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#frontmatter-title-for-network","aria-hidden":"true"},"#",-1),p={class:"command-title"},l=d(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; http head (URL) --user --password --max-time --headers --insecure</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>URL</code>: the URL to fetch the contents from</li><li><code>--user {any}</code>: the username when authenticating</li><li><code>--password {any}</code>: the password when authenticating</li><li><code>--max-time {int}</code>: timeout period in seconds</li><li><code>--headers {any}</code>: custom headers you want to add</li><li><code>--insecure</code> <code>(-k)</code>: allow insecure server connections when using SSL</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><p>Performs HTTP HEAD operation.</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Get headers from example.com</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> http <span class="token function">head</span> https://www.example.com

</code></pre></div><p>Get headers from example.com, with username and password</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> http <span class="token function">head</span> <span class="token parameter variable">-u</span> myuser <span class="token parameter variable">-p</span> mypass https://www.example.com

</code></pre></div><p>Get headers from example.com, with custom header</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> http <span class="token function">head</span> <span class="token parameter variable">-H</span> <span class="token punctuation">[</span>my-header-key my-header-value<span class="token punctuation">]</span> https://www.example.com

</code></pre></div>`,13);function m(a,u){return o(),r("div",null,[e("h1",i,[h,t(),e("code",null,s(a.$frontmatter.title),1),t(" for network")]),e("div",p,s(a.$frontmatter.network),1),l])}const w=n(c,[["render",m],["__file","http_head.html.vue"]]);export{w as default};