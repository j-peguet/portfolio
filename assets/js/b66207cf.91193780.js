"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4039],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4513:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={id:"6_0_Pods",title:"What is a pod ?"},l=void 0,i={unversionedId:"Kubernetes/management_APIServer_&_Pod/6_0_Pods",id:"Kubernetes/management_APIServer_&_Pod/6_0_Pods",title:"What is a pod ?",description:"what pod",source:"@site/docs/Kubernetes/2_management_APIServer_&_Pod/6_0_Pods.md",sourceDirName:"Kubernetes/2_management_APIServer_&_Pod",slug:"/Kubernetes/management_APIServer_&_Pod/6_0_Pods",permalink:"/docs/Kubernetes/management_APIServer_&_Pod/6_0_Pods",draft:!1,editUrl:"https://github.com/j-peguet/portfolio/blob/master/docs/Kubernetes/2_management_APIServer_&_Pod/6_0_Pods.md",tags:[],version:"current",lastUpdatedAt:1676381131,formattedLastUpdatedAt:"Feb 14, 2023",frontMatter:{id:"6_0_Pods",title:"What is a pod ?"},sidebar:"docs",previous:{title:"Annotations",permalink:"/docs/Kubernetes/management_APIServer_&_Pod/5_3_Annotations"},next:{title:"Single container Pods",permalink:"/docs/Kubernetes/management_APIServer_&_Pod/6_1_Single_Pods"}},s={},p=[{value:"Comment les pods manipules les conteneurs",id:"comment-les-pods-manipules-les-conteneurs",level:2},{value:"Relationship between Controllers and Pods",id:"relationship-between-controllers-and-pods",level:2},{value:"Working with Pods - kubectl",id:"working-with-pods---kubectl",level:3},{value:"Common anti-pattern for multi-container Pods",id:"common-anti-pattern-for-multi-container-pods",level:2},{value:"Shared Resources Inside a Pod",id:"shared-resources-inside-a-pod",level:2},{value:"Networking",id:"networking",level:3},{value:"Storage",id:"storage",level:3},{value:"Pod Lifecycle",id:"pod-lifecycle",level:2},{value:"Stopping/Terminating Pods",id:"stoppingterminating-pods",level:2},{value:"Persistency of Pods",id:"persistency-of-pods",level:2},{value:"Container Restart Policy",id:"container-restart-policy",level:2},{value:"Commands",id:"commands",level:2},{value:"Defining Pod Health",id:"defining-pod-health",level:2},{value:"What type of checks ?",id:"what-type-of-checks-",level:3},{value:"Configure Container Probes",id:"configure-container-probes",level:3},{value:"livenessProbe",id:"livenessprobe",level:3},{value:"readinessProbe",id:"readinessprobe",level:3},{value:"Commands",id:"commands-1",level:3}],d={toc:p},u="wrapper";function c(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"what pod",src:n(9359).Z,width:"978",height:"370"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Unit of scheduling"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Allocating work - by the scheduler in the node"),(0,o.kt)("li",{parentName:"ul"},"A process that\u2019s running in your cluster - when is up and consuming resources"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Unit of deployment"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Inside your application configuration"),(0,o.kt)("li",{parentName:"ul"},"Resources associated - Networking and Storage")))),(0,o.kt)("p",null,"Le pod permet une abstraction par dessus le management des conteneurs (au niveau de la configuration des resources et du r\xe9seau)."),(0,o.kt)("h2",{id:"comment-les-pods-manipules-les-conteneurs"},"Comment les pods manipules les conteneurs"),(0,o.kt)("p",null,"Deux grandes familles:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/Kubernetes/management_APIServer_&_Pod/6_1_Single_Pods"},"Single Container Pods"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Single application inside a container deployed in our cluster"),(0,o.kt)("li",{parentName:"ul"},"Most common deployment"),(0,o.kt)("li",{parentName:"ul"},"Generally a single process running in a container"),(0,o.kt)("li",{parentName:"ul"},"Often leads to easier application scaling"),(0,o.kt)("li",{parentName:"ul"},'"Is a pod running a container running a single process on a node in our cluster"'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/Kubernetes/management_APIServer_&_Pod/6_2_Multi_Pods"},"Multi-containers Pods"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"More than one container wrapped up in a pod"),(0,o.kt)("li",{parentName:"ul"},"For very tightly coupled applications - producer/ consumer relationship"),(0,o.kt)("li",{parentName:"ul"},"Scheduling processes together"),(0,o.kt)("li",{parentName:"ul"},"Requirement on some shared resource"),(0,o.kt)("li",{parentName:"ul"},"Usually something generating data while the other process consumes"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Don\u2019t")," use this to influence scheduling, we use other techniques for that! (labels, node selector)")))),(0,o.kt)("h2",{id:"relationship-between-controllers-and-pods"},"Relationship between Controllers and Pods"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Controllers have the responsability to keep your apps in the desired state"),(0,o.kt)("li",{parentName:"ul"},"Responsible for starting and stopping Pods - based on configuration"),(0,o.kt)("li",{parentName:"ul"},"Application scaling - if you have the resources"),(0,o.kt)("li",{parentName:"ul"},"Application recovery - if a pod goes offline or becomes unavailable, Kubernetes make sure you have the correct number of pods up and running"),(0,o.kt)("li",{parentName:"ul"},"You ",(0,o.kt)("strong",{parentName:"li"},"DON'T")," want to run bare/naked Pods - bare/naked pod, is a pod deployed without controller (deployment, replica set, deamon set, etc...)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Because they won\u2019t be recreated in the event of a failure")))),(0,o.kt)("h3",{id:"working-with-pods---kubectl"},"Working with Pods - kubectl"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl exec -it POD1 --container CONTAINER1 -- /bin/bash\nkubectl port-forward pod POD1 LOCALPORT:CONTAINERPORT\n")),(0,o.kt)("h2",{id:"common-anti-pattern-for-multi-container-pods"},"Common anti-pattern for multi-container Pods"),(0,o.kt)("p",null,"Attention lors de la cr\xe9ation d'un pods avec plusieurs conteneurs."),(0,o.kt)("p",null,"Nous ne voulons pas d'un Pod avec un conteneur web & DB."),(0,o.kt)("p",null,"Cela peut para\xeetre une bonne id\xe9e (\xe9change de donn\xe9e rapide). Mais cela pose de 2 soucis majeurs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"R\xe9cup\xe9ration - Si un pod meurs quels sont mes choix entre un service web stateless et une bdd statefull, quel controller utiliser ?"),(0,o.kt)("li",{parentName:"ul"},"Limits Scaling - comme les conteneurs sont li\xe9s si j'ai besoin uniquement d'un serveur web en plus, une BDD sera \xe9galement d\xe9ploy\xe9e.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"multi-container Pods",src:n(2029).Z,width:"373",height:"391"})),(0,o.kt)("h2",{id:"shared-resources-inside-a-pod"},"Shared Resources Inside a Pod"),(0,o.kt)("h3",{id:"networking"},"Networking"),(0,o.kt)("p",null,"Containers in a pod share the same Linux operating system-level namespace. This isn't the same Kubernetes namespace. Since they share the same network namespace, to be able to communicate with each other."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Shared loopback interface, used for communication over localhost"),(0,o.kt)("li",{parentName:"ul"},"Be mindful of application port conflicts")),(0,o.kt)("h3",{id:"storage"},"Storage"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Each container image has it\u2019s own file system"),(0,o.kt)("li",{parentName:"ul"},"Volumes are defined at the Pod level"),(0,o.kt)("li",{parentName:"ul"},"Shared amongst the containers in a Pod"),(0,o.kt)("li",{parentName:"ul"},"Mounted into the containers\u2019 file system"),(0,o.kt)("li",{parentName:"ul"},"Common way for containers to exchange data")),(0,o.kt)("h2",{id:"pod-lifecycle"},"Pod Lifecycle"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Pod lifecycle",src:n(7733).Z,width:"1195",height:"561"})),(0,o.kt)("h2",{id:"stoppingterminating-pods"},"Stopping/Terminating Pods"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Stopping/Terminating Pods",src:n(9618).Z,width:"1169",height:"360"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"#Change the grace-period for a specific pod\nkubectl delete pod --grace-period=<second>\n")),(0,o.kt)("p",null,"In some scenarios where you might need to specify the force deletion of a pod, which immediately delete the records in the API Server and etcd. It might not be able to shut down the actual application itself. The value of this is by ripping out the metadata about the pod resource that's up and running is that, well, you've kind of abandoned that pod, deleted the metadata, but you can now go and recreate that pod if you needed it to be the same name. Otherwise you have a naming conflict and this pod kind of hanging on that you conldn't delete."),(0,o.kt)("p",null,"So, forced deletion deletes the metadata. It might leave that process up running, so you will have to go clean that up if it didn't clean itself up."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Force deletion - Immediately deletes records in API an etcd\nkubectl delete pod --grace-period=0 --force\n")),(0,o.kt)("h2",{id:"persistency-of-pods"},"Persistency of Pods"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A Pod is never redeployed"),(0,o.kt)("li",{parentName:"ul"},"If a Pod stops, a new one is created based on its Controller - no state transition between the previous execution"),(0,o.kt)("li",{parentName:"ul"},"Go back to the original container image(s) in the Pod definition")),(0,o.kt)("p",null,"How do we deal with things like application configuration or application statefull ?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Configuration is managed externally",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Pod Manifests, secrets and ConfigMaps - Passwords, connexionStrings \u27a1\ufe0f stored in the cluster"),(0,o.kt)("li",{parentName:"ul"},"Passing environment variables into containers"))),(0,o.kt)("li",{parentName:"ul"},"Data Persistency is managed externally",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"PersistentVolume"),(0,o.kt)("li",{parentName:"ul"},"PersistentVolumeClaim")))),(0,o.kt)("h2",{id:"container-restart-policy"},"Container Restart Policy"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A container in a Pod can restart independent of the Pod"),(0,o.kt)("li",{parentName:"ul"},"Applies to containers inside a Pod and defined inside the Pod\u2019s Spec"),(0,o.kt)("li",{parentName:"ul"},"The Pod is the environment the container runs in"),(0,o.kt)("li",{parentName:"ul"},"Not rescheduled to another Node, but restarted by the Kubelet on that Node"),(0,o.kt)("li",{parentName:"ul"},"Restarts with an exponential backoff, 10s, 20s, 40s capped at 5m and reset to 0 after 10m of successful runtime")),(0,o.kt)("p",null,"Containers restart policy has 3 different configuration:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Always (default) - will restart all containers inside a Pod"),(0,o.kt)("li",{parentName:"ul"},"OnFailure - Non-graceful termination"),(0,o.kt)("li",{parentName:"ul"},"Never")),(0,o.kt)("p",null,"How to configure it"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx-pod\nspec:\n  containers:\n  - name: nginx\n    image: nginx\n  restartPolicy: OnFailure\n")),(0,o.kt)("h2",{id:"commands"},"Commands"),(0,o.kt)("p",null,"Let's create a file nammed 'pod.yaml'"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: hello-world-pod\nspec:\n  containers:\n  - name: hello-world\n    image: gcr.io/google-samples/hello-app:1.0\n    ports:\n    - containerPort: 80\n")),(0,o.kt)("p",null,"and 'pod-restart-policy.yaml'"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: hello-world-onfailure-pod\nspec:\n  containers:\n  - name: hello-world\n    image: gcr.io/google-samples/hello-app:1.0\n  restartPolicy: OnFailure\n---\napiVersion: v1\nkind: Pod\nmetadata:\n  name: hello-world-never-pod\nspec:\n  containers:\n  - name: hello-world\n    image: gcr.io/google-samples/hello-app:1.0\n  restartPolicy: Never\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"#Start up kubectl get events --watch and background it.\nkubectl get events --watch &\nclear\n\n#Create a pod...we can see the scheduling, container pulling and container starting.\nkubectl apply -f pod.yaml\n\n#We've used exec to launch a shell before, but we can use it to launch ANY program inside a container.\n#Let's use killall to kill the hello-app process inside our container\nkubectl exec -it hello-world-pod -- /bin/sh \nps\nexit\n\n#We still have our kubectl get events running in the background, so we see if re-create the container automatically.\nkubectl exec -it hello-world-pod -- /usr/bin/killall hello-app\n\n#Our restart count increased by 1 after the container needed to be restarted.\nkubectl get pods\n\n#Look at Containers->State, Last State, Reason, Exit Code, Restart Count and Events\n#This is because the container restart policy is Always by default\nkubectl describe pod hello-world-pod\n\n#Cleanup time\nkubectl delete pod hello-world-pod\n\n#Kill our watch\nfg\nctrl+c\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"#Remember...we can ask the API server what it knows about an object, in this case our restartPolicy\nkubectl explain pods.spec.restartPolicy\n\n#Create our pods with the restart policy\nmore pod-restart-policy.yaml\nkubectl apply -f pod-restart-policy.yaml\n\n#Check to ensure both pods are up and running, we can see the restarts is 0\nkubectl get pods \n\n#Let's kill our apps in both our pods and see how the container restart policy reacts\nkubectl exec -it hello-world-never-pod -- /usr/bin/killall hello-app\nkubectl get pods\n\n#Review container state, reason, exit code, ready and contitions Ready, ContainerReady\nkubectl describe pod hello-world-never-pod\n\n#let's use killall to terminate the process inside our container. \nkubectl exec -it hello-world-onfailure-pod -- /usr/bin/killall hello-app\n\n#We'll see 1 restart on the pod with the OnFailure restart policy.\nkubectl get pods \n\n#Let's kill our app again, with the same signal.\nkubectl exec -it hello-world-onfailure-pod -- /usr/bin/killall hello-app\n\n#Check its status, which is now Error too...why? The backoff.\nkubectl get pods \n\n#Let's check the events, we hit the backoff loop. 10 second wait. Then it will restart.\n#Also check out State and Last State.\nkubectl describe pod hello-world-onfailure-pod \n\n#Check its status, should be Running...after the Backoff timer expires.\nkubectl get pods \n\n#Now let's look at our Pod statuses\nkubectl delete pod hello-world-never-pod\nkubectl delete pod hello-world-onfailure-pod\n")),(0,o.kt)("h2",{id:"defining-pod-health"},"Defining Pod Health"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'A Pod is considered ready when all containers are "running"'),(0,o.kt)("li",{parentName:"ul"},"But we\u2019d like to be able to understand a little more about our applications"),(0,o.kt)("li",{parentName:"ul"},"We can add additional intelligence to our"),(0,o.kt)("li",{parentName:"ul"},"Pod\u2019s state and health"),(0,o.kt)("li",{parentName:"ul"},"Container Probes",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"livenessProbe",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Runs a diagnostic check on a container"),(0,o.kt)("li",{parentName:"ul"},"Per container setting"),(0,o.kt)("li",{parentName:"ul"},"On failure, the Kubelet restarts the container"),(0,o.kt)("li",{parentName:"ul"},"Container Restart Policy"),(0,o.kt)("li",{parentName:"ul"},"Give Kubernetes a better understanding of our application"))),(0,o.kt)("li",{parentName:"ul"},"readinessProbe",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Runs a diagnostic check on the container"),(0,o.kt)("li",{parentName:"ul"},"Per container setting"),(0,o.kt)("li",{parentName:"ul"},"On startup, your application won\u2019t receive traffic until ready (until the readinessProbe have success)"),(0,o.kt)("li",{parentName:"ul"},"On failure, removes Pod from load balancing or replication controller (the container is not restarted)"),(0,o.kt)("li",{parentName:"ul"},"For applications have long startup times"),(0,o.kt)("li",{parentName:"ul"},"Prevents users from seeing errors")))))),(0,o.kt)("h3",{id:"what-type-of-checks-"},"What type of checks ?"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"types checks",src:n(6882).Z,width:"1174",height:"363"}),"\n3 types de checks:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Exec",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Execute une ligne dans le conteneurs et regarde le code de sortie de ce process"))),(0,o.kt)("li",{parentName:"ul"},"tcpSocker",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Regarde si un port est ouvert (pour lancer un outil de diagnostique, ou port d'un programme)"))),(0,o.kt)("li",{parentName:"ul"},"httpGet",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Fait une requ\xeate URL et regarde le code http de sortie")))),(0,o.kt)("p",null,"3 types d'erreurs en sortie:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Success",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"R\xe9ussite du processus"))),(0,o.kt)("li",{parentName:"ul"},"Failure",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Erreur d'un test sur le conteneur"))),(0,o.kt)("li",{parentName:"ul"},"Unknown",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Erreur li\xe9 au processus du diagnostique")))),(0,o.kt)("h3",{id:"configure-container-probes"},"Configure Container Probes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"initialDelaySeconds - number of seconds after the container has started before running container probes"),(0,o.kt)("li",{parentName:"ul"},"periodSeconds - interval when the test probe are execute, default 10 seconds"),(0,o.kt)("li",{parentName:"ul"},"timeoutSeconds - number of seconds the prode test before giving up"),(0,o.kt)("li",{parentName:"ul"},"failureThreshold - number of missed checks before reporting failure, default 3"),(0,o.kt)("li",{parentName:"ul"},"successThreshold - number of probes to be considered successful and live, default 1")),(0,o.kt)("h3",{id:"livenessprobe"},"livenessProbe"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  containers:\n    ...\n    livenessProbe:\n      tcpSocket:\n        port: 8080\n      initialDelaySeconds: 15\n      periodSeconds: 20\n")),(0,o.kt)("h3",{id:"readinessprobe"},"readinessProbe"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  containers:\n    ...\n    readinessProbe:\n      tcpSocket:\n        port: 8080\n      initialDelaySeconds: 5\n      periodSeconds: 10\n")),(0,o.kt)("h3",{id:"commands-1"},"Commands"),(0,o.kt)("p",null,"Create file container-probes.yaml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: hello-world\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: hello-world\n  template:\n    metadata:\n      labels:\n        app: hello-world\n    spec:\n      containers:\n      - name: hello-world\n        image: gcr.io/google-samples/hello-app:1.0\n        ports:\n        - containerPort: 8080\n        livenessProbe:\n          tcpSocket:\n            port: 8081\n          initialDelaySeconds: 10\n          periodSeconds: 5\n        readinessProbe:\n          httpGet:\n            path: /\n            port: 8081\n          initialDelaySeconds: 10\n          periodSeconds: 5\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"#Start a watch to see the events associated with our probes.\nkubectl get events --watch &\nclear\n\n#We have a single container pod app, in a Deployment that has both a liveness probe and a readiness probe\ncat container-probes.yaml\n\n#Send in our deployment, after 10 seconds, our liveness and readiness probes will fail.\n#The liveness probe will kill the current pod, and recreate one.\nkubectl apply -f container-probes.yaml\n\n#kill our watch\nfg\nctrl+c\n\n#We can see that our container isn't ready 0/1 and it's Restarts are increasing.\nkubectl get pods\n\n#Let's figure out what's wrong\n#1. We can see in the events. The Liveness and Readiness probe failures.\n#2. Under Containers, Liveness and Readiness, we can see the current configuration. And the current probe configuration. Both are pointing to 8081.\n#3. Under Containers, Ready and Container Contidtions, we can see that the container isn't ready.\n#4. Our Container Port is 8080, that's what we want our probes, probings. \nkubectl describe pods\n\n#So let's go ahead and change the probes to 8080\nvi container-probes.yaml\n\n#And send that change into the API Server for this deployment.\nkubectl apply -f container-probes.yaml\n\n#Confirm our probes are pointing to the correct container port now, which is 8080.\n \n#Let's check our status, a couple of things happened there.\n#1. Our Deployment ReplicaSet created a NEW Pod, when we pushed in the new deployment configuration.\n#2. It's not immediately ready because of our initialDelaySeconds which is 10 seconds.\n#3. If we wait long enough, the livenessProbe will kill the original Pod and it will go away.\n#4. Leaving us with the one pod in our Deployment's ReplicaSet\nkubectl get pods \n\nkubectl delete deployment hello-world\n")))}c.isMDXComponent=!0},2029:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/multi_pods-9f33ea8659ba494b1558ded638a95386.png"},7733:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pod_lifecycle-94f2e386e6b2085f70d86a03e7e5c6d4.png"},9618:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/terminate_pods-ceb2e99ac595a9c964aa754455403658.png"},6882:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/types_checks-0a84b894a40ef4e928092e16572d9c82.png"},9359:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/what_pod-67e7b11f81e0ae53ad12ef694b9a47ec.png"}}]);