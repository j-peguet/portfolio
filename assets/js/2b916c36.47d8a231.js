"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5662],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),k=o,m=d["".concat(c,".").concat(k)]||d[k]||p[k]||a;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2825:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],i={id:"install-keycloak",title:"Install Keycloak"},c=void 0,s={unversionedId:"Keycloak/install-keycloak",id:"Keycloak/install-keycloak",isDocsHomePage:!1,title:"Install Keycloak",description:"Keycloak est un IAM tr\xe8s populaire.",source:"@site/docs/Keycloak/install-keycloak.md",sourceDirName:"Keycloak",slug:"/Keycloak/install-keycloak",permalink:"/docs/Keycloak/install-keycloak",editUrl:"https://github.com/j-peguet/portfolio/blob/master/docs/Keycloak/install-keycloak.md",tags:[],version:"current",lastUpdatedAt:1630868816,formattedLastUpdatedAt:"9/5/2021",frontMatter:{id:"install-keycloak",title:"Install Keycloak"},sidebar:"docs",previous:{title:"Mastering Arrays",permalink:"/docs/Javascript/mastering-arrays"},next:{title:"Domain Clustered Mode",permalink:"/docs/Keycloak/domain-clustered-mode"}},u=[{value:"On Promise",id:"on-promise",children:[{value:"Pr\xe9requis",id:"pr\xe9requis",children:[],level:3},{value:"Choix du &#39;Operating Mode&#39;",id:"choix-du-operating-mode",children:[],level:3},{value:"Installation",id:"installation",children:[],level:3}],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Keycloak est un IAM tr\xe8s populaire."),(0,a.kt)("p",null,"Nous allons voir comment le configurer sur une machine sp\xe9cifique."),(0,a.kt)("p",null,"Lien vers la documentation officielle: ",(0,a.kt)("a",{parentName:"p",href:"https://www.keycloak.org/docs/latest/server_installation/#installation"},"www.keycloak.org/docs")),(0,a.kt)("h2",{id:"on-promise"},"On Promise"),(0,a.kt)("h3",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Java 8",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install -y openjdk-8-jdk\n")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'java -version\n# Output \n# openjdk version "1.8.0_292"\n# OpenJDK Runtime Environment (build 1.8.0_292-8u292-b10-0ubuntu1~20.04-b10)\n# OpenJDK 64-Bit Server VM (build 25.292-b10, mixed mode)\n'))),(0,a.kt)("li",{parentName:"ul"},"Une base de donn\xe9es, PostgresSQL de pr\xe9f\xe9rence (",(0,a.kt)("a",{parentName:"li",href:"../PostgreSQL/install-postgresql"},"tuto d'installation disponible ici"),")")),(0,a.kt)("h3",{id:"choix-du-operating-mode"},"Choix du 'Operating Mode'"),(0,a.kt)("p",null,"Keycloak propose 2 Operating Mode diff\xe9rents"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Standalone"),(0,a.kt)("li",{parentName:"ul"},"Domain")),(0,a.kt)("p",null,"Selon la documentation officielle :"),(0,a.kt)("code",null,"It is not recommended that you use standalone mode in production as you will have a single point of failure."),(0,a.kt)("p",null,"Nous allons donc voir comment installer la version Domain de keycloak."),(0,a.kt)("h3",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Installation des fichiers de la distribution."),(0,a.kt)("p",null,"Il est possible de t\xe9l\xe9charger la derni\xe8re version ",(0,a.kt)("a",{parentName:"p",href:"https://www.keycloak.org/downloads"},"ici"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir keycloak\ncd keycloak\nwget https://github.com/keycloak/keycloak/releases/download/15.0.2/keycloak-15.0.2.zip\nunzip keycloak-15.0.2.zip\n")))}d.isMDXComponent=!0}}]);