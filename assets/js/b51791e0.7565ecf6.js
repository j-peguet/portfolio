"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4517],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,y=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(y,l(l({ref:t},c),{},{components:n})):a.createElement(y,l({ref:t},c))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2555:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var a=n(7462),o=(n(7294),n(3905));const r={id:"8_3_Taints_&_Tolerations",title:"Taints and Tolerations"},l=void 0,i={unversionedId:"Kubernetes/kubernetes_storage_&_scheduling/8_3_Taints_&_Tolerations",id:"Kubernetes/kubernetes_storage_&_scheduling/8_3_Taints_&_Tolerations",title:"Taints and Tolerations",description:"* Taints - ability to control which Pods are scheduled to Nodes",source:"@site/docs/Kubernetes/3_kubernetes_storage_&_scheduling/8_3_Taints_&_Tolerations.md",sourceDirName:"Kubernetes/3_kubernetes_storage_&_scheduling",slug:"/Kubernetes/kubernetes_storage_&_scheduling/8_3_Taints_&_Tolerations",permalink:"/docs/Kubernetes/kubernetes_storage_&_scheduling/8_3_Taints_&_Tolerations",draft:!1,editUrl:"https://github.com/j-peguet/portfolio/blob/master/docs/Kubernetes/3_kubernetes_storage_&_scheduling/8_3_Taints_&_Tolerations.md",tags:[],version:"current",lastUpdatedAt:1676381131,formattedLastUpdatedAt:"Feb 14, 2023",frontMatter:{id:"8_3_Taints_&_Tolerations",title:"Taints and Tolerations"},sidebar:"docs",previous:{title:"Affinity & Anti-Affinity",permalink:"/docs/Kubernetes/kubernetes_storage_&_scheduling/8_2_Affinity_Anti-Affinity"},next:{title:"Node Cordoning",permalink:"/docs/Kubernetes/kubernetes_storage_&_scheduling/8_4_Node_Cordining"}},s={},d=[{value:"Adding a Taint to a Nodes and a Toleration to a Pod",id:"adding-a-taint-to-a-nodes-and-a-toleration-to-a-pod",level:2},{value:"Demo",id:"demo",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Taints - ability to control which Pods are scheduled to Nodes"),(0,o.kt)("li",{parentName:"ul"},"Tolerations - allows a Pod to ignore a Taint and be scheduled as normal on Tainted Nodes"),(0,o.kt)("li",{parentName:"ul"},"Useful in scenarios where the cluster administrator needs to influence scheduling without depending on the user",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"key=value:effect"),(0,o.kt)("li",{parentName:"ul"},"kubectl taint nodes c1-node1 key=MyTaint:NoSchedule"),(0,o.kt)("li",{parentName:"ul"},"They are two different parameters",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"PreferNoSchedule"),(0,o.kt)("li",{parentName:"ul"},"NoExecute")))))),(0,o.kt)("h2",{id:"adding-a-taint-to-a-nodes-and-a-toleration-to-a-pod"},"Adding a Taint to a Nodes and a Toleration to a Pod"),(0,o.kt)("p",null,"Assign a taint to a node"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl taint nodes c1-node1 key=MyTaint:NoSchedule\n")),(0,o.kt)("p",null,"Add a toleration to the pod"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'spec:\n    containers:\n    - name: hello-world\n      image: gcr.io/google-samples/hello-app:1.0\n      ports:\n      - containerPort: 8080\n    tolerations:\n    - key: "key"\n      operator: "Equal"\n      value: "MyTaint"\n      effect: "NoSchedule"\n')),(0,o.kt)("h2",{id:"demo"},"Demo"),(0,o.kt)("p",null,"Controlling Pods placement with Taints and Tolerations"),(0,o.kt)("p",null,"Create two files: deployment.yaml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: hello-world\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: hello-world\n  template:\n    metadata:\n      labels:\n        app: hello-world\n    spec:\n      containers:\n      - name: hello-world\n        image: gcr.io/google-samples/hello-app:1.0\n        ports:\n        - containerPort: 8080\n")),(0,o.kt)("p",null,"and deployment-tolerations.yaml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: hello-world-tolerations\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: hello-world-tolerations\n  template:\n    metadata:\n      labels:\n        app: hello-world-tolerations\n    spec:\n      containers:\n      - name: hello-world\n        image: gcr.io/google-samples/hello-app:1.0\n        ports:\n        - containerPort: 8080\n      tolerations:\n      - key: "key"\n        operator: "Equal"\n        value: "MyTaint"\n        effect: "NoSchedule"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"#Let's add a Taint to c1-node1\nkubectl taint nodes c1-node1 key=MyTaint:NoSchedule\n\n#We can see the taint at the node level, look at the Taints section\nkubectl describe node c1-node1\n\n#Let's create a deployment with three replicas\nkubectl apply -f deployment.yaml\n\n#We can see Pods get placed on the non tainted nodes\nkubectl get pods -o wide\n\n#But we we add a deployment with a Toleration...\nkubectl apply -f deployment-tolerations.yaml\n\n#We can see Pods get placed on the non tainted nodes\nkubectl get pods -o wide\n\n#Remove our Taint\nkubectl taint nodes c1-node1 key:NoSchedule-\n\n#Clean up after our demo\nkubectl delete -f deployment-tolerations.yaml\nkubectl delete -f deployment.yaml\n")))}u.isMDXComponent=!0}}]);