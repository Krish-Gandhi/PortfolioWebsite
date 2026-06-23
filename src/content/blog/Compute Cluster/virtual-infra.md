---
title: "Virtual Infrastructure"
description: "The interworkings of how the cluster operates, including CI, internal networking, distributed storage, high availability and more."
pubDate: "June 22, 2026"
image: ""
skills: ["Infrastructure", "Networking", "Misc"]
---
# Note: work in progress
Important commands:

Reconcile flux:
```
flux reconcile kustomization flux-system --with-source
```

Apply NixOS changes:
```
sudo nixos-rebuild switch
sudo reboot
```

# Operating System
NixOS

# Cluster State

```
/etc/nixos ❯ tree
├── configuration.nix
├── hardware-configuration.nix
└── ptac-config
    ├── common.nix
    ├── dotfiles
    │   ├── helix.config.toml
    │   └── helix.languages.toml
    ├── k3master.nix
    ├── k3s
    │   ├── apps
    │   │   ├── homepage
    │   │   │   └── ...
    │   │   ├── kustomization.yaml
    │   │   └── longhorn
    │   │       ├── ...
    │   │       ├── longhorn-ha.yaml
    │   │       └── longhorn-single.yaml
    │   └── clusters
    │       └── prod
    │           ├── flux-system
    │           │   ├── gotk-components.yaml
    │           │   ├── gotk-sync.yaml
    │           │   └── kustomization.yaml
    │           └── kustomization.yaml
    ├── k3server.nix
    ├── LICENSE
    └── README.md
```
GitOps - FluxCD, Codeberg
K3s

# Networking
Tailscale
Traefik
Avahi 
