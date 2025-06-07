---
layout: project
category: "fiverr"
title: "O-Wind Turbine"
date: 2025-05-08
image: "owind.png"
description: "Omnidirectional wind turbine design"
---

<br>

![Alt text](/assets/media/owind_media/owind-FINAL.png){: 
style="width:100%;display: block; margin: auto;"}

**Client Objective**: Produce a geometrically faithful, functionally representative, and 3D printable CAD model of the most recent iteration of the O-Wind Turbine, originally developed by O-Inspiration as an award-winning urban wind energy solution. Based on available visual references and publicly accessible information. 

<br>

Reference
<div id="owind"></div>
<script>
  const owind= [
    { src: "/assets/media/owind_media/owindA.png", caption: "Latest iteration o-wind turbine by o-inspiration", title: "O-wind turbine" },
    { src: "/assets/media/owind_media/owindB.png", caption: "Previous iteration of the design", title: "O-wind turbine" },
  ];
  new Slideshow(owind, 'owind');
</script>

<br>
Core challenges: Sucessfully generating surface geometry and adding functional elements like drain holes and ribs. Preserving design intent. 

## Build Log 
> 5-13-25: **Final Revision**. Added drain holes (in the fins and on the vent exteriors) to guide rain water out the bottom of the turbine. Added a through hole dowel hub cap to accomadate a locking pin.
>
> ![Alt text](/assets/media/owind_media/build-log/owind2_5-13-25.png){: 
style="width:450px;display: block; margin: auto;"}
> ![Alt text](/assets/media/owind_media/build-log/owind_5-13-25.png){: 
style="width:450px;display: block; margin: auto;"}
> ![Alt text](/assets/media/owind_media/build-log/panel_v3.png){: 
style="width:450px;display: block; margin: auto;"}
> ![Alt text](/assets/media/owind_media/build-log/panelR_v3.png){: 
style="width:450px;display: block; margin: auto;"}

> 5-12-25: **Revision 2 complete**. Major lessons learned: avoid surface thicken function like the plague
>
> ![Alt text](/assets/media/owind_media/build-log/owindv2-2_5-12-25.png){: 
style="width:450px;display: block; margin: auto;"}
> ![Alt text](/assets/media/owind_media/build-log/owindv2-1_5-12-25.png){: 
style="width:450px;display: block; margin: auto;"}
> ![Alt text](/assets/media/owind_media/build-log/concept3_5-11-25.png){: 
style="width:450px;display: block; margin: auto;"}
> ![Alt text](/assets/media/owind_media/build-log/panel.png){: 
style="width:450px;display: block; margin: auto;"}
> ![Alt text](/assets/media/owind_media/build-log/panel_R.png){: 
style="width:450px;display: block; margin: auto;"}


> 5-10-25: **Revision 1.5**. Tried to build turbine around reuleaux tetrahedron to form the turbine's bulbous sillouette. After hours of toying around with the design, I realized this was the wrong direction. 
>
> ![Alt text](/assets/media/owind_media/build-log/reauleaux-fail_5-11-25.png){: 
style="width:450px;display: block; margin: auto;"}
> ![Alt text](/assets/media/owind_media/build-log/reuleaux3_5-11-25.png){: 
style="width:450px;display: block; margin: auto;"}
> ![Alt text](/assets/media/owind_media/build-log/reuleaux2_5-11-25.png){: 
style="width:450px;display: block; margin: auto;"}
> ![Alt text](/assets/media/owind_media/build-log/reuleaux_5-11-25.png){: 
style="width:450px;display: block; margin: auto;"}

> 5-9-25: **Revision 1 complete**. Manufacturing optimizations. Created printable files for a full scale model and an approximate 1:10 scale-down of the intended 80cm diameter size (the side lengths of each triangle making up the tetrahedron panel are 80mm instead of 80cm) full scale model. The scale-down model is intended for print testing and prototyping before committing to a final version of the full scale model. Added a custom base fitted with bearings in the assembly for smooth operation.
>
> ![Alt text](/assets/media/owind_media/build-log/concept0-2_5-9-25.png){: 
style="width:450px;display: block; margin: auto;"}

> 5-9-25: Concept topology refinements. Added fins
>
> ![Alt text](/assets/media/owind_media/build-log/concept0-1_5-9-25.png){: 
style="width:450px;display: block; margin: auto;"}


> 5-8-25: Initial Concept
>
> ![Alt text](/assets/media/owind_media/build-log/concept0_5-8-25.png){: 
style="width:450px;display: block; margin: auto;"}

---

## References

**O-innnovations**  
[https://o-innovations.com/](https://o-innovations.com/)  
[O-Wind by O-Innovations, official (ENG)](https://www.youtube.com/watch?v=EOEeob8wJ2c)
[This Apartment-Size Wind Turbine Makes Use of Gusts Coming From All Directions](https://www.smithsonianmag.com/innovation/o-wind-turbine-takes-top-dyson-award-180970825/#:~:text=principle%20could%20be%20used%20for,axis%20due%20to%20Bernoulli%E2%80%99s%20principle)
[O-Wind - The James Dyson Award](https://www.jamesdysonaward.org/en-US/2018/project/o-wind-turbine)  
[This Sphere Turbine is CRAZY! by Ziroth Tech](https://www.youtube.com/shorts/Vhng5EkwtDA)

**Examples**  
[OWIND TURBINE Cylinders Cult3D](https://cults3d.com/en/3d-model/tool/owind-turbine-cilindros)  
[Omni Directional Wind Turbine by Blue Eagle](https://grabcad.com/library/omni-directional-wind-turbine-1)  
[Design and Fabrication of O-Wind Turbine - ijrte](https://www.ijrte.org/wp-content/uploads/papers/v8i1/A3375058119.pdf)  
[2202 The O-Wind - An Interesting VAWT (reworked and reposted)](https://www.youtube.com/watch?v=UTHbfK_MBwo)

**Hardware**  
[608-2RS Roller Bearing](https://www.mcmaster.com/products/bearings/ball-bearings-1~/)  

**Research Materials**   
[Wind Turbines Design - Energy and AI, 2022](https://www.sciencedirect.com/topics/engineering/wind-turbines-design)  
[Wind energy - OpenEI](https://openei.org/wiki/Wind_energy)  
[Wind Turbine Generator - Alternative Energy Tutorials](https://www.alternative-energy-tutorials.com/wind-energy/wind-turbine-generator.html)  
[Omnidirectional generating device - patent](https://patents.google.com/patent/WO2045047685A1/en)  
[o-wind - google patents](https://patents.google.com/?q=(o-wind)&oq=o-wind)  

**Modelling Resources**  
[Solidworks Reuleaux Tetrahedron 羅勒斯四面體 - batermit](https://www.youtube.com/watch?v=l5_5c2-O1EI)  
[Math and Art of Smooth-Rollers in SOLIDWORKS](https://www.goengineer.com/blog/math-and-art-smooth-rollers-solidworks)  