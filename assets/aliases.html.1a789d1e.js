import{_ as s,r as o,o as l,c as i,a,b as n,w as c,e as r,d as e}from"./app.bf7b56eb.js";const d={},h=r(`<h1 id="aliases" tabindex="-1"><a class="header-anchor" href="#aliases" aria-hidden="true">#</a> Aliases</h1><p>Aliases in Nushell offer a way of doing a simple, textual replacement. This allows you to create a shorthand name for a longer command, including its default arguments.</p><p>For example, let&#39;s create an alias called <code>ll</code> which will expand to <code>ls -l</code>.</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; alias ll = ls -l
</code></pre></div><p>We can now call this alias:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ll
</code></pre></div><p>Once we do, it&#39;s as if we typed <code>ls -l</code>. This also allows us to pass in flags or positional parameters. For example, we can now also write:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ll -a
</code></pre></div><p>And get the equivalent to having typed <code>ls -l -a</code>.</p><h2 id="persisting" tabindex="-1"><a class="header-anchor" href="#persisting" aria-hidden="true">#</a> Persisting</h2>`,10),p=e("For information about how to persist aliases so that they're visible when you start up Nushell, see the "),u=e("configuration chapter"),_=e(" and add your aliases to the "),g=a("code",null,"startup",-1),x=e(" section.");function m(f,w){const t=o("RouterLink");return l(),i("div",null,[h,a("p",null,[p,n(t,{to:"/old_book/configuration.html#startup-commands"},{default:c(()=>[u]),_:1}),_,g,x])])}var y=s(d,[["render",m],["__file","aliases.html.vue"]]);export{y as default};