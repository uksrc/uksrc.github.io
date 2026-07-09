---
title: "Demonstrator Case: MULTIWAVE"
type: pages
permalink: /demonstrator_cases/multiwave/
layout: single
header:
  overlay_image: /assets/images/SKA-at-Night.jpg
  caption: "Image credit: SKAO"
author_profile: false
---

This demonstrator case is looking at ways to tackle one of the biggest challenges facing the SKA's large surveys: cross-matching radio sources with optical or IR host galaxies. Science outcomes for both precursor surveys like LoTSS, and SKA surveys, include the study of (i) star formation over cosmic time in a dust-independent manner; (ii) the evolution of AGN and black hole growth; (iii) the evolution of (HI) gas over cosmic time; and (iv) radio AGN physics and AGN feedback. The breadth and scope of the surveys also enable studies of cosmology, new planetary systems, and magnetic fields. Achieving all of these goals requires identifying the host objects of radio sources to: (i) classify the object (e.g. AGN, star-forming galaxy); (ii) obtain an estimate of distance to convert observed quantities (e.g. fluxes, angular sizes) into physical quantities (luminosity, physical size); and (iii) enable detailed multi-wavelength study of the radio source host.

SKA pathfinders, such as LOFAR's Two-metre Sky Survey (LoTSS), are already producing extensive radio surveys (e.g., 4.3 million sources catalogued in the second data release of LoTSS) on which the required techniques are being developed. The largely UK-led cross-matching of these to existing optical catalogues uses a combination of established statistical techniques, new machine learning approaches and citizen science. This science demonstrator case will use existing radio continuum surveys (for example from LOFAR and MeerKAT) to further develop these techniques, in preparation for the SKA continuum surveys, focusing on the development and running of automated pipelines to explore and create working, scalable, cross-identification methods, using machine learning techniques, that largely or entirely remove the need for human visual inspection.

## Objectives

* The ability to run large distributed CPU/GPU-intensive pipelines
* Efficiently produce source detection catalogues over large radio images
* Storage of, and access to, radio and optical images and catalogues
* Cross-matching between radio and multi-wavelength data
* Use of development, testing, and analysis platform for interacting with ADPs

## Software access and guidelines

__Source detection:__ run the source detection pipeline on the radio images using the code from the MW-PyBDSF repository.
__Cross-matching:__ cross-match the radio catalogues with optical catalogue using the Likelihood Ratio (LR) method. The process uses HEALPix to divide the sky into region-specific catalogues, which can be found on the MW-HEALPix repository.
__Machine learning analysis:__ use a gradient boosting classifier model to determine which sources can be automatically processed with the LR method or require further analysis. The code and model are in the MW-GBC repository.

## Outcomes



## Outlook

Looking ahead, we are focused on automating the visual inspection stage of the pipeline. We already have some machine learning techniques in place for source association, and we are working to refine and extend these further. We are also developing RL-Xid for host identification in extended and more complex sources. This was applied to LoTSS DR2 and will be used again for DR3. As more of the Euclid Wide Survey is released, the catalogue will continue to grow. These techniques should also allow us to extend coverage further into DR3, incorporating additional catalogues along the way.


###### This work has been led by B. Barkus, M. Hardcastle,  L. Algere, and the MULTIWAVE Team.