---
id: install-keycloak
title: Install Keycloak
---

Keycloak est un IAM très populaire.

Nous allons voir comment le configurer sur une machine spécifique.

Lien vers la documentation officielle: [www.keycloak.org/docs](https://www.keycloak.org/docs/latest/server_installation/#installation)

## On Promise

### Prérequis

* Java 8
    ```bash
    sudo apt install -y openjdk-8-jdk
    ```
    ```bash
    java -version
    # Output 
    # openjdk version "1.8.0_292"
    # OpenJDK Runtime Environment (build 1.8.0_292-8u292-b10-0ubuntu1~20.04-b10)
    # OpenJDK 64-Bit Server VM (build 25.292-b10, mixed mode)
    ```
* Une base de données, PostgresSQL de préférence ([tuto d'installation disponible ici](../PostgreSQL/install-postgresql))

### Choix du 'Operating Mode'

Keycloak propose 2 Operating Mode différents
* Standalone
* Domain

Selon la documentation officielle :

<code>It is not recommended that you use standalone mode in production as you will have a single point of failure.</code>

Nous allons donc voir comment installer la version Domain de keycloak.

### Installation

Installation des fichiers de la distribution.

Il est possible de télécharger la dernière version [ici](https://www.keycloak.org/downloads).

```bash
mkdir keycloak
cd keycloak
wget https://github.com/keycloak/keycloak/releases/download/15.0.2/keycloak-15.0.2.zip
unzip keycloak-15.0.2.zip
```