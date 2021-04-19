---
id: setup-vm
title: Setup VM
---

Une configuration différente du tuto [Getting and Installing Kubernetes on Ubuntu VMs](../Kubernetes/1_install_&_configuration/1_install_VM.md) va être utilisé.

L'idéal est de partir de machines vierges.

Ces étapes sont à faire sur toutes les machines constituant le cluster (les Masters et les Nodes).

### Installation des packages

Update des packages <code>apt</code>.
```bash
sudo apt-get update
sudo apt-get install -y apt-transport-https ca-certificates curl
```

Ajout de la clé publique Google et du repository Kubernetes.
```bash
sudo curl -fsSLo /usr/share/keyrings/kubernetes-archive-keyring.gpg https://packages.cloud.google.com/apt/doc/apt-key.gpg
echo "deb [signed-by=/usr/share/keyrings/kubernetes-archive-keyring.gpg] https://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee /etc/apt/sources.list.d/kubernetes.list
```

Mise à jour de l'index apt et installation des packages kubelet, kubeadm, kubectl et docker.io.
Ne pas oublier de bloquer la version des packages.
```bash
sudo apt-get update
sudo apt-get install -y kubelet kubeadm kubectl docker.io
sudo apt-mark hold kubelet kubeadm kubectl docker.io
```

### Modification des Nodes

Dans le fichier <code>/etc/sysctl.conf</code>, décommenter la ligne <code>net.ipv4.ip_forward=1</code>. Afin de permettre la communication et la répartition des pods entres les nodes.
```bash
sudo nano /etc/sysctl.conf
```

Pour installer kubernetes il faut impérativement désactiver le swap de la machine.
```bash
sudo swapoff -a
```

Et modifier le fichier <code>/etc/fstab</code> pour interdire à la machine de monter le Swap lors du boot.
Commenter la ligne <code>/swap.img     none    swap    sw      0       0</code> (exemple pour Debian).
```bash
sudo nano /etc/fstab
```

Reboot de la VM.
```bash
sudo reboot
```