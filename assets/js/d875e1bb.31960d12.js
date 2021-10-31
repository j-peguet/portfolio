"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7222],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=s,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:s,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9966:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(7462),s=n(3366),a=(n(7294),n(3905)),l=["components"],o={id:"1_Persistent_storage",title:"Persistent storage"},i=void 0,u={unversionedId:"Kubernetes/kubernetes_storage_&_scheduling/1_Persistent_storage",id:"Kubernetes/kubernetes_storage_&_scheduling/1_Persistent_storage",isDocsHomePage:!1,title:"Persistent storage",description:"Ce que nous savons actuellement sur les conteneurs:",source:"@site/docs/Kubernetes/3_kubernetes_storage_&_scheduling/1_Persistent_storage.md",sourceDirName:"Kubernetes/3_kubernetes_storage_&_scheduling",slug:"/Kubernetes/kubernetes_storage_&_scheduling/1_Persistent_storage",permalink:"/docs/Kubernetes/kubernetes_storage_&_scheduling/1_Persistent_storage",editUrl:"https://github.com/j-peguet/portfolio/blob/master/docs/Kubernetes/3_kubernetes_storage_&_scheduling/1_Persistent_storage.md",tags:[],version:"current",lastUpdatedAt:1613556017,formattedLastUpdatedAt:"2/17/2021",sidebarPosition:1,frontMatter:{id:"1_Persistent_storage",title:"Persistent storage"},sidebar:"docs",previous:{title:"Multi-Containers Pods",permalink:"/docs/Kubernetes/management_APIServer_&_Pod/6_2_Multi_Pods"},next:{title:"Define PV & PVC",permalink:"/docs/Kubernetes/kubernetes_storage_&_scheduling/2_Define_PV_&_PVC"}},c=[{value:"Storage API Object",id:"storage-api-object",children:[],level:2},{value:"Volume",id:"volume",children:[],level:2},{value:"Persistent Volumes",id:"persistent-volumes",children:[{value:"Types of Persistent Volumes",id:"types-of-persistent-volumes",children:[],level:3}],level:2},{value:"Persistent Volumes Claim",id:"persistent-volumes-claim",children:[],level:2},{value:"Access Mode",id:"access-mode",children:[],level:2},{value:"Static Provisioning Workflow",id:"static-provisioning-workflow",children:[],level:2},{value:"Storage Lifecycle",id:"storage-lifecycle",children:[],level:2}],p={toc:c};function d(e){var t=e.components,o=(0,s.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Ce que nous savons actuellement sur les conteneurs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"les conteneurs sont \xe9ph\xe9m\xe8res"),(0,a.kt)("li",{parentName:"ul"},"Les donn\xe9es \xe9critent dans un conteneur sont d\xe9truites lors de sa suppression"),(0,a.kt)("li",{parentName:"ul"},"Quand un Pod est supprim\xe9, les conteneurs sont supprim\xe9s de la Node"),(0,a.kt)("li",{parentName:"ul"},"Comment pouvons nous persist\xe9 de la donn\xe9es entre les diff\xe9rents cycle de vie des Pods ?")),(0,a.kt)("h2",{id:"storage-api-object"},"Storage API Object"),(0,a.kt)("p",null,"Kubernetes nous donne des objects permettant de persist\xe9 de la donn\xe9e:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Volume - Stockage persistant qui devient une part du pod (dans les specs)"),(0,a.kt)("li",{parentName:"ul"},"Persistent Volume - Stockage de la donn\xe9e en elle m\xeame, stockage pour les pods utilis\xe9 dans le cluster"),(0,a.kt)("li",{parentName:"ul"},"Persistent Volume Claim - Demande faite par un utilisateur de persister un volume"),(0,a.kt)("li",{parentName:"ul"},"Storage Class - Un moyen de cr\xe9er des groupes ou classes de stockage disponible dans le cluster")),(0,a.kt)("h2",{id:"volume"},"Volume"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Persistent storage deployed as part of the Pod spec"),(0,a.kt)("li",{parentName:"ul"},"Implementation details for your storage"),(0,a.kt)("li",{parentName:"ul"},"This can be challenging...",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Sharing code (very restritive with the Pod itself)"),(0,a.kt)("li",{parentName:"ul"},"Same lifecycle as Pod"))),(0,a.kt)("li",{parentName:"ul"},"We can do better...")),(0,a.kt)("h2",{id:"persistent-volumes"},"Persistent Volumes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Administrator defined storage in the Cluster",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Is the responsibility of the cluster administrator to create and delete storage"),(0,a.kt)("li",{parentName:"ul"},"This is going to be an API object that represents the actual storage itself"))),(0,a.kt)("li",{parentName:"ul"},"Implementation details for your storage"),(0,a.kt)("li",{parentName:"ul"},"Lifecycle independent of the Pod"),(0,a.kt)("li",{parentName:"ul"},"Managed by the Kubelet",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Maps the storage in the Node"),(0,a.kt)("li",{parentName:"ul"},"Exposes Persitent Volume as a mount inside the container - like any other Linux device")))),(0,a.kt)("p",null,"For more details ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/"},"https://kubernetes.io/docs/concepts/storage/persistent-volumes/")),(0,a.kt)("h3",{id:"types-of-persistent-volumes"},"Types of Persistent Volumes"),(0,a.kt)("p",null,"For simplify the different types of persistent volumes:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Type of Persistent Volumes",src:n(9669).Z})),(0,a.kt)("p",null,"It isn't an exhaustive list, a more complete list is available here: ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/#types-of-persistent-volumes"},"https://kubernetes.io/docs/concepts/storage/persistent-volumes/#types-of-persistent-volumes")),(0,a.kt)("h2",{id:"persistent-volumes-claim"},"Persistent Volumes Claim"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A request for storage by a user - is a resquest to the cluster for some amount of storage",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Size"),(0,a.kt)("li",{parentName:"ul"},"Access Mode - specific node, read-only /read-write"),(0,a.kt)("li",{parentName:"ul"},"Storage Class"))),(0,a.kt)("li",{parentName:"ul"},"Enable portability of your application configurations"),(0,a.kt)("li",{parentName:"ul"},"The Cluster will map a PVC to a PV")),(0,a.kt)("h2",{id:"access-mode"},"Access Mode"),(0,a.kt)("p",null,"In PV & PVC we'll need to define an access mode. Wich controls how a node (or multiple nodes) access a PV."),(0,a.kt)("p",null,"Because a PV & PVC are mapped to the Node by the kubelet and the exposed into a Pod."),(0,a.kt)("p",null,"They are 3 access modes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ReadWriteOnce (RWO)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"One Node can mount a volume for read & write access"))),(0,a.kt)("li",{parentName:"ul"},"ReadWriteMany (RWX)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"More than one Node can be access to the volume for read & write access "))),(0,a.kt)("li",{parentName:"ul"},"ReadOnlyMany (ROX)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"More than one Node can be access to the volume for readOnlyAccess")))),(0,a.kt)("p",null,"The volumes are ",(0,a.kt)("strong",{parentName:"p"},"Node level access"),", not Pod level access"),(0,a.kt)("h2",{id:"static-provisioning-workflow"},"Static Provisioning Workflow"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Define a persistent volume - detail for access (ex: NFS, server adress), the size in the spec"),(0,a.kt)("li",{parentName:"ul"},"Define a persistent volume claim - is the resquest for storage in the cluster - define the size, access mode and storage class"),(0,a.kt)("li",{parentName:"ul"},"Define Volume in Pod spec")),(0,a.kt)("h2",{id:"storage-lifecycle"},"Storage Lifecycle"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Storage Lifecycle",src:n(6493).Z})))}d.isMDXComponent=!0},6493:function(e,t,n){t.Z=n.p+"assets/images/storage_licecycle-ca603e337756a4ddb01c8e5858656700.png"},9669:function(e,t,n){t.Z=n.p+"assets/images/types_PV-741d448f19895bc611628e6332ba7a64.png"}}]);