---
title: "PTAC Introduction and Hardware"
description: "The PTAC Cluster is a huge project and has a lot of moving parts, so I wanted to give it its own section of the site. "
pubDate: "June 8, 2026"
image: "/images/previews/homelab_intro.jpg"
skills: ["Infrastructure", "Networking", "Media", "Misc"]
---
# Cluster Introduction and Hardware
## Overview

<strong>Name Origin and Explanation:</strong> Officially, the full name for the PTAC (pronounced "pee-tack") Cluster is the Pseudostochastic Topologically Aware Cyberinfrastructure Cluster. Unoffically, PTAC stands for Pretend This Acronym's Cool. Is the name of my homelab, a project I've sunk hundreds of hours and dollars into, a dumb joke that probably only made me laugh? Maybe. Determining whether or not I came up with the unofficial name before the official name and then worked backwards to find techincal-sounding words that fit the acronym just so I could make this dumb joke is left as an exercise to the reader.

---

## Funding

The initial funding for this project came from a grant I was awarded during undergrad. I received the Compall Family Scholarship from the ECE department at the University of Illinois Urbana-Champaign. I want to give huge thank you to the Compall family for this generous gift! 

When this grant money eventually runs out, the rest of the funds will come directly from my pocket.

---

## Hardware

(Accurate as of: June 8, 2026)

### Compute Nodes

#### <u>ACEMAGICIAN Kron Mini K1 Mini PC</u> - Quantity: 2 | Purchased: Dec 2025 | Price: $350 | <a href="https://www.amazon.com/dp/B0C9J69KH8?ref_=cm_sw_r_cso_cp_apan_dp_AR0XZVH8A1E0V8KCD6JR" target="_blank" rel="noopener noreferrer">Link</a>

These Mini PCs by ACEMAGICIAN are actually pretty impressive. The ones I have use an AMD Ryzen 7 5825U with Radeon Graphics and each have 32 GBs RAM and 512 GBs of storage. They're relatively quiet, too. At the price I paid, it was a steal. I run NixOS on these and have had no issues with installation/storage/network cards/etc.

Note: At the time of writing this (Jun 2026), the price has ballooned to $459 each (gee, thanks global RAM shortage), but the processor was also upgraded to a Ryzen 7 7730U.


#### <u>2014 Mac Mini</u> - Quantity: 1 | Purchased: Aug 2025 | Price: $20

There wasn't much thought that went into buying this. I saw it on Craigslist and decided to buy it almost instantly. This Mac Mini is really old and on its last legs, but hey, for $20? Can't really complain. (Note: This was before the Clawdbot/OpenClaw hype that's caused the price of Mac Minis to skyrocket.) It runs Monterey 12.7.6 and is literally the only (working) Apple product I own.

### Networking

#### <u>D-LINK 24-Port 10/100/1000 Unmanaged Gigabit Switch</u> - Quantity: 1 | Purchased: Unsure | Price: N/A | <a href="https://www.newtownspares.com/dgs-1024a/?adgroupid=169409694718&device=m&adposition=&keyword=&network=g" target="_blank" rel="noopener noreferrer">Link</a>

I just found this laying around in my basement and figured I could use it speed up the data transfer between nodes. After plugging it in, I quickly tested it and it does what its supposed to. 10/10 no notes.
