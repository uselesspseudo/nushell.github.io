import{_ as n,r as d,o as r,c as i,a as e,b as t,e as s,d as a}from"./app.09d1675d.js";const c={},l=s(`<h1 id="configuracion" tabindex="-1"><a class="header-anchor" href="#configuracion" aria-hidden="true">#</a> Configuraci\xF3n</h1><p>Nu tiene un n\xFAmero peque\xF1o, pero creciente, de variables internas que puedes establecer cambios en su aspecto y funcionamiento. A continuaci\xF3n una lista de las variables actuales, sus tipos, y una descripci\xF3n de c\xF3mo se utilizan:</p><table><thead><tr><th>Variable</th><th>Tipo</th><th>Descripci\xF3n</th></tr></thead><tbody><tr><td>completion_mode</td><td>&quot;list&quot; o &quot;circular&quot;</td><td>el estilo de autocompletar a usar</td></tr><tr><td>ctrlc_exit</td><td>booleano</td><td>salir o no de Nu despu\xE9s de presionar ctrl-c varias veces</td></tr><tr><td>disable_table_indexes</td><td>booleano</td><td>elimina la columna de \xEDndice de la tabla</td></tr><tr><td>edit_mode</td><td>&quot;vi&quot; o &quot;emacs&quot;</td><td>cambia edici\xF3n de l\xEDnea a modo &quot;vi&quot; o &quot;emacs&quot;</td></tr><tr><td>env</td><td>fila</td><td>variables de entorno que ser\xE1n pasadas a comandos externos</td></tr><tr><td>header_align</td><td>&quot;center&quot;, &quot;right&quot;, u otro</td><td>alinea los encabezados de la tabla alineados al centro, a la derecha o a la izquierda</td></tr><tr><td>key_timeout</td><td>entero</td><td>el tiempo de espera utilizado para cambiar entre los modos de edici\xF3n</td></tr><tr><td>nonzero_exit_errors</td><td>booleano</td><td>si imprimir errores para c\xF3digos de salida no-ceros para externos</td></tr><tr><td>path</td><td>tabla de cadenas</td><td>PATH para usar en b\xFAsqueda de binarios</td></tr><tr><td>startup</td><td>lista de cadenas</td><td>comandos, como <code>alias</code>es, para ejecutar cuando nushell arranca</td></tr><tr><td>table_mode</td><td>&quot;light&quot; o otro</td><td>habilitar tablas livianas o normales</td></tr></tbody></table><h2 id="uso" tabindex="-1"><a class="header-anchor" href="#uso" aria-hidden="true">#</a> Uso</h2><h3 id="configuracion-de-variables" tabindex="-1"><a class="header-anchor" href="#configuracion-de-variables" aria-hidden="true">#</a> Configuraci\xF3n de variables</h3><p>Para establecer una de estas variables, puedes usar <code>config set</code>. Por ejemplo:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; config set edit_mode &quot;vi&quot;
</code></pre></div><h3 id="estableciendo-una-variable-desde-la-tuberia" tabindex="-1"><a class="header-anchor" href="#estableciendo-una-variable-desde-la-tuberia" aria-hidden="true">#</a> Estableciendo una variable desde la tuber\xEDa</h3><p>Hay una manera adicional de establecer una variable, y es usar el contenido de la tuber\xEDa como el valor deseado para la variable. Para esto usa la bandera <code>set-into</code>:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; echo &quot;bar&quot; | config set_into foo
</code></pre></div><p>Esto es de utilidad cuando se trabaja con las variables <code>env</code> y <code>path</code>.</p><h3 id="listado-de-todas-las-variables" tabindex="-1"><a class="header-anchor" href="#listado-de-todas-las-variables" aria-hidden="true">#</a> Listado de todas las variables.</h3><p>Ejecutando el comando <code>config</code> sin argumentos mostrar\xE1 una tabla de las preferencias de configuraci\xF3n actuales:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; config
\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
 edit_mode \u2502 env            \u2502 path             \u2502 table_mode
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 emacs     \u2502 [table: 1 row] \u2502 [table: 10 rows] \u2502 normal
\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
</code></pre></div><p>Nota: si por el momento no has establecido variables de configuraci\xF3n, puede estar vac\xEDa.</p><h3 id="obteniendo-una-variable" tabindex="-1"><a class="header-anchor" href="#obteniendo-una-variable" aria-hidden="true">#</a> Obteniendo una variable</h3><p>Usando la bandera <code>get</code>, puedes conseguir el valor de una variable:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; config get edit_mode
</code></pre></div><h3 id="eliminando-una-variable" tabindex="-1"><a class="header-anchor" href="#eliminando-una-variable" aria-hidden="true">#</a> Eliminando una variable</h3><p>Para eliminar una variable de la configuraci\xF3n, usa la bandera <code>remove</code>:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; config remove edit_mode
</code></pre></div><h3 id="borrar-toda-la-configuracion" tabindex="-1"><a class="header-anchor" href="#borrar-toda-la-configuracion" aria-hidden="true">#</a> Borrar toda la configuraci\xF3n</h3><p>Si deseas borrar toda la configuraci\xF3n y empezar de cero, puedes usar la bandera <code>clear</code>. Por supuesto, tenga precauci\xF3n con esto ya que una vez ejecutado el archivo de configuraci\xF3n tambi\xE9n se eliminar\xE1.</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; config clear
</code></pre></div><h3 id="encontrar-donde-se-almacena-el-archivo-de-configuracion" tabindex="-1"><a class="header-anchor" href="#encontrar-donde-se-almacena-el-archivo-de-configuracion" aria-hidden="true">#</a> Encontrar d\xF3nde se almacena el archivo de configuraci\xF3n</h3><p>El archivo de configuraci\xF3n se carga desde una ubicaci\xF3n predeterminada. Para encontrar esta ubicaci\xF3n en el sistema, puedes solicitarla usando la bandera <code>path</code>:</p><div class="language-text ext-text"><pre class="language-text"><code>config path
\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
 &lt;value&gt;
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 /home/nusheller/.config/nu/config.toml
\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
</code></pre></div><h3 id="cargando-la-configuracion-desde-un-archivo" tabindex="-1"><a class="header-anchor" href="#cargando-la-configuracion-desde-un-archivo" aria-hidden="true">#</a> Cargando la configuraci\xF3n desde un archivo</h3><p>Es posible que desees cargar la configuraci\xF3n desde una ubicaci\xF3n distinta a la predeterminada. Para hacerlo, usa la bandera <code>load</code>:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; config load myconfiguration.toml
</code></pre></div><h2 id="configurando-nu-como-shell-de-inicio-de-sesion" tabindex="-1"><a class="header-anchor" href="#configurando-nu-como-shell-de-inicio-de-sesion" aria-hidden="true">#</a> Configurando Nu como shell de inicio de sesi\xF3n</h2><p>Para usar Nu como shell de inicio de sesi\xF3n, necesitar\xE1s configurar las variables <code>path</code> y <code>env</code>. Con estos, obtendr\xE1s suficiente soporte para ejecutar comandos externos como shell de inicio de sesi\xF3n.</p><p>Antes de cambiarlo, ejecuta Nu dentro de otra shell, como Bash. Luego, obt\xE9n el entorno y PATH desde esa shell con los siguientes comandos:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; config set path $nu.path
&gt; config set env $nu.env
</code></pre></div><p><code>$nu.path</code> y <code>$nu.env</code> son valores que est\xE1n prestablecidas a las variables actuales de entorno y PATH, respectivamente. Una vez que las estableces a la configuraci\xF3n, estar\xE1n disponibles cuando uses Nu como shell de inicio de sesi\xF3n.</p><p>A continuaci\xF3n, en algunas distribuciones tambi\xE9n deber\xE1s asegurarte de que Nu est\xE9 en la lista en <code>/etc/shells</code>:</p><div class="language-text ext-text"><pre class="language-text"><code>\u276F cat /etc/shells
# /etc/shells: valid login shells
/bin/sh
/bin/dash
/bin/bash
/bin/rbash
/usr/bin/screen
/usr/bin/fish
/home/jonathan/.cargo/bin/nu
</code></pre></div><p>Con esto, deber\xEDas de poder hacer <code>chsh</code> y establecer Nu como la shell de inicio de sesi\xF3n. Luego de cerrar sesi\xF3n, en el pr\xF3ximo inicio de sesi\xF3n deber\xEDas de recibir un brillante mensaje de Nu.</p><h2 id="configuracion-del-prompt" tabindex="-1"><a class="header-anchor" href="#configuracion-del-prompt" aria-hidden="true">#</a> Configuraci\xF3n del prompt</h2>`,39),u=a("Actualmente, la configuraci\xF3n del prompt es manejada instalando Nu con el soporte prompt proporcionado con "),h={href:"https://github.com/starship/starship",target:"_blank",rel:"noopener noreferrer"},p=a("starship"),g=a("."),b=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`nushell on \u{1F4D9} master [$] is \u{1F4E6} v0.5.1 via \u{1F980} v1.40.0-nightly
\u276F
`)])],-1),m=a("Starship es un prompt divertido, colorido y sorprendentemente poderoso. Para configurarlo, sigue los pasos en su "),v={href:"https://starship.rs/config/",target:"_blank",rel:"noopener noreferrer"},f=a("manual de configuraci\xF3n"),x=a(".");function _(q,y){const o=d("ExternalLinkIcon");return r(),i("div",null,[l,e("p",null,[u,e("a",h,[p,t(o)]),g]),b,e("p",null,[m,e("a",v,[f,t(o)]),x])])}const P=n(c,[["render",_],["__file","configuracion.html.vue"]]);export{P as default};