"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6049],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),g=o,m=p["".concat(i,".").concat(g)]||p[g]||d[g]||l;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7741:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=n(3117),o=n(102),l=(n(7294),n(3905)),a=["components"],s={id:"8_1_Node_Selector",title:"Node Selector"},i=void 0,c={unversionedId:"Kubernetes/kubernetes_storage_&_scheduling/8_1_Node_Selector",id:"Kubernetes/kubernetes_storage_&_scheduling/8_1_Node_Selector",title:"Node Selector",description:"Node selector make a scheduling decision to place a pod on a subset of nodes.",source:"@site/docs/Kubernetes/3_kubernetes_storage_&_scheduling/8_1_Node_Selector.md",sourceDirName:"Kubernetes/3_kubernetes_storage_&_scheduling",slug:"/Kubernetes/kubernetes_storage_&_scheduling/8_1_Node_Selector",permalink:"/docs/Kubernetes/kubernetes_storage_&_scheduling/8_1_Node_Selector",editUrl:"https://github.com/j-peguet/portfolio/blob/master/docs/Kubernetes/3_kubernetes_storage_&_scheduling/8_1_Node_Selector.md",tags:[],version:"current",frontMatter:{id:"8_1_Node_Selector",title:"Node Selector"},sidebar:"docs",previous:{title:"Control Scheduling",permalink:"/docs/Kubernetes/kubernetes_storage_&_scheduling/8_0_Control_scheduling"},next:{title:"Affinity & Anti-Affinity",permalink:"/docs/Kubernetes/kubernetes_storage_&_scheduling/8_2_Affinity_Anti-Affinity"}},u=[{value:"Scheduling",id:"scheduling",children:[],level:2},{value:"Assigning Pods to Nodes using Node Selectors",id:"assigning-pods-to-nodes-using-node-selectors",children:[],level:2}],d={toc:u};function p(e){var t=e.components,s=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Node selector make a scheduling decision to place a pod on a subset of nodes."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"nodeSelector - assign Pods to Nodes using Labels and Selectors"),(0,l.kt)("li",{parentName:"ul"},"Apply Labels to Nodes"),(0,l.kt)("li",{parentName:"ul"},"Scheduler will assign Pods a to a Node with a matching Label"),(0,l.kt)("li",{parentName:"ul"},"Simple key/value check based on matchLabels"),(0,l.kt)("li",{parentName:"ul"},"Often used to map Pods to Nodes based on...",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Special hardware requirements"),(0,l.kt)("li",{parentName:"ul"},"Workload isolation")))),(0,l.kt)("h2",{id:"scheduling"},"Scheduling"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Scheduling",src:n(2521).Z})),(0,l.kt)("p",null,"They are two Nodes, one with labels S and G, and one with just label S."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If I create a pod with label S, the pod is scheduled normally."),(0,l.kt)("li",{parentName:"ul"},"If I create a pod with label G, the pod is scheduled only is the first node"),(0,l.kt)("li",{parentName:"ul"},"If I create a pod with no label, the pod is scheduled normally"),(0,l.kt)("li",{parentName:"ul"},"If I create a pod with a label R, the pod is ",(0,l.kt)("strong",{parentName:"li"},"not")," scheduled and pending, because the label is a requirement spec in the pod")),(0,l.kt)("h2",{id:"assigning-pods-to-nodes-using-node-selectors"},"Assigning Pods to Nodes using Node Selectors"),(0,l.kt)("p",null,"They are two steps"),(0,l.kt)("p",null,"Assign a label to a node"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl label node c1-node2 hardware=local_gpu\n")),(0,l.kt)("p",null,"Inside the pod specs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n    containers:\n    - name: hello-world\n      image: gcr.io/google-samples/hello-app:1.0\n      ports:\n      - containerPort: 8080\n    nodeSelector:\n      hardware: local_gpu\n")),(0,l.kt)("h1",{id:"demo"},"Demo"),(0,l.kt)("p",null,"Checks ",(0,l.kt)("a",{parentName:"p",href:"/docs/Kubernetes/management_APIServer_&_Pod/5_2_Labels"},"labels")," for more information"))}p.isMDXComponent=!0},2521:function(e,t,n){t.Z=n.p+"assets/images/node_selector-c3159c0f61906bd5ceb1c7b95ecf97b4.png"}}]);