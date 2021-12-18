module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'intro'
    },
    {
      type: 'category',
      label: 'Kubernetes Basic',
      collapsed: true,
      link: {
        type: 'generated-index',
        title: 'Kubernetes Basic',
        description: 'Learn about the most important Kubernetes Basic concepts!',
        slug: '/Kubernetes-Basic',
      },
      items: [
        {
          'Installation & Configuration' : [
            'Kubernetes/install_&_configuration/1_install_VM',
            'Kubernetes/install_&_configuration/2_install_Master',
            'Kubernetes/install_&_configuration/3_install_Node',
            'Kubernetes/install_&_configuration/4_use_Kubectl',
            'Kubernetes/install_&_configuration/5_application_deployement',
            'Kubernetes/install_&_configuration/6_manifest'
          ],
        },
        {
          'Management APIServer & Pods' : [
            'Kubernetes/management_APIServer_&_Pod/1_API_Server',
            'Kubernetes/management_APIServer_&_Pod/2_API_Groups',
            'Kubernetes/management_APIServer_&_Pod/3_API_Version',
            'Kubernetes/management_APIServer_&_Pod/4_API_Request',
            'Kubernetes/management_APIServer_&_Pod/5_0_Organizing_Objects',
            'Kubernetes/management_APIServer_&_Pod/5_1_Namespaces',
            'Kubernetes/management_APIServer_&_Pod/5_2_Labels',
            'Kubernetes/management_APIServer_&_Pod/5_3_Annotations',
            'Kubernetes/management_APIServer_&_Pod/6_0_Pods',
            'Kubernetes/management_APIServer_&_Pod/6_1_Single_Pods',
            'Kubernetes/management_APIServer_&_Pod/6_2_Multi_Pods'
          ],
        },
        {
          'Kubernetes Storage & Scheduling' : [
            'Kubernetes/kubernetes_storage_&_scheduling/1_Persistent_storage',
            'Kubernetes/kubernetes_storage_&_scheduling/2_Define_PV_&_PVC',
            'Kubernetes/kubernetes_storage_&_scheduling/3_Configure_server_storage',
            'Kubernetes/kubernetes_storage_&_scheduling/4_Storage_Class',
            'Kubernetes/kubernetes_storage_&_scheduling/5_0_Pods_with_env',
            'Kubernetes/kubernetes_storage_&_scheduling/5_1_Env_variables',
            'Kubernetes/kubernetes_storage_&_scheduling/5_2_Secrets',
            'Kubernetes/kubernetes_storage_&_scheduling/5_3_ConfigMaps',
            'Kubernetes/kubernetes_storage_&_scheduling/6_Access_to_private_registry',
            'Kubernetes/kubernetes_storage_&_scheduling/7_Scheduling',
            'Kubernetes/kubernetes_storage_&_scheduling/8_0_Control_scheduling',
            'Kubernetes/kubernetes_storage_&_scheduling/8_1_Node_Selector',
            'Kubernetes/kubernetes_storage_&_scheduling/8_2_Affinity_Anti-Affinity',
            'Kubernetes/kubernetes_storage_&_scheduling/8_3_Taints_&_Tolerations',
            'Kubernetes/kubernetes_storage_&_scheduling/8_4_Node_Cordining',
            'Kubernetes/kubernetes_storage_&_scheduling/8_5_Manually_Scheduling'
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Kubernetes Advanced',
      collapsed: true,
      link: {
        type: 'generated-index',
        title: 'Kubernetes Advanced',
        description: 'Learn about the most important Kubernetes Advanced concepts!',
        slug: '/Kubernetes-Advanced',
      },
      items: [
        'Kubernetes-Advanced/setup-vm',
        'Kubernetes-Advanced/install-calico',
        'Kubernetes-Advanced/install-calico-beta',
        'Kubernetes-Advanced/install-kubespray',
        'Kubernetes-Advanced/install-metallb',
        'Kubernetes-Advanced/install-traefik',
        'Kubernetes-Advanced/install-longhorn',
      ]
    },
    {
      type: 'category',
      label: 'PostgreSQL',
      collapsed: true,
      link: {
        type: 'generated-index',
        title: 'PostgreSQL',
        description: 'Learn about the most important PostgreSQL concepts!',
        slug: '/PostgreSQL',
      },
      items: [
        'PostgreSQL/install-postgresql',
        'PostgreSQL/configure-master-slave'
      ]
    },
    {
      type: 'category',
      label: 'JavaScript',
      collapsed: true,
      link: {
        type: 'generated-index',
        title: 'JavaScript',
        description: 'Learn about the most important JavaScript concepts!',
        slug: '/JavaScript',
      },
      items: [
        'Javascript/mastering-arrays'
      ]
    },
    {
      type: 'category',
      label: 'Keycloak',
      collapsed: true,
      link: {
        type: 'generated-index',
        title: 'Keycloak',
        description: 'Learn about the most important Keycloak concepts!',
        slug: '/Keycloak',
      },
      items: [
        'Keycloak/install-keycloak',
        'Keycloak/domain-clustered-mode'
      ]
    }
  ]
};