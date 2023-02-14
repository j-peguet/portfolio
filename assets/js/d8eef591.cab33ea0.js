"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5265],{3905:(e,a,n)=>{n.d(a,{Zo:()=>u,kt:()=>k});var r=n(7294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var d=r.createContext({}),i=function(e){var a=r.useContext(d),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},u=function(e){var a=i(e.components);return r.createElement(d.Provider,{value:a},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var n=e.components,t=e.mdxType,o=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=i(n),m=t,k=c["".concat(d,".").concat(m)]||c[m]||p[m]||o;return n?r.createElement(k,l(l({ref:a},u),{},{components:n})):r.createElement(k,l({ref:a},u))}));function k(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var d in a)hasOwnProperty.call(a,d)&&(s[d]=a[d]);s.originalType=e,s[c]="string"==typeof e?e:t,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1062:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var r=n(7462),t=(n(7294),n(3905));const o={id:"domain-clustered-mode",title:"Domain Clustered Mode"},l=void 0,s={unversionedId:"Keycloak/domain-clustered-mode",id:"Keycloak/domain-clustered-mode",title:"Domain Clustered Mode",description:"Pour installer un keycloak en mode Cluster nous devons avoir la configuration suivante.",source:"@site/docs/Keycloak/domain-clustered-mode.md",sourceDirName:"Keycloak",slug:"/Keycloak/domain-clustered-mode",permalink:"/docs/Keycloak/domain-clustered-mode",draft:!1,editUrl:"https://github.com/j-peguet/portfolio/blob/master/docs/Keycloak/domain-clustered-mode.md",tags:[],version:"current",lastUpdatedAt:1676381131,formattedLastUpdatedAt:"Feb 14, 2023",frontMatter:{id:"domain-clustered-mode",title:"Domain Clustered Mode"},sidebar:"docs",previous:{title:"Install Keycloak",permalink:"/docs/Keycloak/install-keycloak"},next:{title:"React",permalink:"/docs/React"}},d={},i=[{value:"Configuration de la base de donn\xe9e",id:"configuration-de-la-base-de-donn\xe9e",level:2},{value:"Cr\xe9ation du package JDBC",id:"cr\xe9ation-du-package-jdbc",level:3},{value:"D\xe9claration et installation du package",id:"d\xe9claration-et-installation-du-package",level:3},{value:"Modification de la Datasource",id:"modification-de-la-datasource",level:3},{value:"Ajout de la datasource",id:"ajout-de-la-datasource",level:3},{value:"Cr\xe9ation de la base de donn\xe9e",id:"cr\xe9ation-de-la-base-de-donn\xe9e",level:3},{value:"Configuration du Load Balancer",id:"configuration-du-load-balancer",level:2}],u={toc:i},c="wrapper";function p(e){let{components:a,...n}=e;return(0,t.kt)(c,(0,r.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Pour installer un keycloak en mode Cluster nous devons avoir la configuration suivante."),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Une base de donn\xe9es"),(0,t.kt)("li",{parentName:"ul"},"2 serveurs Keycloak"),(0,t.kt)("li",{parentName:"ul"},"un load-balancer")),(0,t.kt)("h2",{id:"configuration-de-la-base-de-donn\xe9e"},"Configuration de la base de donn\xe9e"),(0,t.kt)("p",null,"Dans le r\xe9pertoire keycloak."),(0,t.kt)("p",null,"Nous allons suivre les \xe9tapres suivantes"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},"T\xe9l\xe9charger un package JDBC (Java Database Connectivity) pour la base de donn\xe9es"),(0,t.kt)("li",{parentName:"ol"},"Packager le .JAR dans un module et l'installer dans le serveur"),(0,t.kt)("li",{parentName:"ol"},"D\xe9clarer le JDBC driver dans la configuration du serveur"),(0,t.kt)("li",{parentName:"ol"},"Modifier le datasource pour utiliser le driver JDBC"),(0,t.kt)("li",{parentName:"ol"},"Modifier le datasource pour d\xe9finir les param\xe8tres de connexion \xe0 la base de donn\xe9e")),(0,t.kt)("p",null,"Les \xe9tapes suivantes seront fait avec une base PostreSQL, elles sont identiques pour d'autres SGBD."),(0,t.kt)("h3",{id:"cr\xe9ation-du-package-jdbc"},"Cr\xe9ation du package JDBC"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"# Cr\xe9ation du fichier contenant le package\ncd modules/system/layers/keycloak/org\nmkdir -p postgresql/main\ncd postgresql/main/\n# T\xe9l\xe9chargement du JDBC choisi\nwget https://jdbc.postgresql.org/download/postgresql-42.2.23.jar\ntouch module.xml\n")),(0,t.kt)("p",null,"Editer le fichier ",(0,t.kt)("code",null,"module.xml")," en suivant le la syntaxe suivante:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" ?>\n<module xmlns="urn:jboss:module:1.3" name="org.postgresql">\n    <resources>\n        <resource-root path="postgresql-42.2.23.jar"/>\n    </resources>\n\n    <dependencies>\n        <module name="javax.api"/>\n        <module name="javax.transaction.api"/>\n    </dependencies>\n</module>\n')),(0,t.kt)("p",null,"Le nom du module ",(0,t.kt)("code",null,"org.postgresql")," doit correspondre au chemin du r\xe9pertoire, dans notre cas /org/postgresql."),(0,t.kt)("p",null,"La variable ",(0,t.kt)("code",null,"resource-root path")," doit correspondre au nom exact du fichier .JAR t\xe9l\xe9charg\xe9 pr\xe9c\xe9demment."),(0,t.kt)("h3",{id:"d\xe9claration-et-installation-du-package"},"D\xe9claration et installation du package"),(0,t.kt)("admonition",{type:"info"},(0,t.kt)("p",{parentName:"admonition"},"Toutes les modifications qui seront faitent dans le fichier ",(0,t.kt)("code",null,"domain.xml")," doivent \xeatre effectu\xe9 dans la balise XML :"),(0,t.kt)("pre",{parentName:"admonition"},(0,t.kt)("code",{parentName:"pre",className:"language-xml"},'<profile name="auth-server-clustered">\n    ...\n</profile>\n')),(0,t.kt)("p",{parentName:"admonition"},"Qui est le profil Keycloak pris en compte lors d'une configuration Cluster.")),(0,t.kt)("p",null,"Nous allons d\xe9clarer ce nouveau module dans notre profile. Il sera disponible quand le serveur d\xe9marrera."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"cd domain/configuration\nnano domain.xml\n")),(0,t.kt)("p",null,"Supprimer la ligne suivante, puisqu'un serveur de load-balancer sp\xe9cifique va \xeatre install\xe9"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},'<server-group name="load-balancer-group" profile="load-balancer">\n    <jvm name="default">\n        <heap size="64m" max-size="512m"/>\n    </jvm>\n    <socket-binding-group ref="load-balancer-sockets" default-interface="public"/>\n</server-group>\n')),(0,t.kt)("p",null,"Retirer load balancer dans le fichier host-master.xml"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},'<server name="load-balancer" group="load-balancer-group">\n    <jvm name="default"/>\n</server>\n')),(0,t.kt)("p",null,"Dans le fichier domain.xml, nous recherchons le driver ",(0,t.kt)("code",null,"com.h2database.h2")," d\xe9j\xe0 d\xe9clar\xe9."),(0,t.kt)("p",null,"Le nom du driver peut \xeatre choisi selon vos envie, le ",(0,t.kt)("code",null,"module")," correspond \xe0 celui cr\xe9er pr\xe9c\xe9demment."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},'<subsystem xmlns="urn:jboss:domain:datasources:6.0">\n    <datasources>\n    ...\n    <drivers>\n        \x3c!--\x3e Driver \xe0 rajouter <--\x3e\n        <driver name="postgresql" module="org.postgresql">\n            <xa-datasource-class>org.postgresql.xa.PGXADataSource</xa-datasource-class>\n        </driver>\n        <driver name="h2" module="com.h2database.h2">\n            <xa-datasource-class>org.h2.jdbcx.JdbcDataSource</xa-datasource-class>\n        </driver>\n    </drivers>\n    </datasources>\n</subsystem>\n')),(0,t.kt)("h3",{id:"modification-de-la-datasource"},"Modification de la Datasource"),(0,t.kt)("p",null,"Apr\xe8s avoir d\xe9clar\xe9 le driver JDBC nous allons maintenant modifier le datasource de Keycloak afin qu'il utilise notre nouvelle base de donn\xe9e."),(0,t.kt)("p",null,"La modification ce fait dans le m\xeame fichier que pr\xe9c\xe9demment, dans le block juste au dessus."),(0,t.kt)("p",null,"Modifier le datasource ",(0,t.kt)("code",null,"KeycloakDS"),", en changeant ",(0,t.kt)("code",null,"connection-url")," et ",(0,t.kt)("code",null,"driver"),"."),(0,t.kt)("p",null,"La partie ",(0,t.kt)("code",null,"user-name")," et ",(0,t.kt)("password",null)," doivent \xeatre modifi\xe9 en fonction de vos identifiant de base de donn\xe9e."),(0,t.kt)("admonition",{title:"Attention",type:"caution"},(0,t.kt)("p",{parentName:"admonition"},"Nous inscrivons ici les informations de connexion en clair. Il existe des m\xe9thodes d'obfuscation, mais cela d\xe9passe le cadre de ce tutoriel.")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},'  <subsystem xmlns="urn:jboss:domain:datasources:6.0">\n     <datasources>\n       ...\n       \x3c!--\x3e Datasource \xe0 modifier <--\x3e\n       <datasource jndi-name="java:jboss/datasources/KeycloakDS" pool-name="KeycloakDS" enabled="true" use-java-context="true">\n           <connection-url>jdbc:postgresql://localhost/keycloak</connection-url>\n           <driver>postgresql</driver>\n           <pool>\n               <max-pool-size>20</max-pool-size>\n           </pool>\n           <security>\n               <user-name>postgres</user-name>\n               <password></password>\n           </security>\n       </datasource>\n        ...\n     </datasources>\n  </subsystem>\n')),(0,t.kt)("h3",{id:"ajout-de-la-datasource"},"Ajout de la datasource"),(0,t.kt)("p",null,"Aucune modification particuli\xe8re, les options par d\xe9faut sont :\n",(0,t.kt)("a",{parentName:"p",href:"https://www.keycloak.org/docs/latest/server_installation/#database-configuration"},"https://www.keycloak.org/docs/latest/server_installation/#database-configuration")),(0,t.kt)("h3",{id:"cr\xe9ation-de-la-base-de-donn\xe9e"},"Cr\xe9ation de la base de donn\xe9e"),(0,t.kt)("p",null,"Se connecter au serveur de base de donn\xe9e, elle doit \xeatre encod\xe9e en UTF-8."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-sql"},"-- V\xe9rifier l'encodage par d\xe9faut\nshow server_encoding;\n-- Si ce n'est pas UTF8, cr\xe9er la base de donn\xe9e de cette mani\xe8re\ncreate database keycloak with encoding 'UTF8';\n")),(0,t.kt)("h2",{id:"configuration-du-load-balancer"},"Configuration du Load Balancer"),(0,t.kt)("p",null,"Dans cet exemple nous allons utiliser Nginx."),(0,t.kt)("p",null,"Peut importe le load balancer choisi, il est important de rajouter les headers HTTP suivants:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"X-Forwarded-For"),(0,t.kt)("li",{parentName:"ul"},"X-Forwarded-Proto")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"http {\n        upstream keycloak {\n               server <your_ip_1>:8080 fail_timeout=2s;\n               server <your_ip_2>:8080 fail_timeout=2s;\n        }\n\n        server {\n               listen       8000;\n               server_name  localhost;\n\n               location / {\n                     proxy_set_header    Host               $host;\n                     proxy_set_header    X-Real-IP          $remote_addr;\n                     proxy_set_header    X-Forwarded-For    $proxy_add_x_forwarded_for;\n                     proxy_set_header    X-Forwarded-Host   $host;\n                     proxy_set_header    X-Forwarded-Server $host;\n                     proxy_set_header    X-Forwarded-Port   $server_port;\n                     proxy_set_header    X-Forwarded-Proto  $scheme;\n                     proxy_pass http://keycloak;\n               }\n        }\n    ...\n}\n")),(0,t.kt)("p",null,"Modif user add ./adduser.sh"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},'<management>\n    <security-realms>\n        <security-realm name="ManagementRealm">\n            <server-identities>\n                <secret value="bWdtdDEyMyE="/>\n            </server-identities>\n')),(0,t.kt)("p",null,"Copier le XML avec le secret\nRajouter admin"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},'<remote security-realm="ManagementRealm" username="admin">\n')),(0,t.kt)("p",null,"Lancer le serveur ?"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"domain.sh -Djboss.http.port=80 --host-config=host-master.xml\n")))}p.isMDXComponent=!0}}]);