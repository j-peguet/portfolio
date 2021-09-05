---
id: install-metallb
title: Install MetalLB
---

MetalLB est un service de load-balancer pour cluster bare metal Kubernetes.

Il permet de configurer un service load balancer avec les services qui seront déployés sur le cluster. 
Ce service permet de compenser les inconvénients des outils "NodePort" et "externalIPs", qui limitent une bonne utilistion en production.

Lien vers la documentation officielle: https://metallb.universe.tf/installation/

## Installation de MetalLB

Ces étapes sont à faire sur la machine Master uniquement.

### Prérequis

Si vous utiliser kube-proxy en mode IPVS, depuis Kubernetes v1.14.2 il faut obligatoirement activer le mode <code>strictARP</code>.

```bash
sudo kubectl edit configmap -n kube-system kube-proxy
```

Et modifier les lignes suivantes: 
```yaml
apiVersion: kubeproxy.config.k8s.io/v1alpha1
kind: KubeProxyConfiguration
mode: "ipvs"
ipvs:
  strictARP: true
```

### Récupération de l'outil

Nous allons créer un dossier contenant les fichiers de configuration de MetalLB. Puis télécharger et exécuter les fichiers yaml.

```bash
mkdir metallb
cd metallb
wget https://raw.githubusercontent.com/metallb/metallb/v0.9.6/manifests/namespace.yaml
wget https://raw.githubusercontent.com/metallb/metallb/v0.9.6/manifests/metallb.yaml

sudo kubectl apply -f namespace.yaml
sudo kubectl apply -f metallb.yaml
```

Si c'est la première fois que vous installer MetalLB sur le cluster, il faut créer un secret spécifique (cette action n'est donc pas à faire en cas de réinstallation ou de mise à jour).
```bash
sudo kubectl create secret generic -n metallb-system memberlist --from-literal=secretkey="$(openssl rand -base64 128)"
```

Pour controler que l'installation c'est correctement déroulée: 
```bash
sudo kubectl get pods -n  metallb-system -o wide
```

La réponse de l'exécution doit donner:
* 1 controller
* 1 speaker par node

Tous les pods doivent avoir le status *running*.

![metallb pods](./assets/metallb-pods.png)

## Configuration

Dans ce tuto nous allons utiliser la configuration la plus simple à mettre en place: <code>layer2</code>.
D'autres configurations sont disponibles [ici](https://metallb.universe.tf/configuration/) (ex: BGP).

Il suffit de créer un fichier metallb-config.yaml.

```bash
sudo nano metallb-config.yaml
```
Et de modifier la range IP selon votre reseau.
```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  namespace: metallb-system
  name: config
data:
  config: |
    address-pools:
    - name: default
      protocol: layer2
      addresses:
      - 192.168.4.150-192.168.4.180
```

Et d'appliquer le fichier.
```bash
sudo kubectl apply -f metallb-config.yaml
```

Féliciations :tada: !! L'installation de MetalLB est finie (avouez que c'est plutôt simple).

## Utilisation

Pour bénéficier de l'attribution automatique d'IP (attribution d'une externalIp) de MetalLB il suffit simplement de renseigner dans votre service Kubernetes le type <code>LoadBalancer</code>.

Comme dans l'exemple ci dessous.

```yaml
apiVersion: v1
kind: Service
metadata:
  name: your-service
spec:
  ports:
  - name: http
    port: 3000
    targetPort: 3000
  selector:
    app: your-app
  type: LoadBalancer
```