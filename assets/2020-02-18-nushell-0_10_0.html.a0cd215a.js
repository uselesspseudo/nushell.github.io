import{_ as t,o,c as r,a as e,b as s,d as a,e as i,r as d}from"./app.a5cac4f6.js";const l={},c=e("h1",{id:"nushell-0-10-0",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nushell-0-10-0","aria-hidden":"true"},"#"),a(" Nushell 0.10.0")],-1),h=e("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),u=e("p",null,"Greetings and welcome to the 10th release of Nushell! Yes, that's right this is the tenth release of Nu we've put out in the wild, and oh is this release wild. So let's stop dilly-dallying and get right to it, shall we?",-1),p=e("h1",{id:"where-to-get-it",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),a(" Where to get it")],-1),m=a("Nu 0.10.0 is available as "),g={href:"https://github.com/nushell/nushell/releases/tag/0.10.0",target:"_blank",rel:"noopener noreferrer"},f=a("pre-built binaries"),w=a(" or from "),b={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},y=a("crates.io"),k=a(". If you have Rust installed you can install it using "),x=e("code",null,"cargo install nu",-1),_=a("."),v=i(`<p>If you want more goodies, you can install <code>cargo install nu --features=stable</code>.</p><p>As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use <code>cargo install nu_plugin_&lt;plugin name&gt;</code>.</p><h1 id="what-s-new" tabindex="-1"><a class="header-anchor" href="#what-s-new" aria-hidden="true">#</a> What&#39;s new</h1><h2 id="scripts-thegedge-jonathandturner" tabindex="-1"><a class="header-anchor" href="#scripts-thegedge-jonathandturner" aria-hidden="true">#</a> Scripts! (thegedge, jonathandturner)</h2><p>Yes, you read that right, we&#39;re just beginning to add support for running Nu scripts. So far, these scripts are simple things. Nu will go line by line and run each line. But we&#39;re looking forward to building up support with more features as we go.</p><p>To run a script, you just call <code>nu</code> and pass in it the script file:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">cat</span> hello_world.nu
<span class="token builtin class-name">echo</span> hello
<span class="token builtin class-name">echo</span> world

<span class="token operator">&gt;</span> nu hello_world.nu
hello
world
</code></pre></div><h2 id="running-commands-from-outside-nu-jonathandturner" tabindex="-1"><a class="header-anchor" href="#running-commands-from-outside-nu-jonathandturner" aria-hidden="true">#</a> Running commands from outside Nu (jonathandturner)</h2><p>Another fun features in this release is the ability to run a Nu command from outside of Nu. Just like shells like Bash and Windows CMD, you can now pass the <code>-c</code> flag and give the pipeline you want to run:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> ./nu -c <span class="token string">&quot;ls | get name&quot;</span>
\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token comment">#   \u2502 &lt;value&gt;</span>
\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   <span class="token number">0</span> \u2502 .cargo-lock
   <span class="token number">1</span> \u2502 .fingerprint
   <span class="token number">2</span> \u2502 build
   <span class="token number">3</span> \u2502 deps
</code></pre></div><h2 id="shorthand-flags-amanita-muscaria" tabindex="-1"><a class="header-anchor" href="#shorthand-flags-amanita-muscaria" aria-hidden="true">#</a> Shorthand flags (Amanita-muscaria)</h2><p>Tired of typing those long flags that every Nu command seems to have? Worry no more! You can now use short flags in many common Nu commands. For example:</p><p>Instead of:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> --full
</code></pre></div><p>You can now use:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> -f
</code></pre></div><p>The shorthand flags are listed as part of the updated help section</p><h2 id="did-someone-say-flags-andrasio" tabindex="-1"><a class="header-anchor" href="#did-someone-say-flags-andrasio" aria-hidden="true">#</a> Did someone say flags? (andrasio)</h2><p>If you&#39;re coming to Nu from other CLIs, you might have wondered why you always had to put flags at the end. A little annoying, right? We fixed it.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> *.sh --full
</code></pre></div><p>and now:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls --full *.sh
</code></pre></div><p>Use whichever you like best.</p><h2 id="more-plugins-by-default-andrasio" tabindex="-1"><a class="header-anchor" href="#more-plugins-by-default-andrasio" aria-hidden="true">#</a> More plugins by default (andrasio)</h2><p>We&#39;ve extended the set of plugins installed with <code>cargo install nu --features=stable</code> to the whole set of stable plugins. This cuts down on the amount of extra plugins to install if you want the full set. It should also help cut down on the confusion when users expected a command to be available but wasn&#39;t installed by default. You can still install without these additional commands, if you like, and pick and choose the ones you want.</p><h2 id="calc-command-coolshaurya" tabindex="-1"><a class="header-anchor" href="#calc-command-coolshaurya" aria-hidden="true">#</a> <code>calc</code> command (coolshaurya)</h2><p>There&#39;s a new <code>calc</code> command in development that can calculate the result of math expressions in a string.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;2+3&quot;</span> <span class="token operator">|</span> calc
<span class="token number">5.000000000000000</span>
</code></pre></div><h2 id="kill-command-sandorex" tabindex="-1"><a class="header-anchor" href="#kill-command-sandorex" aria-hidden="true">#</a> <code>kill</code> command (sandorex)</h2><p>Nu now also has a cross-platform <code>kill</code> command, for killing processes.</p><h2 id="command-improvements" tabindex="-1"><a class="header-anchor" href="#command-improvements" aria-hidden="true">#</a> Command improvements</h2><h3 id="external-commands-can-access-nu-andrasio" tabindex="-1"><a class="header-anchor" href="#external-commands-can-access-nu-andrasio" aria-hidden="true">#</a> External commands can access <code>$nu</code> (andrasio)</h3><p>External commands commands can now access the <code>$nu</code> variable that holds internal values for Nu.</p><h3 id="datetime-parsing-amanita-muscaria" tabindex="-1"><a class="header-anchor" href="#datetime-parsing-amanita-muscaria" aria-hidden="true">#</a> Datetime parsing (Amanita-muscaria)</h3><p>You can now parse datetime strings using the <code>str</code> command.</p><h3 id="du-command-now-shows-apparent-and-physical-disk-usage-amanita-muscaria" tabindex="-1"><a class="header-anchor" href="#du-command-now-shows-apparent-and-physical-disk-usage-amanita-muscaria" aria-hidden="true">#</a> <code>du</code> command now shows apparent and physical disk usage (Amanita-muscaria)</h3><p>The <code>du</code> command now lets you see both the amount of space that directories appear to take as well as the amount of total actual space they take up on the disk.</p><h3 id="better-help-message-jonathandturner" tabindex="-1"><a class="header-anchor" href="#better-help-message-jonathandturner" aria-hidden="true">#</a> Better <code>help</code> message (jonathandturner)</h3><p>By default, the <code>help</code> command now prints a little more information by default to help you get started.</p><h2 id="lots-of-bugfixes-improvements-thegedge-ultrawelfare-jonathandturner-andrasio-avandesa-notryanb-coolshaurya-twitu" tabindex="-1"><a class="header-anchor" href="#lots-of-bugfixes-improvements-thegedge-ultrawelfare-jonathandturner-andrasio-avandesa-notryanb-coolshaurya-twitu" aria-hidden="true">#</a> Lots of bugfixes/improvements (thegedge, UltraWelfare, jonathandturner, andrasio, avandesa, notryanb, coolshaurya, twitu)</h2><p>Better errors for incorrect <code>mv</code> and incorrect flags, better performance running external commands, better code documentation, plugins can now have numbers in their names, test directories can now have spaces in their names, fixed some issues with <code>cp</code>, moved off of the &quot;futures-preview&quot; crate to &quot;futures&quot; official, fixes to working with external commands that don&#39;t send line endings, improvements to <code>textview</code> and more.</p><h1 id="looking-ahead" tabindex="-1"><a class="header-anchor" href="#looking-ahead" aria-hidden="true">#</a> Looking ahead</h1><p>Adding the ability to run scripts gives Nu a lot more potential when used in larger tasks, and we&#39;re excited to continue to grow this support. This work comes out of the work to add aliases, which we&#39;re currently working on. It also opens up the possibility of running Nu from other hosts in the future.</p><p>Scripting also lends itself to needing more structure, variables, and more. We&#39;re looking ahead to those, too.</p>`,44);function N(j,I){const n=d("ExternalLinkIcon");return o(),r("div",null,[c,h,u,p,e("p",null,[m,e("a",g,[f,s(n)]),w,e("a",b,[y,s(n)]),k,x,_]),v])}var q=t(l,[["render",N],["__file","2020-02-18-nushell-0_10_0.html.vue"]]);export{q as default};
