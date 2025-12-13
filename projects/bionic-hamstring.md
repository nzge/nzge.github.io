---
layout: project
category: "school"
title: "Bionic Studies"
date: 2025-12-02
image: "bionic.png"
description: "Design and Control of a Hamstring Recovery Bionic System"
repo: "https://github.com/nzge/bionics"
toc: true
---

# A Hamstring Recovery Bionic System

**Nathan Ge**, Beom Jun Kim, Fotini Ioannides, Katrina Le, Matthew Silva  
Department of Mechanical and Aerospace Engineering  
University of California, Los Angeles  


## Abstract

The hamstring muscles are a muscle group crucial to daily function, especially for movements such as walking, running, and jumping. As a result, hamstring strains, which involve disruption to the muscle–tendon structures of the hamstring group, are particularly debilitating. This project proposes a bionic system designed to promote healing during the early stages of more severe hamstring injuries while operating efficiently. The report details the design process and technical reasoning informing the system, including pathology characterization, biomechanical simulation, transmission design calculations, physical architecture, and control framework.

---

## I. Background

### A. Pathology Description

A hamstring strain is an injury to the hamstring muscle group, commonly characterized by a sudden sharp pain in the posterior thigh. This injury often limits activities such as running, hip extension, and knee flexion. Hamstring strains are typically classified using grading schemes ranging from Grade I to Grade III or numerical scales from 0 to 4, depending on severity and anatomical location within the musculotendinous unit.

**Secondary pathologies** may include complete tendon rupture at the insertion site or avulsion fractures caused by excessive tendon loading.


### B. Anatomy

The hamstring muscle group shares several defining anatomical characteristics:

- Origin at the ischial tuberosity  
- Insertion across the knee joint at the tibia or fibula  
- Innervation by the tibial branch of the sciatic nerve  
- Primary functions of knee flexion and hip extension  

| Muscle | Origin | Insertion |
|------|-------|-----------|
| Semitendinosus | Ischial tuberosity | Medial tibia |
| Semimembranosus | Ischial tuberosity | Medial tibial condyle |
| Biceps femoris (long head) | Ischial tuberosity | Fibular head |
| Biceps femoris (short head) | Linea aspera | Fibular head |


### C. Mechanism of Injury

Hamstring strains are among the most common athletic injuries, accounting for approximately 12–16% of sports-related injuries and exhibiting re-injury rates between 22–34%. These injuries frequently occur during high-speed running, jumping, and rapid changes in direction, where the hamstrings undergo eccentric loading at extended muscle lengths.


### D. Prior Art

Conservative treatment is commonly prescribed for Grade I and II hamstring strains and includes rest, cryotherapy, partial immobilization, and gradual reintroduction of stretching and strengthening exercises. More advanced treatments include peptide-based therapies and surgical interventions such as proximal hamstring repair using all-suture anchors.

---

## II. Biomechanical Modeling

All biomechanical simulations were performed using the OpenSim application programming interface (API).

### A. Model Selection

The **GaitModel2392** musculoskeletal model was selected. This model includes:

- 23 degrees of freedom  
- 92 musculotendon actuators  
- Lower-extremity joint definitions based on Delp et al.  
- A planar knee joint model following Yamaguchi and Zajac  

The hamstring muscles analyzed were:

- `semimem_r`  
- `semiten_r`  
- `bifemsh_r`  
- `bifemlh_r`  

Model constraints included a peak knee torque of 16.64 Nm, angular velocity limited to 60°/s, and a total exoskeleton mass constraint of 2.5 kg.


### B. Pathology Characterization

Hamstring strain pathology was modeled as a 22% reduction in maximum isometric muscle force. This value represents a generalized acute injury scenario. The semimembranosus muscle was selected as the primary target for assistance due to its significant contribution to knee flexion torque.


### C. Bionic System Modeling

The bionic system was implemented as an OpenSim path actuator operating in parallel with the hamstring musculature. The actuator applied assistive tensile forces along the anatomical path of the semimembranosus muscle. Actuator force limits were selected based on feasible motor capabilities.


### D. Simulation Procedure

The simulation pipeline consisted of the following steps:

1. Scaling GaitModel2392 to subject-specific motion data  
2. Creation of three models: healthy gait, injured gait, and injured gait with bionic assistance  
3. Inverse kinematics analysis  
4. Residual Reduction Algorithm (RRA)  
5. Computed Muscle Control (CMC)  

The optimal actuator force was found to be 566 N.

---

## III. Bionic System Design

### A. Design Specifications

The primary design constraints were:

- Total system mass less than or equal to 2.5 kg  
- Energy-efficient operation  
- Reduction of semimembranosus activation  
- Minimal soft-tissue interaction  
- Avoidance of a tourniquet effect during muscle expansion  


### B. General Description

The proposed system is a powered knee exoskeleton spanning the mid-thigh to the shank. The actuation system consists of a Maxon EC-4pole 30 motor rated at 200 W, coupled with a 215:1 transmission. The lateral frame design minimizes interference with soft tissue, and a strap-loosening mechanism adapts to muscle volume changes during gait.

The system is named:

**H.A.M.S.T.E.R — Hamstring Active Mechanical Support Training and Enhancement Robot**


### C. Optimization Problem

An optimization study was conducted to minimize muscle activation while respecting mass and battery constraints. Increasing actuator force beyond 566 N resulted in diminishing returns, providing minimal additional reduction in muscle activation.


### D. Actuator Selection and Transmission Optimization

Thirteen candidate motors were evaluated using a cost function based on heat loss. The Maxon EC-4pole 30 motor was selected as the optimal actuator. The system experiences approximately 1.47 J of heat loss per gait step.

Peak transmission ratio occurs at 0° knee flexion, corresponding to peak biological torque demand.


### E. Series Elastic Actuation

The inclusion of series elastic actuation was investigated. Simulation results indicated negligible efficiency improvement, and SEA was therefore excluded from the final design.


### F. Battery Selection

Energy consumption per step was estimated at 273.6 J. Assuming 5,000 assisted steps per day, the total daily energy requirement is approximately 380 Wh. A 48 V, 10 Ah battery with a capacity of approximately 480 Wh was selected, providing roughly 6,300 assisted steps per charge.

### G. Hardware Implementation

Design considerations included muscle expansion during gait, soft-tissue artifact, and preference for bony attachment points such as the tibial crest. A kinematic strap mechanism dynamically loosens during knee flexion and tightens during extension to accommodate muscle volume changes.

### H. Control Framework

The control architecture consists of three layers:

- High-level control (100 Hz): EMG-based intent detection  
- Mid-level control (1 kHz): knee impedance control  
- Low-level control (10 kHz): motor current and position control using a Maxon EPOS4 controller  

---

### I. Evaluation

The final system mass was 5.735 kg, with a torque density of 128.6 Nm/kg. Computed Muscle Control simulations demonstrated a reduction in semimembranosus activation when using the bionic system.

---

## IV. Surgical Innovation

### A. Ilizarov Method

The Ilizarov method offers rigid attachment but is highly invasive and unsuitable for dynamic gait assistance applications.

### B. Electrical Stimulation

Hybrid systems combining functional or neuromuscular electrical stimulation with mechanical assistance offer improved rehabilitation potential with reduced invasiveness and increased adaptability.

---

## V. Conclusions

This project presents a biomechanically grounded framework for hamstring rehabilitation using powered bionic assistance. Simulation results demonstrate meaningful reductions in muscle activation while preserving natural gait kinematics, supporting the feasibility of assistive recovery exoskeletons.

---

## Acknowledgment

The authors thank Professor Tyler Clites for guidance during the MAE 263E Bionics Systems Engineering course.

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


---

[Report](https://github.com/nzge/bionics/blob/main/MAE-263E_report.pdf)

## References

*(References preserved from original PDF; see source document for full citations.)*


