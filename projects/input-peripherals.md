---
layout: project
category: "personal"
title: "Input Peripherals"
date: 2022-02-20
image: "macropad.png"
description: "An investigation into the customization potential of input devices and their core functionality."
repo: "https://github.com/nzge/input-peripherals"
toc: true
---

# General Info

### MCU Selection 
#### Microcontroller
Bluetooth: nice! nano
![Alt text](/assets/media/input_media/promicro-nrf52840.png){: 
style="height:200px;display: block; margin: auto;"}
#### MCU
nrf52480
### Keyboard Matrix: Multiplexing
The keyboard matrix is the fundamental idea behind the operation of any and all keyboard-adjacent input devices.
### Firmware
#### [QMK](https://qmk.fm/)
[My fork of QMK](https://github.com/nzge/qmk_firmware)  
Quantum Mechanical Keyboard (QMK) firmware is an improved version of the TMK firmware made by Hasu, with improvied programmability and microcontroller compatibility. VIA builds upon QMK by 
offering a GUI with simplified/graphical layout firmware configuration and additional features such as plug and play (no flashing), RGB controls, switch tester, etc.
QMK is general suitable for wired keyboard designs that employ Atmel AVR and ARM architecture.
https://www.reddit.com/r/MechanicalKeyboards/comments/hjh61v/what_is_qmk/
#### [ZMK](https://zmk.dev/)
[My fork of ZMK](https://github.com/nzge/zmk-config)  
ZMK Firmware is an open source (MIT) keyboard firmware built on the Zephyr™ Project Real Time Operating System (RTOS). ZMK's goal is to provide a modern and powerful firmware that is designed for power-efficiency, flexibility, and broad hardware support. 
ZMK is capable of being used for both wired and wireless input devices.
ZMK is easier to implement and support both wired(unibody) and wireless options
ZMK is has greater compatibility, notably in wireless applications. However, users say ZMK lags slightly behind in terms of ease-of-use features.
There is also TMK and KMK. TMK is mostly deprecated, and is a Circuit Python keyboard firmware. ZMK and QMK are the more common options.

## Mice
### Motion Sensor
Laser

Optical
mx8650
https://github.com/styropyr0/MX8650
pmw3360
https://www.tindie.com/products/jkicklighter/pmw3360-motion-sensor/
### Firmware
The open-source support from the community is far more limited for mice.
[https://github.com/biomurph/Mouse](https://github.com/biomurph/Mouse)

---
# Keyboards

## Hand-wired Macropad

### Design
Single body construction
#### Components
Pro Micro nrF52840
Diodes
Heat shrink
Copper wire
Switches
Housing

#### Pin Mapping
![Alt text](/assets/media/input_media/macro/promicro-nrf52840.png){: 
style="height:200px;display: block; margin: auto;"}

### Build Log
> 3-20-25: 
>
> ![Alt text](/assets/media/input_media/macro/hand-wire/IMG_0812.jpg){: 
style="height:200px; display:block; margin: auto;"}

> 3-18-25: 
>
> ![Alt text](/assets/media/input_media/macro/hand-wire/IMG_0783.JPG){: 
style="height:200px;display: block; margin: auto;"}

> 3-14-25: 
>
> ![Alt text](/assets/media/input_media/macro/hand-wire/macro-proto_3-14-25.png){: 
style="height:200px;display: block; margin: auto;"}

> 8-21-24: Test fit JWICK tactiles 
>
> ![Alt text](/assets/media/input_media/macro/hand-wire/test-fit.jpg){: 
style="height:200px;display: block; margin: auto;"}

---

## Macropad with PCB 

### Design


### PCB 
KiCAD

### Build Log

> 4-11-25: 
>
> ![Alt text](/assets/media/input_media/macro/macro-pcb/macro-pcb-proto.png){: 
style="height:200px;display: block; margin: auto;"}

---

## Ergo Split

### Design
### Layout
### PCB 
Designed in KiCAD

### Build Log
> 3-14-25: 
>
> ![Alt text](/assets/media/input_media/macro/macropad-proto_3-14-25.png){: 
style="height:200px;display: block; margin: auto;"}


---

## 40% with Fkeys

### Design
### Layout
### PCB 

### Build Log
> 4-12-25: 
>
> MCU Schematic            |  Key Matrix
:-------------------------:|:-------------------------:
![Alt text](/assets/media/input_media/40/40+_schematic_rev0-1.png){: style="height:200px;display: block; margin: auto;"}   |  ![Alt text](/assets/media/input_media/40/40+_schematic_rev0-2.png){: style="height:200px;display: block; margin: auto;"}

> 4-10-25: 
>
> ![Alt text](/assets/media/input_media/40/40+_proto_rev0.png){: 
style="height:200px;display: block; margin: auto;"}


---

## HHKB

### Design
### Layout
### PCB

### Build Log
> 3-14-25: 
>
> ![Alt text](/assets/media/input_media/macro/macropad-proto_3-14-25.png){: 
style="height:200px;display: block; margin: auto;"}

---
# Mice

## Ultralight Mouse

### Design
### PCB
### Firmware

### Build Log
> 3-14-25: 
>
> ![Alt text](/assets/media/input_media/macro/macropad-proto_3-14-25.png){: 
style="height:200px;display: block; margin: auto;"}

---

## Keyswitch Mouse

### Design
### PCB
### Firmware

### Build Log
> 3-14-25: 
>
> ![Alt text](/assets/media/input_media/macro/macropad-proto_3-14-25.png){: 
style="height:200px;display: block; margin: auto;"}

---

## Macros Mouse

### Design
### PCB
### Firmware

### Build Log
> 3-14-25: 
>
> ![Alt text](/assets/media/input_media/macro/macropad-proto_3-14-25.png){: 
style="height:200px;display: block; margin: auto;"}

---

## References

### Macropad Inspiration
1. [How to Build a Handwired Keyboard by Joe Scotto](https://www.youtube.com/watch?v=hjml-K-pV4E)
2. [How to Design Mechanical Keyboard Plates and Cases](https://www.youtube.com/watch?v=7azQkSu0m_U)

### Mice Inspiration
1. [I built a mouse from scratch with 3D printing and Arduino by Ben Makes Everything](https://www.youtube.com/watch?v=qmX8vL-GbxU)
2. [](https://zaunkoenig.co/blog/the-worlds-lightest-gaming-mouse-pcb)
3. [I Made the Worlds LIGHTEST Mouse (Wireless) by Juskim](https://www.youtube.com/watch?v=9CQqasv5_qo&t=208s)

### Sources
[^1]: K. Ogata. *Modern Control Engineering*. Pearson, 2010.  

<!-- Hidden references trigger the footnote rendering -->
<span id="hidden-references">[^1] [^2] [^3] [^4] [^5] [^6]</span>


