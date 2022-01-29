"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3546],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),i=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=i(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=i(t),m=o,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return t?r.createElement(g,l(l({ref:n},p),{},{components:t})):r.createElement(g,l({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=u;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var i=2;i<a;i++)l[i]=t[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9759:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return i},toc:function(){return p},default:function(){return u}});var r=t(3117),o=t(102),a=(t(7294),t(3905)),l=["components"],c={id:"6_1_Single_Pods",title:"Single container Pods"},s=void 0,i={unversionedId:"Kubernetes/management_APIServer_&_Pod/6_1_Single_Pods",id:"Kubernetes/management_APIServer_&_Pod/6_1_Single_Pods",title:"Single container Pods",description:"Commands",source:"@site/docs/Kubernetes/2_management_APIServer_&_Pod/6_1_Single_Pods.md",sourceDirName:"Kubernetes/2_management_APIServer_&_Pod",slug:"/Kubernetes/management_APIServer_&_Pod/6_1_Single_Pods",permalink:"/docs/Kubernetes/management_APIServer_&_Pod/6_1_Single_Pods",editUrl:"https://github.com/j-peguet/portfolio/blob/master/docs/Kubernetes/2_management_APIServer_&_Pod/6_1_Single_Pods.md",tags:[],version:"current",lastUpdatedAt:1613556017,formattedLastUpdatedAt:"2/17/2021",frontMatter:{id:"6_1_Single_Pods",title:"Single container Pods"},sidebar:"docs",previous:{title:"What is a pod ?",permalink:"/docs/Kubernetes/management_APIServer_&_Pod/6_0_Pods"},next:{title:"Multi-Containers Pods",permalink:"/docs/Kubernetes/management_APIServer_&_Pod/6_2_Multi_Pods"}},p=[{value:"Commands",id:"commands",children:[],level:2}],d={toc:p};function u(e){var n=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"commands"},"Commands"),(0,a.kt)("p",null,"2 files are necessary:"),(0,a.kt)("p",null,"pod.yaml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: hello-world-pod\nspec:\n  containers:\n  - name: hello-world\n    image: gcr.io/google-samples/hello-app:1.0\n    ports:\n    - containerPort: 80\n")),(0,a.kt)("p",null,"and deployment.yaml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: hello-world\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: hello-world\n  template:\n    metadata:\n      labels:\n        app: hello-world\n    spec:\n      containers:\n      - name: hello-world\n        image: gcr.io/google-samples/hello-app:1.0\n        ports:\n        - containerPort: 8080\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"#Start up kubectl get events --watch and background it.\nkubectl get events --watch &\n\n#Create a pod...we can see the scheduling, container pulling and container starting.\nkubectl apply -f pod.yaml\n\n#Start a Deployment with 1 replica. We see the deployment created, scaling the replica set and the replica set starting the first pod\nkubectl apply -f deployment.yaml\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"#Scale a Deployment to 2 replicas. We see the scaling the replica set and the replica set starting the second pod\nkubectl scale deployment hello-world --replicas=2\n\n#We start off with the replica set scaling to 1, then  Pod deletion, then the Pod killing the container \nkubectl scale deployment hello-world --replicas=1\n\nkubectl get pods\n\n#Let's use exec a command inside our container, we can see the GET and POST API requests through the API server to reach the pod.\nkubectl -v 6 exec -it PASTE_POD_NAME_HERE -- /bin/sh\nps\nexit\n\n#Let's look at the running container/pod from the process level on a Node.\nkubectl get pods -o wide\nssh aen@c1-node2\nps -aux | grep hello-app\nexit\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"#Now, let's access our Pod's application directly, without a service and also off the Pod network.\nkubectl port-forward PASTE_POD_NAME_HERE 80:8080\n\n#Let's do it again, but this time with a non-priviledged port\nkubectl port-forward PASTE_POD_NAME_HERE 8080:8080 &\n\n#We can point curl to localhost, and kubectl port-forward will send the traffic through the API server to the Pod\ncurl http://localhost:8080\n\n#Kill our port forward session.\nfg\nctrl+c\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete deployment hello-world\nkubectl delete pod hello-world-pod\n\n#Kill off the kubectl get events\nfg\nctrl+c\n")))}u.isMDXComponent=!0}}]);