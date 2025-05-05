---
layout: project
category: "personal"
title: "Mechanism Studies"
date: 2025-04-10
image: "placeholder.jpg"
description: "Study of various mechanisms for current and future implementation"
repo: "https://github.com/nzge/mechanism-studies"
toc: true
---

# FOC (Field oriented Control)
Field Oriented Control (FOC) is a control strategy most traditionally used for AC motors (typically permanent magnet synchronous motors (PMSMs) or induction motors) that enables precise control of torque and speed by decoupling the motor’s stator currents into two orthogonal components.

FOC transforms three-phase stator currents into a rotating reference frame aligned with the rotor’s magnetic field, allowing independent control of:  
Torque-producing current $i_q$  
Flux-producing current $i_d$  
This approach mimics the control strategy used in DC motors, where torque and flux can be independently regulated.

Field Oriented Control (FOC) can also be applied to Brushless DC (BLDC) motors, even though BLDCs are traditionally driven with simpler trapezoidal control (commutation-based). 
Even though BLDC motors are often controlled using six-step trapezoidal commutation, they are structurally similar to Permanent Magnet Synchronous Motors (PMSMs), which are typically sinusoidally wound and driven with FOC. FOC can treat a BLDC motor like a PMSM by assuming sinusoidal behavior and applying the same transformations and control strategy. Using FOC with BLDC motors enables smoother operation, higher efficiency, quieter performance, and precise torque/speed control, especially at low speeds or in dynamic applications.

## Theory

### How Does a BLDC Work?

### The control solution of FOC
#### 1. Rotor Position sensing/estimation

#### 2. Clarke + Park transformation

#### 3. Control Loop

#### 4. Inverse Parke + Inverse Parke

#### 5. Inverter PWM output


## Firmware
https://simplefoc.com/

## Build Log

> 5-11-24: 
>
> ![Alt text](/assets/media/mechanism_media/prints.JPG){: 
style="height:400px;display: block; margin: auto;"}

---

# Capstan Drive
A capstan drive is a transmission system that uses flexible tension members (cordage) to transmit rotary or linear motion between pulleys or drums. The term "capstan" comes from a vertical-axled rotating machine developed for sailing ships to mechanically enhance the pulling force of sailors hauling ropes (hawsers) and cables. The capstan mechanism exploits the frictional interaction between a rotating capstan and cordage, and can be leveraged in mechanical applications.

## The Capstan Equation
https://en.wikipedia.org/wiki/Capstan_equation

## Components

| Item | Description |
|---|---|
| [Rope](https://dynamica-ropes.com/products/dm20/) | Vectran, Kevlar, DM20 |



## Build Log

> 5-11-24: 
>
> ![Alt text](/assets/media/mechanism_media/prints.JPG){: 
style="height:400px;display: block; margin: auto;"}

--- 

# Harmonic Drive
A harmonic drive is a type of strain wave gearing that uses the elastic mechanics of metals to create a high-precision, zero-backlash rotary actuator. It consists of three main components: a wave generator, a flex spline, and a circular spline. 

## Components

## Build Log

> 5-11-24: 
>
> ![Alt text](/assets/media/mechanism_media/prints.JPG){: 
style="height:400px;display: block; margin: auto;"}

--- 

# Cycloidal Drive
A cycloidal drive uses an eccentric input cam to spin a lobed cycloidal disc which rolls against a ring of fixed pins or rollers​. Because the disc has fewer lobes than housing pins, each input rotation causes only a small step of output motion (equal to the difference in lobes), yielding a high reduction ratio​. The lobes (often on rolling pins) distribute force over multiple contacts, giving the drive very high torque capacity and strong shock resistance with minimal backlash​. This robust design is commonly used in heavy-duty robotic joints and industrial actuators.

## Parametric Model


## Build Log

> 5-11-24: 
>
> ![Alt text](/assets/media/mechanism_media/prints.JPG){: 
style="height:400px;display: block; margin: auto;"}


---

# Compliant Mechanisms

## Build Log

> 5-11-24: 
>
> ![Alt text](/assets/media/mechanism_media/prints.JPG){: 
style="height:400px;display: block; margin: auto;"}

---

# Rolling Joints

## Build Log

> 5-11-24: 
>
> ![Alt text](/assets/media/mechanism_media/prints.JPG){: 
style="height:400px;display: block; margin: auto;"}


---

# Continuous Variable Transmission (CVT)

## Build Log

> 5-11-24: 
>
> ![Alt text](/assets/media/mechanism_media/prints.JPG){: 
style="height:400px;display: block; margin: auto;"}


---
# References

## FOC
1. 

## Capstan 
1. https://www.aaedmusa.com/projects/capstandrive
2. [Capstan Drive NEMA 17 Stepper Timing Belt](https://www.youtube.com/watch?v=ENMZsPwCUcA)

## Compliant Mechanisms
1. [BYU CMR](https://compliantmechanisms.byu.edu/maker-resources)
2. ["How to create effective compliant mechanisms with 3D printing" - Teaching Tech](https://www.youtube.com/watch?v=xV36ITRjP_4)

## Cycloidal
1. ["The BEST Way to Design a Cycloidal Drive in 2024" - Nelson Howe](https://www.youtube.com/watch?v=HDVCgaDknyM&t=7s)
2. ["Parametric Cycloidal Gear Drive (Fusion 360)" - Aaed Musa](https://www.youtube.com/watch?v=qDtFj4PE3-o)
3. ["How to Design a Cycloidal Disk in Fusion 360" - Levi Janssen](https://www.youtube.com/watch?v=jQ6LQBFZXmU&t=776s)
4. ["Designing a cycloidal drive in Python and Fusion 360" - RoTechnic](https://www.youtube.com/live/y9vLVXjz2c0?app=desktop&t=457s)

## Harmonic
1. ["What is Strain Wave Gear a.k.a. Harmonic Drive? A Perfect Gear Set For Robotics Applications!?" - How To Mechatronics](https://www.youtube.com/watch?v=xlnNj9F37MA)

## Rolling Joint
1. [Alternative to bearings for tiny robots](https://www.youtube.com/watch?v=TQiLLcumqDw)
2. [You've never seen the Robot Joint like this one!](https://www.youtube.com/watch?v=utDagouxM5U)

## CVT
1. [This Is The World's First Geared CVT and It Will Blow Your Mind - Ratio Zero Transmission](https://www.youtube.com/watch?v=mWJHI7UHuys&t=121s)
2. [RatioZero - the 'world's first geared CVT'](https://www.youtube.com/watch?v=vc9o-O1n81E)

## Sources
[^1]: https://github.com/woodenCaliper/CycloidalDrive
[^2]: https://github.com/roTechnic/CycloidalDesign
[^2]: ["Stewart Platform Control"](https://example.com), Accessed March 6, 2025.  
[^3]: **Book:** K. Ogata. *Modern Control Engineering*. Pearson, 2010.  
[^4]: **Website:** ["Stewart Platform Control"](https://example.com). Accessed: March 6, 2025.  
[^5]: **Journal:** Doe, J. *Optimization of Robotic Mechanisms*. *Journal of Robotics Research*, Vol. 25, 2023, pp. 45-60.  
[^6]: **Technical Report:** NASA. *Adaptive Control for Space Robotics*. Tech Report No. 4567, 2022.  

<!-- Hidden references trigger the footnote rendering -->
<span id="hidden-references"> [^3] [^4] [^5] [^6]</span>