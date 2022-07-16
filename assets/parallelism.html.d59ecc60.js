import{_ as s,o as l,c,a as e,b as a,w as n,d as t,r as i}from"./app.a5cac4f6.js";const r={},h=e("h1",{id:"parallelism",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parallelism","aria-hidden":"true"},"#"),t(" Parallelism")],-1),d=e("p",null,"Nushell now has early support for running code in parallel. This allows you to process elements of a stream using more hardware resources of your computer.",-1),_=e("p",null,[t("You will notice these commands with their characteristic "),e("code",null,"par-"),t(" naming. Each corresponds to a non-parallel version, allowing you to easily write code in a serial style first, and then go back and easily convert serial scripts into parallel scripts with a few extra characters.")],-1),u=e("h2",{id:"par-each",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#par-each","aria-hidden":"true"},"#"),t(" par-each")],-1),m=t("The most common parallel command is "),p=e("code",null,"par-each",-1),f=t(", a companion to the "),y=e("code",null,"each",-1),w=t(" command."),b=t("Like "),g=e("code",null,"each",-1),k=t(", "),x=e("code",null,"par-each",-1),v=t(" works on each element in the pipeline as it comes in, running a block on each. Unlike "),$=e("code",null,"each",-1),N=t(", "),T=e("code",null,"par-each",-1),B=t(" will do these operations in parallel."),L=t("Let's say you wanted to count the number of files in each sub-directory of the current directory. Using "),V=e("code",null,"each",-1),A=t(", you could write this as:"),C=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> ls | where type == dir | each { |it|
    { name: $it.name, len: (ls $it.name | length) }
}
`)])],-1),E=e("p",null,"We create a record for each entry, and fill it with the name of the directory and the count of entries in that sub-directory.",-1),F=e("p",null,"On your machine, the times may vary. For this machine, it took 21 milliseconds for the current directory.",-1),O=t("Now, since this operation can be run in parallel, let's convert the above to parallel by changing "),R=e("code",null,"each",-1),U=t(" to "),Y=e("code",null,"par-each",-1),q=t(":"),P=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> ls | where type == dir | par-each { |it|
    { name: $it.name, len: (ls $it.name | length) }
}
`)])],-1),W=e("p",null,"On this machine, it now runs in 6ms. That's quite a difference!",-1),j=t("As a side note: Because "),z=t("environment variables are scoped"),D=t(", you can use "),G=e("code",null,"par-each",-1),H=t(" to work in multiple directories in parallel (notice the "),I=e("code",null,"cd",-1),J=t(" command):"),K=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> ls | where type == dir | par-each { |it|
    { name: $it.name, len: (cd $it.name; ls | length) }
}
`)])],-1),M=t(`You'll notice, if you look at the results, that they come back in different orders each run (depending on the number of hardware threads on your system). As tasks finish, and we get the correct result, we may need to add additional steps if we want our results in a particular order. For example, for the above, we may want to sort the results by the "name" field. This allows both `),Q=e("code",null,"each",-1),S=t(" and "),X=e("code",null,"par-each",-1),Z=t(" versions of our script to give the same result.");function ee(te,oe){const o=i("RouterLink");return l(),c("div",null,[h,d,_,u,e("p",null,[m,a(o,{to:"/book/commands/par-each.html"},{default:n(()=>[p]),_:1}),f,a(o,{to:"/book/commands/each.html"},{default:n(()=>[y]),_:1}),w]),e("p",null,[b,a(o,{to:"/book/commands/each.html"},{default:n(()=>[g]),_:1}),k,a(o,{to:"/book/commands/par-each.html"},{default:n(()=>[x]),_:1}),v,a(o,{to:"/book/commands/each.html"},{default:n(()=>[$]),_:1}),N,a(o,{to:"/book/commands/par-each.html"},{default:n(()=>[T]),_:1}),B]),e("p",null,[L,a(o,{to:"/book/commands/each.html"},{default:n(()=>[V]),_:1}),A]),C,E,F,e("p",null,[O,a(o,{to:"/book/commands/each.html"},{default:n(()=>[R]),_:1}),U,a(o,{to:"/book/commands/par-each.html"},{default:n(()=>[Y]),_:1}),q]),P,W,e("p",null,[j,a(o,{to:"/book/environment.html#scoping"},{default:n(()=>[z]),_:1}),D,G,H,I,J]),K,e("p",null,[M,a(o,{to:"/book/commands/each.html"},{default:n(()=>[Q]),_:1}),S,a(o,{to:"/book/commands/par-each.html"},{default:n(()=>[X]),_:1}),Z])])}var ne=s(r,[["render",ee],["__file","parallelism.html.vue"]]);export{ne as default};
