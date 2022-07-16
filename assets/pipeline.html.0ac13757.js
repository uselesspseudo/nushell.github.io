import{_ as n,o as s,c as t,a as d,b as r,w as c,e as a,d as e,r as l}from"./app.a5cac4f6.js";const i={},u=a(`<h1 id="el-pipeline" tabindex="-1"><a class="header-anchor" href="#el-pipeline" aria-hidden="true">#</a> El pipeline</h1><p>Uno de los dise\xF1os centrales de Nu es la tuber\xEDa (pipeline), una idea de dise\xF1o que rastrea sus ra\xEDces d\xE9cadas atr\xE1s hasta parte de la filosof\xEDa original detr\xE1s de Unix. As\xED como Nu extiende desde un solo dato tipo de cadena de Unix, Nu tambi\xE9n extiende la idea de tuber\xEDas (pipelines) para incluir m\xE1s que solo texto.</p><h2 id="fundamentos" tabindex="-1"><a class="header-anchor" href="#fundamentos" aria-hidden="true">#</a> Fundamentos</h2><p>Una tuber\xEDa (pipeline) es constru\xEDda con tres partes: la entrada, el filtro, y la salida.</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open &quot;Cargo.toml&quot; | inc package.version | save &quot;Cargo_new.toml&quot;
</code></pre></div><p>El primer comando, <code>open &quot;Cargo.toml&quot;</code>, es una entrada (a veces tambi\xE9n llamada &quot;fuente&quot; o &quot;productor&quot;). Esto crea o carga datos y lo canaliza en la tuber\xEDa. Es de entrada para la tuber\xEDa tener valores y poder trabajarlas. Comandos como <code>ls</code> tambi\xE9n son entradas ya que toman datos desde el sistema de archivos y lo canalizan a trav\xE9s de las tuber\xEDas para que puedan ser usadas.</p><p>El segundo comando, <code>inc package.version</code>, es un filtro. Filtros toman los datos que se les entrega y com\xFAnmente hacen algo con la misma. Puede que la cambien (tal como el comando <code>inc</code> en nuestro ejemplo), o pueden hacer otra operaci\xF3n, como registrar, mientras pasan los valores.</p><p>El \xFAltimo comando, <code>save &quot;Cargo_new.toml&quot;</code>, es una salida (a veces llamado un &quot;sink&quot;). Una salida toma la entrada de la tuber\xEDa y realiza alguna operaci\xF3n final. En nuestro ejemplo, grabamos lo que viene a trav\xE9s de la tuber\xEDa hacia un archivo como paso final. Otros tipos de comandos de salida pueda que tomen valores y lo muestren para el usuario.</p><h2 id="trabajando-con-comandos-externos" tabindex="-1"><a class="header-anchor" href="#trabajando-con-comandos-externos" aria-hidden="true">#</a> Trabajando con comandos externos</h2>`,9),m=e("Los comandos en Nu se comunican entre ellos usando los tipos de datos de Nu (mirar "),p=e("tipos de datos"),h=e(") pero, \xBFqu\xE9 hay de comandos fuera de Nu? Miremos algunos ejemplos trabajando con comandos externos:"),_=a(`<p><code>commando_interno | comando_externo</code></p><p>Los datos fluir\xE1n desde comando_interno al comando_externo. Estos datos se esperan que sean cadenas para que puedan ser enviadas a entrada est\xE1ndar <code>stdin</code> del comando_externo.</p><p><code>comando_externo | comando_interno</code></p><p>Los datos que vienen de un comando externo a Nu se coleccionar\xE1 a una sola cadena y luego ser\xE1n pasadas a comando_interno. Comandos como <code>lines</code> ayudan a facilitar datos provenientes de comandos externos de manera que sea m\xE1s facil trabajarlas.</p><p><code>comando_externo_1 | comando_externo_2</code></p><p>Nu trabaja con datos canalizados entre dos comandos externos de la misma forma como en otras shells, como Bash lo har\xEDa. La salida est\xE1ndar <code>stdout</code> de comando_externo_1 es conectada a la entrada est\xE1ndar <code>stdin</code> de comando_externo_2. Esto permite que los datos fluyan naturalmente entre dos comandos.</p><h2 id="detras-de-escenas" tabindex="-1"><a class="header-anchor" href="#detras-de-escenas" aria-hidden="true">#</a> Detr\xE1s de escenas</h2><p>Es posible que te hayas preguntado como miramos una tabla si <code>ls</code> es una entrada y no una salida. Nu agrega esta salida por nosotros autom\xE1ticamente usando otro comando llamado <code>autoview</code>. El comando <code>autoview</code> es a\xF1adido a cualquier tuber\xEDa que no tenga una salida permiti\xE9ndonos ver el resultado.</p><p>En efecto, el comando:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls
</code></pre></div><p>y la tuber\xEDa:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | autoview
</code></pre></div><p>Son uno y lo mismo.</p>`,13);function x(g,q){const o=l("RouterLink");return s(),t("div",null,[u,d("p",null,[m,r(o,{to:"/es/book/tipos_de_datos.html"},{default:c(()=>[p]),_:1}),h]),_])}var b=n(i,[["render",x],["__file","pipeline.html.vue"]]);export{b as default};
