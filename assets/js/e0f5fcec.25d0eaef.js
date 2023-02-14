"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[229],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,b=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(b,o(o({ref:t},c),{},{components:n})):a.createElement(b,o({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},987:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={id:"5_1_Env_variables",title:"Environment Variables"},o=void 0,i={unversionedId:"Kubernetes/kubernetes_storage_&_scheduling/5_1_Env_variables",id:"Kubernetes/kubernetes_storage_&_scheduling/5_1_Env_variables",title:"Environment Variables",description:"They are two types of environment variables",source:"@site/docs/Kubernetes/3_kubernetes_storage_&_scheduling/5_1_Env_variables.md",sourceDirName:"Kubernetes/3_kubernetes_storage_&_scheduling",slug:"/Kubernetes/kubernetes_storage_&_scheduling/5_1_Env_variables",permalink:"/docs/Kubernetes/kubernetes_storage_&_scheduling/5_1_Env_variables",draft:!1,editUrl:"https://github.com/j-peguet/portfolio/blob/master/docs/Kubernetes/3_kubernetes_storage_&_scheduling/5_1_Env_variables.md",tags:[],version:"current",lastUpdatedAt:1676381131,formattedLastUpdatedAt:"Feb 14, 2023",frontMatter:{id:"5_1_Env_variables",title:"Environment Variables"},sidebar:"docs",previous:{title:"Why did we need Configuration as Data ?",permalink:"/docs/Kubernetes/kubernetes_storage_&_scheduling/5_0_Pods_with_env"},next:{title:"Secrets",permalink:"/docs/Kubernetes/kubernetes_storage_&_scheduling/5_2_Secrets"}},s={},p=[{value:"Defining Environment Variables",id:"defining-environment-variables",level:2},{value:"Demo",id:"demo",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"They are two types of environment variables"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"User Defined",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Pod Spec for each container"),(0,r.kt)("li",{parentName:"ul"},"Defined inside the container image"),(0,r.kt)("li",{parentName:"ul"},"Defined in name/value or valueFrom"))),(0,r.kt)("li",{parentName:"ul"},"System Defined",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Names of all Services available at the time the Pod was created"),(0,r.kt)("li",{parentName:"ul"},"Defined at container startup"),(0,r.kt)("li",{parentName:"ul"},"They can't be updated once the Pod is created")))),(0,r.kt)("h2",{id:"defining-environment-variables"},"Defining Environment Variables"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'spec:\n    containers:\n    - name: hello-world\n      image: gcr.io/google-samples/hello-app:1.0\n      env:\n      - name: DATABASE_SERVERNAME\n        value: "sql.example.local"\n      - name: BACKEND_SERVERNAME\n        value: \u201cbe.example.local"\n')),(0,r.kt)("h2",{id:"demo"},"Demo"),(0,r.kt)("p",null,"Passing environments variables in our containers\nLet's create 2 files deployment-alpha.yaml & deployment-beta.yaml (replace only alpha by beta)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: hello-world-alpha\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: hello-world-alpha\n  template:\n    metadata:\n      labels:\n        app: hello-world-alpha\n    spec:\n      containers:\n      - name: hello-world\n        image: gcr.io/google-samples/hello-app:1.0\n        env:\n        - name: DATABASE_SERVERNAME\n          value: "sql.example.local"\n        - name: BACKEND_SERVERNAME\n          value: "be.example.local"\n        ports:\n        - containerPort: 8080\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: hello-world-alpha\nspec:\n  selector:\n    app: hello-world-alpha\n  ports:\n    - protocol: TCP\n      port: 80\n      targetPort: 8080\n  type: ClusterIP\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"#Create two deployments, one for a database system and the other our application.\n#I'm putting a little wait in there so the Pods are created one after the other.\nkubectl apply -f deployment-alpha.yaml\nsleep 5\nkubectl apply -f deployment-beta.yaml\n\n#Let's look at the services\nkubectl get service\n")),(0,r.kt)("p",null,"Create a local variables with the name of the Pod"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"#Now let's get the name of one of our pods\nPODNAME=$(kubectl get pods | grep hello-world-alpha | awk '{print $1}' | head -n 1)\necho $PODNAME\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"#Inside the Pod, let's read the enviroment variables from our container\n#Notice the alpha information is there but not the beta information. Since beta wasn't defined when the Pod started.\nkubectl exec -it $PODNAME -- /bin/sh \nprintenv | sort\nexit\n\n#If you delete the pod and it gets recreated, you will get the variables for the alpha and beta service information.\nkubectl delete pod $PODNAME\n\n#Get the new pod name and check the environment variables...the variables are define at Pod/Container startup.\nPODNAME=$(kubectl get pods | grep hello-world-alpha | awk '{print $1}' | head -n 1)\nkubectl exec -it $PODNAME -- /bin/sh -c \"printenv | sort\"\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'#If we delete our service and deployment \nkubectl delete deployment hello-world-beta\nkubectl delete service hello-world-beta\n\n#The enviroment variables stick around...to get a new set, the pod needs to be recreated.\nkubectl exec -it $PODNAME -- /bin/sh -c "printenv | sort"\n\n#Let\'s clean up after our demo\nkubectl delete -f deployment-alpha.yaml\n')))}d.isMDXComponent=!0}}]);