---
title: "A ValSKA Case Study: How well do we need to know the telescope beam?"
type: pages
permalink: /science-tooling/valska_casestudy
layout: single
header:
  overlay_image: /assets/images/SKA-at-Night.jpg
  caption: "Image credit: SKAO"
---

The first ValSKA case study asks a practical question with direct scientific consequences: how accurately must a radio telescope’s beam be known for unbiased 21-cm cosmology?

A telescope beam describes how sensitive an antenna or station is to different directions on the sky. For low-frequency radio cosmology, beam modelling is especially important because the faint 21-cm signal from the early Universe is observed through much brighter foreground emission from our Galaxy and other radio sources. Small errors in the beam model can affect calibration, mix bright foreground structure into the target science signal, or bias the final interpretation.

The case study uses HERA, an SKA precursor telescope in South Africa, as a testbed. HERA is designed for measurements of the 21-cm power spectrum from Cosmic Dawn and the Epoch of Reionization. The analysis asks how errors in the beam full width at half maximum, a measure of the beam’s angular size, affect Bayesian power-spectrum inference with BayesEoR.

## The validation test

The figure below summarises the validation workflow. The method is deliberately conservative: simulated observations are generated containing foreground emission and instrumental effects, but no cosmological 21-cm signal. The analysis is then repeated while introducing increasing levels of controlled beam-width error. If the analysis reports Bayesian evidence in favour of a 21-cm signal being present in data where no such signal was injected, the validation test fails for that level of beam uncertainty.

This is a Bayesian null test: the expected answer is no detection. It is designed to identify when imperfect instrument knowledge could produce a spurious signal or bias the scientific interpretation. The result can then be used to set an instrument-knowledge requirement: the level to which the beam must be measured or modelled for the intended science analysis to remain trustworthy.

<figure>
    <img src="/assets/images/how-well-fig1.png" alt="Testing how beam uncertainty affects 21-cm science recovery">
    <figcaption><i>Testing how beam uncertainty affects 21-cm science recovery. The ValSKA beam case study uses simulated data with no injected cosmological signal, then repeats the analysis with controlled beam-width errors. If the pipeline reports a spurious 21-cm detection, the test fails for that level of instrument uncertainty. In the current HERA demonstrator, this approach indicates an approximate ±5% beam-width knowledge requirement under the assumptions of the study. </i></figcaption>
</figure>

## Current findings and next steps

In the current HERA demonstrator, the tested setup indicates that the beam width needs to be known to approximately ±5% for the analysis to avoid a spurious detection under the assumptions of the study. The exact tolerance is not intended as a universal number for every telescope or analysis. The more important outcome is the method: a reproducible way to translate modelling uncertainty into a science-driven requirement. 

The next stage is to increase realism. Current simulations use Galactic and extragalactic foregrounds with simplified beam models; upcoming work will incorporate more detailed Airy and electromagnetic beam simulations, mutual-coupling effects, simulator benchmarking, and comparisons with observational data. The same validation logic can then be extended to SKA-Low stations, continuum imaging, 21-cm intensity mapping, and other SKA and precursor science workflows where calibration and instrument knowledge directly affect science recovery.
