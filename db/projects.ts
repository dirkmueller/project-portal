export interface ProjectT {
  isEnable: boolean
  tag: string
  name: string
  description: string
  repositoryURL: string
  documentationURL: string
}

export const PROJECTS = [
  {
    isEnable: true,
    tag: 'operations',
    name: 'aliyun-img-utils',
    description: 'Command line utility and API for publishing images in the Aliyun Cloud',
    repositoryURL: 'https://github.com/SUSE-Enceladus/aliyun-img-utils',
    documentationURL: '#',
  },
  {
    isEnable: false,
    tag: 'storage',
    name: 'S3 Gateway',
    description: "Easy-to-use Open Source and Cloud Native S3 service for use on Rancher's Kubernetes",
    repositoryURL: 'https://github.com/aquarist-labs/s3gw',
    documentationURL: 'https://s3gw-docs.readthedocs.io/en/latest/',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'AutoK3s',
    description: 'Kubernetes offering to replace the "full-fat" K8s',
    repositoryURL: 'https://github.com/cnrancher/autok3s',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'development',
    name: 'aws-regions',
    description: 'Utility for AWS region handling',
    repositoryURL: 'https://github.com/cnrancher/autok3s',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'development',
    name: 'azure-img-utils',
    description: 'Utilities to help with Azure image management',
    repositoryURL: 'https://github.com/SUSE-Enceladus/azure-img-utils',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'azure-li-services',
    description: 'System initialization for Azure LI and HLI systems',
    repositoryURL: 'https://github.com/SUSE-Enceladus/azure-li-services',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'azuremetadata',
    description: 'Collect metadata for an instance in Azure',
    repositoryURL: 'https://github.com/SUSE-Enceladus/azuremetadata',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'development',
    name: 'blue-horizon',
    description: 'Web-based UI for terraforming the public cloud',
    repositoryURL: 'https://github.com/SUSE-Enceladus/blue-horizon',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'development',
    name: 'Cavil',
    description: 'The legal review app used by SUSE Lawyers',
    repositoryURL: 'https://github.com/openSUSE/cavil',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'development',
    name: 'clang-extract',
    description: 'A tool to extract code content from source files using the clang and LLVM infrastructure',
    repositoryURL: 'https://github.com/SUSE/clang-extract',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'cloud-init',
    description: 'Instance initialization code',
    repositoryURL: 'https://github.com/canonical/cloud-init',
    documentationURL: 'https://cloudinit.readthedocs.io/en/latest/',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'cloud-netconfig',
    description: 'Automated handling of additional network interfaces in cloud instances',
    repositoryURL: 'https://github.com/SUSE-Enceladus/cloud-netconfig',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'cloud-regionsrv',
    description: 'Region server implementation to build a cloud framework independent update infrastructure',
    repositoryURL: 'https://github.com/SUSE-Enceladus/cloud-regionsrv',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'cloud-regionsrv-client',
    description: 'Register SUSE Linux Enterprise inatance to the update infrastructure in the Public Cloud',
    repositoryURL: 'https://github.com/SUSE-Enceladus/cloud-regionsrv-client',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'Combustion',
    description: 'A dracut module which runs a user provided script on first boot',
    repositoryURL: 'https://en.opensuse.org/Portal:MicroOS/Combustion',
    documentationURL: '',
  },
  {
    isEnable: false,
    tag: 'security',
    name: 'ComplianceAsCode',
    description: '',
    repositoryURL: 'https://complianceascode.github.io/',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'cscreen',
    description: 'Run multiple consoles in one screen session',
    repositoryURL: 'https://github.com/openSUSE/cscreen',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'dracut',
    description: 'Initramfs generator using udev',
    repositoryURL: 'https://github.com/openSUSE/dracut',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'ec2metadata',
    description: 'Collect metadata for an instance in an Amazon EC2 guest instance',
    repositoryURL: 'https://github.com/SUSE-Enceladus/ec2metadata',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'ec2imgutils',
    description: 'Utilities to help with Amazon EC2 image management',
    repositoryURL: 'https://github.com/SUSE-Enceladus/ec2imgutils',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'development',
    name: 'Epinio',
    description: 'Application development engine for Kubernetes',
    repositoryURL: 'https://epinio.io',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'Fleet',
    description: 'A GitOps container management and deployment engine',
    repositoryURL: 'https://fleet.rancher.io',
    documentationURL: '',
  },
  {
    isEnable: false,
    tag: 'AI/ML',
    name: 'FuseML',
    description: 'Orchestration engine for MLOps',
    repositoryURL: 'https://fuseml.github.io',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'gcemetadata',
    description: 'Collect meta data in an Google Compute Engine instance',
    repositoryURL: 'https://github.com/SUSE-Enceladus/gcemetadata',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'gceimgutils',
    description: 'Utilities to help with Google Compute Engine image management',
    repositoryURL: 'https://github.com/SUSE-Enceladus/gceimgutils',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'gfxboot',
    description: 'Graphical boot screen for GRUB, LILO, and SYSLINUX',
    repositoryURL: 'https://github.com/openSUSE/gfxboot',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'grub2',
    description: 'Bootloader with support for Linux, Multiboot and more',
    repositoryURL: 'https://github.com/openSUSE/grub2',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'infrastructure',
    name: 'Harvester',
    description: 'Hyperconverged infrastructure solution for a cloud native world',
    repositoryURL: 'https://harvesterhci.io',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'education',
    name: 'HobbyFarm',
    description: 'Browser-based cloud systems learning tool',
    repositoryURL: 'https://github.com/hobbyfarm',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'hwinfo',
    description: 'Support tool to generate a system overview',
    repositoryURL: 'https://github.com/openSUSE/hwinfo',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'Hypper',
    description: 'Kubernetes package management for cluster admins',
    repositoryURL: 'https://hypper.io',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'development',
    name: 'img-proof',
    description: 'Command line utility to test images in the Public Cloud',
    repositoryURL: 'https://github.com/SUSE-Enceladus/img-proof',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'infrastructure',
    name: 'Jangouts',
    description: 'Video conferencing based on WebRTC and the excellent Janus Gateway',
    repositoryURL: 'https://github.com/jangouts/jangouts#readme',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operating-systems',
    name: 'jeos-firstboot',
    description: 'Lightweight firstboot wizard systemd service for SLE and openSUSE JeOS Images',
    repositoryURL: 'https://github.com/openSUSE/jeos-firstboot',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operating-systems',
    name: 'K3OS',
    description: 'Kubernetes operating system',
    repositoryURL: 'https://k3os.io',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'kubernetes',
    name: 'K3S',
    description: 'Kubernetes distribution built for IoT & Edge computing',
    repositoryURL: 'https://k3s.io',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'development',
    name: 'kanku',
    description: 'Kiwi image integration for OBS',
    repositoryURL: 'https://m0ses.github.io/kanku',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'development',
    name: 'keg',
    description: 'Tool to produce kiwi image descriptions',
    repositoryURL: 'https://github.com/SUSE-Enceladus/keg',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'kubernetes',
    name: 'kim',
    description: 'Kubernetes image manager',
    repositoryURL: 'https://github.com/rancher/kim',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'development',
    name: 'kiwi',
    description: 'OS image and appliance builder',
    repositoryURL: 'https://github.com/OSInside/kiwi',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'development',
    name: 'klp-build',
    description: 'The kernel livepatching creation tool',
    repositoryURL: 'https://github.com/SUSE/klp-build',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'development',
    name: 'klp-ccp',
    description: 'Automate source based Linux kernel live patch creation',
    repositoryURL: 'https://github.com/SUSE/klp-ccp',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'security',
    name: 'Kubewarden',
    description: 'Policy engine for Kubernetes',
    repositoryURL: 'https://kubewarden.io',
    documentationURL: '',
  },
  {
    isEnable: false,
    tag: 'operating-systems',
    name: 'Kubic',
    description: 'Certified Kubernetes distribution',
    repositoryURL: 'https://kubic.opensuse.org',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'security',
    name: 'kucero',
    description: 'Kubernetes daemonset that performs automatic Kubernetes control plane certificate rotation',
    repositoryURL: 'https://github.com/SUSE/kucero',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'development',
    name: 'libeconf',
    description: 'Enhanced config file parser',
    repositoryURL: 'https://github.com/openSUSE/libeconf',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'development',
    name: 'libpulp',
    description: 'Framework which enables userspace live patching',
    repositoryURL: 'https://github.com/SUSE/libpulp',
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
    repositoryURL: 'https://yast.opensuse.org',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'infrastructure',
    name: 'libvirt',
    description: 'Libvirt provides a portable, long term stable API for managing virtualization technologies',
    repositoryURL: 'https://libvirt.org',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'storage',
    name: 'Longhorn',
    description: 'Cloud native distributed block storage for Kubernetes',
    repositoryURL: 'https://longhorn.io',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'development',
    name: 'mash',
    description: 'Python3 service based processes for Image Release automation into Amazon EC2, Google Compute Engine and Microsoft Azure',
    repositoryURL: 'https://github.com/SUSE-Enceladus/mash',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'development',
    name: 'mash-client',
    description: 'Command line utility to interface with the MASH server REST API',
    repositoryURL: 'https://github.com/SUSE-Enceladus/mash-client',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'development',
    name: 'MirrorCache',
    description: 'A server for downloading files from a mirror',
    repositoryURL: 'https://github.com/openSUSE/MirrorCache',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'monitoring',
    description: 'Monitoring plugins for update infrastructure monitoring',
    repositoryURL: 'https://github.com/SUSE-Enceladus/monitoring',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'development',
    name: 'obsgit',
    description: 'A simple bridge between Open Build Server and git',
    repositoryURL: 'https://github.com/openSUSE/obsgit',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'development',
    name: 'Open Build Service',
    description: 'Tool to build and distribute binary packages from source',
    repositoryURL: 'https://openbuildservice.org',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'development',
    name: 'obs-img-utils',
    description: 'Utility to handle image pulls from OBS',
    repositoryURL: 'https://github.com/SUSE-Enceladus/obs-img-utils',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'development',
    name: 'openQA',
    description: 'Automated testing tool for Linux operating systems',
    repositoryURL: 'https://open.qa',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operating-systems',
    name: 'openSUSE Leap',
    description: 'Stable, easy-to-use, multi-purpose Linux distribution',
    repositoryURL: 'https://en.opensuse.org/Portal:Distribution',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operating-systems',
    name: 'openSUSE MicroOS',
    description: 'Environment for deploying Containers and workloads with transactional updates',
    repositoryURL: 'https://microos.opensuse.org',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operating-systems',
    name: 'openSUSE Tumbleweed',
    description: 'Rolling release Linux distribution',
    repositoryURL: 'https://en.opensuse.org/Portal:Tumbleweed',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'Opni',
    description: 'AIOps for Kubernetes with logging and monitoring',
    repositoryURL: 'https://opni.io',
    documentationURL: '',
  },
  {
    isEnable: false,
    tag: 'AI/ML',
    name: 'Phoebe',
    description: 'Auto-tuning and self-healing for artificial intelligence on Linux',
    repositoryURL: 'https://github.com/SUSE/phoebe/wiki',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'public-cloud-info-client',
    description: 'CLI and API to query the public-cloud-info-service',
    repositoryURL: 'https://github.com/SUSE-Enceladus/public-cloud-info-client',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'public-cloud-info-client-ui',
    description: 'Web UI to represent the information provided by public-cloud-info-service',
    repositoryURL: 'https://github.com/SUSE-Enceladus/public-cloud-info-client-ui',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'infrastructure',
    name: 'public-cloud-info-service',
    description: 'Lookup Public Cloud images and services information via REST API',
    repositoryURL: 'https://github.com/SUSE-Enceladus/public-cloud-info-service',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'networking',
    name: 'Prometheus Webhook SNMP',
    description: 'Prometheus Alertmanager receiver that translates incoming notifications into SNMP v2c traps',
    repositoryURL: 'https://github.com/SUSE/prometheus-webhook-snmp',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'Rancher',
    description: 'Kubernetes as a service',
    repositoryURL: 'https://rancher.com',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'Rancher Desktop',
    description: 'Kubernetes desktop application for Mac, Windows and Linux',
    repositoryURL: 'https://rancherdesktop.io',
    documentationURL: '',
  },
  {
    isEnable: false,
    tag: 'development',
    name: 'Rio',
    description: 'Application deployment engine for Kubernetes',
    repositoryURL: 'https://rio.io',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'kubernetes',
    name: 'RKE',
    description: 'CNCF-certified Kubernetes distribution that runs entirely within Docker containers',
    repositoryURL: 'https://rancher.com/products/rke',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'kubernetes',
    name: 'RKE Government',
    description: 'Kubernetes distribution focused on security and compliance for the U.S. Government',
    repositoryURL: 'https://docs.rke2.io',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'Repository Mirroring Tool (RMT)',
    description: 'Repository mirroring tool and registration proxy',
    repositoryURL: 'https://github.com/SUSE/rmt',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'development',
    name: 'rpmlint',
    description: 'A tool for checking common errors in RPM packages',
    repositoryURL: 'https://github.com/rpm-software-management/rpmlint',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'service-access-config',
    description: 'Generate ACLs for a service',
    repositoryURL: 'https://github.com/SUSE-Enceladus/service-access-config',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'Snapper',
    description: 'The ultimate snapshot tool for Linux',
    repositoryURL: 'https://snapper.io',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'networking',
    name: 'Submariner',
    description: 'Direct networking between Pods and Services in different Kubernetes clusters, either on-premises or in the cloud',
    repositoryURL: 'https://submariner.io',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'supportutils',
    description: 'SUSE Linux Enterprise support utility to gather system information',
    repositoryURL: 'https://github.com/openSUSE/supportutils',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'supportutils-plugin-suse-public-cloud',
    description: 'SUSE Linux Enterprise support utility to gather system information specific to Public Cloud instances',
    repositoryURL: 'https://github.com/SUSE-Enceladus/supportutils-plugin-suse-public-cloud',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'susemanager-cloud-setup',
    description: 'Utility to aid in the configuration of SUSE Manager in Public CLoud instances',
    repositoryURL: 'https://github.com/SUSE-Enceladus/susemanager-cloud-setup',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'systemd',
    description: 'A powerful System and Session Manager',
    repositoryURL: 'https://github.com/openSUSE/systemd',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'suse-migration-services',
    description: 'Major distribution upgrade system for specific use cases, such as Cloud instances',
    repositoryURL: 'https://github.com/SUSE/suse-migration-services',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'transactional-update',
    description: 'Transactional updates for MicroOS',
    repositoryURL: 'https://microos.opensuse.org',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'Trento',
    description: 'Console for SAP applications',
    repositoryURL: 'https://trento-project.io',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'update-infra-utils',
    description: 'Configuration management for RMT server repository management',
    repositoryURL: 'https://github.com/SUSE-Enceladus/update-infra-utils',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'Uyuni',
    description: 'Configuration and infrastructure management solution for software-defined infrastructure',
    repositoryURL: 'https://uyuni-project.org',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'development',
    name: 'venvjail',
    description: 'Create Python virtualenvs in OBS ',
    repositoryURL: 'https://github.com/openSUSE/venvjail',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'infrastructure',
    name: 'vhostmd',
    description: 'Metrics communication channel between a host and its hosted virtual machines',
    repositoryURL: 'https://github.com/vhostmd/vhostmd',
    documentationURL: '',
  },
  {
    isEnable: false,
    tag: 'operations',
    name: 'RKE Cluster Linter for VS Code',
    description: '',
    repositoryURL: 'https://marketplace.visualstudio.com/items?itemName=dancermak.vscode-rke-cluster-config',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'networking',
    name: 'wicked',
    description: 'Framework for network configuration',
    repositoryURL: 'https://en.opensuse.org/Portal:Wicked',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'kubernetes',
    name: 'wins',
    description: 'Operate a Windows host inside a Windows container',
    repositoryURL: 'https://github.com/rancher/wins',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'Yomi',
    description: 'Linux installer based on Salt',
    repositoryURL: 'https://github.com/openSUSE/yomi',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'Zypper',
    description: 'Command line package manage for Linux',
    repositoryURL: 'https://en.opensuse.org/Portal:Zypper',
    documentationURL: '',
  },
  {
    isEnable: true,
    tag: 'operating-systems',
    name: 'Linux Kernel',
    description: 'The core engine of every Linux-based operating system.',
    repositoryURL: 'https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/',
    documentationURL: '#',
  },
  {
    isEnable: true,
    tag: 'development',
    name: 'Linux Test Project',
    description: 'Collection of tools for testing the Linux kernel.',
    repositoryURL: 'https://github.com/linux-test-project/ltp',
    documentationURL: '#',
  },
  {
    isEnable: true,
    tag: 'infrastructure',
    name: 'QEMU',
    description: 'A generic and powerful machine emulator and virtualizer',
    repositoryURL: 'https://gitlab.com/qemu-project/qemu',
    documentationURL: '#',
  },
  // TODO: Pending of revision
  {
    isEnable: false,
    tag: 'infrastructure',
    name: 'The Xen-Project',
    description: 'The Xen-Project provides advanced, secure, flexible and performant virtualization solutions for Enterprises, Cloud and Embedded world.',
    repositoryURL: 'https://xenbits.xen.org/gitweb/?p=xen.git;a=summary',
    documentationURL: '#',
  },
  {
    isEnable: true,
    tag: 'development',
    name: 'GNU Compiler Collection (GCC)',
    description: 'Compilers of C/C++, Fortran, Ada, Go and other languages',
    repositoryURL: 'https://gcc.gnu.org/git/gitweb.cgi?p=gcc.git',
    documentationURL: '#',
  },
  {
    isEnable: true,
    tag: 'development',
    name: 'The GNU Project Debugger (GDB)',
    description: 'Well known debugger',
    repositoryURL: 'https://sourceware.org/git/gitweb.cgi?p=binutils-gdb.git',
    documentationURL: '#',
  },
  {
    isEnable: true,
    tag: 'operating-systems',
    name: 'The GNU C Library (glibc)',
    description: 'The core system library of (not just) Linux systems',
    repositoryURL: 'https://sourceware.org/git/?p=glibc.git',
    documentationURL: '#',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'YaST2',
    description: 'Installation and configuration tool',
    repositoryURL: 'https://github.com/yast/',
    documentationURL: '#',
  },
  {
    isEnable: true,
    tag: 'development',
    name: 'libyui',
    description: 'Widget abstraction library providing Qt, GTK and ncurses frontends',
    repositoryURL: 'https://github.com/libyui/',
    documentationURL: '#',
  },
  {
    isEnable: true,
    tag: 'operations',
    name: 'Relax-and-Recover',
    description: 'Linux Disaster Recovery framework',
    repositoryURL: 'https://github.com/rear/rear',
    documentationURL: '#',
  },
  {
    isEnable: true,
    tag: 'security',
    name: 'NeuVector',
    description: 'Full Lifecycle Container Security Platform',
    repositoryURL: 'https://github.com/neuvector/neuvector',
    documentationURL: 'https://open-docs.neuvector.com/',
  },
  {
    isEnable: true,
    tag: 'development',
    name: 'SLE BCI',
    description: 'SUSE maintained containers that are redistributable, open source, secure and dependable.',
    repositoryURL: 'https://github.com/SUSE/BCI-dockerfile-generator/',
    documentationURL: 'https://opensource.suse.com/bci-docs/',
  },
]

// Dynamicly generated tags
const _tags = PROJECTS.map((ele) => ele.tag)
export const CATEGORIES = [...new Set(_tags)]
