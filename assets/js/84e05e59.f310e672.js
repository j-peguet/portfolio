"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5384],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var l=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=l.createContext({}),u=function(e){var n=l.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=u(e.components);return l.createElement(i.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},m=l.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(t),m=r,g=c["".concat(i,".").concat(m)]||c[m]||p[m]||o;return t?l.createElement(g,a(a({ref:n},d),{},{components:t})):l.createElement(g,a({ref:n},d))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[c]="string"==typeof e?e:r,a[1]=s;for(var u=2;u<o;u++)a[u]=t[u];return l.createElement.apply(null,a)}return l.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9817:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var l=t(7462),r=(t(7294),t(3905));const o={id:"install-longhorn",title:"Install Longhorn"},a=void 0,s={unversionedId:"Kubernetes-Advanced/install-longhorn",id:"Kubernetes-Advanced/install-longhorn",title:"Install Longhorn",description:"Lien vers la documentation officielle//longhorn.io/docs/1.1.0/deploy/install/",source:"@site/docs/Kubernetes-Advanced/install-longhorn.md",sourceDirName:"Kubernetes-Advanced",slug:"/Kubernetes-Advanced/install-longhorn",permalink:"/docs/Kubernetes-Advanced/install-longhorn",draft:!1,editUrl:"https://github.com/j-peguet/portfolio/blob/master/docs/Kubernetes-Advanced/install-longhorn.md",tags:[],version:"current",lastUpdatedAt:1676381131,formattedLastUpdatedAt:"Feb 14, 2023",frontMatter:{id:"install-longhorn",title:"Install Longhorn"},sidebar:"docs",previous:{title:"Install Traefik",permalink:"/docs/Kubernetes-Advanced/install-traefik"},next:{title:"PostgreSQL",permalink:"/docs/PostgreSQL"}},i={},u=[{value:"Verification du l&#39;infrastrucure",id:"verification-du-linfrastrucure",level:3},{value:"Installation de Longhorn",id:"installation-de-longhorn",level:2},{value:"Pr\xe9requis",id:"pr\xe9requis",level:3},{value:"Installer open-iscsi",id:"installer-open-iscsi",level:4},{value:"Installer NFSv4 client",id:"installer-nfsv4-client",level:4},{value:"Version de Kubernetes",id:"version-de-kubernetes",level:4},{value:"R\xe9cup\xe9ration de l&#39;outil",id:"r\xe9cup\xe9ration-de-loutil",level:3},{value:"Ajout de disques sp\xe9cifiques",id:"ajout-de-disques-sp\xe9cifiques",level:2},{value:"Ajouter le disque dur",id:"ajouter-le-disque-dur",level:3},{value:"Formatter le disque",id:"formatter-le-disque",level:3},{value:"Monter le volume",id:"monter-le-volume",level:3},{value:"Relancer le service Longhorn",id:"relancer-le-service-longhorn",level:3},{value:"Utiliser Longhorn",id:"utiliser-longhorn",level:2}],d={toc:u},c="wrapper";function p(e){let{components:n,...o}=e;return(0,r.kt)(c,(0,l.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Lien vers la documentation officielle: ",(0,r.kt)("a",{parentName:"p",href:"https://longhorn.io/docs/1.1.0/deploy/install/"},"https://longhorn.io/docs/1.1.0/deploy/install/")),(0,r.kt)("p",null,"check is longhorn est possible"),(0,r.kt)("h3",{id:"verification-du-linfrastrucure"},"Verification du l'infrastrucure"),(0,r.kt)("p",null,"Un script est disponible pour v\xe9rifier que l'architecture de votre cluster est compatible avec Longhorn."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl -sSfL https://raw.githubusercontent.com/longhorn/longhorn/v1.1.0/scripts/environment_check.sh | bash\n")),(0,r.kt)("h2",{id:"installation-de-longhorn"},"Installation de Longhorn"),(0,r.kt)("h3",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,r.kt)("p",null,"Ces \xe9tapes sont \xe0 faire sur toutes les machines constituant le cluster (les Masters et les Nodes)."),(0,r.kt)("h4",{id:"installer-open-iscsi"},"Installer open-iscsi"),(0,r.kt)("p",null,"isntaller sur toutes les vms"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt-get install open-iscsi\n")),(0,r.kt)("h4",{id:"installer-nfsv4-client"},"Installer NFSv4 client"),(0,r.kt)("p",null,"Pour les serveurs utilisant Ubuntu ou Debian"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt-get install nfs-common\n")),(0,r.kt)("p",null,"Pour RHEL, CentOS et EKS"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install nfs-utils\n")),(0,r.kt)("h4",{id:"version-de-kubernetes"},"Version de Kubernetes"),(0,r.kt)("p",null,"Utilisez cette commande pour v\xe9rifier votre version de Kubernetes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo kubectl version\n")),(0,r.kt)("p",null,"La ",(0,r.kt)("code",null,"Server Version")," doit \xeatre de ",(0,r.kt)("code",null,"v1.16")," ou sup\xe9rieure."),(0,r.kt)("h3",{id:"r\xe9cup\xe9ration-de-loutil"},"R\xe9cup\xe9ration de l'outil"),(0,r.kt)("p",null,"Nous allons cr\xe9er un dossier contenant les fichiers de configuration de Longhorn. Puis t\xe9l\xe9charger et ex\xe9cuter les fichiers yaml."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://longhorn.io/docs/1.1.0/deploy/install/install-with-kubectl/"},"https://longhorn.io/docs/1.1.0/deploy/install/install-with-kubectl/")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir longhorn\ncd longhorn\nwget https://raw.githubusercontent.com/longhorn/longhorn/v1.1.0/deploy/longhorn.yaml\n\nsudo kubectl apply -f longhorn.yaml\n")),(0,r.kt)("p",null,"Pour v\xe9rifier que l'installation se d\xe9roule correctement, tous les pods doivent avoir le status ",(0,r.kt)("code",null,"Running"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods --namespace longhorn-system --watch\n")),(0,r.kt)("h2",{id:"ajout-de-disques-sp\xe9cifiques"},"Ajout de disques sp\xe9cifiques"),(0,r.kt)("p",null,"Cette \xe9tape est optionnelle, mais ",(0,r.kt)("strong",{parentName:"p"},"fortement recommand\xe9e"),". Elle vise \xe0 ajouter des disques durs sp\xe9cique \xe0 longhorn (\xe0 faire sur chaque Node)."),(0,r.kt)("h3",{id:"ajouter-le-disque-dur"},"Ajouter le disque dur"),(0,r.kt)("p",null,"Ajout un disque dur sur votre Machine de mani\xe8re physique ou logique, dans cet exemple 20Go seront ajout\xe9."),(0,r.kt)("h3",{id:"formatter-le-disque"},"Formatter le disque"),(0,r.kt)("p",null,"Lien compl\xe9mentaire ici: ",(0,r.kt)("a",{parentName:"p",href:"https://www.tecmint.com/add-new-disk-to-an-existing-linux/"},"https://www.tecmint.com/add-new-disk-to-an-existing-linux/")),(0,r.kt)("p",null,"Lister tous les disques de votre systemes et s\xe9lectionner le nouveau disque, g\xe9n\xe9ralement /dev/sdb."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"fdisk -l\nfdisk /dev/sdb\n")),(0,r.kt)("p",null,"Dans le menu fdisk s\xe9lectionner ",(0,r.kt)("code",null,"n")," et ",(0,r.kt)("code",null,"p")," pour cr\xe9er et d\xe9clarer la nouvelle partition comme partition principale."),(0,r.kt)("p",null,"Puis ",(0,r.kt)("code",null,"w")," pour sauvegarder la configuration."),(0,r.kt)("p",null,"Formatage du disque en ext4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mfs.ext4  /dev/sdb\n")),(0,r.kt)("h3",{id:"monter-le-volume"},"Monter le volume"),(0,r.kt)("p",null,"Maintenant que le volume est cr\xe9er, nous allons le monter automatiquement \xe0 chaque d\xe9marrage de la machine."),(0,r.kt)("p",null,"Nous cr\xe9ons un dossier ",(0,r.kt)("code",null,"/mnt/longhorn")," qui sera l'emplacement de notre nouveau disque."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mkdir /mnt/longhorn\nmount /dev/sdb1 /mnt/longhorn\n")),(0,r.kt)("p",null,"Rajouter la ligne dans ",(0,r.kt)("code",null,"/etc/fstab")," pour monter la partition lors du boot."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/dev/sdb1 /mnt/longhorn ext4 defaults 0 0\n")),(0,r.kt)("h3",{id:"relancer-le-service-longhorn"},"Relancer le service Longhorn"),(0,r.kt)("p",null,"Modifier dans le fichier ",(0,r.kt)("code",null,"longhorn.yaml"),"."),(0,r.kt)("p",null,'Allez dans le ConfigMap "longhorn-default-setting" et modifier les lignes ci-dessous.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"create-default-disk-labeled-nodes: true\ndefault-data-path: /mnt/longhorn/\n")),(0,r.kt)("p",null,"Puis appliquer les modifications du fichier."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo kubectl apply -f longhorn.yaml\n")),(0,r.kt)("p",null,"Il faut ensuite ajouter les disques \xe0 la configuration de Longhorn. Acc\xe9der au portail via le service longhorn-frontend."),(0,r.kt)("p",null,"Dans le dashboard Longhorn editer la node et ajouter le disk en renseignant:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"nom"),(0,r.kt)("li",{parentName:"ul"},"espace"),(0,r.kt)("li",{parentName:"ul"},"path (/mnt/longhorn)"),(0,r.kt)("li",{parentName:"ul"},"enable le disk")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"longhorn edit node",src:t(6475).Z,width:"1919",height:"937"})),(0,r.kt)("p",null,"Les disques doivent avoir le status Schedulable."),(0,r.kt)("p",null,"F\xe9liciations \ud83c\udf89 !! L'installation de Longhorn est finie (\xe0 vous les joies du stockage distribu\xe9)."),(0,r.kt)("h2",{id:"utiliser-longhorn"},"Utiliser Longhorn"),(0,r.kt)("p",null,"Pour utiliser le service Longhorn, lors de la cr\xe9ation d'un pvc il suffit de sp\xe9cifier le service comme dans l'exemple ci-dessous."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"storageClass: longhorn\n")))}p.isMDXComponent=!0},6475:(e,n,t)=>{t.d(n,{Z:()=>l});const l=t.p+"assets/images/longhorn-edit-node-f3ac38b0e542882bedbf95b8d815d570.png"}}]);