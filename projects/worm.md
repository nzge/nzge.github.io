---
layout: project
category: "school"
title: "Worm Robot"
date: 2025-12-13
image: "worm.gif"
description: "Characterization and Simulation of a Worm-Inspired Robot"
repo: "https://github.com/nzge/mae-263f"
toc: true
---

# Characterization and Simulation of a Worm-Inspired Robot

Nathan Ge  
Department of Mechanical and Aerospace Engineering  
University of California, Los Angeles  

---

## Abstract

Soft-bodied invertebrates such as earthworms demonstrate highly efficient and robust locomotion in confined and irregular environments. Their movement is enabled by coordinated peristaltic contraction of body segments combined with frictional interactions with the environment. This project characterizes the underlying mechanics of worm locomotion and explores its robotic implementation through computational modeling and simulation. A two-dimensional segmented worm model is developed using a rhombic linkage representation, implicit time integration, and anisotropic friction. Simulation results investigate the effect of segment count, contraction profiles, and frictional asymmetry on displacement efficiency and cost of transport.

---

## I. Problem Statement

Traditional rigid robotic systems perform poorly in confined or irregular environments such as underground tunnels, collapsed structures, or biological passageways. Soft-bodied organisms such as earthworms present an alternative locomotion paradigm that prioritizes adaptability, robustness, and energy efficiency. Earthworms move using peristaltic motion, which consists of coordinated contraction and extension of body segments.

While peristaltic locomotion is largely one-dimensional, it is highly effective and scalable. Understanding the mechanical principles that enable this motion may inform the design of soft robotic systems capable of navigating constrained environments. This project aims to simulate and characterize worm-like locomotion using a simplified computational model, with particular emphasis on frictional interaction, segment coordination, and energetic efficiency.

---

## II. Background

### A. Peristalsis Mechanics

Peristalsis refers to the wave-like propagation of muscle contraction along the body of an organism. In earthworms, this motion enables forward locomotion by alternately anchoring portions of the body to the ground while extending other regions forward. There is ongoing debate regarding whether friction or internal momentum transfer is the dominant driver of propulsion; however, frictional anchoring is widely considered to play a central role.

Earthworms possess hydrostatic skeletons, meaning that structural support is provided by internal fluid pressure rather than rigid bones. Locomotion is governed by two primary muscle groups:

- Longitudinal muscles, which shorten and lengthen the body  
- Circular (radial) muscles, which expand and contract the body radially  

By coordinating these muscle groups with spatial and temporal phase offsets, worms achieve net forward motion.

---

### B. Material Construction

The outer body of a worm-inspired robot must be compliant while remaining structurally robust. Compliance allows for large deformations during actuation, while robustness ensures durability. Candidate approaches include elastomeric skins, fabric-reinforced structures, and braided meshes. The mechanical properties of the body directly influence force transmission, anchoring, and energy efficiency.

---

### C. Actuation Framework

#### Smart Materials

Smart materials directly convert electrical or thermal energy into mechanical deformation.

- **Shape Memory Alloys (SMAs):**  
  SMAs generate high forces and are well-suited for small-scale systems but suffer from slow response times due to thermal actuation.

- **Dielectric Elastomer Actuators (DEAs):**  
  DEAs consist of elastomer films sandwiched between compliant electrodes. When voltage is applied, electrostatic forces cause expansion. DEAs are well-suited for peristaltic motion due to their high strain capabilities.

- **Ionic Polymer-Metal Composites (IPMCs):**  
  IPMCs deform through ion migration under an electric field. They operate at low voltages but exhibit relatively slow response times.

<figure>
  <img src="/assets/images/figure1_dea_worm.png" alt="Dielectric elastomer actuator-based worm segment">
  <figcaption><strong>Figure 1.</strong> Dielectric elastomer actuator-based worm segment</figcaption>
</figure>

---

#### Fluid-Based Actuators

Fluid-based actuation strategies include:

- Pneumatic actuation, which offers high force output but requires bulky compressors  
- Hydraulic systems, which rely on pressurized fluids and micro-scale pistons  
- Magnetorheological or ferrofluid systems actuated by external magnetic fields  

<figure>
  <img src="/assets/images/figure2_pneumatic_worm.png" alt="Pneumatically actuated worm robot">
  <figcaption><strong>Figure 2.</strong> Pneumatically actuated worm robot</figcaption>
</figure>

---

### D. Control Strategy

#### Open-Loop Control

The simplest control strategy applies a traveling sinusoidal activation pattern across body segments. Each segment is driven with a phase offset relative to its neighbors, producing a peristaltic wave.

#### Intelligent Control

More advanced strategies incorporate feedback and learning:

- Closed-loop control using strain or displacement sensors  
- Stable heteroclinic channels (SHCs) for smooth switching between rhythmic states  
- Central Pattern Generators (CPGs) inspired by biological neural circuits  

---

### E. Biomechanical Model

To capture the essential mechanics of worm locomotion, the robot is modeled as a two-dimensional planar system composed of interconnected segments.

<figure>
  <img src="/assets/images/figure3_rhomboid_model.png" alt="Two-dimensional rhomboid linkage model">
  <figcaption><strong>Figure 3.</strong> Two-dimensional rhomboid linkage model</figcaption>
</figure>

Each segment is represented by a rhombic four-bar linkage that couples vertical expansion with horizontal contraction. This abstraction captures the essential kinematic relationship between radial and axial deformation.

The model can be extended to three dimensions by introducing inter-segment hinges or asymmetric actuation, enabling turning behaviors.

<figure>
  <img src="/assets/images/figure4_turning_worm.png" alt="Turning worm model">
  <figcaption><strong>Figure 4.</strong> Turning worm model</figcaption>
</figure>

---

### F. Performance Metrics

The following metrics are used to evaluate performance:

- Cost of Transport (CoT)  
- Center-of-mass displacement  
- Locomotion speed  
- Segment count  
- Actuation frequency and amplitude  
- Frictional anisotropy  
- Stability and maneuverability  

---

## III. Simulation Approach

### A. Model Construction

Each worm segment consists of:

- A rhombic four-bar linkage  
- A linear spring modeling axial elasticity  
- Torsional springs modeling inter-segment stiffness  

<figure>
  <img src="/assets/images/figure5_six_segment.png" alt="Six-segment rhombic worm model">
  <figcaption><strong>Figure 5.</strong> Six-segment rhombic worm model</figcaption>
</figure>

<figure>
  <img src="/assets/images/figure6_construction.png" alt="Model construction schematic">
  <figcaption><strong>Figure 6.</strong> Model construction schematic</figcaption>
</figure>

---

### B. Numerical Solver

#### Implicit Euler Integration

\[
\mathbf{F}_{\text{inertia}}
- \mathbf{F}_{\text{elastic}}
- \mathbf{F}_{\text{viscous}}
- \mathbf{F}_{\text{friction}}
- \mathbf{F}_{\text{contract}} = 0
\]

Newton–Raphson update:

\[
\Delta q = -\frac{f(q_{k+1})}{J(q_{k+1})}
\]

---

#### Friction Model

\[
F_{\text{friction}} =
\begin{cases}
-\mu_{\text{forward}} N \, \text{sign}(v_x), & v_x > \varepsilon \\
-\mu_{\text{backward}} N \, \text{sign}(v_x), & v_x < -\varepsilon \\
0, & |v_x| \le \varepsilon
\end{cases}
\]

---

### C. Control Scheme

#### Segment-Driven Contraction

Each segment is actuated sequentially using pulse-based force inputs. The control pipeline consists of:

1. Wave-based activation generation  
2. Phase update  
3. Pulse shaping (Gaussian, square, or Dirac)  
4. Net force application

**Figure 7:** Segment activation pattern  
**Figure 8:** Segment contraction force

---

#### Traveling-Wave Contraction

The contraction wave is defined as:

\[
\phi(x,t) = kx - \omega t
\]

\[
A(x,t) = \sin(\phi(x,t))
\]

**Figure 9:** Traveling wave contraction visualization

---

## IV. Results

### Cost of Transport

The mechanical work done by contraction forces is computed as:

\[
W^{(n)}_{\text{contract}}
= \mathbf{F}_{\text{contract}} \cdot (q_{n+1} - q_n)
\]

\[
\text{CoT}_{\text{contract}}
= \frac{W^{(n)}_{\text{contract}}}{\Delta x_{\text{COM}}}
\]

Frictional work is computed in an analogous manner.

---

### Simulation Parameters

**Table I: Base Simulation Parameters**

| Parameter | Value |
|---------|------|
| Worm length | 1.0 m |
| Density | 10 kg/m³ |
| Linear stiffness | 13 N/m |
| Torsional stiffness | 1e4 N·m/rad |
| Time step | 0.01 s |
| Simulation time | 10 s |

---

### A. Segment Count Study

Simulations were conducted for worms with three to seven segments under identical contraction parameters.

**Figure 10:** Center-of-mass displacement vs. time  
**Figure 11:** Cumulative cost of transport

While increased segment count generally improved locomotion efficiency, the seven-segment configuration exhibited degraded performance, likely due to numerical instability and increased stiffness.

---

### B. Contraction Profile Analysis

The contraction wave period was varied from one to five seconds.

**Figure 12:** Center-of-mass displacement vs. wave period  
**Figure 13:** Cost of transport vs. wave period

Shorter wave periods produced greater displacement but increased energetic cost.

---

### C. Current Challenges

- Mass concentration at nodes leading to instability  
- Sensitivity to torsional stiffness values  
- Non-ideal vertical constraint enforcement  

---

## V. Future Work

Future directions include:

- Solver improvements using Projective Dynamics and FEM residual learning
- More biologically realistic contraction patterns
- Neural control via SHCs and CPGs
- Simulation of sloped and confined environments
- Spatially varying stiffness and geometry

---

## VI. Conclusions

This work presents a computational framework for analyzing worm-inspired locomotion. The results highlight key relationships between segment count, actuation timing, and frictional interaction. These insights inform the design of future soft robotic systems capable of navigating constrained environments.

---

## Acknowledgment

The author thanks Professor Khalid Jawed for guidance during the MAE 263F Soft Robotics course.

---


## Build Log

> 12-11-25: 
>
> ![Alt text](/assets/media/worm_media/prints.JPG){: 
style="width:600px;display: block; margin: auto;"}

> 11-21-25: 
>
> ![Alt text](/assets/media/worm_media/concept.JPG){: 
style="width:600px;display: block; margin: auto;"}

> 11-21-25: 
>
> ![Alt text](/assets/media/worm_media/concept.JPG){: 
style="width:600px;display: block; margin: auto;"}

> 11-15-25: 
>
> ![Alt text](/assets/media/worm_media/grabber.png){: 
style="width:300px;display: block; margin: auto;"}


[Paper][https://github.com/nzge/MAE-263F/tree/main/final_report/final_report.pdf]

## References

[1] S. Coyle, E. Rouse, and C. Majidi, “Actuation and design innovations in earthworm-inspired soft robots: A review,” *Frontiers in Robotics and AI*, vol. 10, 2023.

[2] T. D. Nguyen, et al., “Soft robot locomotion using peristaltic actuation,” *IEEE Robotics and Automation Letters*, 2021.

[3] Additional references as listed in the original report.