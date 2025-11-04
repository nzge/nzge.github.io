---
layout: project
category: "upwork"
title: "Cup Bot"
date: 2025-06-1
image: "cup-bot.PNG"
description: "Cup scribing robot"
---

<br>

![Alt text](/assets/media/cup-bot.PNG){: 
style="width:100%;display: block; margin: auto;"}

**Client Objective**: Design a robot that draws designs on cups.

**Motivation**
- Environmentally friendly packages
- custom printed hot cups
- minimum of 25000 
- inventory challenges
- uv inkjet 
- Inspiration: egg-bot 

<br>

## Prototyping Phase

Design Sketches
<div id="cupbot-concept"></div>
<script>
  const cupbot= [
    { src: "/assets/media/cup-bot_media/prototyping/Cup Bot-1.png", caption: "", title: "" },
    { src: "/assets/media/cup-bot_media/prototyping/Cup Bot-2.png", caption: "", title: "" },
    { src: "/assets/media/cup-bot_media/prototyping/Cup Bot-3.png", caption: "", title: "" }
  ];
  new Slideshow(cupbot, 'cupbot-concept');
</script>

## Robotics

https://www.instructables.com/Mug-O-Matic-a-Modular-Tiny-CNC-Drawing-Robot/
[Arduino CNC drawing robot - eggbot](https://www.youtube.com/shorts/YMTUNXfdOk4)
[Drawing with robots](https://www.youtube.com/shorts/KfeUCWzGf2E)
[DIY Pen Plotter with Automatic Tool Changer | Arduino based CNC Drawing Machine](https://www.youtube.com/watch?v=virDtVVt2Xo)

### Cup dispenser

**Inspiration**
https://www.dispensingcomponents.com/cup-dispensers.html
[Automatic Paper Cup Dispenser. push pull 12 volt solenoid valve](https://www.youtube.com/watch?v=n5DNCDIZmQs)
[Paper cup dispenser - thang](https://www.youtube.com/shorts/HWDkaef7mZE)
[AUTOMATIC CUP HOLDER made of PVC pipe how to make](https://www.youtube.com/watch?v=Vj6yzgA9p8w)

#### Reciprocating Linear Motor
Activates the cup dispenser. Reciprocal motion enables repeatable dispense action.
https://www.youtube.com/watch?v=QAcdDiX4zQE

#### Motorized turret line (Area of development)  
How do index each cup turret?
Rail system that accomodates multiple cup types

**Parts**
- linear guide rail x2
- rail carriages x2 per turret
- motors to moving turrets
- indexing system?

### Cup catch/funnel (Area of development)
Breaks the fall of the cup coming out of the dispenser. Can optionally present the cup to the consumer mechanically

### Pen lifter mechanism
The primary component of the robot. Changes levels in the z and horizontal axis to efficiently move a singular pen that draws any conceivable design on a cup of any size. 
The horizontal motion is driven by a rack and pinion design. The main design concern is securing the open end of the stepper motor axle to mitigate axle deflection so that the pinion properly grips the rack. This problem was not solved but may not be a huge issue practically. Additional motor mounting orientations and horizontal movement driving methods were deliberated upon and tested, but ultimately I falled back on the rack and pinion due to its simple and elegant design.
The z axis is driven by a stepper motor attached to a lead screw. This takes inspiration from 3d printer gantries that function in a similar way. While most 3d printers run with 2 lead screws to drive the z axis (to evenly drive the upwards motion on both ends with the 3d printer nozzle in the middle to still accomadate its horizontal motion), I adopted the design to run with only 1 stepper motor.
Requires limit switches to calibrate the motion and limit the linear motion of both axes.

**Inspiration**  
[Compliant pen lifter](https://www.youtube.com/shorts/tQbczmsBnS0)  
https://us.openbuilds.com/scribe-pen-lifter/  

Horizontal pen movement actuation ideas
- https://www.reddit.com/r/robotics/comments/z91sn8/looking_for_a_high_speed_linear_actuator/
- [PCB Linear Actuator](https://benwang.dev/2022/08/09/PCB-Linear-Actuator.html)
  - fast, but not load bearing/backdriveable
- [Xeryon Piezo mini linear actuators](https://xeryon.com/products/mini-linear-actuators/)
  - fast, but not cost effective
- [IRIS][https://irisdynamics.com/products/orca-series]
archimedes screw too slow, not responsive?

#### Pen
The primary design challenge with the pen was to have it spring loaded to maintain consistent contact pressure and take out some of the guess work of positioning the pen at the perfect location.

[Making your own plotter pens for the CE-150](https://www.youtube.com/watch?v=G97EAIrhWRY)  
https://www.servomagazine.com/magazine/article/make-a-spring-loaded-pen-holder-for-your-cnc-router-for-5

Linear guide 
- rail with linear bearings
  - spring implementation much easier
- rail with roller bearings
  - more compact

How to drive pen motion?
- Rack and pinion
  - too slow
- stepper with pulleys
  - complex
- 

**Parts**  
Pen lifter  
- rack and pinion
- NEMA-17 Stepper
- springs
Pen z-axis
- GT3 Timing belt
- GT Pulley 

### Turntable 
Rotates the cup
Driven by a stepper motor attached to the turntable via timing belt. 

**Inspiration**  
https://www.audiomatica.com/wp/?page_id=3024  
https://www.instructables.com/Automated-Turntable-With-Steppermotor/   
https://learn.adafruit.com/stepper-motor-turntable  

Design challenges
- internally routed vacuum pipe to accomadate rotation of chuck

**Parts**  
- NEMA-17 Stepper
- GT3 Timing belt
- GT Pulley (20T for motor, 60T for turntable) 
- Lazy susan

#### Vaccuum table
Suctions the cup to the cup in place, while still maintaining complete access to the cup exterior surface

**Inspiration**  
[A $20 DIY VACUUM TABLE FOR CNC AND WOODWORKERS -- CAD, MACHINE, & TEST. DOES IT SUCK REALLY GOOD???](https://www.youtube.com/watch?v=pWSyRxU38HM)  
[CNC Vacuum PAD's 3D printed [with .stl & Fusion 360 files]](https://www.youtube.com/watch?v=r-QcuUqpHh4)  
https://amastone.com/shop/suction-cup-110-mm/  

**Parts**  
- vacuum pump
- rubber o-ring gasket


## Build Log 
> 6-31-25: 
>
> ![Alt text](/assets/media/cup-bot_media/build-log/total%20assy%20rough%20prototype.PNG){: 
style="height:200px;display: block; margin: auto;"}

> 6-19-25: 
>
> ![Alt text](/assets/media/cup-bot_media/build-log/6-19-25.PNG){: 
style="height:200px;display: block; margin: auto;"}

> 5-22-25: 
>
> ![Alt text](/assets/media/cup-bot_media/build-log/5-22-25.PNG){: 
style="height:200px;display: block; margin: auto;"}

> 5-9-25: 
>
> ![Alt text](/assets/media/cup-bot_media/build-log/5-21-25.PNG){: 
style="height:200px;display: block; margin: auto;"}

---

## References

**Test**  
[]()
[]()