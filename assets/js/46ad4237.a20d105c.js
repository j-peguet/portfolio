"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2358],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>f});var t=a(7294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=t.createContext({}),s=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},c=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(a),g=i,f=u["".concat(p,".").concat(g)]||u[g]||m[g]||o;return a?t.createElement(f,r(r({ref:n},c),{},{components:a})):t.createElement(f,r({ref:n},c))}));function f(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=g;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=a[s];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},2928:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var t=a(7462),i=(a(7294),a(3905));const o={id:"5_3_ConfigMaps",title:"ConfigMaps"},r=void 0,l={unversionedId:"Kubernetes/kubernetes_storage_&_scheduling/5_3_ConfigMaps",id:"Kubernetes/kubernetes_storage_&_scheduling/5_3_ConfigMaps",title:"ConfigMaps",description:"* Key value pairs exposed into a Pod used application configuration settings",source:"@site/docs/Kubernetes/3_kubernetes_storage_&_scheduling/5_3_ConfigMaps.md",sourceDirName:"Kubernetes/3_kubernetes_storage_&_scheduling",slug:"/Kubernetes/kubernetes_storage_&_scheduling/5_3_ConfigMaps",permalink:"/docs/Kubernetes/kubernetes_storage_&_scheduling/5_3_ConfigMaps",draft:!1,editUrl:"https://github.com/j-peguet/portfolio/blob/master/docs/Kubernetes/3_kubernetes_storage_&_scheduling/5_3_ConfigMaps.md",tags:[],version:"current",lastUpdatedAt:1676381131,formattedLastUpdatedAt:"Feb 14, 2023",frontMatter:{id:"5_3_ConfigMaps",title:"ConfigMaps"},sidebar:"docs",previous:{title:"Secrets",permalink:"/docs/Kubernetes/kubernetes_storage_&_scheduling/5_2_Secrets"},next:{title:"Accessing a Private Container Registry",permalink:"/docs/Kubernetes/kubernetes_storage_&_scheduling/6_Access_to_private_registry"}},p={},s=[{value:"Using ConfigMaps in Pods",id:"using-configmaps-in-pods",level:2},{value:"Defining ConfigMaps",id:"defining-configmaps",level:2},{value:"Imperative",id:"imperative",level:3},{value:"Declarative",id:"declarative",level:3},{value:"Using ConfigMaps in Environment Variable",id:"using-configmaps-in-environment-variable",level:3},{value:"Using ConfigMaps as Files",id:"using-configmaps-as-files",level:3},{value:"Demo 1",id:"demo-1",level:2},{value:"Demo 2",id:"demo-2",level:2}],c={toc:s},u="wrapper";function m(e){let{components:n,...a}=e;return(0,i.kt)(u,(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Key value pairs exposed into a Pod used application configuration settings"),(0,i.kt)("li",{parentName:"ul"},"Defining application or environment specific settings - connection strings, URLs, host names, credentials",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A common use case is configured environments"),(0,i.kt)("li",{parentName:"ul"},"All the information abstracted outside of the container"),(0,i.kt)("li",{parentName:"ul"},"We can inject that configuration to sets up application (dev, QA, prod)"))),(0,i.kt)("li",{parentName:"ul"},"Decouple application and Pod configurations"),(0,i.kt)("li",{parentName:"ul"},"Maximizing our container image\u2019s portability"),(0,i.kt)("li",{parentName:"ul"},"Can be exposed as Environment Variables or Files")),(0,i.kt)("p",null,"ConfigMaps must exist ",(0,i.kt)("strong",{parentName:"p"},"before")," pod creation, or the container won't start up"),(0,i.kt)("h2",{id:"using-configmaps-in-pods"},"Using ConfigMaps in Pods"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Environment variables",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"valueFrom and envFrom"))),(0,i.kt)("li",{parentName:"ul"},"Volumes and Files",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Volume mounted inside a container"),(0,i.kt)("li",{parentName:"ul"},"Single file or directory"),(0,i.kt)("li",{parentName:"ul"},"Many files or directories"),(0,i.kt)("li",{parentName:"ul"},"Volume ConfigMaps can be updated")))),(0,i.kt)("h2",{id:"defining-configmaps"},"Defining ConfigMaps"),(0,i.kt)("h3",{id:"imperative"},"Imperative"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create configmap appconfigprod \\\n--from-literal=DATABASE_SERVERNAME=sql.example.local \\\n--from-literal=BACKEND_SERVERNAME=be.example.local\n\nkubectl create configmap appconfigqa \\\n--from-file=appconfigqa\n")),(0,i.kt)("h3",{id:"declarative"},"Declarative"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: ConfigMap\nmetadata:\n    name: appconfigprod\ndata:\n    BACKEND_SERVERNAME: be.example.local\n    DATABASE_SERVERNAME: sql.example.local\n")),(0,i.kt)("h3",{id:"using-configmaps-in-environment-variable"},"Using ConfigMaps in Environment Variable"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n    containers:\n    - name: hello-world\n      ...\n      env:\n      - name: DATABASE_SERVERNAME\n        valueFrom:\n            configMapKeyRef:\n                name: appconfigprod\n                key: DATABASE_SERVERNAME\n      - name: BACKEND_SERVERNAME\n        valueFrom:\n            configMapKeyRef:\n                name: appconfigprod\n                key: BACKEND_SERVERNAME\n")),(0,i.kt)("p",null,"It's a little big longer... we have better"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"containers:\n- name: hello-world\n    ...\n    envFrom:\n        - configMapRef:\n        name: appconfigprod\n")),(0,i.kt)("p",null,"In this case each key and value pair inside of that secret. An environment variable is created, without need to specify them."),(0,i.kt)("h3",{id:"using-configmaps-as-files"},"Using ConfigMaps as Files"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'spec:\n    volumes:\n        - name: appconfig\n        configMap:\n            name: appconfigqa\n    containers:\n    - name: hello-world\n      ...\n      volumeMounts:\n      - name: appconfig\n        mountPath: "/etc/appconfig"\n')),(0,i.kt)("h2",{id:"demo-1"},"Demo 1"),(0,i.kt)("p",null,"Creating ConfigMaps"),(0,i.kt)("p",null,"Create a file appconfigqa"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'DATABASE_SERVERNAME="sqlqa.example.local"\nBACKEND_SERVERNAME="beqa.example.local"\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"#Create a PROD ConfigMap\nkubectl create configmap appconfigprod \\\n    --from-literal=DATABASE_SERVERNAME=sql.example.local \\\n    --from-literal=BACKEND_SERVERNAME=be.example.local\n\n#Create a QA ConfigMap\n#We can source our ConfigMap from files or from directories\n#If no key, then the base name of the file\n#Otherwise we can specify a key name to allow for more complex app configs and access to specific configuration elements\ncat appconfigqa\nkubectl create configmap appconfigqa \\\n    --from-file=appconfigqa\n\n#Each creation method yeilded a different structure in the ConfigMap\nkubectl get configmap appconfigprod -o yaml\nkubectl get configmap appconfigqa -o yaml\n")),(0,i.kt)("h2",{id:"demo-2"},"Demo 2"),(0,i.kt)("p",null,"Using ConfigMaps in Pod Configurations"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"#First as environment variables\nkubectl apply -f deployment-configmaps-env-prod.yaml\n\n#Let's see or configured enviroment variables\nPODNAME=$(kubectl get pods | grep hello-world-configmaps-env-prod | awk '{print $1}' | head -n 1)\necho $PODNAME\n\nkubectl exec -it $PODNAME -- /bin/sh \nprintenv | sort\nexit\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"#Second as files\nkubectl apply -f deployment-configmaps-files-qa.yaml\n\n#Let's see our configmap exposed as a file using the key as the file name.\nPODNAME=$(kubectl get pods | grep hello-world-configmaps-files-qa | awk '{print $1}' | head -n 1)\necho $PODNAME\n\nkubectl exec -it $PODNAME -- /bin/sh \nls /etc/appconfig\ncat /etc/appconfig/appconfigqa\nexit\n\n#Our ConfigMap key, was the filename we read in, and the values are inside the file.\n#This is how we can read in whole files at a time and present them to the file system with the same name in one ConfigMap\n#So think about using this for daemon configs like nginx, redis...etc.\nkubectl get configmap appconfigqa -o yaml\n\n#Updating a configmap, change BACKEND_SERVERNAME to beqa1.example.local\nkubectl edit configmap appconfigqa\n\nkubectl exec -it $PODNAME -- /bin/sh \nwatch cat /etc/appconfig/appconfigqa\nexit\n\n#Cleaning up our demp\nkubectl delete deployment hello-world-configmaps-env-prod\nkubectl delete deployment hello-world-configmaps-files-qa\nkubectl delete configmap appconfigprod\nkubectl delete configmap appconfigqa\n")))}m.isMDXComponent=!0}}]);