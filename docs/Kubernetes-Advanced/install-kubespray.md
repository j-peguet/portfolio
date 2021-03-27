---
id: install-kubespray
title: Install Kubespray
---
:::danger
Cette page n'est pas complète et contient peut être des informations erronées.
::: 

## Install Kubespray
setup 3 machines master (avec lien kuber de base)

Install de kubespray (sur le master 1)
```bash
git clone https://github.com/kubernetes-sigs/kubespray.git
sudo apt install -y python3-pip
cd kubespray
pip3 install -r requirements.txt
cp -rfp inventory/sample inventory/mycluster
```

Ne pas oublier d'ajouter le dossier <code>/home/jules/.local/bin</code> dans le PATH

Déclaration des IPs du cluster
```bash
declare -a IPS=(192.168.1.20 192.168.1.21 192.168.1.22 192.168.1.24 192.168.1.26)
```

Création du fichier hosts.ini
```bash
sudo nano inventory/mycluster/hosts.ini
```

```yaml
# ## Configure 'ip' variable to bind kubernetes services on a
# ## different ip than the default iface
# ## We should set etcd_member_name for etcd cluster. The node that is not a etcd member do not need to set the value, or can set the empty string value.
[all]
# node1 ansible_host=95.54.0.12  # ip=10.3.0.1 etcd_member_name=etcd1
master1 ansible_host=192.168.1.20
master2 ansible_host=192.168.1.21
master3 ansible_host=192.168.1.22

node1 ansible_host=192.168.1.24
node2 ansible_host=192.168.1.26

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

[k8s-cluster:children]
kube_control_plane
kube-node
```

creation d'une public private key le master 1

```bash
ssh-keygen
```

copie de la clé pub sur les autres serveurs (ne pas oublier de la faire avec l'ip du serbeur master lui même => si kubespray est installé sur un autre master)
```bash
ssh-copy-id -i ~/.ssh/id_rsa.pub jules@192.168.1.24
```

```bash
cd ~/kubespray
```

```bash
ansible-playbook -i inventory/mycluster/hosts.ini cluster.yml -b -v --private-key=~/.ssh/id_rsa --extra-vars="ansible_become_pass=<yourStr0ngP@assword>"
ansible-playbook -i inventory/mycluster/hosts.ini --become --become-user=root cluster.yml -v --private-key=~/.ssh/id_rsa --extra-vars="ansible_become_pass=<yourStr0ngP@assword>"
```