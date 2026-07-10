---
title: "ValSKA: a reusable ukSRC validation framework"
type: pages
permalink: /science-tooling/valska
layout: single
header:
  overlay_image: /assets/images/SKA-at-Night.jpg
  caption: "Image credit: SKAO"
---

A ValSKA validation campaign starts with a science question. What signal are we trying to recover? Which telescope, sky, calibration or modelling uncertainties could affect the result? What metric tells us whether the analysis has succeeded or failed? The campaign then uses controlled simulations and perturbations to test how those uncertainties propagate through calibration, analysis and inference into the final scientific output.

<figure>
    <img src="/assets/images/valska-fig1.png" alt="Conceptual view of ValSKA as a reusable validation framework">
    <figcaption><i>Conceptual view of ValSKA as a reusable validation framework. Science and instrument drivers define validation objectives, which are tested through simulation campaigns, calibration and analysis workflows, and quantitative trust metrics. The shared ValSKA layer provides common infrastructure for configuration, execution, provenance, reporting and reusable artefacts, while allowing science-case-specific modules to be developed for 21-cm power spectra, continuum imaging, calibration, intensity mapping and future SKA workflows. </i></figcaption>
</figure>

The figure above shows the overall ValSKA approach. Science and instrument drivers define the scope of a validation campaign. These are translated into simulation studies, calibration and analysis workflows, and quantitative trust metrics. A shared ValSKA framework then provides common infrastructure for configuration, execution, provenance capture, reporting and reusable artefacts, while allowing science-case-specific modules to be developed for different SKA and precursor workflows.

## What ValSKA provides

The framework is designed to connect the full validation chain: science objectives, simulation campaigns, calibration and analysis workflows, validation metrics, and decision-relevant outputs. In practical terms, this means workflow templates, configuration files, tool interfaces, HPC execution support, provenance capture, summary reports and reusable scientific artefacts.

The current public demonstrator focuses on 21-cm power-spectrum validation using HERA and BayesEoR. Existing functionality includes orchestration for Bayesian 21-cm inference, built-in Bayesian null-testing, reproducible HPC workflows, unit tests, continuous integration, documentation and command-line tools for preparing, submitting, auditing and reporting validation runs. The software is being developed through the UKSRC GitHub organisation, with the aim of making mature tools and examples available for community reuse.

## Why this matters

For science teams, ValSKA provides a clearer route from a validation question to a documented conclusion. For instrument and calibration teams, it provides a way to translate scientific requirements into quantitative tolerances, such as how accurately a beam, station response, array layout or calibration model must be known. For the wider community, it provides shareable workflows and benchmark products that support reproducibility and comparison across methods.

ValSKA is also being extended beyond its initial 21-cm power-spectrum demonstrator. Current development is moving toward interferometric simulation benchmarking, higher-fidelity instrument and sky models, continuum imaging validation in collaboration with SRCNet partners, and 21-cm intensity-mapping validation with UKSRC collaborators. In these upcoming case studies, calibration is a central part of the validation question: how well must the interferometer be characterised for calibration to support reliable recovery of the target science?

## Outputs and validation campaign

A mature campaign will produce a validation report, benchmark datasets, configuration files, provenance records, diagnostic tables and plots, packaged workflow components, containers and, where appropriate, DOI-linked artefacts. These outputs make the basis for scientific trust explicit rather than implicit, and help validation results feed back into science readiness, calibration priorities and instrument-characterisation requirements.
