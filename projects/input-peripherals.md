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

## MCU Selection 

**ISA (Instruction Set architecture)**  
ARM
RISC-V
AVR

**Framework**  
Arduino
Zephyr
Tensilica Xtensa

### ESP32
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

| Microcontroller | Description |
|--------------|------|
| Seeed Studio XIAO ESP32C3 |     |
| ESP32-DevKitC | A versatile development board with multiple I/O options. |
| ESP32-PICO-KIT | Features a small footprint with essential peripherals. |

### ATmega32U4 (AVR family)
- 8-bit AVR architecture
- 32KB Flash memory for program storage
- 2.5KB SRAM
- 1KB EEPROM
- USB: Built-in USB support (for HID, CDC, etc.)

Widely used in keyboards (e.g. Pro Micro) due to native USB HID support and strong support in QMK. Limited in RAM and speed, making it less ideal for wireless or complex peripherals.

| Microcontroller | Description |
|--------------|------|
| SparkFun Pro Micro | A compact board with a 5V/16MHz configuration, widely supported in the keyboard community |
| Teensy 2.0 | Known for its robust USB capabilities and compatibility with various keyboard firmware. |
| Adafruit ItsyBitsy 32u4 | Offers a small footprint with additional GPIO pins, suitable for space-constrained designs. |

### RP2040 / RP2350
- Core: Dual-core ARM Cortex-M0+ (up to 133 MHz)
- Flash: 2MB of onboard QSPI Flash
- RAM: 264KB SRAM
- GPIO: 26 digital I/O pins, with support for PWM, UART, SPI, I2C, ADC
- Communication: I2C, SPI, UART interfaces
- USB: Native USB support (can act as USB device or host)

RP 2040: Dual-core, high-performance MCU with lots of GPIO and flexible PIO for custom protocols. No built-in USB HID bootloader or wireless, but great for wired designs with custom behavior.
RP 2350: Designed to build on RP2040 strengths with better wireless and security

| Microcontroller | Description |
|--------------|------|
|Arduino Nano RP2040|     |
|​Waveshare RP2040-Tiny|     |
|Raspberry Pi Pico|     |

### nrf52480 
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

![Alt text](/assets/media/input_media/promicro-nrf52840.png){: 
style="height:200px;display: block; margin: auto;"}

| Microcontroller | Description |
|--------------|------|
| nice!nanov2 |     |
| ​Seeed Studio XIAO nRF52840|   ​Compact  |
| ​Adafruit Feather nRF52840 Express|     |
| ​SparkFun Pro nRF52840 Mini|     |

### STM32 Family
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

| Microcontroller | Description |
|--------------|------|
| Blue Pill (STM32F103C8T6) | Affordable and widely used in DIY projects. |
| Black Pill (STM32F411CEU6) | Provides higher performance with more memory and faster processing.|
| STM32F072 Nucleo | Features native USB support, beneficial for HID devices |
| STM32 Nucleo-32 | Compact board with Arduino Nano compatibility|

### Honorable Mention: Teensy 4.0 
NXP iMXRT1062 microcontroller chip
Core: ARM Cortex-M7 processor operating at 600 MHz. 

Absolute workhorse of a microcontroller

## Keyboard
### Keyboard Matrix (Multiplexing)
The keyboard matrix is the fundamental idea behind the operation of any and all keyboard-adjacent input devices.
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
---

# Keyboards

## Hand-wired Macropad

### Design
Unibody construction  
For my first design, I kept it simple. 
#### Components

| Item         | Description |
|--------------|------|
| [Pro Micro nRF52840](https://www.aliexpress.us/item/3256807783872448.html?spm=a2g0o.productlist.main.1.7f97412cFmkPgZ&algo_pvid=6620151d-2b6a-4130-98c6-9ad4570e99f9&algo_exp_id=6620151d-2b6a-4130-98c6-9ad4570e99f9-0&pdp_ext_f=%7B%22order%22%3A%22980%22%2C%22eval%22%3A%221%22%2C%22orig_sl_item_id%22%3A%221005007970187200%22%2C%22orig_item_id%22%3A%221005008079431976%22%7D&pdp_npi=4%40dis%21USD%213.60%211.80%21%21%2126.16%2113.08%21%40210312d517458248843083517e9190%2112000043081959970%21sea%21US%214467253674%21X&curPageLogUid=U7yGAfNlG6GQ&utparam-url=scene%3Asearch%7Cquery_from%3A) | Cheap alternative to nice!nanov2. BLE and lipo charging capability |
| [DO-35 IN4148 High-speed Switching Diodes](https://www.aliexpress.us/item/3256805848952479.html?spm=a2g0o.order_list.order_list_main.65.7ddc1802EYblLy&gatewayAdapt=glo2usa)   | Prevent ghosting (when multiple, unintended key presses register as a single press when multiple keys are pressed simultaneously. Diodes ensure that the current only flows in one direction, preventing unintended paths through the matrix when multiple switches are closed)  |
| [Heat shrink](https://www.aliexpress.us/item/3256804442290103.html?spm=a2g0o.order_list.order_list_main.35.7ddc1802EYblLy&gatewayAdapt=glo2usa) | Electrical isolation between rows and columns |
| [1.5mm Bare Copper wire](https://www.aliexpress.us/item/3256806421888589.html?spm=a2g0o.order_list.order_list_main.45.7ddc1802EYblLy&gatewayAdapt=glo2usa) | Wiring to form rows and columns |
| [JWK Black T1 Tactile Switches](https://divinikey.com/products/jwk-black-t1-tactile-switches?variant=39897771835457)    | Switches |
| Housing     | 3D printed using PLA |

#### Pin Mapping
![Alt text](/assets/media/input_media/macro/promicro-nrf52840.png){: 
style="height:350px;display: block; margin: auto;"}

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
> ![macro-pcb-proto](/assets/media/input_media/macro/macro-pcb/macro-pcb-proto.png){: 
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
> ![Alt text](/assets/media/input_media/split/ergo/){: 
style="height:200px;display: block; margin: auto;"}


---

## 40% with Fkeys

### Design
### Layout
### PCB 

### Build Log
> 4-12-25: Prototype schematic revision 0
>
> MCU Schematic            |  Key Matrix
:-------------------------:|:-------------------------:
![Alt text](/assets/media/input_media/40/40+_schematic_rev0-1.png){: style="height:400px;display: block; margin: auto;"}   |  ![Alt text](/assets/media/input_media/40/40+_schematic_rev0-2.png){: style="height:400px;display: block; margin: auto;"}

> 4-10-25: Initial CAD prototype
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

## Modular Keyboard
Fully modular keyboard, with each keyswitch being a singular unit.
### Concept
![Modular keyboard concept sketch](/assets/media/input_media/macro/macro-pcb/macro-pcb-proto.png){: 
style="height:200px;display: block; margin: auto;"}


### Design


### Build Log

> 4-11-25: 
>
> ![macro-pcb-proto](/assets/media/input_media/modular/){: 
style="height:200px;display: block; margin: auto;"}

---
---

# Mice

## Ultralight Mouse

### Design
### PCB
### Firmware

### Build Log
> 4-29-25: 
>
> ![Alt text](/assets/media/input_media/mice/ul-mouse/ul-mouse_schematic_rev0-1.png){: style="height:400px;display: block; margin: auto;"}

---

## Keyswitch Mouse

### Design
### PCB
### Firmware

### Build Log
> 4-28-25: 
>
> ![Alt text](/assets/media/input_media/mice/keyswitch-mouse/keyswitch-mouse_schematic_rev0-1.png){: 
style="height:400px;display: block; margin: auto;"}

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
---

# References

## Macropad Inspiration
1. [How to Build a Handwired Keyboard by Joe Scotto](https://www.youtube.com/watch?v=hjml-K-pV4E)
2. [How to Design Mechanical Keyboard Plates and Cases](https://www.youtube.com/watch?v=7azQkSu0m_U)

## Mice Inspiration
1. [I built a mouse from scratch with 3D printing and Arduino by Ben Makes Everything](https://www.youtube.com/watch?v=qmX8vL-GbxU)
2. [The worlds lightest gaming mouse PCB by Patrick Schmalzried](https://zaunkoenig.co/blog/the-worlds-lightest-gaming-mouse-pcb)
3. [I Made the Worlds LIGHTEST Mouse (Wireless) by Juskim](https://www.youtube.com/watch?v=9CQqasv5_qo&t=208s)

## Sources
[^1]: K. Ogata. *Modern Control Engineering*. Pearson, 2010.  

<!-- Hidden references trigger the footnote rendering -->
<span id="hidden-references">[^1] [^2] [^3] [^4] [^5] [^6]</span>


