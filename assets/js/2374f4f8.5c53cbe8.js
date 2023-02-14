"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6049],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),g=o,m=u["".concat(i,".").concat(g)]||u[g]||p[g]||l;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=g;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7741:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const l={id:"8_1_Node_Selector",title:"Node Selector"},a=void 0,s={unversionedId:"Kubernetes/kubernetes_storage_&_scheduling/8_1_Node_Selector",id:"Kubernetes/kubernetes_storage_&_scheduling/8_1_Node_Selector",title:"Node Selector",description:"Node selector make a scheduling decision to place a pod on a subset of nodes.",source:"@site/docs/Kubernetes/3_kubernetes_storage_&_scheduling/8_1_Node_Selector.md",sourceDirName:"Kubernetes/3_kubernetes_storage_&_scheduling",slug:"/Kubernetes/kubernetes_storage_&_scheduling/8_1_Node_Selector",permalink:"/docs/Kubernetes/kubernetes_storage_&_scheduling/8_1_Node_Selector",draft:!1,editUrl:"https://github.com/j-peguet/portfolio/blob/master/docs/Kubernetes/3_kubernetes_storage_&_scheduling/8_1_Node_Selector.md",tags:[],version:"current",lastUpdatedAt:1676381131,formattedLastUpdatedAt:"Feb 14, 2023",frontMatter:{id:"8_1_Node_Selector",title:"Node Selector"},sidebar:"docs",previous:{title:"Control Scheduling",permalink:"/docs/Kubernetes/kubernetes_storage_&_scheduling/8_0_Control_scheduling"},next:{title:"Affinity & Anti-Affinity",permalink:"/docs/Kubernetes/kubernetes_storage_&_scheduling/8_2_Affinity_Anti-Affinity"}},i={},c=[{value:"Scheduling",id:"scheduling",level:2},{value:"Assigning Pods to Nodes using Node Selectors",id:"assigning-pods-to-nodes-using-node-selectors",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...l}=e;return(0,o.kt)(u,(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Node selector make a scheduling decision to place a pod on a subset of nodes."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"nodeSelector - assign Pods to Nodes using Labels and Selectors"),(0,o.kt)("li",{parentName:"ul"},"Apply Labels to Nodes"),(0,o.kt)("li",{parentName:"ul"},"Scheduler will assign Pods a to a Node with a matching Label"),(0,o.kt)("li",{parentName:"ul"},"Simple key/value check based on matchLabels"),(0,o.kt)("li",{parentName:"ul"},"Often used to map Pods to Nodes based on...",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Special hardware requirements"),(0,o.kt)("li",{parentName:"ul"},"Workload isolation")))),(0,o.kt)("h2",{id:"scheduling"},"Scheduling"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Scheduling",src:n(5343).Z,width:"1697",height:"479"})),(0,o.kt)("p",null,"They are two Nodes, one with labels S and G, and one with just label S."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If I create a pod with label S, the pod is scheduled normally."),(0,o.kt)("li",{parentName:"ul"},"If I create a pod with label G, the pod is scheduled only is the first node"),(0,o.kt)("li",{parentName:"ul"},"If I create a pod with no label, the pod is scheduled normally"),(0,o.kt)("li",{parentName:"ul"},"If I create a pod with a label R, the pod is ",(0,o.kt)("strong",{parentName:"li"},"not")," scheduled and pending, because the label is a requirement spec in the pod")),(0,o.kt)("h2",{id:"assigning-pods-to-nodes-using-node-selectors"},"Assigning Pods to Nodes using Node Selectors"),(0,o.kt)("p",null,"They are two steps"),(0,o.kt)("p",null,"Assign a label to a node"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl label node c1-node2 hardware=local_gpu\n")),(0,o.kt)("p",null,"Inside the pod specs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n    containers:\n    - name: hello-world\n      image: gcr.io/google-samples/hello-app:1.0\n      ports:\n      - containerPort: 8080\n    nodeSelector:\n      hardware: local_gpu\n")),(0,o.kt)("h1",{id:"demo"},"Demo"),(0,o.kt)("p",null,"Checks ",(0,o.kt)("a",{parentName:"p",href:"/docs/Kubernetes/management_APIServer_&_Pod/5_2_Labels"},"labels")," for more information"))}p.isMDXComponent=!0},5343:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/node_selector-c3159c0f61906bd5ceb1c7b95ecf97b4.png"}}]);