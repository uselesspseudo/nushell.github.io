import{_ as e,o as t,c as a,e as s}from"./app.09d1675d.js";const n={},o=s(`<h1 id="parsing" tabindex="-1"><a class="header-anchor" href="#parsing" aria-hidden="true">#</a> Parsing</h1><p>Nu offers the ability to do some basic parsing.</p><p>How to parse an arbitrary pattern from a string of text into a multi-column table.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">cargo</span> search shells <span class="token parameter variable">--limit</span> <span class="token number">10</span> <span class="token operator">|</span> lines <span class="token operator">|</span> parse <span class="token string">&quot;{crate_name} = {version} #{description}&quot;</span> <span class="token operator">|</span> str trim
</code></pre></div><p>Output</p><div class="language-text ext-text"><pre class="language-text"><code>\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502  crate_name  \u2502     version     \u2502                                  description
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 shells       \u2502 &quot;0.2.0&quot;         \u2502 Sugar-coating for invoking shell commands directly from Rust.
 1 \u2502 pyc-shell    \u2502 &quot;0.3.0&quot;         \u2502 Pyc is a simple CLI application, which allows you to perform shell commands in
   \u2502              \u2502                 \u2502 cyrillic and other a\u2026
 2 \u2502 ion-shell    \u2502 &quot;0.0.0&quot;         \u2502 The Ion Shell
 3 \u2502 sheldon      \u2502 &quot;0.6.6&quot;         \u2502 Fast, configurable, shell plugin manager.
 4 \u2502 nu           \u2502 &quot;0.44.0&quot;        \u2502 A new type of shell
 5 \u2502 git-gamble   \u2502 &quot;2.3.0&quot;         \u2502 blend TCR + TDD to make sure to develop the right thing, babystep by babystep
 6 \u2502 martin       \u2502 &quot;1.0.0-alpha.0&quot; \u2502 Blazing fast and lightweight PostGIS vector tiles server
 7 \u2502 fnm          \u2502 &quot;1.29.2&quot;        \u2502 Fast and simple Node.js version manager
 8 \u2502 remote_shell \u2502 &quot;2.0.0&quot;         \u2502 remote shell written by rust.
 9 \u2502 sauce        \u2502 &quot;0.6.6&quot;         \u2502 A tool for managing directory-specific state.
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div>`,6),r=[o];function l(i,c){return t(),a("div",null,r)}const u=e(n,[["render",l],["__file","parsing.html.vue"]]);export{u as default};