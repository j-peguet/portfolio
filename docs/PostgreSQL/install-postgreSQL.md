---
id: install-postgresql
title: Install PostgreSQL
---

Installation de PostgreSQL sur chaque serveur.
La version choisie de PostgreSQL est 13.2.

Plus d'infos ici: https://www.postgresql.org/download/

```bash
## If you don't have lsb_release command
sudo apt install lsb-release -y

# Create the file repository configuration:
sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'

# Import the repository signing key:
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -

# Update the package lists:
sudo apt-get update

# Install the latest version of PostgreSQL.
# If you want a specific version, use 'postgresql-12' or similar instead of 'postgresql':
sudo apt-get -y install postgresql
```

### Configuration
Modifier le fichier <code>/etc/postgresql/13/main/postgresql.conf</code>

Ou remplacer par votre version <code>/etc/postgresql/<your_version>/main/postgresql.conf</code>

```bash
# Uncomment the line and change 'localhost' to '*'
listen_addresses = '*'
```

Modifier le fichier <code>/etc/postgresql/13/main/pg_hba.conf</code>

:::danger Ne pas faire ceci en PROD
Le fichier <code>pg_hba.conf</code> doit être configuré avec des accès restreints et sécurisés.

L'exemple ci-dessous n'est valide qu'a des fins des tests.
:::

```bash
# Change this lines
local   all             postgres                                trust
# And add this lines
host    all             postgres        all                     trust

# Reload PostgreSQL Service
sudo service postgresql restart
```