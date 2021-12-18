"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6413],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return p}});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(t),p=l,v=c["".concat(u,".").concat(p)]||c[p]||d[p]||a;return t?r.createElement(v,i(i({ref:n},m),{},{components:t})):r.createElement(v,i({ref:n},m))}));function p(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,i=new Array(a);i[0]=c;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},4241:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return m},default:function(){return c}});var r=t(3117),l=t(102),a=(t(7294),t(3905)),i=["components"],o={id:"mastering-arrays",title:"Mastering Arrays"},u=void 0,s={unversionedId:"Javascript/mastering-arrays",id:"Javascript/mastering-arrays",title:"Mastering Arrays",description:"Pour apprendre \xe0 connaitre et maitriser les tabeaux en JS.",source:"@site/docs/Javascript/mastering-arrays.md",sourceDirName:"Javascript",slug:"/Javascript/mastering-arrays",permalink:"/docs/Javascript/mastering-arrays",editUrl:"https://github.com/j-peguet/portfolio/blob/master/docs/Javascript/mastering-arrays.md",tags:[],version:"current",lastUpdatedAt:1639859917,formattedLastUpdatedAt:"12/18/2021",frontMatter:{id:"mastering-arrays",title:"Mastering Arrays"},sidebar:"docs",previous:{title:"JavaScript",permalink:"/docs/JavaScript"},next:{title:"Keycloak",permalink:"/docs/Keycloak"}},m=[{value:"Trier",id:"trier",children:[{value:"sort",id:"sort",children:[],level:3}],level:2},{value:"Filtrage",id:"filtrage",children:[{value:"filter",id:"filter",children:[],level:3},{value:"find",id:"find",children:[],level:3},{value:"findIndex",id:"findindex",children:[],level:3}],level:2},{value:"Ordonner",id:"ordonner",children:[{value:"reverse",id:"reverse",children:[],level:3}],level:2},{value:"Parcourir le tableau",id:"parcourir-le-tableau",children:[{value:"map",id:"map",children:[],level:3},{value:"forEach",id:"foreach",children:[],level:3},{value:"reduce",id:"reduce",children:[],level:3}],level:2},{value:"Faire une condition",id:"faire-une-condition",children:[{value:"includes",id:"includes",children:[],level:3},{value:"some",id:"some",children:[],level:3},{value:"every",id:"every",children:[],level:3}],level:2},{value:"Transformation",id:"transformation",children:[{value:"fill",id:"fill",children:[],level:3},{value:"flat",id:"flat",children:[],level:3},{value:"flatMap",id:"flatmap",children:[],level:3}],level:2}],d={toc:m};function c(e){var n=e.components,t=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Pour apprendre \xe0 connaitre et maitriser les tabeaux en JS."),(0,a.kt)("h2",{id:"trier"},"Trier"),(0,a.kt)("h3",{id:"sort"},"sort"),(0,a.kt)("p",null,"Cette m\xe9thode tri les \xe9l\xe9ments du tableau en fonction d'une condition."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function Sort() {\n  let myArray = [6,9,4,8,3,7,1,5,2]\n\n  // Tri les \xe9l\xe9ments par ordre croissant\n  let sortedArray = myArray.sort((a, b) => a - b)\n\n  return (\n    <div>\n      <h2>{sortedArray.map(element => `${element} ,`)}</h2>\n    </div>\n  )\n}\n")),(0,a.kt)("h2",{id:"filtrage"},"Filtrage"),(0,a.kt)("h3",{id:"filter"},"filter"),(0,a.kt)("p",null,"Cette m\xe9thode retourne un nouveau tableau contenant uniquement les \xe9l\xe9ments correspondant \xe0 la condition."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function Filter() {\n  let myArray = [1,2,3,4,5,6,7,8,9]\n\n  // Ne retourne que les \xe9l\xe9ments sup\xe9rieur \xe0 4\n  let filteredArray = myArray.filter(element => element > 4)\n\n  return (\n    <div>\n      <h2>{filteredArray.map(element => `${element} ,`)}</h2>\n    </div>\n  )\n}\n")),(0,a.kt)("h3",{id:"find"},"find"),(0,a.kt)("p",null,"Cette m\xe9thode retourne le premier \xe9l\xe9ment du tableau correspondant \xe0 la condition."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function Find() {\n  let myArray = [1,2,3,4,5,6,7,8,9]\n\n  // Retourne l'\xe9l\xe9ment 4\n  let element = myArray.find(element => element == 4)\n\n  return (\n    <div>\n      <h2>{element}</h2>\n    </div>\n  )\n}\n")),(0,a.kt)("h3",{id:"findindex"},"findIndex"),(0,a.kt)("p",null,"Cette m\xe9thode ressemble beaucoup \xe0 la m\xe9thode ",(0,a.kt)("a",{parentName:"p",href:"#find"},"find")," mais retourne la position de l'\xe9l\xe9ment dans le tableau."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function FindIndex() {\n  let myArray = [1,2,3,4,5,6,7,8,9]\n\n  // Retourne la position de '4'\n  let element = myArray.findIndex(element => element == 4)\n\n  return (\n    <div>\n      <h2>{element}</h2>\n    </div>\n  )\n}\n")),(0,a.kt)("h2",{id:"ordonner"},"Ordonner"),(0,a.kt)("h3",{id:"reverse"},"reverse"),(0,a.kt)("p",null,"Cette m\xe9thode inverse l'ordre de tous les \xe9l\xe9ments du tableau."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function Reverse() {\n  let myArray = [1,2,3,4,5,6,7,8,9]\n\n  let reverseArray = myArray.reverse()\n\n  return (\n    <div>\n      <h2>{reverseArray.map(element => `${element} ,`)}</h2>\n    </div>\n  )\n}\n")),(0,a.kt)("h2",{id:"parcourir-le-tableau"},"Parcourir le tableau"),(0,a.kt)("h3",{id:"map"},"map"),(0,a.kt)("p",null,"Cette m\xe9thode retourne un nouveau tableau rempli avec le callback de la fonction pass\xe9 en param\xe8tre."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function Map() {\n  let myArray = [1,2,3,4,5,6,7,8,9]\n\n // Pour chaque \xe9l\xe9ment, le double est retourn\xe9.\n  let doubleArray = myArray.map(element => element * 2)\n\n  return (\n    <div>\n      <h2>{doubleArray.map(element => `${element} ,`)}</h2>\n    </div>\n  )\n}\n")),(0,a.kt)("h3",{id:"foreach"},"forEach"),(0,a.kt)("p",null,"Cette m\xe9thode ex\xe9cute une fonction pour chaque \xe9l\xe9ment du tableau."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function ForEach() {\n  let myArray = [1,2,3,4,5,6,7,8,9]\n\n  let sum = 0\n\n  myArray.forEach(element => {sum = sum + element})\n\n  return (\n    <div>\n      <h2>{sum}</h2>\n    </div>\n  )\n}\n")),(0,a.kt)("h3",{id:"reduce"},"reduce"),(0,a.kt)("p",null,"Cette m\xe9thode prend deux arguments, l'accumulateur (acc) et l'\xe9l\xe9ment courant (n)."),(0,a.kt)("p",null,"Pour chaque \xe9l\xe9ment le r\xe9sultat sera stock\xe9 dans l'accumulateur."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function Reduce() {\n  let myArray = [1,2,3,4,5,6,7,8,9]\n\n  let sum = myArray.reduce((acc, n) => acc + n)\n\n  return (\n    <div>\n      <h2>{sum}</h2>\n    </div>\n  )\n}\n")),(0,a.kt)("h2",{id:"faire-une-condition"},"Faire une condition"),(0,a.kt)("h3",{id:"includes"},"includes"),(0,a.kt)("p",null,"Cette m\xe9thode permet de savoir si un \xe9l\xe9ment ce trouve dans un tableau"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function Includes() {\n  let myArray = [1,2,3,4,5,6,7,8,9]\n\n  let bool\n\n  if(myArray.includes(6)){\n    bool = 'true'\n  } else {\n    bool = 'false'\n  }\n\n  return (\n    <div>\n      <h2>{bool}</h2>\n    </div>\n  )\n}\n")),(0,a.kt)("h3",{id:"some"},"some"),(0,a.kt)("p",null,"Cette m\xe9thode permet de savoir si au moins un \xe9l\xe9ment du tableau valide la condition donn\xe9e."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function Some() {\n  let myArray = [1,2,3,4,5,6,7,8,9]\n\n  let bool\n\n  // V\xe9rifie si au moins un \xe9l\xe9ment est sup\xe9rieur \xe0 6\n  if(myArray.some(element => element > 6)){\n    bool = 'true'\n  } else {\n    bool = 'false'\n  }\n\n  return (\n    <div>\n      <h2>{bool}</h2>\n    </div>\n  )\n}\n")),(0,a.kt)("h3",{id:"every"},"every"),(0,a.kt)("p",null,"Cette m\xe9thode permet de savoir si tous les \xe9l\xe9ments du tableau valident la condition donn\xe9e."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function Every() {\n  let myArray = [1,2,3,4,5,6,7,8,9]\n\n  let bool\n\n  // V\xe9rifie si tous les \xe9l\xe9ments sont sup\xe9rieur \xe0 6\n  if(myArray.every(element => element > 6)){\n    bool = 'true'\n  } else {\n    bool = 'false'\n  }\n\n  return (\n    <div>\n      <h2>{bool}</h2>\n    </div>\n  )\n}\n")),(0,a.kt)("h2",{id:"transformation"},"Transformation"),(0,a.kt)("h3",{id:"fill"},"fill"),(0,a.kt)("p",null,"Cette m\xe9thode permet de remplacer tous les \xe9l\xe9ments du tableau par une valeur."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function Fill() {\n  let myArray = [1,2,3,4,5,6,7,8,9]\n\n  // Ne retourne que les \xe9l\xe9ments sup\xe9rieur \xe0 4\n  let filteredArray = myArray.fill(4)\n\n  return (\n    <div>\n      <h2>{filteredArray.map(element => `${element} ,`)}</h2>\n    </div>\n  )\n}\n")),(0,a.kt)("h3",{id:"flat"},"flat"),(0,a.kt)("p",null,"Cette m\xe9thode permet de supprimer les tableaux imbriqu\xe9s."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function Flat() {\n  let myArray = [[1,2],[3,4,5],[6,7],[8,9]]\n\n  let fattenArray = myArray.flat(2)\n\n  return (\n    <div>\n      <h2>{fattenArray.map(element => `${element} ,`)}</h2>\n    </div>\n  )\n}\n")),(0,a.kt)("h3",{id:"flatmap"},"flatMap"),(0,a.kt)("p",null,"Cette m\xe9thode permet de supprimer les tableaux imbriqu\xe9s tous en appliquant une fonction a chaque \xe9l\xe9ment."),(0,a.kt)("p",null,"Cette m\xe9thode combine les fonctions ",(0,a.kt)("a",{parentName:"p",href:"#flat"},"flat")," et ",(0,a.kt)("a",{parentName:"p",href:"#map"},"map"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function FlatMap() {\n  let myArray = [[1],[3],[6],[8]]\n\n  let fattenArray = myArray.flatMap(n => n * 3)\n\n  return (\n    <div>\n      <h2>{fattenArray.map(element => `${element} ,`)}</h2>\n    </div>\n  )\n}\n")))}c.isMDXComponent=!0}}]);