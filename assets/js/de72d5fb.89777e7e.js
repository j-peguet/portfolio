"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2187],{3905:(e,a,n)=>{n.d(a,{Zo:()=>i,kt:()=>g});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=t.createContext({}),c=function(e){var a=t.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},i=function(e){var a=c(e.components);return t.createElement(p.Provider,{value:a},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return n?t.createElement(g,s(s({ref:a},i),{},{components:n})):t.createElement(g,s({ref:a},i))}));function g(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=d;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o[m]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<l;c++)s[c]=n[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3234:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var t=n(7462),r=(n(7294),n(3905));const l={id:"5_1_Namespaces",title:"Namespaces"},s=void 0,o={unversionedId:"Kubernetes/management_APIServer_&_Pod/5_1_Namespaces",id:"Kubernetes/management_APIServer_&_Pod/5_1_Namespaces",title:"Namespaces",description:"Le Namespaces permet:",source:"@site/docs/Kubernetes/2_management_APIServer_&_Pod/5_1_Namespaces.md",sourceDirName:"Kubernetes/2_management_APIServer_&_Pod",slug:"/Kubernetes/management_APIServer_&_Pod/5_1_Namespaces",permalink:"/docs/Kubernetes/management_APIServer_&_Pod/5_1_Namespaces",draft:!1,editUrl:"https://github.com/j-peguet/portfolio/blob/master/docs/Kubernetes/2_management_APIServer_&_Pod/5_1_Namespaces.md",tags:[],version:"current",lastUpdatedAt:1676381131,formattedLastUpdatedAt:"Feb 14, 2023",frontMatter:{id:"5_1_Namespaces",title:"Namespaces"},sidebar:"docs",previous:{title:"Organizing Objects in Kubernetes",permalink:"/docs/Kubernetes/management_APIServer_&_Pod/5_0_Organizing_Objects"},next:{title:"Labels",permalink:"/docs/Kubernetes/management_APIServer_&_Pod/5_2_Labels"}},p={},c=[{value:"Working with namespace",id:"working-with-namespace",level:2},{value:"Commands",id:"commands",level:2}],i={toc:c},m="wrapper";function u(e){let{components:a,...n}=e;return(0,r.kt)(m,(0,t.Z)({},i,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Le Namespaces permet:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ability to subdivide a cluster and its resources"),(0,r.kt)("li",{parentName:"ul"},"Conceptually a \u201cvirtual cluster\u201d"),(0,r.kt)("li",{parentName:"ul"},"Deploy objects into a Namespace"),(0,r.kt)("li",{parentName:"ul"},"Resource isolation/organization (multitenants clusters)"),(0,r.kt)("li",{parentName:"ul"},"Security boundary for Role-based Access Controls"),(0,r.kt)("li",{parentName:"ul"},"Naming boundary (same name in different namespaces)"),(0,r.kt)("li",{parentName:"ul"},"A resource can be in only one namespace"),(0,r.kt)("li",{parentName:"ul"},"Has nothing to do with the concept of a Linux OS namespace")),(0,r.kt)("p",null,"Permet de limiter les ressources en fonction d'un namespace (CPU, RAM, Disk). Il permet \xe9galement de s\xe9parer des projets, applications, utilisateurs."),(0,r.kt)("p",null,"Ou de d\xe9limiter la prod, les test, la qualification."),(0,r.kt)("h2",{id:"working-with-namespace"},"Working with namespace"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create/Query/Delete"),(0,r.kt)("li",{parentName:"ul"},"Operate on objects in a Namespace"),(0,r.kt)("li",{parentName:"ul"},"Some objects are Namespaced... some aren\u2019t",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Resources are Namespaced...Pods, Controllers, Services"),(0,r.kt)("li",{parentName:"ul"},"Physical things are not... PersistentVolumes, Nodes")))),(0,r.kt)("p",null,"Des namespaces existent d\xe9j\xe0 lors de l'installation du cluster"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"default - namespace par d\xe9faut des objets, si aucun n'est sp\xe9cifi\xe9"),(0,r.kt)("li",{parentName:"ul"},'kube-public - "readable" par tous les utilisateurs du cluster, utilis\xe9 pour stocker et partager des objets entre namespaces (ex: configmap)'),(0,r.kt)("li",{parentName:"ul"},"kube-system - objets syst\xe8me (pods, API Server, etcd, controller manager, kube-proxy)"),(0,r.kt)("li",{parentName:"ul"},"User Defined - permet \xe0 un utilisateurs de d\xe9ployer son travail"),(0,r.kt)("li",{parentName:"ul"},"Two methods of declaration:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Imperatively with kubectl",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"#Create Namespace\nkubectl create namespace playground1\n#Create Namespace\nkubectl run nginx --image=nginx --namespace playground1\n"))),(0,r.kt)("li",{parentName:"ul"},"Declaratively in a Manifest in YAML/JSON",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"#Create Namespace\n    apiVersion: v1\n    kind: Namespace\n    metadata:\n    name: playgroundinyaml\n#Create Object is this namespace\n    apiVersion: apps/v1\n    kind: Deployment\n    metadata:\n    namespace: playgroundinyaml\n")))))),(0,r.kt)("h2",{id:"commands"},"Commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"#Get a list of all the namespaces in our cluster\nkubectl get namespaces\n\n#get a list of all the API resources and if they can be in a namespace\nkubectl api-resources --namespaced=true | head\nkubectl api-resources --namespaced=false | head\n\n#Namespaces have state, Active and Terminating (when it's deleting)\nkubectl describe namespaces\n\n#Describe the details of an indivdual namespace\nkubectl describe namespaces kube-system\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"#Get all the pods in our cluster across all namespaces. Right now, only system pods, no user workload.\n#You can shorten --all-namespaces to -A\nkubectl get pods --all-namespaces\nkubectl get pods -A\n#Get a list of the pods in the kube-system namespace\nkubectl get pods --namespace kube-system\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"#Imperatively create a namespace\nkubectl create namespace playground1\n#Imperatively create a namespace...but there's some character restrictions. Lower case and only dashes. The regex is '[a-z0-9]([-a-z0-9]*[a-z0-9])?'\nkubectl create namespace Playground1\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"#Declaratively create a namespace\ncat namespace.yaml\nkubectl apply -f namespace.yaml\n\n#Get a list of all the current namespaces\nkubectl get namespaces\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"#Deployment.yaml file\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: hello-world\n  labels:\n    app: hello-world\n  namespace: playground1\nspec:\n  replicas: 4\n  selector:\n    matchLabels:\n      app: hello-world\n  template:\n    metadata:\n      labels:\n        app: hello-world\n    spec:\n      containers:\n      - name: hello-world\n        image: gcr.io/google-samples/hello-app:1.0\n        ports:\n        - containerPort: 8080\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"#Start a deployment into our playground1 namespace\ncat deployment.yaml\nkubectl apply -f deployment.yaml\n\n#Creating a resource imperitively\nkubectl run hello-world-pod \\\n    --image=gcr.io/google-samples/hello-app:1.0 \\\n    --generator=run-pod/v1 \\\n    --namespace playground1\n\n#Where are the pods?\nkubectl get pods\n\n#List all the pods on our namespace\nkubectl get pods --namespace playground1\nkubectl get pods -n playground1\n\n#Get a list of all of the resources in our namespace\nkubectl get all --namespace=playground1\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"#Try to delete all the pods in our namespace...this will delete the single pod.\n#But the pods under the Deployment controller will be recreated.\nkubectl delete pods --all --namespace playground1\n\n#Get a list of all of the *new* pods in our namespace\nkubectl get pods -n playground1\n\n#Delete all of the resources in our namespace and the namespace and delete our other created namespace.\n#This deletes the Deployment controller, the Pods...or really ALL resources in the namespaces\nkubectl delete namespaces playground1\nkubectl delete namespaces playgroundinyaml\n\n#List all resources in all namespaces, now our Deployment is gone.\nkubectl get all\nkubectl get all --all-namespaces\n")))}u.isMDXComponent=!0}}]);