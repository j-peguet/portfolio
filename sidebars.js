module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'intro'
    },
    {
      type: 'category',
      label: 'Kubernetes',
      collapsed: false,
      items: [
        {
          'Installation & Configuration' : [
            'Kubernetes/1_install_&_configuration/1_install_VM',
            'Kubernetes/1_install_&_configuration/2_install_Master',
            'Kubernetes/1_install_&_configuration/3_install_Node',
            'Kubernetes/1_install_&_configuration/4_use_Kubectl',
            'Kubernetes/1_install_&_configuration/5_application_deployement',
            'Kubernetes/1_install_&_configuration/6_manifest'
          ],
        },
        {
          'Management APIServer & Pods' : [
            'Kubernetes/2_management_APIServer_&_Pod/1_API_Server',
            'Kubernetes/2_management_APIServer_&_Pod/2_API_Groups',
            'Kubernetes/2_management_APIServer_&_Pod/3_API_Version',
            'Kubernetes/2_management_APIServer_&_Pod/4_API_Request',
            'Kubernetes/2_management_APIServer_&_Pod/5_0_Organizing_Objects',
            'Kubernetes/2_management_APIServer_&_Pod/5_1_Namespaces',
            'Kubernetes/2_management_APIServer_&_Pod/5_2_Labels',
            'Kubernetes/2_management_APIServer_&_Pod/5_3_Annotations',
            'Kubernetes/2_management_APIServer_&_Pod/6_0_Pods',
            'Kubernetes/2_management_APIServer_&_Pod/6_1_Single_Pods',
            'Kubernetes/2_management_APIServer_&_Pod/6_2_Multi_Pods'
          ],
        },
        {
          'Kubernetes Storage & Scheduling' : [
            'Kubernetes/3_kubernetes_storage_&_scheduling/1_Persistent_storage',
            'Kubernetes/3_kubernetes_storage_&_scheduling/2_Define_PV_&_PVC',
            'Kubernetes/3_kubernetes_storage_&_scheduling/3_Configure_server_storage',
            'Kubernetes/3_kubernetes_storage_&_scheduling/4_Storage_Class',
            'Kubernetes/3_kubernetes_storage_&_scheduling/5_0_Pods_with_env',
            'Kubernetes/3_kubernetes_storage_&_scheduling/5_1_Env_variables',
            'Kubernetes/3_kubernetes_storage_&_scheduling/5_2_Secrets',
            'Kubernetes/3_kubernetes_storage_&_scheduling/5_3_ConfigMaps',
            'Kubernetes/3_kubernetes_storage_&_scheduling/6_Access_to_private_registry',
            'Kubernetes/3_kubernetes_storage_&_scheduling/7_Scheduling',
            'Kubernetes/3_kubernetes_storage_&_scheduling/8_0_Control_scheduling',
            'Kubernetes/3_kubernetes_storage_&_scheduling/8_1_Node_Selector',
            'Kubernetes/3_kubernetes_storage_&_scheduling/8_2_Affinity_Anti-Affinity',
            'Kubernetes/3_kubernetes_storage_&_scheduling/8_3_Taints_&_Tolerations',
            'Kubernetes/3_kubernetes_storage_&_scheduling/8_4_Node_Cordining',
            'Kubernetes/3_kubernetes_storage_&_scheduling/8_5_Manually_Scheduling'
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'PostgreSQL',
      collapsed: true,
      items: [
        'PostgreSQL/configure-master-slave'
      ]
    },
    {
      type: 'link',
      label: 'Custom Label', // The label that should be displayed (string).
      href: 'https://example.com' // The target URL (string).
    }
  ]
};
