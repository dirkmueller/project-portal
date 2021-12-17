
export interface ProjectT {
  isEnable: boolean,
  tag: string,
  name: string,
  description: string,
  repositoryURL: string,
  documentationURL: string,
}

export const PROJECTS = [
  {
    isEnable: true,
    tag: 'operations',
    name: 'aliyun-img-utils',
    description: 'Command line utility and API for publishing images in the Aliyun Cloud',
    repositoryURL: 'github.com/SUSE-Enceladus/aliyun-img-utils',
    documentationURL: '#',
  },
  {
    isEnable: true,
    tag: 'storage',
    name: 'Aquarium',
    description: 'Build rock-solid easy-to-use Ceph applications',
    repositoryURL: 'github.com/aquarist-labs/aquarium',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'AutoK3s',
    description: 'Kubernetes offering to replace the "full-fat" K8s',
    repositoryURL: 'github.com/cnrancher/autok3s',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'azuremetadata',
    description: 'Collect metadata for an instance in Azure',
    repositoryURL: 'github.com/SUSE-Enceladus/azuremetadata',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'development',
    name: 'blue-horizon',
    description: 'Web-based UI for terraforming the public cloud',
    repositoryURL: 'github.com/SUSE-Enceladus/blue-horizon',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'development',
    name: 'Cavil',
    description: 'The legal review app used by SUSE Lawyers',
    repositoryURL: 'github.com/openSUSE/cavil',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'Combustion',
    description: 'A dracut module which runs a user provided script on first boot',
    repositoryURL: 'en.opensuse.org/Portal:MicroOS/Combustion',
    documentationURL: '',
  },
  {
    isEnable: false,
    tag: 'security',
    name: 'ComplianceAsCode',
    description: '',
    repositoryURL: 'github.com/SUSE/ComplianceAsCodeContent/',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'cscreen',
    description: 'Run multiple consoles in one screen session',
    repositoryURL: 'github.com/openSUSE/cscreen',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'ec2metadata',
    description: 'Collect metadata for an instance in an Amazon EC2 guest instance',
    repositoryURL: 'github.com/SUSE-Enceladus/ec2metadata',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'ec2imgutils',
    description: 'A command line utility to deprecate images in Amazon EC2',
    repositoryURL: 'github.com/SUSE-Enceladus/ec2imgutils	',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'development',
    name: 'Epinio',
    description: 'Application development engine for Kubernetes',
    repositoryURL: 'epinio.io',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'Fleet',
    description: 'A GitOps container management and deployment engine',
    repositoryURL: 'fleet.rancher.io',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'AI/ML',
    name: 'FuseML',
    description: 'Orchestration engine for MLOps',
    repositoryURL: 'fuseml.github.io',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'gcemetadata',
    description: 'Collect meta data in an Google Compute Engine instance',
    repositoryURL: 'github.com/SUSE-Enceladus/gcemetadata',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'gceimgutils',
    description: 'A collection of utilities for image management in Google Compute Engine',
    repositoryURL: 'github.com/SUSE-Enceladus/gceimgutils	',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'gfxboot',
    description: 'Graphical boot screen for GRUB, LILO, and SYSLINUX',
    repositoryURL: 'github.com/openSUSE/gfxboot',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'infrastructure',
    name: 'Harvester',
    description: 'Hyperconverged infrastructure solution for a cloud native world',
    repositoryURL: 'harvesterhci.io',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'education',
    name: 'HobbyFarm',
    description: 'Browser-based cloud systems learning tool',
    repositoryURL: 'github.com/hobbyfarm',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'hwinfo',
    description: 'Support tool to generate a system overview',
    repositoryURL: 'github.com/openSUSE/hwinfo',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'Hypper',
    description: 'Kubernetes package management for cluster admins',
    repositoryURL: 'hypper.io',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'development',
    name: 'img-proof',
    description: 'Command line utility to test images in the Public Cloud',
    repositoryURL: 'github.com/SUSE-Enceladus/img-proof',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'infrastructure',
    name: 'Jangouts',
    description: 'Video conferencing based on WebRTC and the excellent Janus Gateway',
    repositoryURL: 'github.com/jangouts/jangouts#readme',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operating-systems',
    name: 'jeos-firstboot',
    description: 'Lightweight firstboot wizard systemd service for SLE and openSUSE JeOS Images',
    repositoryURL: 'github.com/openSUSE/jeos-firstboot',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operating-systems',
    name: 'K3OS',
    description: 'Kubernetes operating system',
    repositoryURL: 'k3os.io',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'kubernetes',
    name: 'K3S',
    description: 'Kubernetes distribution built for IoT & Edge computing',
    repositoryURL: 'k3s.io',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'development',
    name: 'kanku',
    description: 'Kiwi image integration for OBS',
    repositoryURL: 'm0ses.github.io/kanku',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'development',
    name: 'keg',
    description: 'Tool to produce kiwi image descriptions',
    repositoryURL: 'github.com/SUSE-Enceladus/keg',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'kubernetes',
    name: 'kim',
    description: 'Kubernetes image manager',
    repositoryURL: 'github.com/rancher/kim',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'development',
    name: 'kiwi',
    description: 'OS image and appliance builder',
    repositoryURL: 'github.com/OSInside/kiwi',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'development',
    name: 'klp-ccp',
    description: 'Automate source based Linux kernel live patch creation',
    repositoryURL: 'github.com/SUSE/klp-ccp',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'security',
    name: 'Kubewarden',
    description: 'Policy engine for Kubernetes',
    repositoryURL: 'kubewarden.io',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operating-systems',
    name: 'Kubic',
    description: 'Certified Kubernetes distribution',
    repositoryURL: 'kubic.opensuse.org',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'security',
    name: 'kucero',
    description: 'Kubernetes daemonset that performs automatic Kubernetes control plane certificate rotation',
    repositoryURL: 'github.com/SUSE/kucero',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'development',
    name: 'libeconf',
    description: 'Enhanced config file parser',
    repositoryURL: 'github.com/openSUSE/libeconf',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'development',
    name: 'libpulp',
    description: 'Framework which enables userspace live patching',
    repositoryURL: 'github.com/SUSE/libpulp',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'development',
    name: 'libsolv',
    description: 'Powerful package dependency solver and repository storage system',
    repositoryURL: 'https://en.opensuse.org/openSUSE:Libzypp_satsolver',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'storage',
    name: 'libstorage-ng',
    description: 'Next generation storage module for YaST',
    repositoryURL: 'yast.opensuse.org',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'storage',
    name: 'Longhorn',
    description: 'Cloud native distributed block storage for Kubernetes',
    repositoryURL: 'longhorn.io',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'development',
    name: 'mash',
    description: 'Python3 service based processes for Image Release automation into Amazon EC2, Google Compute Engine and Microsoft Azure',
    repositoryURL: 'github.com/SUSE-Enceladus/mash',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'development',
    name: 'mash-client',
    description: 'Command line utility to interface with the MASH server REST API',
    repositoryURL: 'github.com/SUSE-Enceladus/mash-client',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'development',
    name: 'MirrorCache',
    description: 'A server for downloading files from a mirror',
    repositoryURL: 'github.com/openSUSE/MirrorCache',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'development',
    name: 'obsgit',
    description: 'A simple bridge between Open Build Server and git',
    repositoryURL: 'github.com/openSUSE/obsgit',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'development',
    name: 'Open Build Service',
    description: 'Tool to build and distribute binary packages from source',
    repositoryURL: 'openbuildservice.org',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'development',
    name: 'Open Build Service Connector',
    description: 'Visual Studio Code extension for integration with OBS',
    repositoryURL: 'marketplace.visualstudio.com/items?itemName=SUSE.open-build-service-connector',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'development',
    name: 'openQA',
    description: 'Automated testing tool for Linux operating systems',
    repositoryURL: 'open.qa',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operating-systems',
    name: 'openSUSE Leap',
    description: 'Stable, easy-to-use, multi-purpose Linux distribution',
    repositoryURL: 'en.opensuse.org/Portal:Distribution',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operating-systems',
    name: 'openSUSE MicroOS',
    description: 'Environment for deploying Containers and workloads with transactional updates',
    repositoryURL: 'microos.opensuse.org',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operating-systems',
    name: 'openSUSE Tumbleweed',
    description: 'Rolling release Linux distribution',
    repositoryURL: 'en.opensuse.org/Portal:Tumbleweed',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'Opni',
    description: 'AIOps for Kubernetes with logging and monitoring',
    repositoryURL: 'opni.io',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'AI/ML',
    name: 'Phoebe',
    description: '',
    repositoryURL: 'github.com/SUSE/phoebe/wiki',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'infrastructure',
    name: 'public-cloud-info-service',
    description: 'Lookup Public Cloud images and services information via REST API',
    repositoryURL: 'github.com/SUSE-Enceladus/public-cloud-info-service',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'networking',
    name: 'Prometheus Webhook SNMP',
    description: 'Prometheus Alertmanager receiver that translates incoming notifications into SNMP v2c traps',
    repositoryURL: 'github.com/SUSE/prometheus-webhook-snmp',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'Rancher',
    description: 'Kubernetes as a service',
    repositoryURL: 'rancher.com',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'Rancher Desktop',
    description: 'Kubernetes desktop application for Mac, Windows and Linux',
    repositoryURL: 'rancherdesktop.io',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'development',
    name: 'Rio',
    description: 'Application deployment engine for Kubernetes',
    repositoryURL: 'rio.io',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'kubernetes',
    name: 'RKE',
    description: 'Lorem impsum doe john text hello lorem ipsum doe',
    repositoryURL: 'rancher.com/products/rke',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'kubernetes',
    name: 'RKE Government',
    description: 'Lorem impsum doe john text hello lorem ipsum doe',
    repositoryURL: 'docs.rke2.io',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'Repository Mirroring Tool (RMT)',
    description: 'Lorem impsum doe john text hello lorem ipsum doe',
    repositoryURL: 'github.com/SUSE/rmt',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'service-access-config',
    description: 'Lorem impsum doe john text hello lorem ipsum doe',
    repositoryURL: 'github.com/SUSE-Enceladus/service-access-config',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'Snapper',
    description: 'Lorem impsum doe john text hello lorem ipsum doe',
    repositoryURL: 'snapper.io',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'networking',
    name: 'Submariner',
    description: 'Lorem impsum doe john text hello lorem ipsum doe',
    repositoryURL: 'submariner.io',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'supportutils',
    description: 'Lorem impsum doe john text hello lorem ipsum doe',
    repositoryURL: 'github.com/openSUSE/supportutils',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'transactional-update',
    description: 'Lorem impsum doe john text hello lorem ipsum doe',
    repositoryURL: 'microos.opensuse.org',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'Trento',
    description: 'Lorem impsum doe john text hello lorem ipsum doe',
    repositoryURL: 'trento-project.io',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'Uyuni',
    description: 'Lorem impsum doe john text hello lorem ipsum doe',
    repositoryURL: 'uyuni-project.org',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'development',
    name: 'venvjail',
    description: 'Lorem impsum doe john text hello lorem ipsum doe',
    repositoryURL: 'github.com/openSUSE/venvjail',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'infrastructure',
    name: 'vhostmd',
    description: 'Lorem impsum doe john text hello lorem ipsum doe',
    repositoryURL: 'github.com/vhostmd/vhostmd',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'RKE Cluster Linter for VS Code',
    description: 'Lorem impsum doe john text hello lorem ipsum doe',
    repositoryURL: 'marketplace.visualstudio.com/items?itemName=dancermak.vscode-rke-cluster-config',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'networking',
    name: 'wicked',
    description: 'Lorem impsum doe john text hello lorem ipsum doe',
    repositoryURL: 'en.opensuse.org/Portal:Wicked',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'kubernetes',
    name: 'wins',
    description: 'Lorem impsum doe john text hello lorem ipsum doe',
    repositoryURL: 'github.com/rancher/wins',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'Yomi',
    description: 'Lorem impsum doe john text hello lorem ipsum doe',
    repositoryURL: 'github.com/openSUSE/yomi',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'Zypper',
    description: 'Lorem impsum doe john text hello lorem ipsum doe',
    repositoryURL: 'en.opensuse.org/Portal:Zypper',
    documentationURL: '',
  },

]

// Dynamicly generated tags
const _tags = PROJECTS.map(ele => ele.tag)
export const CATEGORIES = [...new Set(_tags)]
