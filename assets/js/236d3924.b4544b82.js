"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7612],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},i="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),i=c(n),m=r,h=i["".concat(u,".").concat(m)]||i[m]||d[m]||o;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[i]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2401:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={id:"4_API_Request",title:"API Request"},l=void 0,s={unversionedId:"Kubernetes/management_APIServer_&_Pod/4_API_Request",id:"Kubernetes/management_APIServer_&_Pod/4_API_Request",title:"API Request",description:"L'API Server de Kubernetes est une API Rest, ce qui veux dire que chaque commande kubectl est converti en requ\xeate.",source:"@site/docs/Kubernetes/2_management_APIServer_&_Pod/4_API_Request.md",sourceDirName:"Kubernetes/2_management_APIServer_&_Pod",slug:"/Kubernetes/management_APIServer_&_Pod/4_API_Request",permalink:"/docs/Kubernetes/management_APIServer_&_Pod/4_API_Request",draft:!1,editUrl:"https://github.com/j-peguet/portfolio/blob/master/docs/Kubernetes/2_management_APIServer_&_Pod/4_API_Request.md",tags:[],version:"current",lastUpdatedAt:1676381131,formattedLastUpdatedAt:"Feb 14, 2023",sidebarPosition:4,frontMatter:{id:"4_API_Request",title:"API Request"},sidebar:"docs",previous:{title:"API Version",permalink:"/docs/Kubernetes/management_APIServer_&_Pod/3_API_Version"},next:{title:"Organizing Objects in Kubernetes",permalink:"/docs/Kubernetes/management_APIServer_&_Pod/5_0_Organizing_Objects"}},u={},c=[{value:"API Resource Location (API Paths)",id:"api-resource-location-api-paths",level:2},{value:"Core API (Legacy)",id:"core-api-legacy",level:3},{value:"API Groups",id:"api-groups",level:3},{value:"API Responde Code",id:"api-responde-code",level:2},{value:"Contenue d&#39;une requ\xeate HTTP avec l&#39;API Server",id:"contenue-dune-requ\xeate-http-avec-lapi-server",level:2},{value:"Command",id:"command",level:2},{value:"Watch",id:"watch",level:3},{value:"Logs",id:"logs",level:3},{value:"Authentication failure",id:"authentication-failure",level:3}],p={toc:c},i="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(i,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"L'API Server de Kubernetes est une API Rest, ce qui veux dire que chaque commande kubectl est converti en requ\xeate."),(0,r.kt)("p",null,"Cela veux \xe9galement dire, que n'importe quel client HTTP peux communiquer avec l'API Server (curl, POSTMAN). Pratique pour d\xe9velopper son propre outil."),(0,r.kt)("p",null,"L'API Server dispose des VERB HTTP:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GET"),(0,r.kt)("li",{parentName:"ul"},"POST"),(0,r.kt)("li",{parentName:"ul"},"PUT"),(0,r.kt)("li",{parentName:"ul"},"PATCH"),(0,r.kt)("li",{parentName:"ul"},"DELETE")),(0,r.kt)("p",null,"Mais \xe9galement de requ\xeate sp\xe9ciales:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"LOG"),(0,r.kt)("li",{parentName:"ul"},"EXEC"),(0,r.kt)("li",{parentName:"ul"},"WATCH")),(0,r.kt)("h2",{id:"api-resource-location-api-paths"},"API Resource Location (API Paths)"),(0,r.kt)("p",null,"Lien g\xe9n\xe9rique permettant de trouver l'emplacement d'une ressource."),(0,r.kt)("h3",{id:"core-api-legacy"},"Core API (Legacy)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"http://apiserver:port/api/$VERSION/$RESOURCE_TYPE\nhttp://apiserver:port/api/$VERSION/namespaces/$NAMESPACE/$RESOURCE_TYPE/$RESOURCE_NAME\n")),(0,r.kt)("h3",{id:"api-groups"},"API Groups"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"http://apiserver:port/apis/$GROUPNAME/$VERSION/$RESOURCE_TYPE\nhttp://apiserver:port/apis/$GROUPNAME/$VERSION/namespaces/$NAMESPACE/$RESOURCE_TYPE/$RESOURCE_NAME\n")),(0,r.kt)("h2",{id:"api-responde-code"},"API Responde Code"),(0,r.kt)("p",null,"Code HTTP de r\xe9ponse (classique, un coup de refresh n'est jamais de trop)"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"response-code",src:n(1622).Z,width:"1358",height:"620"})),(0,r.kt)("h2",{id:"contenue-dune-requ\xeate-http-avec-lapi-server"},"Contenue d'une requ\xeate HTTP avec l'API Server"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"api-request",src:n(6521).Z,width:"1480",height:"744"})),(0,r.kt)("h2",{id:"command"},"Command"),(0,r.kt)("p",null,"Pour tester les requ\xeate HTTP il faut d'abord cr\xe9er un pod."),(0,r.kt)("p",null,'Cr\xe9er le fichier suivant nomm\xe9 "pod.yaml"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: hello-world\nspec:\n  containers:\n  - name: hello-world\n    image: gcr.io/google-samples/hello-app:1.0\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"#Creating the pod from the pod.yaml file\nkubectl apply -f pod.yaml\n# Get a list of our currently running pod\nkubectl get pod hello-world\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"#Increase the verbosity\n#Display requested resource URL. Focus on VERB, API Path and Response code\nkubectl get pod hello-world -v 6\n\n#Same output as 6, add HTTP Request Headers. Focus on application type, and User-Agent\nkubectl get pod hello-world -v 7 \n\n#Same output as 7, adds Response Headers and truncated Response Body.\nkubectl get pod hello-world -v 8 \n\n#Same output as 8, add full Response. Focus on the bottom, look for metadata\nkubectl get pod hello-world -v 9 \n")),(0,r.kt)("p",null,"Testons avec la requ\xeate CURL."),(0,r.kt)("p",null,'Mais pour que la requ\xeate aboutisse il faut \xeatre authentifi\xe9, pour cela ont ajoute la commande "kubectl proxy", afin de la contourner.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'#Create a proxy with a unused port, and add the path of our API "/api/v1/namespaces/default/pods/hello-world"\nkubectl proxy --port=8081 & \ncurl -k http://localhost:8081/api/v1/namespaces/default/pods/hello-world\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"watch pods",src:n(71).Z,width:"1574",height:"170"})),(0,r.kt)("h3",{id:"watch"},"Watch"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"#A watch on Pods will watch on the resourceVersion on api/v1/namespaces/default/Pods\nkubectl get pods --watch -v 6 &\n\n#We can see kubectl keeps the TCP session open with the server...waiting for data.\nnetstat -plant | grep kubectl\n\n#Delete the pod and we see the updates are written to our stdout. Watch stays, since we're watching All Pods in the default namespace.\nkubectl delete pods hello-world\n\n#But let's bring our Pod back\nkubectl apply -f pod.yaml\n\n#And kill off our watch\nfg\nctrl+c\n")),(0,r.kt)("h3",{id:"logs"},"Logs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"#Accessing logs\nkubectl logs hello-world\nkubectl logs hello-world -v 6\n\n#Start kubectl proxy, we can access the resource URL directly.\nkubectl proxy --port=8081 &\ncurl http://localhost:8081/api/v1/namespaces/default/pods/hello-world/log \n\n#Kill our kubectl proxy, fg then ctrl+c\nfg\nctrl+c\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"watch logs",src:n(4860).Z,width:"672",height:"133"})),(0,r.kt)("h3",{id:"authentication-failure"},"Authentication failure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"#Authentication failure Demo\ncp ~/.kube/config  ~/.kube/config.ORIG\n\n#Make an edit to our username changing user: kubernetes-admin to user: kubernetes-admin\nvi ~/.kube/config\n\n#Try to access our cluster, and we see GET https://172.16.94.10:6443/api?timeout=32s 403 Forbidden in 5 milliseconds\n#enter in incorrect information for username and password\nkubectl get pods -v 6\n\n#Let's put our backup kubeconfig back\ncp ~/.kube/config.ORIG ~/.kube/config\n\n#Test out access to the API Server\nkubectl get pods \n\n#Missing resources, we can see the response code for this resources is 404...it's Not Found.\nkubectl get pods nginx-pod -v 6\n\n#Let's look at creating and deleting a deployment. \n#We see a query for the existence of the deployment which results in a 404, then a 201 OK on the POST to create the deployment which suceeds.\nkubectl apply -f deployment.yaml -v 6\n\n#Get a list of the Deployments\nkubectl get deployment \n\n#Clean up when we're finished. We see a DELETE 200 OK and a GET 200 OK.\nkubectl delete deployment hello-world -v 6\nkubectl delete pod hello-world\n")))}d.isMDXComponent=!0},6521:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/API_Request-11f8d06d3a11128d37dc0e7378c39883.png"},1622:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/response_code-2a622b5eb570fc38cbe06655830a9472.png"},4860:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/watch_log-ed5a77a06f9bf74bf51b599b9953b1ba.png"},71:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/watch_pods-d721000a676d76fc72a1c2b88dbabeaf.png"}}]);