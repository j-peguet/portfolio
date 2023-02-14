"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7035],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>g});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=o.createContext({}),c=function(e){var n=o.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return o.createElement(u.Provider,{value:n},e.children)},i="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),i=c(t),m=r,g=i["".concat(u,".").concat(m)]||i[m]||p[m]||a;return t?o.createElement(g,l(l({ref:n},s),{},{components:t})):o.createElement(g,l({ref:n},s))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=m;var d={};for(var u in n)hasOwnProperty.call(n,u)&&(d[u]=n[u]);d.originalType=e,d[i]="string"==typeof e?e:r,l[1]=d;for(var c=2;c<a;c++)l[c]=t[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},832:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var o=t(7462),r=(t(7294),t(3905));const a={id:"8_5_Manually_Scheduling",title:"Manually Scheduling a Pod"},l=void 0,d={unversionedId:"Kubernetes/kubernetes_storage_&_scheduling/8_5_Manually_Scheduling",id:"Kubernetes/kubernetes_storage_&_scheduling/8_5_Manually_Scheduling",title:"Manually Scheduling a Pod",description:"In some scenario you need to manually schedule a pod",source:"@site/docs/Kubernetes/3_kubernetes_storage_&_scheduling/8_5_Manually_Scheduling.md",sourceDirName:"Kubernetes/3_kubernetes_storage_&_scheduling",slug:"/Kubernetes/kubernetes_storage_&_scheduling/8_5_Manually_Scheduling",permalink:"/docs/Kubernetes/kubernetes_storage_&_scheduling/8_5_Manually_Scheduling",draft:!1,editUrl:"https://github.com/j-peguet/portfolio/blob/master/docs/Kubernetes/3_kubernetes_storage_&_scheduling/8_5_Manually_Scheduling.md",tags:[],version:"current",lastUpdatedAt:1676381131,formattedLastUpdatedAt:"Feb 14, 2023",frontMatter:{id:"8_5_Manually_Scheduling",title:"Manually Scheduling a Pod"},sidebar:"docs",previous:{title:"Node Cordoning",permalink:"/docs/Kubernetes/kubernetes_storage_&_scheduling/8_4_Node_Cordining"},next:{title:"Kubernetes Advanced",permalink:"/docs/Kubernetes-Advanced"}},u={},c=[{value:"Demo",id:"demo",level:2}],s={toc:c},i="wrapper";function p(e){let{components:n,...t}=e;return(0,r.kt)(i,(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In some scenario you need to manually schedule a pod"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Scheduler populates nodeName"),(0,r.kt)("li",{parentName:"ul"},"If you specify nodeName in your Pod definition the Pod will be started on that node"),(0,r.kt)("li",{parentName:"ul"},"Node's name must exist"),(0,r.kt)("li",{parentName:"ul"},"Still subject to Node resource constraints")),(0,r.kt)("h2",{id:"demo"},"Demo"),(0,r.kt)("p",null,"Manually scheduling a Pod by specifying nodeName"),(0,r.kt)("p",null,"Create pod.yaml file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: hello-world-pod\nspec:\n  nodeName: 'c1-node1'\n  containers:\n  - name: hello-world\n    image: gcr.io/google-samples/hello-app:1.0\n    ports:\n    - containerPort: 8080\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f pod.yaml\n\n#Our Pod should be on c1-node1\nkubectl get pod -o wide\n\n#Let's delete our pod, since there's no controller it won't get recreated :(\nkubectl delete pod hello-world-pod \n\n#Now let's cordon node1 again\nkubectl cordon c1-node1\n\n#And try to recreate our pod\nkubectl apply -f pod.yaml\n\n#You can still place a pod on the node since the Pod isn't getting 'scheduled', status is SchedulingDisabled\n#Because we have specify the nodeName in the spec and bypass the scheduling process\nkubectl get pod -o wide\n\n#Can't remove the unmanaged Pod either since it's not managed by a Controller and won't get restarted in another node\nkubectl drain c1-node1 --ignore-daemonsets \n\n#Let's clean up our demo, delete our pod and uncordon the node\nkubectl delete pod hello-world-pod \n \n#Now let's uncordon node1 so it's able to have pods scheduled to it\nkubectl uncordon c1-node1\n")))}p.isMDXComponent=!0}}]);