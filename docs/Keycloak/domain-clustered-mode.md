---
id: domain-clustered-mode
title: Domain Clustered Mode
---

Pour installer un keycloak en mode Cluster nous devons avoir la configuration suivante.
* Une base de données
* 2 serveurs Keycloak
* un load-balancer

## Configuration de la base de donnée

Dans le répertoire keycloak.

Nous allons suivre les étapres suivantes

1. Télécharger un package JDBC (Java Database Connectivity) pour la base de données
2. Packager le .JAR dans un module et l'installer dans le serveur
3. Déclarer le JDBC driver dans la configuration du serveur
4. Modifier le datasource pour utiliser le driver JDBC
5. Modifier le datasource pour définir les paramètres de connexion à la base de donnée

Les étapes suivantes seront fait avec une base PostreSQL, elles sont identiques pour d'autres SGBD.

### Création du package JDBC

```bash
# Création du fichier contenant le package
cd modules/system/layers/keycloak/org
mkdir -p postgresql/main
cd postgresql/main/
# Téléchargement du JDBC choisi
wget https://jdbc.postgresql.org/download/postgresql-42.2.23.jar
touch module.xml
```

Editer le fichier <code>module.xml</code> en suivant le la syntaxe suivante:
```xml
<?xml version="1.0" ?>
<module xmlns="urn:jboss:module:1.3" name="org.postgresql">
    <resources>
        <resource-root path="postgresql-42.2.23.jar"/>
    </resources>

    <dependencies>
        <module name="javax.api"/>
        <module name="javax.transaction.api"/>
    </dependencies>
</module>
```

Le nom du module <code>org.postgresql</code> doit correspondre au chemin du répertoire, dans notre cas /org/postgresql.

La variable <code>resource-root path</code> doit correspondre au nom exact du fichier .JAR téléchargé précédemment.

### Déclaration et installation du package


:::info
Toutes les modifications qui seront faitent dans le fichier <code>domain.xml</code> doivent être effectué dans la balise XML :
```xml
<profile name="auth-server-clustered">
    ...
</profile>
```
Qui est le profil Keycloak pris en compte lors d'une configuration Cluster.
:::

Nous allons déclarer ce nouveau module dans notre profile. Il sera disponible quand le serveur démarrera.

```bash
cd domain/configuration
nano domain.xml
```

Dans ce fichier, nous recherchons le driver <code>com.h2database.h2</code> déjà déclaré.

Le nom du driver peut être choisi selon vos envie, le <code>module</code> correspond à celui créer précédemment.

```xml
<subsystem xmlns="urn:jboss:domain:datasources:6.0">
    <datasources>
    ...
    <drivers>
        <!--> Driver à rajouter <-->
        <driver name="postgresql" module="org.postgresql">
            <xa-datasource-class>org.postgresql.xa.PGXADataSource</xa-datasource-class>
        </driver>
        <driver name="h2" module="com.h2database.h2">
            <xa-datasource-class>org.h2.jdbcx.JdbcDataSource</xa-datasource-class>
        </driver>
    </drivers>
    </datasources>
</subsystem>
```

### Modification de la Datasource

Après avoir déclaré le driver JDBC nous allons maintenant modifier le datasource de Keycloak afin qu'il utilise notre nouvelle base de donnée.

La modification ce fait dans le même fichier que précédemment, dans le block juste au dessus.

Modifier le datasource <code>KeycloakDS</code>, en changeant <code>connection-url</code> et <code>driver</code>.

La partie <code>user-name</code> et <password></password> doivent être modifié en fonction de vos identifiant de base de donnée.

:::caution Attention
Nous inscrivons ici les informations de connexion en clair. Il existe des méthodes d'obfuscation, mais cela dépasse le cadre de ce tutoriel.
:::

```xml
  <subsystem xmlns="urn:jboss:domain:datasources:6.0">
     <datasources>
       ...
       <!--> Datasource à modifier <-->
       <datasource jndi-name="java:jboss/datasources/KeycloakDS" pool-name="KeycloakDS" enabled="true" use-java-context="true">
           <connection-url>jdbc:postgresql://localhost/keycloak</connection-url>
           <driver>postgresql</driver>
           <pool>
               <max-pool-size>20</max-pool-size>
           </pool>
           <security>
               <user-name>postgres</user-name>
               <password></password>
           </security>
       </datasource>
        ...
     </datasources>
  </subsystem>
```

### Ajout de la datasource

Aucune modification particulière, les options par défaut sont :
https://www.keycloak.org/docs/latest/server_installation/#database-configuration

### Création de la base de donnée

Se connecter au serveur de base de donnée, elle doit être encodée en UTF-8.

```sql
-- Vérifier l'encodage par défaut
show server_encoding;
-- Si ce n'est pas UTF8, créer la base de donnée de cette manière
create database keycloak with encoding 'UTF8';
```

## Configuration du Load Balancer

Dans cet exemple nous allons utiliser Nginx.

Peut importe le load balancer choisi, il est important de rajouter les headers HTTP suivants:
* X-Forwarded-For
* X-Forwarded-Proto

```
http {
        upstream keycloak {
               server <you_ip_1>:8080 fail_timeout=2s;
               server <you_ip_2>:8080 fail_timeout=2s;
        }

        server {
               listen       8000;
               server_name  localhost;

               location / {
                     proxy_set_header    Host               $host;
                     proxy_set_header    X-Real-IP          $remote_addr;
                     proxy_set_header    X-Forwarded-For    $proxy_add_x_forwarded_for;
                     proxy_set_header    X-Forwarded-Host   $host;
                     proxy_set_header    X-Forwarded-Server $host;
                     proxy_set_header    X-Forwarded-Port   $server_port;
                     proxy_set_header    X-Forwarded-Proto  $scheme;
                     proxy_pass http://keycloak;
               }
        }
    ...
}
```