---
title: "Science Tooling"
type: pages
permalink: /science-tooling/
layout: single
header:
  overlay_image: /assets/images/SKA-at-Night.jpg
  caption: "Image credit: SKAO"
---

# Science Validation and Tooling: building trustworthy science

The Square Kilometre Array (SKA; Figure 1) will produce some of the most ambitious radio astronomy data ever collected. It is designed to help answer frontier questions about the early Universe, galaxy evolution, gravity and dark energy. Turning that data into reliable science, however, requires more than powerful telescopes and sophisticated software. It requires evidence that the analysis methods are trustworthy for the scientific questions we want to answer.

<figure>
    <img src="/assets/images/science-validation-fig1.jpg" alt="Composite image of the SKA telescopes">
    <figcaption><i>Figure 1: Composite image of the SKA telescopes, blending real hardware already on site with artist's impressions. From left: An artist's impression of the future SKA-Mid dishes blend into the existing precursor MeerKAT telescope dishes in South Africa. From right: An artist's impression of the future SKA-Low stations blends into the existing AAVS2.0 prototype station in Western Australia. Image credit: SKAO </i></figcaption>
</figure>

The ukSRC Science Validation and Tooling team develops reusable methods, software and workflows that help scientists test whether SKA and precursor data-analysis methods are reliable for the science they are intended to deliver. Our goal is to make precision radio astronomy results trustworthy, reproducible and auditable, by showing where a method works, where it fails, and which instrument or modelling uncertainties matter most.


<figure>
    <img src="/assets/images/science-validation-fig2.png" alt="Validation pyramid">
    <figcaption><i>Figure 2: Validation operates at multiple levels, from checking that simulated data products resemble observations, through testing individual instrument and sky models, to full end-to-end pipeline tests and statistical model validation. By combining these layers, ukSRC can test whether calibration and analysis workflows recover known science signals reliably under realistic modelling uncertainties.</i></figcaption>
</figure>

## What is validation?

Validation is the process of testing whether scientific models, simulations, calibration procedures and data-analysis pipelines can be trusted to deliver accurate results. In simple terms, it asks: if we calibrate and analyse data where the scientific result is already known, do we recover that result correctly?

This is different from verification. Verification asks: “Did we build the system right?” For example, does a pipeline run correctly on test data? Validation asks: “Did we build the right system for the science?” For example, can a pipeline recover a known astrophysical signal from realistic simulated data?

This distinction matters because modern radio astronomy analyses depend on long chains of sky modelling, telescope modelling, calibration, simulation and statistical inference. Figure 2 illustrates how UKSRC validation works across this chain, from checks on simulated data products and individual model components through to end-to-end pipeline tests and statistical validation of the final inference. This layered approach is important because a workflow may run without errors and still give a biased scientific result if an important instrumental or astrophysical effect has not been modelled or calibrated accurately enough.

## Why validation matters for SKA science

Many SKA science goals involve extremely faint signals hidden beneath much brighter foreground emission and complex instrumental effects. For example, 21-cm cosmology aims to study neutral hydrogen from the early Universe, one of the last great frontiers of physical cosmology, comprising the first billion years of cosmic evolution (see Figure 3), and witnessing the birth of the first stars, black holes and galaxies. However, the cosmological signal is far weaker than the radio emission from our Galaxy and other sources. In this regime, the limiting challenge is often not raw telescope sensitivity, but whether we understand the instrument and the analysis well enough to avoid false detections, signal loss or biased measurements.

Validation provides a way to test this quantitatively. By creating realistic simulated observations, processing them through calibration and analysis workflows, and comparing the recovered outputs with the known inputs, we can measure how reliably the science signal is recovered. These tests can also show how finite precision in instrument knowledge, such as the telescope beam or station response, propagates through calibration into final science products such as images, power spectra, catalogues or cosmological constraints.


<figure>
    <img src="/assets/images/science-validation-fig3.png" alt="Schematic timeline of Cosmic History.">
    <figcaption><i>Figure 3: Schematic timeline of Cosmic History. The Epoch of Reionization traces the birth of the first stars and black holes after the Big Bang and their impact on the neutral hydrogen between galaxies that pervaded the Universe at earlier times. Image credit: NASA/WMAP Science Team.</i></figcaption>
</figure>

## The ukSRC approach
Our approach is modular, reproducible and community-facing. We test individual components, compare simulation tools, run end-to-end pipeline studies, and use statistical methods to assess whether models are robust enough for scientific inference. This allows scientists, instrument teams and programme stakeholders to understand which assumptions matter most and where further modelling, calibration or measurement effort is needed.

Making validation accessible is central to the programme. We are developing open-source tools, benchmark studies, documentation and reusable workflows that can be inspected, rerun and extended by others. By turning validation into a documented and shareable scientific product, UKSRC helps the community move from “we hope this analysis works” to “we have evidence for where it works, where it fails, and why”.