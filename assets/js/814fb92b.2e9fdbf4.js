"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[636],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),g=o,f=d["".concat(i,".").concat(g)]||d[g]||u[g]||s;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8941:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(7462),o=n(3366),s=(n(7294),n(3905)),a=["components"],l={id:"install-postgresql",title:"Install PostgreSQL"},i=void 0,c={unversionedId:"PostgreSQL/install-postgresql",id:"PostgreSQL/install-postgresql",isDocsHomePage:!1,title:"Install PostgreSQL",description:"Installation de PostgreSQL sur chaque serveur.",source:"@site/docs/PostgreSQL/install-postgreSQL.md",sourceDirName:"PostgreSQL",slug:"/PostgreSQL/install-postgresql",permalink:"/docs/PostgreSQL/install-postgresql",editUrl:"https://github.com/j-peguet/portfolio/blob/master/docs/PostgreSQL/install-postgreSQL.md",tags:[],version:"current",lastUpdatedAt:1630868816,formattedLastUpdatedAt:"9/5/2021",frontMatter:{id:"install-postgresql",title:"Install PostgreSQL"},sidebar:"docs",previous:{title:"Install Longhorn",permalink:"/docs/Kubernetes-Advanced/install-longhorn"},next:{title:"Configure a Master Slave Replication",permalink:"/docs/PostgreSQL/configure-master-slave"}},p=[{value:"Configuration",id:"configuration",children:[],level:3}],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Installation de PostgreSQL sur chaque serveur.\nLa version choisie de PostgreSQL est 13.2."),(0,s.kt)("p",null,"Plus d'infos ici: ",(0,s.kt)("a",{parentName:"p",href:"https://www.postgresql.org/download/"},"https://www.postgresql.org/download/")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"## If you don't have lsb_release command\nsudo apt install lsb-release -y\n\n# Create the file repository configuration:\nsudo sh -c 'echo \"deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main\" > /etc/apt/sources.list.d/pgdg.list'\n\n# Import the repository signing key:\nwget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -\n\n# Update the package lists:\nsudo apt-get update\n\n# Install the latest version of PostgreSQL.\n# If you want a specific version, use 'postgresql-12' or similar instead of 'postgresql':\nsudo apt-get -y install postgresql\n")),(0,s.kt)("h3",{id:"configuration"},"Configuration"),(0,s.kt)("p",null,"Modifier le fichier ",(0,s.kt)("code",null,"/etc/postgresql/13/main/postgresql.conf")),(0,s.kt)("p",null,"Ou remplacer par votre version ",(0,s.kt)("code",null,"/etc/postgresql/<your_version>/main/postgresql.conf")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# Uncomment the line and change 'localhost' to '*'\nlisten_addresses = '*'\n")),(0,s.kt)("p",null,"Modifier le fichier ",(0,s.kt)("code",null,"/etc/postgresql/13/main/pg_hba.conf")),(0,s.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Ne pas faire ceci en PROD")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Le fichier ",(0,s.kt)("code",null,"pg_hba.conf")," doit \xeatre configur\xe9 avec des acc\xe8s restreints et s\xe9curis\xe9s."),(0,s.kt)("p",{parentName:"div"},"L'exemple ci-dessous n'est valide qu'a des fins des tests."))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# Change this lines\nlocal   all             postgres                                trust\n# And add this lines\nhost    all             postgres        all                     trust\n\n# Reload PostgreSQL Service\nsudo service postgresql restart\n")))}d.isMDXComponent=!0}}]);