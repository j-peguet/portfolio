---
id: install-traefik
title: Install Traefik
---

Traefik est un reverse-proxy, il permet à vos utilisateurs d'avoir accès à vos services internes.

Son principal avantage est qu'il est nativement compatible avec tous les types de cluster existant (Kubernetes, AWS, GCP, ...).
Cela permet de manager l'ensemble des services présent dans son infrastrucure simplement.

Lien vers la documentation officielle: https://doc.traefik.io/traefik/

## Installation de Traefik

Ces étapes sont à faire sur la machine Master uniquement.

L'installation de traefik se passe en plusieurs étapes:
* [Installation et Lancement de traefik](#modification-de-la-configuration) (sans le stockage du certificat SSL)
* [Installation de longhorn](install-longhorn.md) pour stocker le certificat SSL
* Enregistrement du certificat SSL

### Récupération des fichiers

Nous allons créer un dossier traefik qui stockera nos fichiers de configurations.

```bash
mkdir traefik
cd traefik
```

Copier les fichiers disponibles ici https://gitlab.alexislegeay.fr/Witrem/kubernetes-tp/-/tree/master/Traefik dans le dossier traefik.

### Modification de la configuration

Nous allons modifier plusieurs fichiers de configuration.

#### Dans le fichier <code>ConfigMap.yaml</code>,

Modifier les informations concernant votre certificat:
* storage = /cert (défini dans longhorn)
* changer le provider (ex: ovh, digitalocean, ...)

Modifier la partie [certificatesResolvers] et commenter toute la section ci-dessous, elle sera réactivée un fois le stockage distribué installé.

```yaml
...
# Certificates settings
    [certificatesResolvers]
      # Environment production
     [certificatesResolvers.letsencrypt]
        [certificatesResolvers.letsencrypt.acme]
          email = "your.email@company.fr"
          storage = "/certs/letsencrypt.json"
          caServer = "https://acme-v02.api.letsencrypt.org/directory"
          [certificatesResolvers.letsencrypt.acme.dnsChallenge]
          # Replace by your provider (ovh, digitalocean, ...)
            provider = "ovh"
      # Environment staging
      [certificatesResolvers.letsencrypt-staging]
        [certificatesResolvers.letsencrypt-staging.acme]
          email = "your.email@company.fr"
          storage = "/certs/letsencrypt-staging.json"
          caServer = "https://acme-staging-v02.api.letsencrypt.org/directory"
          [certificatesResolvers.letsencrypt-staging.acme.dnsChallenge]
          # Same here
            provider = "ovh"
...
```

#### Dans le fichier <code>Deployment.yaml</code>,

Modifier les variables d'environnements par celles données par votre provider. Cela permettra de renouveler automatiquement le certificat SSL.

La liste des providers supportés par traefik est disponible ici: [doc.traefik.io/traefik/https/acme/#providers](https://doc.traefik.io/traefik/https/acme/#providers).

Commenter toute les parties liées au volume traefik-certs, qui permettra de stocker le certificat SSL.

```yaml
...
spec:
    serviceAccountName: traefik-ingress
    containers:
    - name: traefik
    image: traefik:2.3
    env:
    - name: OVH_ENDPOINT
        value: <your_endpoint>
    - name: OVH_APPLICATION_KEY
        value: <your_key>
    - name: OVH_APPLICATION_SECRET
        value: <your_app_key>
    - name: OVH_CONSUMER_KEY
        value: <your_consumer_key>
    args:
    - --configFile=/config/traefik.toml
    volumeMounts:
    - name: traefik-config
        mountPath: /config/
    - name: traefik-custom
        mountPath: /custom/
    # - name: traefik-certs
        # mountPath: /certs/
    ports:
    - name: http
        containerPort: 80
    - name: https
        containerPort: 443
    - name: dashboard
        containerPort: 8080
    volumes:
    - name: traefik-config
    configMap:
        name: traefik-config
    - name: traefik-custom
    configMap:
        name: traefik-custom
    # - name: traefik-certs
    # persistentVolumeClaim:
        # claimName: traefik-certs
...
```

#### Dans le fichier <code>Service.yaml</code>,

Vérifier que les services aient le type LoadBalancer (et non NodePort).

### Lancement de l'outil

Maintenant que la configuration est terminée nous pouvons appliquer tous les fichiers de configuration présent dans le dossier.
```
cd ..
sudo kubectl apply -f traefik/
```

## Création d'IngressRoute personnalisée

Les IngressRoute permettent à vos services d'être accessibles depuis l'exterieur de votre réseau en fonction de règles définies (généralement le nom de domaine).

Une seule IngressRoute doit exister par service, mais celle-ci peut comporter plusieurs règles à l'intérieur.

Si votre IngressRoute dispose d'un certificat SSL, décommenter les parties dans <code>spec</code> correspondantes.

```yaml
apiVersion: traefik.containo.us/v1alpha1
kind: IngressRoute
metadata:
  name: <your_service>-ingress
  namespace: <your_service_namespace>
spec:
  entrypoints:
  - http
  # - https
  routes:
  - match: Host(`custom.domain.com`)
    kind: Rule
    services:
    - name: <your_service>
      port: 3000
  # tls:
    # certResolver: letsencrypt
```

## Sauvegarde du certificat SSL

Si vous disposez d'un certificat, il est important de le stocker dans un stockage distribué.

Une fois longhorn (ou autre système de stockage) installé, créer un fichier de pvc.

```bash
sudo nano PVC-traefik-certs.yaml
```

Ne pas oublier de changer le storageClassName en fonction de votre système de stockage (ex: longhorn, rook-cephfs, ...)
```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: traefik-certs
  namespace: kube-system
  labels:
    app: traefik-ingress
spec:
  accessModes:
  - ReadWriteMany
  storageClassName: longhorn
  resources:
    requests:
      storage: 32Mi
```

Décommenter dans le fichier ConfigMap.yaml la partie [certificatesResolvers]

Décommenter dans le fichier Deployment.yml toute les parties liées au volume traefik-certs dans volumeMounts et volumes.

Féliciations :tada: !! L'installation de Traefik est finie (c'est l'une des étapes les plus compliqués, vous avez bien progressé).