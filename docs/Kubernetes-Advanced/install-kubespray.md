---
id: install-kubespray
title: Install Kubespray
---
Nous allons installer un cluster master-master kubernetes avec kubespray.
La configuration permettra également d'ajouter toutes les nodes voulues au cluster.

Dans notre exemple, notre réseau comportera:

* 3 masters
* 3 nodes

Chaque machine doit être initialisé avec la configuration disponible [ici](./setup-vm.md).

## Installation de Kubespray

Ces étapes sont à faire sur la machine Master uniquement.

### Récupération de l'outil

Téléchager la dernière version de Kubespray directement depuis le repo officiel.
```bash
git clone https://github.com/kubernetes-sigs/kubespray.git
sudo apt install -y python3-pip
cd kubespray
pip3 install -r requirements.txt
```

### Environnement de travail

Copier l'intégralité des fichiers de configuration par défaut dans un nouveau dossier <code>mycluster</code>. Ce dossier comportera toutes les modifications spécifiques de notre cluster.
```bash
cp -rfp inventory/sample inventory/mycluster
```

Ne pas oublier d'ajouter le dossier `/home/<user>/.local/bin` dans le PATH pour pouvoir lancer la commande <code>ansible-playbook</code>.

## Création du cluster

Ces étapes sont à faire sur la machine Master uniquement.

### Configuration

Déclaration des IPs constituant le futur cluster.
```bash
declare -a IPS=(192.168.4.201 192.168.4.202 192.168.4.203 192.168.4.204 192.168.4.205 192.168.4.206)
```

Création du fichier hosts.ini
```bash
sudo nano inventory/mycluster/hosts.ini
```

Dans ce fichier, déclarer les machines constituant le cluster et attribuer leurs roles.
```yaml
[all]
master1 ansible_host=192.168.4.201 etcd_member_name=etcd1
master2 ansible_host=192.168.4.202 etcd_member_name=etcd2
master3 ansible_host=192.168.4.203 etcd_member_name=etcd3

node1 ansible_host=192.168.4.204
node2 ansible_host=192.168.4.205
node3 ansible_host=192.168.4.206

[kube_control_plane]
master1
master2
master3

[etcd]
master1
master2
master3

[kube-node]
node1
node2
node3

[k8s-cluster:children]
kube_control_plane
kube-node
```

Création d'une public private key le master 1
```bash
ssh-keygen
```

Copier la clé ssh sur les autres serveurs (ne pas oublier de la faire avec l'ip du serbeur master lui même)
```bash
ssh-copy-id -i ~/.ssh/id_rsa.pub jules@192.168.4.201
```

### Installation

Création du cluster
```bash
ansible-playbook -i inventory/mycluster/hosts.ini --become --become-user=root cluster.yml -v --private-key=~/.ssh/id_rsa --extra-vars="ansible_become_pass=<yourStr0ngP@assword>"
```

Si lors du processus une erreur apparait, il faut réinitialiser le cluster avant de le reconfigurer
```bash
ansible-playbook -i inventory/mycluster/hosts.ini --become --become-user=root reset.yml -v --private-key=~/.ssh/id_rsa --extra-vars="ansible_become_pass=<yourStr0ngP@assword>"
```

Féliciations :tada: !! Votre cluster avec Kubespray est terminé.