"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7035],{3905:function(e,n,t){t.d(n,{Zo:function(){return i},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=r.createContext({}),c=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},i=function(e){var n=c(e.components);return r.createElement(d.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),p=c(t),m=o,g=p["".concat(d,".").concat(m)]||p[m]||s[m]||a;return t?r.createElement(g,l(l({ref:n},i),{},{components:t})):r.createElement(g,l({ref:n},i))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=p;var u={};for(var d in n)hasOwnProperty.call(n,d)&&(u[d]=n[d]);u.originalType=e,u.mdxType="string"==typeof e?e:o,l[1]=u;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},832:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return i},default:function(){return p}});var r=t(3117),o=t(102),a=(t(7294),t(3905)),l=["components"],u={id:"8_5_Manually_Scheduling",title:"Manually Scheduling a Pod"},d=void 0,c={unversionedId:"Kubernetes/kubernetes_storage_&_scheduling/8_5_Manually_Scheduling",id:"Kubernetes/kubernetes_storage_&_scheduling/8_5_Manually_Scheduling",title:"Manually Scheduling a Pod",description:"In some scenario you need to manually schedule a pod",source:"@site/docs/Kubernetes/3_kubernetes_storage_&_scheduling/8_5_Manually_Scheduling.md",sourceDirName:"Kubernetes/3_kubernetes_storage_&_scheduling",slug:"/Kubernetes/kubernetes_storage_&_scheduling/8_5_Manually_Scheduling",permalink:"/docs/Kubernetes/kubernetes_storage_&_scheduling/8_5_Manually_Scheduling",editUrl:"https://github.com/j-peguet/portfolio/blob/master/docs/Kubernetes/3_kubernetes_storage_&_scheduling/8_5_Manually_Scheduling.md",tags:[],version:"current",lastUpdatedAt:1613556017,formattedLastUpdatedAt:"2/17/2021",frontMatter:{id:"8_5_Manually_Scheduling",title:"Manually Scheduling a Pod"},sidebar:"docs",previous:{title:"Node Cordoning",permalink:"/docs/Kubernetes/kubernetes_storage_&_scheduling/8_4_Node_Cordining"},next:{title:"Kubernetes Advanced",permalink:"/docs/Kubernetes-Advanced"}},i=[{value:"Demo",id:"demo",children:[],level:2}],s={toc:i};function p(e){var n=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In some scenario you need to manually schedule a pod"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Scheduler populates nodeName"),(0,a.kt)("li",{parentName:"ul"},"If you specify nodeName in your Pod definition the Pod will be started on that node"),(0,a.kt)("li",{parentName:"ul"},"Node's name must exist"),(0,a.kt)("li",{parentName:"ul"},"Still subject to Node resource constraints")),(0,a.kt)("h2",{id:"demo"},"Demo"),(0,a.kt)("p",null,"Manually scheduling a Pod by specifying nodeName"),(0,a.kt)("p",null,"Create pod.yaml file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: hello-world-pod\nspec:\n  nodeName: 'c1-node1'\n  containers:\n  - name: hello-world\n    image: gcr.io/google-samples/hello-app:1.0\n    ports:\n    - containerPort: 8080\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f pod.yaml\n\n#Our Pod should be on c1-node1\nkubectl get pod -o wide\n\n#Let's delete our pod, since there's no controller it won't get recreated :(\nkubectl delete pod hello-world-pod \n\n#Now let's cordon node1 again\nkubectl cordon c1-node1\n\n#And try to recreate our pod\nkubectl apply -f pod.yaml\n\n#You can still place a pod on the node since the Pod isn't getting 'scheduled', status is SchedulingDisabled\n#Because we have specify the nodeName in the spec and bypass the scheduling process\nkubectl get pod -o wide\n\n#Can't remove the unmanaged Pod either since it's not managed by a Controller and won't get restarted in another node\nkubectl drain c1-node1 --ignore-daemonsets \n\n#Let's clean up our demo, delete our pod and uncordon the node\nkubectl delete pod hello-world-pod \n \n#Now let's uncordon node1 so it's able to have pods scheduled to it\nkubectl uncordon c1-node1\n")))}p.isMDXComponent=!0}}]);