---
title: "ukSRC compute capacity"
type: pages
permalink: /science-projects/compute-capacity/
layout: single
header:
  overlay_image: /assets/images/SKA-at-Night.jpg
  caption: "Image credit: SKAO"
author_profile: false
toc: true
toc_label: "On this page"
git_last_modified: true
---

This page summarises the compute and storage capacity currently available to projects on the [ukSRC science support programme](/science-projects/). Capacity is spread across up to three UK sites, and new resources come online across our partner sites every few months. This page will be updated as capacity changes.

**Last updated:** {% if page.last_modified_at %}{{ page.last_modified_at | date: "%-d %B %Y" }}{% else %}{{ site.time | date: "%-d %B %Y" }}{% endif %}
{: .notice--info}

**Please note:** the capacity figures on this page are estimates only and are provided as a guide. The ukSRC reserves the right to change the available capacity at any time without notice.
{: .notice--warning}

## Summary

<!-- TODO: add a row for each site as figures become available -->

| Site | Scheduler | Total CPU cores | Total RAM | Total GPUs | Shared storage |
| --- | --- | ---: | ---: | ---: | ---: |
| [Cambridge](#cambridge) | Slurm | 684 | 6.3 TB | 4 | 173 TB |
| <!-- TODO: site --> | <!-- TODO --> | <!-- TODO --> | <!-- TODO --> | <!-- TODO --> | <!-- TODO --> |

## Capacity by site

### Cambridge

The Cambridge resources are run as a Slurm cluster.

#### Compute

| Partition | Nodes | CPU cores / node | RAM / node | GPUs / node | Total CPU cores | Total RAM | Total GPUs | Max job walltime |
| --- | ---: | ---: | ---: | --- | ---: | ---: | ---: | --- |
| `a100_gpu` | 1 | 120 | 897 GB | 4 × NVIDIA A100-SXM4-80GB | 120 | 897 GB | 4 | 60 days |
| `saphrapid_himem` (default) | 3 | 188 | 1.8 TB | – | 564 | 5.5 TB | 0 | 60 days |
| **Total** | **4** | | | | **684** | **6.3 TB** | **4** | |

#### Shared storage

| Mount point | Capacity |
| --- | ---: |
| `/home` | 2 TB |
| `/scratch` | 98 TB |
| `/shared` | 34 TB |
| `/skadata` | 39 TB |
| **Total** | **173 TB** |

<!-- TODO: copy the block below for each further site and fill it in

### Site name

#### Compute

| Partition | Nodes | CPU cores / node | RAM / node | GPUs / node | Total CPU cores | Total RAM | Total GPUs | Max job walltime |
| --- | ---: | ---: | ---: | --- | ---: | ---: | ---: | --- |
| `partition` | | | | | | | | |
| **Total** | | | | | | | | |

#### Shared storage

| Mount point | Capacity |
| --- | ---: |
| `/path` | |
| **Total** | |

-->

## Upcoming capacity

<!-- TODO: list resources expected to come online and approximate dates -->

## Requesting resources

When you [apply to the science support programme](/science-projects/#how-to-apply), tell us what compute and storage your project needs. Applications are assessed mainly against current storage availability, so the figures above give a guide to what can be supported in each onboarding round.

For any enquiries, please contact [uksrc-support@manchester.ac.uk](mailto:uksrc-support@manchester.ac.uk).
