---
id: configure-master-slave
title: Configure a Master Slave Replication
---

Deux serveurs PostgreSQL sont nécessaire, un étant le Master, l'autre le Slave.

La base de données <code>test</code> sera répliquée. 

Les écritures devront se faire __uniquement__ sur la base de données Master.

### If sudo is not install
```bash
su
apt-get update
apt install sudo -y 
```

### Change pg_hba.conf file

Modifier le fichier <code>/etc/postgresql/<your_version>/main/pg_hba.conf</code>

Et ajouter les lignes ci-dessous.

```bash
# Change this lines
local   bucardo         bucardo                                 trust
local   all             postgres                                trust
# And add this lines
host    all             postgres        all                     trust
host    bucardo         bucardo         all                     trust

# Reload PostgreSQL Service
sudo service postgresql restart
```

## Create test database
Cette base de données sera répliqué sur le deuxième serveur PostgreSQL.

Jouer le script de création de base et de la table sur les deux serveurs PostgreSQL afin que leurs schema soient indentiques.
```sql
CREATE DATABASE test
    WITH 
    OWNER = postgres
    TEMPLATE = template0
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE "user" (
  "uid" uuid PRIMARY KEY DEFAULT (uuid_generate_v4()),
  "email" varchar UNIQUE NOT NULL,
  "password" varchar NOT NULL,
  "username" varchar NOT NULL
);

-- Uniquement sur la base de données Master
INSERT INTO public."user"(email, password, username)
	VALUES ('test@example.com', 'StrongP@ssword', 'John');
```


## Install Bucardo Requirements
L'outil choisi pour cette réplication est [Bucardo](https://bucardo.org/Bucardo/installation/). 
L'utilitaire doit être installé __uniquement__ sur le serveur __Master__.

```bash
sudo apt-get install libdbix-safe-perl -y
sudo apt-get install libdbd-pg-perl -y
sudo apt-get install postgresql-plperl-13 -y

# For use 'make' command
sudo apt-get install build-essential -y
```

## Download and Install Bucardo
Téléchargement de l'outil
```bash
mkdir bucardo
cd bucardo
# Download Bucardo
wget https://bucardo.org/downloads/Bucardo-5.6.0.tar.gz
# And it's signature
wget https://bucardo.org/downloads/Bucardo-5.6.0.tar.gz.asc
```

```bash
# Unzip the tar file
tar xvfz Bucardo-5.6.0.tar.gz
cd Bucardo-5.6.0/
perl Makefile.PL
sudo make install
# The bucardo command os now available
bucardo
```

```bash
# If you have an error with perl "perl: warning: Setting locale failed"
# Uncomment the file "fr_FR.UTF-8 UTF-8"
sudo nano /etc/locale.gen 
sudo locale-gen
```

```bash
sudo mkdir -p /var/run/bucardo
sudo mkdir -p /var/log/bucardo
```

Création de la base de données et du role permettant de stocker les configurations de bucardo.

```sql
-- Create the user dans database "bucardo"
CREATE ROLE bucardo WITH
	LOGIN
	SUPERUSER
	CREATEDB
	CREATEROLE
	INHERIT
	NOREPLICATION
	CONNECTION LIMIT -1
	PASSWORD 'bucardo';
	
CREATE DATABASE bucardo
    WITH 
    OWNER = bucardo
    TEMPLATE = template0
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1;
```

## Bucardo Configuration

### Initialisation
Initialisation de la base de données bucardo.
```bash
bucardo install
> Current connection settings:
>    1. Host:           Localhost
>    2. Port:           5432
>    3. User:           bucardo
>    4. Database:       bucardo
>    5. PID directory:  /var/run/bucardo
>    Enter a number to change it, P to proceed, or Q to quit: P
>
>    Attempting to create and populate the bucardo database and schema
>    Database creation is complete

# If you want to change one of these setting, tap the number and set the new value
# If you don't have create a username, change it
# Idem from database
```

### Sélection des bases
Sélection de la base de données source de la réplication (<...>_host).

Changer les variables dbname, port, host, user et password en fonction de vos configurations.
List des varibles disponibles [ici](https://bucardo.org/Bucardo/cli/add_database).
```bash
bucardo add db test_host dbname=test port=5432 host=localhost user=bucardo password=bucardo
```

Sélection de la base de données cible de la réplication (<...>_dest).
```bash
bucardo add db test_dest dbname=test port=5432 host=192.168.4.131 user=postgres password=postgres
```

### Sélection des tables
Dans note exemple toutes les tables seront répliquées
```bash
# Add tables
bucardo add tables all db=test_host
> New tables added: 1
```

### Création d'une herdTable
La herdTable permet de regrouper les tables qui doivent être synchronisées.
```bash
bucardo add herd test_copying_herd all
> Created relgroup "test_copying_herd"
> The following tables or sequences are now part of the relgroup "test_copying_herd":
>  public.user
```

### Création d'une synchronisation
La synchronisation permet de définir, la tables source, la table cible et la herdTable qui doivent être liées.
```bash
bucardo add sync sync_test relgroup=test_copying_herd dbs=test_host:source,test_dest:target onetimecopy=2
> Added sync "sync_test"
> Created a new dbgroup named "sync_test"
```

### Lancement de la synchronisation
```bash
sudo bucardo start
> Checking for existing processes
> Starting Bucardo

sudo bucardo status
> PID of Bucardo MCP: 6793
> Name        State    Last good    Time    Last I/D    Last bad    Time  
> ===========+========+============+=======+===========+===========+=======
> sync_test | Good   | 14:13:44   | 18s   | 0/0       | none      |       
```

Et voilà !

Maintenant sur votre 2ème BDD vous pouvez constater que les données ont été répliquées. 

Un autre tuto m'ayant aidé à réaliser celui ci.
Pour plus d'information: https://installvirtual.com/how-to-install-bucardo-for-postgres-replication/