---
title: "Demonstrator Case: LOFARINT"
type: pages
permalink: /demonstrator_cases/lofarint/
layout: single
header:
  overlay_image: /assets/images/SKA-at-Night.jpg
  caption: "Image credit: SKAO"
author_profile: false
---

The [LOFAR Surveys KSP](https://lofar-surveys.org){:target="_blank"} is enacting the LOFAR Two-metre Sky Survey (LoTSS), which has both a wide area (Northern sky) and deep fields component. A primary focus is to understand how and when the first stars, galaxies and black holes formed, and how they subsequently evolved throughout the history of the Universe, but the breadth and scope of the surveys also enable cosmological studies, studies of new planetary systems, studies of Galactic radio sources, and revealing the nature of magnetic fields on all scales. These touch on many SKA SWG areas: Extragalactic Continuum, Magnetism, Our Galaxy, Pulsars, Solar, Heliospheric & Ionospheric Physics, Transients, and VLBI. As a pathfinder operating at MHz frequencies, LOFAR will directly inform requirements for SKA-LOW, but as a premier radio survey LoTSS has already catalogued more than 4.3 million sources in its second data release (about a quarter of the total area) and is helping us understand the wealth of data we will receive with SKA-MID. So far, however, only Dutch baselines have been used in LoTSS: this demonstrator case will expand that to international baselines, which is a huge computational challenge but will vastly increase science capabilities.

## Technical details

Current pipelines require up to 10,000 core hours for production of image cut-outs from a single international-station dataset, or ~50,000 core hours for a full-field Stokes I image. The goal of the project is to process tens to hundreds of observations for image cut-outs, and ~tens of full-field images, the latter of which will require high-memory (up to 1TB RAM) nodes. Furthermore, to obtain polarisation data will require Stokes Q and U imaging, spread over ~480 frequency channels, vastly increasing the processing challenge and final data size. Users may be able to extract small data cubes and analyse these on their own resources, but the ability to extract numerous such cubes efficiently from the reduced dataset is a critical integral part of the demonstrator, and directly maps on to SRC requirements.

### Objectives

* Interact reliably with external data archive sites for downloading data
* The ability to run large distributed CPU/GPU-intensive pipelines which can handle data sizes of at least a few TB
* Storage of, and access, to radio and optical images and catalogues for the purpose of co-analyses of these data
* Use of development, testing, and analysis platform for interacting with ADPs

## Outcomes

#### Boötes widefield, high-resolution image

We have produced the first high resolution, widefield image of the Boötes field, which is one of the LoTSS Deep Fields. This was processed on ukSRC resources at Durham University, including using/testing high-memory nodes for the very intensive data calibration and imaging steps. This resulted in an open-access publication in the Monthly Notices of the Royal Astronomical Society: [The sub-arcsecond ILT view of the Boötes Deep Field: a link between low-frequency kiloparsec radio morphology and AGN-driven ionized outflows](https://academic.oup.com/mnras/article/547/4/stag274/8472649){:target="_blank"}. A graphic of the field is shown below.

{: style="text-align: center;"}
![Sub-arsecond Bootes Deep Field imaged by the ILT.](/assets/images/Bootes_pink.png){: style="width: 80%;"}

#### LoTSS-High Resolution Data Release 1

We have post-processed 30 fields to image and catalogue more than 4,000 sources; an example field is below. There was an internal (LOFAR collaboration) data release on 5 June 2026, with a publication expected to be submitted at the beginning of September. Data will become publicly available as soon as the publication is accepted. This project would not have been possible without the ukSRC resources, and with the preparation of this data release we have improved our pipeline resource usage by over a factor of three, and started profiling more advanced data processing workflows. We have implemented LOFAR software on ukSRC resources, demonstrating how we can use the system for SKA-like data processing.
The image below shows radio sources in a LoTSS pointing (P190+37) at the resolution given by LoTSS-HR. The red circles show zoom-ins of the sources (which are much smaller than shown). The orange circle shows the actual size of the pointing, with the moon as a size reference.

{: style="text-align: center;"}
![LoTSS-HR Data release](/assets/images/LoTSS-HR_P190+37_poster_white_lowres.png){: style="width: 80%;"}

## Outlook

We now intend to scale up operations to carry out Data Release 2 for LoTSS High Resolution. This will more than double the area for Data Release 1, and demonstrate more intensive, automated data processing on SRC resources. In preparation for LOFAR2.0, we also plan to process up to 5 high-resolution, wide-field images, and conduct some mosaicking experiments to see how we can most efficiently image pointings in close proximity to each other. This will result in publicly released data (along with the scientific publication) that will be of high value for preparing for LOFAR2.0 and of general use to the astronomical community immediately on release.



###### This work has been led by L. Morabito, M. van der Wild and the LOFARINT Team.