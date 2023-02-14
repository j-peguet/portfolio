"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7222],{3905:(e,t,s)=>{s.d(t,{Zo:()=>c,kt:()=>k});var r=s(7294);function n(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function a(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function l(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?a(Object(s),!0).forEach((function(t){n(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function o(e,t){if(null==e)return{};var s,r,n=function(e,t){if(null==e)return{};var s,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)s=a[r],t.indexOf(s)>=0||(n[s]=e[s]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)s=a[r],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}var i=r.createContext({}),u=function(e){var t=r.useContext(i),s=t;return e&&(s="function"==typeof e?e(t):l(l({},t),e)),s},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var s=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(s),m=n,k=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return s?r.createElement(k,l(l({ref:t},c),{},{components:s})):r.createElement(k,l({ref:t},c))}));function k(e,t){var s=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=s.length,l=new Array(a);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[p]="string"==typeof e?e:n,l[1]=o;for(var u=2;u<a;u++)l[u]=s[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,s)}m.displayName="MDXCreateElement"},9966:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=s(7462),n=(s(7294),s(3905));const a={id:"1_Persistent_storage",title:"Persistent storage"},l=void 0,o={unversionedId:"Kubernetes/kubernetes_storage_&_scheduling/1_Persistent_storage",id:"Kubernetes/kubernetes_storage_&_scheduling/1_Persistent_storage",title:"Persistent storage",description:"Ce que nous savons actuellement sur les conteneurs:",source:"@site/docs/Kubernetes/3_kubernetes_storage_&_scheduling/1_Persistent_storage.md",sourceDirName:"Kubernetes/3_kubernetes_storage_&_scheduling",slug:"/Kubernetes/kubernetes_storage_&_scheduling/1_Persistent_storage",permalink:"/docs/Kubernetes/kubernetes_storage_&_scheduling/1_Persistent_storage",draft:!1,editUrl:"https://github.com/j-peguet/portfolio/blob/master/docs/Kubernetes/3_kubernetes_storage_&_scheduling/1_Persistent_storage.md",tags:[],version:"current",lastUpdatedAt:1676381131,formattedLastUpdatedAt:"Feb 14, 2023",sidebarPosition:1,frontMatter:{id:"1_Persistent_storage",title:"Persistent storage"},sidebar:"docs",previous:{title:"Multi-Containers Pods",permalink:"/docs/Kubernetes/management_APIServer_&_Pod/6_2_Multi_Pods"},next:{title:"Define PV & PVC",permalink:"/docs/Kubernetes/kubernetes_storage_&_scheduling/2_Define_PV_&_PVC"}},i={},u=[{value:"Storage API Object",id:"storage-api-object",level:2},{value:"Volume",id:"volume",level:2},{value:"Persistent Volumes",id:"persistent-volumes",level:2},{value:"Types of Persistent Volumes",id:"types-of-persistent-volumes",level:3},{value:"Persistent Volumes Claim",id:"persistent-volumes-claim",level:2},{value:"Access Mode",id:"access-mode",level:2},{value:"Static Provisioning Workflow",id:"static-provisioning-workflow",level:2},{value:"Storage Lifecycle",id:"storage-lifecycle",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Ce que nous savons actuellement sur les conteneurs:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"les conteneurs sont \xe9ph\xe9m\xe8res"),(0,n.kt)("li",{parentName:"ul"},"Les donn\xe9es \xe9critent dans un conteneur sont d\xe9truites lors de sa suppression"),(0,n.kt)("li",{parentName:"ul"},"Quand un Pod est supprim\xe9, les conteneurs sont supprim\xe9s de la Node"),(0,n.kt)("li",{parentName:"ul"},"Comment pouvons nous persist\xe9 de la donn\xe9es entre les diff\xe9rents cycle de vie des Pods ?")),(0,n.kt)("h2",{id:"storage-api-object"},"Storage API Object"),(0,n.kt)("p",null,"Kubernetes nous donne des objects permettant de persist\xe9 de la donn\xe9e:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Volume - Stockage persistant qui devient une part du pod (dans les specs)"),(0,n.kt)("li",{parentName:"ul"},"Persistent Volume - Stockage de la donn\xe9e en elle m\xeame, stockage pour les pods utilis\xe9 dans le cluster"),(0,n.kt)("li",{parentName:"ul"},"Persistent Volume Claim - Demande faite par un utilisateur de persister un volume"),(0,n.kt)("li",{parentName:"ul"},"Storage Class - Un moyen de cr\xe9er des groupes ou classes de stockage disponible dans le cluster")),(0,n.kt)("h2",{id:"volume"},"Volume"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Persistent storage deployed as part of the Pod spec"),(0,n.kt)("li",{parentName:"ul"},"Implementation details for your storage"),(0,n.kt)("li",{parentName:"ul"},"This can be challenging...",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Sharing code (very restritive with the Pod itself)"),(0,n.kt)("li",{parentName:"ul"},"Same lifecycle as Pod"))),(0,n.kt)("li",{parentName:"ul"},"We can do better...")),(0,n.kt)("h2",{id:"persistent-volumes"},"Persistent Volumes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Administrator defined storage in the Cluster",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Is the responsibility of the cluster administrator to create and delete storage"),(0,n.kt)("li",{parentName:"ul"},"This is going to be an API object that represents the actual storage itself"))),(0,n.kt)("li",{parentName:"ul"},"Implementation details for your storage"),(0,n.kt)("li",{parentName:"ul"},"Lifecycle independent of the Pod"),(0,n.kt)("li",{parentName:"ul"},"Managed by the Kubelet",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Maps the storage in the Node"),(0,n.kt)("li",{parentName:"ul"},"Exposes Persitent Volume as a mount inside the container - like any other Linux device")))),(0,n.kt)("p",null,"For more details ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/"},"https://kubernetes.io/docs/concepts/storage/persistent-volumes/")),(0,n.kt)("h3",{id:"types-of-persistent-volumes"},"Types of Persistent Volumes"),(0,n.kt)("p",null,"For simplify the different types of persistent volumes:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Type of Persistent Volumes",src:s(5128).Z,width:"1308",height:"438"})),(0,n.kt)("p",null,"It isn't an exhaustive list, a more complete list is available here: ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/#types-of-persistent-volumes"},"https://kubernetes.io/docs/concepts/storage/persistent-volumes/#types-of-persistent-volumes")),(0,n.kt)("h2",{id:"persistent-volumes-claim"},"Persistent Volumes Claim"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A request for storage by a user - is a resquest to the cluster for some amount of storage",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Size"),(0,n.kt)("li",{parentName:"ul"},"Access Mode - specific node, read-only /read-write"),(0,n.kt)("li",{parentName:"ul"},"Storage Class"))),(0,n.kt)("li",{parentName:"ul"},"Enable portability of your application configurations"),(0,n.kt)("li",{parentName:"ul"},"The Cluster will map a PVC to a PV")),(0,n.kt)("h2",{id:"access-mode"},"Access Mode"),(0,n.kt)("p",null,"In PV & PVC we'll need to define an access mode. Wich controls how a node (or multiple nodes) access a PV."),(0,n.kt)("p",null,"Because a PV & PVC are mapped to the Node by the kubelet and the exposed into a Pod."),(0,n.kt)("p",null,"They are 3 access modes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ReadWriteOnce (RWO)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"One Node can mount a volume for read & write access"))),(0,n.kt)("li",{parentName:"ul"},"ReadWriteMany (RWX)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"More than one Node can be access to the volume for read & write access "))),(0,n.kt)("li",{parentName:"ul"},"ReadOnlyMany (ROX)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"More than one Node can be access to the volume for readOnlyAccess")))),(0,n.kt)("p",null,"The volumes are ",(0,n.kt)("strong",{parentName:"p"},"Node level access"),", not Pod level access"),(0,n.kt)("h2",{id:"static-provisioning-workflow"},"Static Provisioning Workflow"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Define a persistent volume - detail for access (ex: NFS, server adress), the size in the spec"),(0,n.kt)("li",{parentName:"ul"},"Define a persistent volume claim - is the resquest for storage in the cluster - define the size, access mode and storage class"),(0,n.kt)("li",{parentName:"ul"},"Define Volume in Pod spec")),(0,n.kt)("h2",{id:"storage-lifecycle"},"Storage Lifecycle"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Storage Lifecycle",src:s(3988).Z,width:"1720",height:"703"})))}d.isMDXComponent=!0},3988:(e,t,s)=>{s.d(t,{Z:()=>r});const r=s.p+"assets/images/storage_licecycle-ca603e337756a4ddb01c8e5858656700.png"},5128:(e,t,s)=>{s.d(t,{Z:()=>r});const r=s.p+"assets/images/types_PV-741d448f19895bc611628e6332ba7a64.png"}}]);