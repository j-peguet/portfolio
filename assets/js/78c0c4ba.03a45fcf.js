"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4313],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,f=m["".concat(i,".").concat(d)]||m[d]||c[d]||a;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,s[1]=u;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5947:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),s=["components"],u={id:"2_API_Groups",title:"API Groups"},i=void 0,l={unversionedId:"Kubernetes/management_APIServer_&_Pod/2_API_Groups",id:"Kubernetes/management_APIServer_&_Pod/2_API_Groups",title:"API Groups",description:"Les groupes sont des entit\xe9s permettant de rassembl\xe9 des ressources.",source:"@site/docs/Kubernetes/2_management_APIServer_&_Pod/2_API_Groups.md",sourceDirName:"Kubernetes/2_management_APIServer_&_Pod",slug:"/Kubernetes/management_APIServer_&_Pod/2_API_Groups",permalink:"/docs/Kubernetes/management_APIServer_&_Pod/2_API_Groups",editUrl:"https://github.com/j-peguet/portfolio/blob/master/docs/Kubernetes/2_management_APIServer_&_Pod/2_API_Groups.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"2_API_Groups",title:"API Groups"},sidebar:"docs",previous:{title:"Kubernetes API & API Server",permalink:"/docs/Kubernetes/management_APIServer_&_Pod/1_API_Server"},next:{title:"API Version",permalink:"/docs/Kubernetes/management_APIServer_&_Pod/3_API_Version"}},p=[{value:"Core (Legacy)",id:"core-legacy",children:[],level:2},{value:"Named API Groups",id:"named-api-groups",children:[],level:2}],c={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Les groupes sont des entit\xe9s permettant de rassembl\xe9 des ressources."),(0,a.kt)("p",null,"Il y a deux grands groupes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Core API (Legacy Group) - ce sont les objets fondamental de kubernetes, quand la notion de groupe n'\xe9xistait pas"),(0,a.kt)("li",{parentName:"ul"},"Named API Groups - ce sont tous les autres groupes cr\xe9es par la suite (ex: storage)")),(0,a.kt)("h2",{id:"core-legacy"},"Core (Legacy)"),(0,a.kt)("p",null,"C'est dans ce groupe que nous trouvons des objets fondamental comme:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Pod"),(0,a.kt)("li",{parentName:"ul"},"Node"),(0,a.kt)("li",{parentName:"ul"},"Namespace"),(0,a.kt)("li",{parentName:"ul"},"PersistentVolume "),(0,a.kt)("li",{parentName:"ul"},"PersistentVolumeClaim")),(0,a.kt)("h2",{id:"named-api-groups"},"Named API Groups"),(0,a.kt)("p",null,"Dans ces groupes nous trouvons des objets comme:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"apps - Deployment"),(0,a.kt)("li",{parentName:"ul"},"storage.k8s.io - StorageClass"),(0,a.kt)("li",{parentName:"ul"},"rbac.authorization.k8s.io - Role")),(0,a.kt)("p",null,"Une liste plus d\xe9taill\xe9e est disponible ici: ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.19/#-strong-api-groups-strong-"},"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.19/#-strong-api-groups-strong-")))}m.isMDXComponent=!0}}]);