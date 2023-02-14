"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6088],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,b=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(b,l(l({ref:t},c),{},{components:n})):r.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9764:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={id:"3_API_Version",title:"API Version"},l=void 0,s={unversionedId:"Kubernetes/management_APIServer_&_Pod/3_API_Version",id:"Kubernetes/management_APIServer_&_Pod/3_API_Version",title:"API Version",description:"* API is versioned",source:"@site/docs/Kubernetes/2_management_APIServer_&_Pod/3_API_Version.md",sourceDirName:"Kubernetes/2_management_APIServer_&_Pod",slug:"/Kubernetes/management_APIServer_&_Pod/3_API_Version",permalink:"/docs/Kubernetes/management_APIServer_&_Pod/3_API_Version",draft:!1,editUrl:"https://github.com/j-peguet/portfolio/blob/master/docs/Kubernetes/2_management_APIServer_&_Pod/3_API_Version.md",tags:[],version:"current",lastUpdatedAt:1676381131,formattedLastUpdatedAt:"Feb 14, 2023",sidebarPosition:3,frontMatter:{id:"3_API_Version",title:"API Version"},sidebar:"docs",previous:{title:"API Groups",permalink:"/docs/Kubernetes/management_APIServer_&_Pod/2_API_Groups"},next:{title:"API Request",permalink:"/docs/Kubernetes/management_APIServer_&_Pod/4_API_Request"}},i={},p=[{value:"Commands",id:"commands",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(m,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"API is versioned"),(0,a.kt)("li",{parentName:"ul"},"Provide stability for existing implementations"),(0,a.kt)("li",{parentName:"ul"},"Enable forward change"),(0,a.kt)("li",{parentName:"ul"},"Alpha -> Beta -> Stable"),(0,a.kt)("li",{parentName:"ul"},"No direct relation to release versions")),(0,a.kt)("p",null,"Evolution of an API version\n",(0,a.kt)("img",{alt:"api-version",src:n(9118).Z,width:"1355",height:"618"})),(0,a.kt)("h2",{id:"commands"},"Commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"#Get the list of the API resources\nkubectl api-resources\n#Filter on a specific group\nkubectl api-resources --api-group=apps\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"api-group-app",src:n(4679).Z,width:"699",height:"153"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"#Explain command get more information for a specific API Object\n#Check out KIND and VERSION\n#If VERSION = extensions/v1beta1, the API Group is deprecated\nkubectl explain deployment | head\n#Get the API Group in a specific version\nkubectl explain deployment --api-version apps/v1 | head\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"api-version deployment",src:n(4892).Z,width:"704",height:"230"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"#Print the supported API versions on the API Server\nkubectl api-versions | sort | more\n")),(0,a.kt)("p",null,"Cr\xe9er un fichier sur le serveur deployment.yaml et mettez ceci"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: hello-world\n  labels:\n    app: hello-world\nspec:\n  replicas: 4\n  selector:\n    matchLabels:\n      app: hello-world\n  template:\n    metadata:\n      labels:\n        app: hello-world\n    spec:\n      containers:\n      - name: hello-world\n        image: gcr.io/google-samples/hello-app:1.0\n        ports:\n        - containerPort: 8080\n")),(0,a.kt)("p",null,"Nous d\xe9ployons le fichier"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f deployment.yaml\n#Let observ the result\nkubectl get deployments.apps hello-world -o yaml | head\n")),(0,a.kt)("p",null,'La version du d\xe9ploiement est "apps/v1"'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"api-version deployment",src:n(5190).Z,width:"686",height:"113"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"#Let's clean up after this demo\nkubectl delete deployment hello-world\n")))}u.isMDXComponent=!0},4679:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/api_group_apps-153fbde5e707ff5582c991e0562e6e85.png"},9118:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/api_version-94328cc0209dacd1b2e466f4ee797742.png"},5190:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/api_version_deployment-efb435199541b29d3f2d6ebd0fde1c32.png"},4892:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/api_version_deployment_version-4dfebadfc9fc27edfb219b7a288cb87a.png"}}]);