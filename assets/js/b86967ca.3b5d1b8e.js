"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7758],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},i=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),b=u(n),d=a,m=b["".concat(c,".").concat(d)]||b[d]||p[d]||o;return n?r.createElement(m,s(s({ref:t},i),{},{components:n})):r.createElement(m,s({ref:t},i))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},1121:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return i},default:function(){return b}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],l={id:"4_use_Kubectl",title:"Use Kubectl"},c=void 0,u={unversionedId:"Kubernetes/install_&_configuration/4_use_Kubectl",id:"Kubernetes/install_&_configuration/4_use_Kubectl",isDocsHomePage:!1,title:"Use Kubectl",description:"Kubectl (ou kube control) est le CLI de base pour controller les cluster Kubernetes.",source:"@site/docs/Kubernetes/1_install_&_configuration/4_use_Kubectl.md",sourceDirName:"Kubernetes/1_install_&_configuration",slug:"/Kubernetes/install_&_configuration/4_use_Kubectl",permalink:"/docs/Kubernetes/install_&_configuration/4_use_Kubectl",editUrl:"https://github.com/j-peguet/portfolio/blob/master/docs/Kubernetes/1_install_&_configuration/4_use_Kubectl.md",tags:[],version:"current",lastUpdatedAt:1613556017,formattedLastUpdatedAt:"2/17/2021",sidebarPosition:4,frontMatter:{id:"4_use_Kubectl",title:"Use Kubectl"},sidebar:"docs",previous:{title:"Creating a Cluster Node",permalink:"/docs/Kubernetes/install_&_configuration/3_install_Node"},next:{title:"Application deployment",permalink:"/docs/Kubernetes/install_&_configuration/5_application_deployement"}},i=[{value:"Les op\xe9rations basiques",id:"les-op\xe9rations-basiques",children:[],level:2},{value:"Les ressources basiques",id:"les-ressources-basiques",children:[],level:2},{value:"Les formats",id:"les-formats",children:[],level:2},{value:"How work Kubectl",id:"how-work-kubectl",children:[],level:2},{value:"Basic commands",id:"basic-commands",children:[],level:2},{value:"Bash completion",id:"bash-completion",children:[],level:2}],p={toc:i};function b(e){var t=e.components,l=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Kubectl (ou kube control) est le CLI de base pour controller les cluster Kubernetes."),(0,o.kt)("p",null,'Comme chaque actions passe obligatoirement par "l\'API Server", cela permet de faire des ',(0,o.kt)("strong",{parentName:"p"},"Op\xe9rations")," sur des ",(0,o.kt)("strong",{parentName:"p"},"Ressouces")," en s\xe9lectionnant un ",(0,o.kt)("strong",{parentName:"p"},"Format")," de son choix."),(0,o.kt)("h2",{id:"les-op\xe9rations-basiques"},"Les op\xe9rations basiques"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"apply/create - create resoucre(s)"),(0,o.kt)("li",{parentName:"ul"},"run - start a pod from an image"),(0,o.kt)("li",{parentName:"ul"},"explain - documentation of resources"),(0,o.kt)("li",{parentName:"ul"},"delete - delete resource(s)"),(0,o.kt)("li",{parentName:"ul"},"get - list resources"),(0,o.kt)("li",{parentName:"ul"},"describe - detailed resource information"),(0,o.kt)("li",{parentName:"ul"},"exec - execute a command on a container (like docker exec)"),(0,o.kt)("li",{parentName:"ul"},"logs - view logs on a container")),(0,o.kt)("p",null,"More info here: ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/kubectl/overview/#operations"},"https://kubernetes.io/docs/reference/kubectl/overview/#operations")),(0,o.kt)("h2",{id:"les-ressources-basiques"},"Les ressources basiques"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Nodes (no)"),(0,o.kt)("li",{parentName:"ul"},"Pods (po)"),(0,o.kt)("li",{parentName:"ul"},"Services (svc)")),(0,o.kt)("p",null,"Many more here: ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/kubectl/overview/#resource-types"},"https://kubernetes.io/docs/reference/kubectl/overview/#resource-types")),(0,o.kt)("h2",{id:"les-formats"},"Les formats"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"wide - output additional info to stdout"),(0,o.kt)("li",{parentName:"ul"},"yaml - YAML formatted API object"),(0,o.kt)("li",{parentName:"ul"},"json - JSON formatted API object")),(0,o.kt)("h2",{id:"how-work-kubectl"},"How work Kubectl"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:n(3956).Z})),(0,o.kt)("p",null,"More info here: ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/kubectl/kubectl"},"https://kubernetes.io/docs/reference/kubectl/kubectl"),"\nand here: ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/kubectl/cheatsheet/"},"https://kubernetes.io/docs/reference/kubectl/cheatsheet/")),(0,o.kt)("h2",{id:"basic-commands"},"Basic commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Basic cluster info\nkubectl cluster-info \n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Basic status and roles\nkubectl get nodes\n# Additional information\nkubectl get nodes -o wide\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# List of pods in the default namespace\nkubectl get pods\n# List of system pods\nkubectl get pods --namespace kube-system\n# Additionnal info for each pod\nkubectl get pods --namespace kube-system -o wide\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# List all\nkubectl get all --all-namespaces | more\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# api-resources list all the resources available in the cluster\nkubectl api-resources\n# Limit the number of rows\nkubectl api-resources | head -n 10\n# Filter easily\nkubectl api-resources | grep pod\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Then we can get info on a specific api-resources\nkubectl explain pod | more\n# You can go deeper\nkubectl explain.spec pod | more\nkubectl explain.spec.containers pod | more\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# It work with alias\nkubectl explain no\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Take a closer look at our Nodes\nkubectl describe nodes c1-master1\nkubectl describe nodes c1-node1\n")),(0,o.kt)("h2",{id:"bash-completion"},"Bash completion"),(0,o.kt)("p",null,"Pour les plus flemmards \ud83d\ude04 (en vrai c'est vraiment pratique)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'sudo apt-get install -y bash-completion\necho "source <(kubectl completion bash)" >> ~/.bashrc\nsource ~/.bashrc\n# Test it\nkubectl g[tab][tab] po[tab][tab] --all[tab][tab]\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -h | more\nkubectl get -h | more\nkubectl describe -h | more\n")))}b.isMDXComponent=!0},3956:function(e,t,n){t.Z=n.p+"assets/images/kubectl_how_work-0bca6ec9f60f64d509cf8dab48beb62c.png"}}]);