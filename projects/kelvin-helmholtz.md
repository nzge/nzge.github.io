---
layout: project
category: "personal"
title: "Kelvin Helmholtz Instability"
date: 2022-04-05
image: "kelvin-helmholtz.png"
description: "Kelvin–Helmholtz instability with a discontinuous Galerkin spectral element method on a hierarchical Cartesian mesh with ADR"
repo: "https://github.com/nzge/kelvin-helmholtz-instability"
---

The Kelvin-Helmholtz instability (KHI) is a hydrodynamic instability that occurs when two fluid layers with different velocities and/or densities flow alongside each other, creating a shear layer. This instability leads to the formation of waves or billows at the interface between the layers, eventually resulting in mixing and turbulence. This phenomenon can be seen with wind blowing over water, or cloud formations.

Phenomena
- Shear flow
- Instability growth rate
- Vorticity generation
- Inviscid vs. viscous effects

## Governing Equations 

Navier–Stokes equations (incompressible/compressible, 2D/3D)  
Euler equations (for ideal inviscid flow)

## Instability Criteria

Instability analysis:
Perform a linear stability analysis (solve the Orr–Sommerfeld equation for shear flows)
Derive the KHI condition (e.g., via perturbation analysis of a two-layer system)

## Numerical Methods
Spectral Methods

## Basic 2D Simulation

Pipeline: finite-difference KHI solver (in Python) → CSV/NPY data → Matplotlib plots

## Build Log
> 11-22-23: 
>
> ![Alt text](/assets/media/placeholder.jpg){: 
style="height:400px;display: block; margin: auto;"}


---
---

# References
- Fluid Mechanics by Kundu or Introduction to Fluid Mechanics by Fox & McDonald
- Online lectures (e.g., MIT OCW 18.353 – Nonlinear Dynamics and Waves)
- [Approaches to Solving Flow Problems and the Role of CFD by Milovan Peric](https://www.youtube.com/watch?v=ZiwUQDeGRhs)