"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6647],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return p}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),p=o,f=d["".concat(s,".").concat(p)]||d[p]||m[p]||a;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9555:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],l={id:"6_2_Multi_Pods",title:"Multi-Containers Pods"},s=void 0,c={unversionedId:"Kubernetes/management_APIServer_&_Pod/6_2_Multi_Pods",id:"Kubernetes/management_APIServer_&_Pod/6_2_Multi_Pods",isDocsHomePage:!1,title:"Multi-Containers Pods",description:"Define a multi-container Pods",source:"@site/docs/Kubernetes/2_management_APIServer_&_Pod/6_2_Multi_Pods.md",sourceDirName:"Kubernetes/2_management_APIServer_&_Pod",slug:"/Kubernetes/management_APIServer_&_Pod/6_2_Multi_Pods",permalink:"/docs/Kubernetes/management_APIServer_&_Pod/6_2_Multi_Pods",editUrl:"https://github.com/j-peguet/portfolio/blob/master/docs/Kubernetes/2_management_APIServer_&_Pod/6_2_Multi_Pods.md",tags:[],version:"current",lastUpdatedAt:1613556017,formattedLastUpdatedAt:"2/17/2021",frontMatter:{id:"6_2_Multi_Pods",title:"Multi-Containers Pods"},sidebar:"docs",previous:{title:"Single container Pods",permalink:"/docs/Kubernetes/management_APIServer_&_Pod/6_1_Single_Pods"},next:{title:"Persistent storage",permalink:"/docs/Kubernetes/kubernetes_storage_&_scheduling/1_Persistent_storage"}},u=[{value:"Define a multi-container Pods",id:"define-a-multi-container-pods",children:[],level:2},{value:"Commands",id:"commands",children:[{value:"Create a shared volume between containers in a Pod",id:"create-a-shared-volume-between-containers-in-a-pod",children:[],level:3}],level:2}],m={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"define-a-multi-container-pods"},"Define a multi-container Pods"),(0,a.kt)("p",null,"With yaml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n    name: multicontainer-pod\nspec:\n    containers:\n    - name: nginx\n      image: nginx\n      ports:\n      - containerPort: 80\n    ...\n    - name: alpine\n      image: alpine\n")),(0,a.kt)("h2",{id:"commands"},"Commands"),(0,a.kt)("h3",{id:"create-a-shared-volume-between-containers-in-a-pod"},"Create a shared volume between containers in a Pod"),(0,a.kt)("p",null,"Create file multicontainer-pod.yaml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: multicontainer-pod\nspec:\n  containers:\n  - name: producer\n    image: ubuntu\n    command: ["/bin/bash"]\n    args: ["-c", "while true; do echo $(hostname) $(date) >> /var/log/index.html; sleep 10; done"]\n    volumeMounts:\n    - name: webcontent\n      mountPath: /var/log\n  - name: consumer\n    image: nginx\n    ports:\n      - containerPort: 80\n    volumeMounts:\n    - name: webcontent\n      mountPath: /usr/share/nginx/html\n  volumes:\n  - name: webcontent \n    emptyDir: {}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"#Review the code for a multi-container pod, the volume webcontent is an emptyDir...essentially a temporary file system.\n#This is mounted in the containers at mountPath, in two different locations inside the container.\n#As producer writes data, consumer can see it immediatly since it's a shared file system.\ncat multicontainer-pod.yaml\n\n#Let's create our multi-container Pod.\nkubectl apply -f multicontainer-pod.yaml\n\n#Let's connect to our Pod...not specifying a name defaults to the first container in the configuration\nkubectl exec -it multicontainer-pod -- /bin/sh\nls -la /var/log\ntail /var/log/index.html\nexit\n\n#Let's specify a container name and access the consumer container in our Pod\nkubectl exec -it multicontainer-pod --container consumer -- /bin/sh\nls -la /usr/share/nginx/html\ntail /usr/share/nginx/html/index.html\nexit\n\n#This application listens on port 80, we'll forward from 8080->80\nkubectl port-forward multicontainer-pod 8080:80 &\ncurl http://localhost:8080\n\n#Kill our port-forward.\nfg\nctrl+c\n\nkubectl delete pod multicontainer-pod\n")))}d.isMDXComponent=!0}}]);