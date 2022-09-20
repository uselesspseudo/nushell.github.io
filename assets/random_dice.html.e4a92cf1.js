import{_ as t,o as r,c as n,a as e,t as s,d,e as i}from"./app.6b6a1979.js";const o={},c={id:"frontmatter-title",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=d(),p={style:{"white-space":"pre-wrap"}},m=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; random dice --dice --sides</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--dice {int}</code>: The amount of dice being rolled</li><li><code>--sides {int}</code>: The amount of sides a die has</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Roll 1 dice with 6 sides each</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> random dice
</code></pre></div><p>Roll 10 dice with 12 sides each</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> random dice <span class="token parameter variable">-d</span> <span class="token number">10</span> <span class="token parameter variable">-s</span> <span class="token number">12</span>
</code></pre></div>`,9);function u(a,_){return r(),n("div",null,[e("h1",c,[l,h,e("code",null,s(a.$frontmatter.title),1)]),e("div",p,s(a.$frontmatter.usage),1),m])}const g=t(o,[["render",u],["__file","random_dice.html.vue"]]);export{g as default};