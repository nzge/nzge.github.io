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

## Keyboard
A keyboard simply converts keystrokes (user input) into input commands, usually by stringing together a collection of character inputs.

Beyond the simple function of registering keystrokes, everything in the hobby is optimized for sound and feel. As you will see, a common theme for sound improvement comes from dampening/compression, and any form of reduction in rattle/instability.

### Keyboard Matrix (Multiplexing)
The keyboard matrix is the fundamental idea behind the operation of any and all keyboard-adjacent input devices.

### Keyboard Anatomy
![Alt text](/assets/media/input_media/keyboard/keyboard-anatomy.png){: 
style="height:500px; display: block; margin: auto;"}
<p style="text-align:center;">source: https://geekhack.org/index.php?topic=125072.0</p>

| Component | Description |
|--------------|------|
|[Case](#case-design)  |Houses the keyboard|
|Plate  | Found in most keyboard designs. It provides stability to the PCB-Switch assembly |
|[Keyswitch](#switches) | The user interfaces with the keyswitch to register inputs |
|PCB  |Connects the electronic components of the keyboard|
|[MCU](#mcu-selection) |The brains of the keyboard. Often integrated into the PCB|

### Case Design

#### Layout
The layout determines the general form factor of the case. 
<div id="layouts"></div>
<script>
  const layouts= [
    { src: "https://nzge.github.io/assets/media/input_media/keyboard/fullsize.png", caption: "Standard layout with all keys (alphas, function row, numpad)", title: "Fullsize" },
    { src: "https://nzge.github.io/assets/media/input_media/keyboard/tkl.png", caption: "Full size without the numpad", title: " TKL" },
    { src: "https://nzge.github.io/assets/media/input_media/keyboard/hhkb.png", caption: "The HHKB (Happy Hacking Keyboard) layout is a proprietary layout that optimizes ctrl, and baskspace key placements.", title: "HHKB" },
    { src: "https://nzge.github.io/assets/media/input_media/keyboard/ortho.png", caption: "The ortholinear layout positions the keys in a uniform grid.", title: "Ortho" },
    { src: "https://nzge.github.io/assets/media/input_media/keyboard/ortho.png", caption: "The ortholinear layout positions the keys in a uniform grid.", title: "Split Ergo" },
    { src: "https://nzge.github.io/assets/media/input_media/keyboard/ortho.png", caption: "The ortholinear layout positions the keys in a uniform grid.", title: "Split Ortho" },
  ];
  new Slideshow(layouts, 'layouts');
</script>

#### Mounting System
The way the PCB-switch assembly are housed within the case.
<div id="my-slideshow8"></div>
<script>
  const slides8= [
    { src: "https://nzge.github.io/assets/media/input_media/keyboard/top_mount.jpg", caption: "The plate is secured to the case top housing. Usually a stiffer typing experience. ", title: "Top Mount" },
    { src: "https://nzge.github.io/assets/media/input_media/keyboard/gasket_mount.jpg", caption: "Gasket material between the plate (or PCB) and keyboard housing on both top and bottom sides.  This cushions/trampolines the plate within the keyboard.", title: "Gasket Mount" },
    { src: "https://nzge.github.io/assets/media/input_media/keyboard/sandwich_mount.jpg", caption: "Screws go fully through the bottom housing, plate, and top housing of the keyboard, holding the plate like the middle of a sandwich. ", title: "Sandwhich Mount" },
  ];
  new Slideshow(slides8, 'my-slideshow8');
</script>

### Switches
Keyboard switches are a very intriguing corner of the keyboard hobby, filled with some of the most bizarre naming schemes out of any hobby I've been a part of. The Keyboard switch rabbithole is vast and deep. Switch selection may impact the design of your pcb (potentially even the case), as switches may possess a unique form factor that you need to account for.
#### Switch Types

##### Cherry MX Style
Invented by Cherry in the 1980s, the MX style switch became the gold standard high-end switch solution. The MX style switch was a major innovation because it introduced a modular, customizable, and reliable mechanical keyboard switch. This design enabled a wide variety of tactile and auditory feedback options, and the durability of the switches allowed them to withstand millions of keystrokes. Most of the keyboard ecosystem is built around housing this style of switch.
###### Switch Anatomy
![Alt text](/assets/media/input_media/switches/cherry.gif){: 
style="height:200px;display: block; margin: auto;"}
**Stem**: What is pushed down to trigger a key press.  
**Top Housing & Bottom Housing**: Houses the switch assembly  
**Spring**: Dampens the keypress and allows the key to return to starting position on the upstroke  
**Metal Leaf**: Contact leaf that triggers the key input that registers a keypress  

###### Manufacturers: The Switch Market
<u>Cherry MX</u>: The original switch manufacturer. Cherry MX switches come with a signature scratch that people have come to know and love. In a hobby that glorifies smoothness in all aspects of the typing experience, it's interesting that the uniquely scratchy feeling of MX switches have withstood the test of time. 
- Cherry MX Blacks: MX blacks are an iconic switch, inspiring countless spinoffs such as OP blacks, MX Hyperglide. Old MX blacks (known as "vintage blacks") that used the 1st gen tooling of Cherry MX Blacks (1984 - 1994) are sometimes harvested from old computers and repurposed due to their improved level of smoothness by nature of being "broken-in" from constant wear. There was also an alleged 1994 retool that made the switch worse in terms of smoothness, making the older MX blacks superior/more valuable in that regard.

<u>Successors</u>: Since Cherry dropped their switch patent in 2004, the manufacturer market has exploded with countless switch variations from a whole host of manufacturers.
- Gateron: probably the most notorious Cherry MX clone company
  - Milky Yellows, Deeping, Oil Kings, Black ink
- Other Manufacturers: Kailh, JWK/Durock, KTT, Tecsee, Outemu, SP-star, Akko, BSUN/YOK, HMX, Everglide

###### Frankenswitches 
Combining components from various switches to create a completely unique switch  
Notable examples: Black Cherry Pie, Creamsicle, Zyko, Holy Boba, Holy Panda  
<br>

{:.callout-info}
> ℹ️ **Honorable Mentions**  
> NK creams, Holy Pandas (Spinoffs: GOK Pandas, Glorious Pandas), Boba U4T, Tangies

##### Other Switch Types
Less popular switch types
###### Low profile 
Low profile switches are most often seen in split keyboard builds.  
![Alt text](/assets/media/input_media/switches/choc.png){: 
style="height:125px; margin-right: 2em; float: right;"}
  - Choc switches
  - Choc v2

Cherry Ultra low profile  
![Alt text](/assets/media/input_media/switches/cherry-ulp.png){: 
style="height:125px; margin: auto; float: left;"}
<div style="clear: both;"></div>

###### Alps
![Alt text](/assets/media/input_media/switches/alps.png){: 
style="height:125px; margin-right: 2em; float: right;"}
A popular switch in the 80s and 90s. They became obsolete as Cherry rose in popularity.
- SKCL (Linear): green, yellow
- SKCM (Tactile, Clicky): 
  - Tactile: orange, salmon, black, cream/ivory, brown, neon green (rare)
  - Clicky: blue, amber, white
- Clones: [Matias](https://matias.ca/switches/click/)
<div style="clear: both;"></div>

###### Hall effect
![Alt text](/assets/media/input_media/switches/hall-effect.png){: 
style="height:125px; margin-right: 1em; float: right;"}
Uses a magnetic field to detect keystrokes. The switch is gaining popularity in the gaming space, as there is a lot of software configurability as to when to detect inputs depending the distance of travel of the keystroke (along the downstroke and upstroke).

- Lekker Switches (V2), Black Knight Switches, TTC Magneto Switch, OG Jades, Jade Pros, & Jade Max, Geon RAW HE
<div style="clear: both;"></div>

###### EC
![Alt text](/assets/media/input_media/switches/aeboards-naevies-ec.png){: 
style="height:125px; margin-right: 2em; float: right;"}
The EC switch uses electrostatic capacitance to register an input. When the switch is pressed, two contact leaves are brought into close proximity. The electric field between the two contacts leaves becomes disrupted when the distance between them changes. This change in the electrostatic capacitance is measured to actuate the key.
<div style="clear: both;"></div>
- AEBoards: Navy switches  
- Varmilo: Iris, Sakura, Ivy, Daisy, Rose  

<u>Topre</u>  
The Topre switch is distinctive, developing a cult following.

![Alt text](/assets/media/input_media/switches/topre.png){: 
style="height:125px; margin-right: 2em; float: left;"}
<div style="clear: both;"></div>

#### Sound Profile
**Linear**: The stem freely moves through the switch cavity, offering a smooth consistent key press. Pretty self explanatory, and the most used form of switch.

**Tactile**: The signature key feel of a tactile switch is that it offers a tactile bump along the key press. The force actuation curve is nonlinear, in that at the middle of the key press, there is a noticeable point at which a large spike in actuation force is required. 

**Clicky**: Beyond having a tactile bump along the key press, audible click sound is also produced. The click is produced when the key stem comes in contact with a click jacket or click bar along the key press.

**Silent**: Silent switches have dampening rubber on the feet of the stem and on the shoulders to both silence the bottom out as well as the upstroke.

#### Switch Materials
Switch material can impact the acoustic resonance of the switch upon key press. Common switch materials include POM, Nylon, HPE, and UMWHE.

#### Stabilizers
Keys larger than the typical 1u form factor require stabilizers to support the entire length of the key. Stabilizers come in a few styles.

Plate-mount: clip into the plate  
PCB-mount: mount directly to the PCB  
- Screw-in: attached to the PCB via screws.
- Platemount (Clip-in): Clip into the PCB
Screw-in stabilizers are the preferred choice as they produce less wobble. In this instance, wobble would mean a less pleasant sound and typing experience.

Owlstabs, Staebies, Durock, TX, Cherry Clip-in

### Mods
Modifications on existing components to improve sound and feel.  
Modding as an idea rose in popularity around 2020-22. In more recent times, most mods, specifically ones that add foam/dampeners, are often rejected as a cheap/shoddy remedy to the many pitfalls of a poor design or keyboard configuration. People are returning to a more purist approach to keyboard builds by perfecting the basics (little to no foam, properly tuned stabilizers)

##### Switch Mods
**Lube**: Not so much a mod as lubrication is standard procedure, and many switches come pre-lubed. However, people do prefer to lube their own switches. Common lube choices include Krytox 205G0 (thicker, for linear switches), Tribosys 3203 (thinner, for tactile switches), or a proprietary blend of lubes.  

**Spring swap**: stock springs can be substituted for aftermarket options, greatly impacting key feel. Springs can vary in length, actuation force (g), and number of stages (some springs have 2 stages, creating a staged actuation curve). Common spring manufacturers include SPRiT, TX, and Geon. 

**Switch Films**: Switch films are sandwhiched between the top and bottom housing of a switch to reduce housing wobble/vibration.  

**"Broken-in"**: Switches can be preemptively pressed for tens of thousands of keystrokes before being sold, to physically smoothen the switch mechanical friction (like how a river stream smoothens river rocks).  

**Switch pads**: Poron pads that are placed between the PCB and the switch to reduce key wobble. Switch pads are a less popular mod that came as a biproduct of the foam craze that seeks to dampen and deepen a keyboard's sound signature by any means necessary.  

##### Stabilizer Mods
- Holee
- Band-Aid

##### Case Mods
- Forcebreak
- Tempest Mod
- Gasket
- Silicone


### Firmware
#### [QMK](https://qmk.fm/)
[My fork of QMK](https://github.com/nzge/qmk_firmware)  
Quantum Mechanical Keyboard (QMK) firmware is an improved version of the TMK firmware made by Hasu, with improved programmability and microcontroller compatibility. VIA builds upon QMK by 
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

## Mouse
A mouse provides cursor control to navigate and interact with display elements. 

### Motion Sensor
The motion sensor is at the core of mouse function. It converts physical mouse movement to cursor movement. The sensor tracks translational movement, polling at a high frequency.  
<br>
![huano](/assets/media/input_media/mice/paw3395.jpg){: 
style="height:350px; display: block; margin: auto;"}
<br>

**Laser sensor**: motion tracking via lasers. Largely obsolete by modern standards.  

**Optical Mice**: motion tracking via LEDs

| Sensor | Description |
|---|---|
| [mx8650](http://www.lizhiic.com/admin/Editor/uploadfile/20150127092829971.pdf) | [Firmware](https://github.com/styropyr0/MX8650) |
| [pmw3360](https://www.tindie.com/products/jkicklighter/pmw3360-motion-sensor/) |  |
| [Pixart paw3395](https://www.aliexpress.us/item/3256806000276201.html?spm=a2g0o.productlist.main.3.f81f6506zGBJkc&algo_pvid=3460ccad-eea4-41b0-9091-fe5f78e2867a&algo_exp_id=3460ccad-eea4-41b0-9091-fe5f78e2867a-1&pdp_npi=4%40dis%21GBP%211.16%211.16%21%21%2110.27%2110.27%21%402103846917125773200222636ea5da%2112000036558235684%21sea%21GB%214560809364%21AB&curPageLogUid=DzwSQgdCiofx&utparam-url=scene%3Asearch%7Cquery_from%3A&gatewayAdapt=vnm2usa4itemAdapt#nav-description) | |

### Switches

![huano](/assets/media/input_media/switches/huano.webp){: 
style="height:350px; display: block; margin: auto;"}

Omron D2F-01  
Kailh GM2.0  
Huano 
- Blue Shell Pink Dot
- Transparent Red dot  

TTC 80M, TTC gold  
Zippy DF3P1  
Kailong  

### Firmware
The open-source support from the community is far more limited for mice.
[https://github.com/biomurph/Mouse](https://github.com/biomurph/Mouse)

## MCU Selection 
An MCU (Microcontroller Unit) is the computer commonly found in integrated circuits (ICs) that contains a processor core, memory, and programmable I/O peripherals. It is the brain of embedded systems, controlling various features and operations.

**ISA (Instruction Set architecture)**: Defines the instruction set (the machine "language") a processor can understand.
Examples: ARM, RISC-V, AVR

**Framework**: A collection of libraries/packages/toolchains that enable development. Framework compatibility depends on the MCU's processor core ISA and communications protocols.
Examples: Arduino, Zephyr, Tensilica Xtensa

#### ESP32
- Core: Dual-core Tensilica LX6 processor (up to 240 MHz)
- Flash: Up to 16MB (depending on variant)
- RAM: 520KB SRAM
- GPIO: 34 digital I/O pins, with support for PWM, UART, SPI, I2C, ADC, DAC, etc.
- Wireless:
  - Wi-Fi (802.11 b/g/n)
  - Bluetooth 4.2/Bluetooth LE
- Communication:
  - I2C, SPI, UART, CAN, SDIO
  - PWM, DAC, ADC (12-bit)
- Power: Multiple power modes for efficiency (can go as low as 5uA)
- Extras:
  - Built-in touch sensors
  - Integrated hardware cryptographic accelerators (e.g., for secure boot, SSL)
  - RTC for time-keeping
- Compatibility: ESP-IDF, Arduino framework, MicroPython

Built-in Wi-Fi and BLE with decent performance for wireless peripherals. Power draw is high for battery-powered designs and GPIO matrix limitations require careful planning.

![Alt text](/assets/media/input_media/mcu/seeed-XIAO_ESP32C3.png){: 
style="height:200px;display: block; margin: auto;"}

| Microcontroller | Description |
|--------------|------|
| Seeed Studio XIAO ESP32C3 |     |
| ESP32-DevKitC | A versatile development board with multiple I/O options. |
| ESP32-PICO-KIT | Features a small footprint with essential peripherals. |

#### ATmega32U4 (AVR family)
- 8-bit AVR architecture
- 32KB Flash memory for program storage
- 2.5KB SRAM
- 1KB EEPROM
- USB: Built-in USB support (for HID, CDC, etc.)

Widely used in keyboards (e.g. Pro Micro) due to native USB HID support and strong support in QMK. Limited in RAM and speed, making it less ideal for wireless or complex peripherals.

| Microcontroller | Description |
|--------------|------|
| SparkFun Pro Micro | A compact board with a 5V/16MHz configuration, widely supported in the keyboard community |g
| Teensy 2.0 | Known for its robust USB capabilities and compatibility with various keyboard firmware. |
| Adafruit ItsyBitsy 32u4 | Offers a small footprint with additional GPIO pins, suitable for space-constrained designs. |

#### RP2040 / RP2350
- Core: Dual-core ARM Cortex-M0+ (up to 133 MHz)
- Flash: 2MB of onboard QSPI Flash
- RAM: 264KB SRAM
- GPIO: 26 digital I/O pins, with support for PWM, UART, SPI, I2C, ADC
- Communication: I2C, SPI, UART interfaces
- USB: Native USB support (can act as USB device or host)

RP 2040: Dual-core, high-performance MCU with lots of GPIO and flexible PIO for custom protocols. No built-in USB HID bootloader or wireless, but great for wired designs with custom behavior.
RP 2350: Designed to build on RP2040 strengths with better wireless and security

![Alt text](/assets/media/input_media/mcu/pico2.webp){: 
style="height:200px;display: block; margin: auto;"}

| Microcontroller | Description |
|--------------|------|
|Arduino Nano RP2040|     |
|​Waveshare RP2040-Tiny|     |
|Raspberry Pi Pico|     |

#### nrf52480 
- Core: ARM Cortex-M4 (up to 64 MHz, with a floating-point unit)  
- Flash: 1MB flash memory  
- RAM: 256KB SRAM  
- GPIO: 48 digital I/O pins, with support for PWM, UART, SPI, I2C, ADC  
- Communication:  
  - I2C, SPI, UART, PWM
  - ADC, DAC, PDM (Pulse Density Modulation)  
- Power: Very low power consumption (typically in the uA range during sleep modes)  
- Wireless: 
  - Bluetooth 5.0 (BLE) (supports BLE, Bluetooth mesh, and direction finding)
  - Thread and Zigbee
  - Supports 2.4 GHz proprietary protocols (e.g., for custom wireless protocols)
- Extras:
  - USB 2.0 device support. USB HID support
  - Built-in hardware encryption for secure communications (AES, ECC)
  - Real-Time Counter (RTC) support for time-critical applications
- Compatible Frameworks: Nordic SDK, Zephyr OS, Arduino, Mbed OS, MicroPython (community-supported)

Built-in Bluetooth Low Energy (BLE) support. 
Ideal for wireless keyboard projects requiring Bluetooth connectivity (ZMK firmware support)

![Alt text](/assets/media/input_media/mcu/nice!nanov2.avif){: 
style="height:200px;display: block; margin: auto;"}

| Microcontroller | Description |
|--------------|------|
| nice!nanov2 |     |
| ​Seeed Studio XIAO nRF52840|   ​Compact  |
| ​Adafruit Feather nRF52840 Express|     |
| ​SparkFun Pro nRF52840 Mini|     |

#### STM32 Family
- Core: ARM Cortex-M cores (M0, M0+, M3, M4, M7, M33, etc.), with a variety of clock speeds and performance levels.
- Flash Memory: Varies from small (16KB) to large (up to 2MB) flash memory options, depending on the series.
- RAM: Varies from small (4KB) to large (up to 1MB) SRAM.
- GPIO: A wide range of GPIO pins, usually between 16 and 100+ pins.
- Communication: Supports many communication interfaces like I2C, SPI, UART, CAN, USB, and Ethernet, depending on the series.
- Power: Offers various low-power modes to extend battery life in portable devices.
- Extras: 
  - Timers: Numerous general-purpose and advanced timers for PWM, motor control, and time-critical applications.
  - Analog: Typically includes ADC (up to 12-bit), DAC, op-amps, and comparators.
  - Security: Some models include cryptographic accelerators, secure boot, and hardware random number generators.
- Compatible Frameworks: STM32Cube, HAL (Hardware Abstraction Layer), Arduino (via STM32 core), FreeRTOS, and Zephyr OS.

Versatile ARM-based family with options that support USB HID. Steeper learning curve and less community support for keyboards compared to ATmega/RP2040, but good for custom wired builds.

![Alt text](/assets/media/input_media/mcu/STM32F103C8T6_Blue_Pill.jpg){: 
style="height:200px;display: block; margin: auto;"}

| Microcontroller | Description |
|--------------|------|
| Blue Pill (STM32F103C8T6) | Affordable and widely used in DIY projects. |
| Black Pill (STM32F411CEU6) | Provides higher performance with more memory and faster processing.|
| STM32F072 Nucleo | Features native USB support, beneficial for HID devices |
| STM32 Nucleo-32 | Compact board with Arduino Nano compatibility|

#### Honorable Mention: Teensy microcontrollers
Teensy 4.0 
- NXP iMXRT1062 microcontroller chip
- Core: ARM Cortex-M7 processor operating at 600 MHz. 

![Alt text](/assets/media/input_media/mcu/teensy4.png){: 
style="height:200px;display: block; margin: auto;"}

Absolute workhorse of a microcontroller

---
---

# Keyboards
I initially fell into the keyboard hobby during COVID when I was glued to my desktop and keyboard like most folks. My interest in industrial design aesthetics and boundless creative expression has led me on a long creative path of keyboard design.

**Design Inspiration**
<div id="my-slideshow"></div>
<script>
  const slides= [
    { src: "https://raw.githubusercontent.com/nzge/input-peripherals/main/_inspiration/derivative.png", caption: "Derivative" },
    { src: "https://raw.githubusercontent.com/nzge/input-peripherals/main/_inspiration/derivative-bot.PNG", caption: "Derivative bottom" },
    { src: "https://raw.githubusercontent.com/nzge/input-peripherals/main/_inspiration/eventhorizon.jpg", caption: "Event Horizon" },
    { src: "https://raw.githubusercontent.com/nzge/input-peripherals/main/_inspiration/eventhorizon-bot.PNG", caption: "Event Horizon bottom" },
    { src: "https://raw.githubusercontent.com/nzge/input-peripherals/main/_inspiration/kreygasm keyboard.jpg", caption: "Cool keyboard render" },
    { src: "https://raw.githubusercontent.com/nzge/input-peripherals/main/_inspiration/neo75-side.jpg", caption: "Neo 75 side profile" },
    { src: "https://raw.githubusercontent.com/nzge/input-peripherals/main/_inspiration/neo75-bot.jpg", caption: "Neo 75 bottom" },
    { src: "https://raw.githubusercontent.com/nzge/input-peripherals/main/_inspiration/noxary378-gray.png", caption: "Noxary 378" },
    { src: "https://raw.githubusercontent.com/nzge/input-peripherals/main/_inspiration/ogr.jpg", caption: "OGR" },
    { src: "https://raw.githubusercontent.com/nzge/input-peripherals/main/_inspiration/pangea-side.jpg", caption: "Pangea side profile" },
  ];
  new Slideshow(slides, 'my-slideshow');
</script>

## Hand-wired Macropad

![Alt text](/assets/media/input_media/macro/hand-wire/IMG_0830.JPG){: 
style="height:400px; display:block; margin: auto;"}

### Specs
For my first design, I kept it simple. 
- 4x4 Matrix  
- Unibody construction  

<p style="text-align: center;" >Model</p>
<model-viewer
  src="https://nzge.github.io/assets/media/stewart-platform_media/stewart_assy.gltf"
  alt="Stewart Platform"
  camera-controls
  touch-action="pan-y"
  camera-orbit="0deg 0deg auto"
  orientation="180deg 20deg 0deg"
  field-of-view="45deg"
  shadow-intensity="1"
  exposure="1.0"
  environment-image="legacy"
  style="width: 800px; height: 500px; display: block; margin: 0 auto 0.5em auto; background-color: #1a1a1a;" >
</model-viewer>

#### Layout

![Alt text](/assets/media/input_media/macro/4x4.png){: 
style="height:200px; display:block; margin: auto;"}

#### Components

| Component | Description |
|---|---|
| [Pro Micro nRF52840](https://www.aliexpress.us/item/3256807783872448.html?spm=a2g0o.productlist.main.1.7f97412cFmkPgZ&algo_pvid=6620151d-2b6a-4130-98c6-9ad4570e99f9&algo_exp_id=6620151d-2b6a-4130-98c6-9ad4570e99f9-0&pdp_ext_f=%7B%22order%22%3A%22980%22%2C%22eval%22%3A%221%22%2C%22orig_sl_item_id%22%3A%221005007970187200%22%2C%22orig_item_id%22%3A%221005008079431976%22%7D&pdp_npi=4%40dis%21USD%213.60%211.80%21%21%2126.16%2113.08%21%40210312d517458248843083517e9190%2112000043081959970%21sea%21US%214467253674%21X&curPageLogUid=U7yGAfNlG6GQ&utparam-url=scene%3Asearch%7Cquery_from%3A) | Cheap alternative to nice!nanov2. BLE and lipo charging capability |
| [DO-35 IN4148 High-speed Switching Diodes](https://www.aliexpress.us/item/3256805848952479.html?spm=a2g0o.order_list.order_list_main.65.7ddc1802EYblLy&gatewayAdapt=glo2usa)   | Prevent ghosting (when multiple, unintended key presses register as a single press when multiple keys are pressed simultaneously. Diodes ensure that the current only flows in one direction, preventing unintended paths through the matrix when multiple switches are closed)  |
| [Heat shrink](https://www.aliexpress.us/item/3256804442290103.html?spm=a2g0o.order_list.order_list_main.35.7ddc1802EYblLy&gatewayAdapt=glo2usa) | Electrical isolation between rows and columns |
| [1.5mm Bare Copper wire](https://www.aliexpress.us/item/3256806421888589.html?spm=a2g0o.order_list.order_list_main.45.7ddc1802EYblLy&gatewayAdapt=glo2usa) | Wiring to form rows and columns |
| [JWK Black T1 Tactile Switches](https://divinikey.com/products/jwk-black-t1-tactile-switches?variant=39897771835457)    | Switches |
| 250 mAh LiPo     | Rechargeability |
| Housing     | 3D printed using PLA |

#### Pin Mapping
![Alt text](/assets/media/input_media/macro/promicro-nrf52840.png){: 
style="height:350px;display: block; margin: auto;"}

### Build Log
> 4-10-25: Resized to fit a battery
>
>

> 3-25-25: Added keycaps
>
> ![Alt text](/assets/media/input_media/macro/hand-wire/IMG_0829.JPG){: 
style="height:200px; display:block; margin: auto;"}

> 3-20-25: Completed the wiring
>
> ![Alt text](/assets/media/input_media/macro/hand-wire/IMG_0812.jpg){: 
style="height:200px; display:block; margin: auto;"}

> 3-18-25: Hot-glued the switches in place
>
> ![Alt text](/assets/media/input_media/macro/hand-wire/IMG_0783.JPG){: 
style="height:200px;display: block; margin: auto;"}

> 3-14-25: Made dimension modifications better suited to the design
>
> ![Alt text](/assets/media/input_media/macro/hand-wire/macro-proto_3-14-25.png){: 
style="height:200px;display: block; margin: auto;"}

> 8-21-24: Test fit JWICK tactiles 
>
> ![Alt text](/assets/media/input_media/macro/hand-wire/test-fit.jpg){: 
style="height:200px;display: block; margin: auto;"}

---

## Macropad with PCB 

### PCB 
KiCAD

### Build Log

> 4-11-25: PCB Prototype
>
> ![macro-pcb-proto](/assets/media/input_media/macro/macro-pcb/macro-pcb-proto.png){: style="height:200px; display: block; margin: auto;"}

---

## Ergo Split

### Specs
- Tenting via magsafe phone stands
- Ergonomic splayed key spacing

#### Components

| Component | Description |
|---|---|
| [Magsafe phone stand](https://www.aliexpress.us/item/3256807516374506.html?spm=a2g0o.cart.0.0.34f738daxHlmM3&mp=1&pdp_npi=5%40dis%21USD%21USD%2021.77%21USD%2010.59%21%21USD%2010.59%21%21%21%402101c5b217460555351044119eab9b%2112000041913114307%21ct%21US%214467253674%21%212%210&_gl=1*11e8ki2*_gcl_aw*R0NMLjE3NDA1NTgxMDkuQ2p3S0NBaUFsUHU5QmhBakVpd0E1TkRTQTdzMF9GdmJFOFI0LWQwMnlrcXdKem04cm9BQXBXQUxNTWkyMXZzZ2x4WUx3Tlk3OTNwMUpSb0NESW9RQXZEX0J3RQ..*_gcl_au*NjI4NjQxMDkuMTczODMwNDY3NQ..*_ga*OTY3MjMwOTg4LjE3MzgzMDQ2NzU.*_ga_VED1YSGNC7*MTc0NjA1NTUyNy4yNC4xLjE3NDYwNTU1MzYuNTEuMC4w&gatewayAdapt=glo2usa) x2 | Tenting |
| [Magsafe ring]() x2   | Placed on keyboard to magnetically bind to stands|
| [Choc Purple Switches](https://www.aliexpress.us/item/3256804880270570.html?spm=a2g0o.cart.0.0.34f738daxHlmM3&mp=1&pdp_npi=5%40dis%21USD%21USD%2071.55%21USD%2057.24%21%21USD%2057.24%21%21%21%402101c5b217460555351044119eab9b%2112000036200576713%21ct%21US%214467253674%21%211%210&_gl=1*1q7dg1o*_gcl_aw*R0NMLjE3NDA1NTgxMDkuQ2p3S0NBaUFsUHU5QmhBakVpd0E1TkRTQTdzMF9GdmJFOFI0LWQwMnlrcXdKem04cm9BQXBXQUxNTWkyMXZzZ2x4WUx3Tlk3OTNwMUpSb0NESW9RQXZEX0J3RQ..*_gcl_au*NjI4NjQxMDkuMTczODMwNDY3NQ..*_ga*OTY3MjMwOTg4LjE3MzgzMDQ2NzU.*_ga_VED1YSGNC7*MTc0NjA1NTUyNy4yNC4xLjE3NDYwNTU1NTcuMzAuMC4w&gatewayAdapt=glo2usa)    | Switches |
| [250 mAh LiPo Battery]()  x2  | Rechargeability |
| Housing     | 3D printed using PLA |

#### Layout
![Alt text](/assets/media/input_media/split/ergo/ergo-split.png){: 
style="height:200px;display: block; margin: auto;"}


### PCB 
Designed in KiCAD
![Alt text](/assets/media/input_media/split/ergo/ergo-split.png){: 
style="height:200px;display: block; margin: auto;"}

### Build Log
> 3-14-25: 
>
> ![Alt text](/assets/media/input_media/split/ergo/){: 
style="height:200px;display: block; margin: auto;"}


---

## 40% with Fkeys
A 40% keyboard with extra flare. 

### Specs
- Layout: 40% with function keys left side
- PCB: mill max sockets
- Case
  - thin side bezels
  - 2 piece construction
  - top mount
  - rectangular rubber feet 
  - low front height (cherry lip)

#### Components

| Component | Description |
|---|---|
| [1.5mm Bare Copper wire](https://www.aliexpress.us/item/3256806421888589.html?spm=a2g0o.order_list.order_list_main.45.7ddc1802EYblLy&gatewayAdapt=glo2usa) | Wiring to form rows and columns |
| [JWK Black T1 Tactile Switches](https://divinikey.com/products/jwk-black-t1-tactile-switches?variant=39897771835457)    | Switches |
| [250 mAh LiPo Battery]()     | Rechargeability |
| Housing     | 3D printed using PLA |

#### Layout

![Alt text](/assets/media/input_media/40/40+-with-fkeys.png){: 
style="height:200px;display: block; margin: auto;"}

### PCB 
Designed in KiCAD
![Alt text](/assets/media/input_media/40/40+-with-fkeys.png){: 
style="height:200px;display: block; margin: auto;"}

### Build Log
> 4-12-25: Prototype schematic revision 0
>
> MCU Schematic            |  Key Matrix
:-------------------------:|:-------------------------:
![Alt text](/assets/media/input_media/40/40+_schematic_rev0-1.png){: style="height:300px;display: block; margin: auto;"}   |  ![Alt text](/assets/media/input_media/40/40+_schematic_rev0-2.png){: style="height:300px;display: block; margin: auto;"}

> 4-10-25: Initial CAD prototype
>
> ![Alt text](/assets/media/input_media/40/40+_proto_rev0.png){: 
style="height:200px;display: block; margin: auto;"}


---

## HHKB
My take on the classic HHKB layout

### Specs

#### Components

| Component | Description |
|---|---|
| [1.5mm Bare Copper wire](https://www.aliexpress.us/item/3256806421888589.html?spm=a2g0o.order_list.order_list_main.45.7ddc1802EYblLy&gatewayAdapt=glo2usa) | Wiring to form rows and columns |
| [JWK Black T1 Tactile Switches](https://divinikey.com/products/jwk-black-t1-tactile-switches?variant=39897771835457) | Switches |
| [250 mAh LiPo]() | Rechargeability |
| Housing     | 3D printed using PLA |

#### Layout
![Alt text](/assets/media/input_media/hhkb/hhkb-default.png){: 
style="height:200px;display: block; margin: auto;"}

### PCB

### Build Log
> 3-14-25: 
>
> ![Alt text](/assets/media/input_media/macro/hand-wire/macro-proto_3-14-25.png){: 
style="height:200px;display: block; margin: auto;"}

---

## Modular Keyboard
Fully modular keyboard, with each keyswitch being a singular unit. A lego keyboard, if you will. 
### Concept
![Modular keyboard concept sketch](/assets/media/input_media/modular/modular-keyboard_concept.png){: 
style="height:400px;display: block; margin: auto;"}

### Specs


### Build Log

> 4-11-25: 
>
> ![macro-pcb-proto](/assets/media/input_media/modular/modular-keyboard_concept.png){: 
style="height:200px;display: block; margin: auto;"}

---
---

# Mice

## Ultralight Mouse
Chasing performance.

### Specs
### PCB
### Firmware

### Build Log
> 4-29-25: 
>
> ![Alt text](/assets/media/input_media/mice/ul-mouse/ul-mouse_schematic_rev0-1.png){: style="height:400px;display: block; margin: auto;"}

---

## Chimera
A Keyswitch Mouse  
Injecting keyboard DNA into the mouse peripheral
### Concept
 ![Alt text](/assets/media/input_media/mice/keyswitch-mouse/keyswitch-mouse_concept.png){: 
style="height:350px;display: block; margin: auto;"}

### Specs
4 choc keyswitches  
Capacitive scroll wheel  

### PCB
### Firmware

### Build Log
> 4-28-25: 
>
> ![Alt text](/assets/media/input_media/mice/keyswitch-mouse/keyswitch-mouse_schematic_rev0-1.png){: 
style="height:400px;display: block; margin: auto;"}

---

## Macros Mouse
How many useful buttons can I fit on one mouse?  
### Concept
### Specs
### PCB
### Firmware

### Build Log
> 3-14-25: 
>
> ![Alt text](/assets/media/input_media/macro/macropad-proto_3-14-25.png){: 
style="height:200px;display: block; margin: auto;"}

---
---

# References

## Keyboard
[https://www.keyboard.university/](https://www.keyboard.university/)
[https://www.deskthority.net/](https://www.deskthority.net/)
[https://www.theremingoat.com/](https://www.theremingoat.com/)
[https://www.alexotos.com/category/keyboards/](https://www.alexotos.com/category/keyboards/)
[https://geekhack.org/](https://geekhack.org/)
[All the Parts of a Mechanical Keyboard Explained by Das Keyboard Staff](https://www.daskeyboard.com/blog/parts-of-a-mechanical-keyboard/)

**Design Language**  
[Endgame Never Felt So Close - My TGR Jane V2 ME Experience by Wongsquared](https://www.youtube.com/watch?v=0sqF46vm8yY)
[Gehirn / Keyboard Preview by Markchun](https://www.youtube.com/watch?v=IK7r_d62QXA)
[spring cleaning](https://www.reddit.com/r/CustomKeyboards/comments/1jmcg9k/spring_cleaning/)
[can't tell me keebs aren't art - (Seoul Mechanical Keyboard Expo) 2025](https://www.reddit.com/r/MechanicalKeyboards/comments/1jln2a9/cant_tell_me_keebs_arent_art_seoul_mechanical/)
[mode65](https://www.youtube.com/shorts/4e9Og6_fiDk)

**Switches**  
[Cherry MX Vintage Black Review: A Modder's Dream, Criminally Misunderstood](https://www.reddit.com/r/MechSwitchReview/comments/hlc6wt/cherry_mx_vintage_black_review_a_modders_dream/)
[Teardown - Alps SKCL/SKCM switches by Chyrosran22](https://www.youtube.com/watch?v=QmJ-IEEBQAI)
[The Comprehensive Switch List - Official Version](https://docs.google.com/spreadsheets/d/1WCzp0ujCfmMPZ6r_oSULzEEcG4pcWDd01S09OtAf9LM/edit?gid=0#gid=0)
[The Best Mechanical Keyboard Stabilizers - 2025 by Alexotos](https://www.alexotos.com/the-best-mechanical-keyboard-stabilizers-in-2025/)
[Varmilo EC Switches. Better Than The Rest.](https://varmilo.com/blogs/switches/varmilo-ec-switches-better-than-the-rest)
[Frankenswitches by AidanSmith.dev](https://www.aidansmith.dev/frankenswitches/)  

*Hall Effect*  
[Soundtest of the most popular Hall effect Switches (Wooting 80HE, Jade, Jade Pro, Jade Max, Magneto, Black Knight, Lekker V2)](https://www.reddit.com/r/MechanicalKeyboards/comments/1g87x4a/soundtest_of_the_most_popular_halleffect_switches/)
[Hall Effect vs. Optical: What Switches Should You Choose? by Yadullah Abidi](https://www.makeuseof.com/hall-effect-vs-optical-switches/)
[3D Printed Maglev Switch](https://github.com/famichu/MagLev_Switch_MX)

**Split**  
[“The REAL Ergonomic Keyboard Endgame!” — How To Design & Make A Totally Custom Keyboard](https://www.youtube.com/watch?v=UKfeJrRIcxw&t=895s)
[My favorite ergo split keyboard so far by EIGA](https://www.youtube.com/watch?v=riqmW3UHqPY)
[The TOTEM wireless keyboard by EIGA](https://www.youtube.com/watch?v=YwsutNf1WRA)
[I Built My Dream Keyboard from Absolute Scratch by Christian Selig](https://www.youtube.com/watch?v=7UXsD7nSfDY)
[mask-2.0.0 4x6 Split keyboard with Cherry MX-ULP keys](https://www.reddit.com/r/ErgoMechKeyboards/comments/zpo9h6/mask200_4x6_split_keyboard_with_cherry_mxulp_keys/#lightbox)
[Non Nemo Chimera + Case](https://www.reddit.com/r/ErgoMechKeyboards/comments/1jw2l4v/wip_non_nemo_chimera_case/)
[Lily58 Choc with touchpad — my first keyboard assembly](https://www.reddit.com/r/ErgoMechKeyboards/comments/1jwa0d6/lily58_choc_with_touchpad_my_first_keyboard/)
[A beautiful arc in my memory — Phekda. ](https://www.reddit.com/r/MechanicalKeyboards/comments/1jtkjyn/a_beautiful_arc_in_my_memory/)
[Bayleaf Wireless Keyboard Build](https://www.graz.io/articles/bayleaf-wireless-keyboard)
[There is no end game.](https://www.reddit.com/r/ErgoMechKeyboards/comments/1kcur3v/there_is_no_end_game/)

**Macropad**  
[How to Build a Handwired Keyboard by Joe Scotto](https://www.youtube.com/watch?v=hjml-K-pV4E)
[How to Design Mechanical Keyboard Plates and Cases](https://www.youtube.com/watch?v=7azQkSu0m_U)
[Statial Macropad by PyottDesign](https://www.youtube.com/watch?v=nhJiCa46weE)
[Magicforce MF17 Dual Mode Wireless Numeric Keypad](https://mechkeys.com/products/magicforce-mf17?variant=46928872145119)

**Ortho**  
[I designed this over the weekend. Thought it turned out kinda cool?](https://www.reddit.com/r/MechanicalKeyboards/comments/1jnxikp/i_designed_this_over_the_weekend_thought_it/)

## Mice  
[I built a mouse from scratch with 3D printing and Arduino by Ben Makes Everything](https://www.youtube.com/watch?v=qmX8vL-GbxU)
[The worlds lightest gaming mouse PCB by Patrick Schmalzried](https://zaunkoenig.co/blog/the-worlds-lightest-gaming-mouse-pcb)
[I Made the Worlds LIGHTEST Mouse (Wireless) by Juskim](https://www.youtube.com/watch?v=9CQqasv5_qo&t=208s)
[JEE600 in clusterfudge status (expected, really)](https://www.reddit.com/r/ErgoMechKeyboards/comments/1jnn0xk/jee600_in_clusterfudge_status_expected_really/)
[My Mouse Projects So Far...](https://www.reddit.com/r/arduino/comments/1jc1jhp/my_mouse_projects_so_far/)
[LOFREE Touch](https://www.lofree.co/products/lofree-touch-pbt-wireless-mouse)
[2023 Top Six Latest Mouse With Unique Features: Hot-Swappable Switches, Unique Designs, and More!!](https://mechkeys.com/blogs/guide/top-six-latest-mouse-with-unique-features)
[key switches mouse](https://www.google.com/search?sca_esv=601b0517c7361365&rlz=1C1RXQR_enUS930US930&sxsrf=AHTn8zrtHuVK4oGJ64eYsjphaJLBXivZQQ:1746422722142&q=key+switches+mouse&udm=2&fbs=ABzOT_CWdhQLP1FcmU5B0fn3xuWpA-dk4wpBWOGsoR7DG5zJBsxayPSIAqObp_AgjkUGqel3rTRMIJGV_ECIUB00muput9Zp8VMKUi0ZjqPs3JlrgPeFrAnFlUitTiL3WcJlFn10ZVAeuxL5fSn-ULNu9lz3DIW3cy7rkKNmgHapdAFAoBFSl5-LQE_swXRSgVvZGy87KiusPiw1DSGvVAMCLf6f2K4DEg&sa=X&ved=2ahUKEwjxp-zPy4uNAxVsle4BHTgvJhAQtKgLegQIBxAB&biw=2560&bih=1279&dpr=1#vhid=1A7hF_VEmY1Y0M&vssid=mosaic)

## Sources
[^1]: K. Ogata. *Modern Control Engineering*. Pearson, 2010.  

<!-- Hidden references trigger the footnote rendering -->
<span id="hidden-references">[^1] [^2] [^3] [^4] [^5] [^6]</span>



