---
layout: project
category: "personal"
title: "Stewart Platform"
date: 2025-02-20
image: "stewart-platform.png"
description: "6DOF Stewart Platform"
repo: "https://github.com/nzge/stewart-platform"
toc: true
---


## Hardware Design

### Components

Teensy + Raspberry Pi Pico
Proto Board
6V 10A Power Supply
HiLetgo PCA9685 16 Channel 12-Bit PWM Servo Motor Driver
MPU6050

Tower MG996R 180 degree servo
25T Servo Horn
Servo Link
6 Shafts with threaded ball joint

Base plate
Base plate cover
Platform
Top Plate


### Schematic
<img src="https://raw.githubusercontent.com/nzge/stewart-platform/main/stewart-schematic_bb.svg?sanitize=true" alt="Stewart Platform Schematic" style="width:400px; height:400px;display: block; margin: auto;">

### Dimensions
Simple base, platform, and link proportion calculations formatted in a csv file through Jupyter notebook serve as global variables to parametrize CAD model.

[![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/nzge/Stewart-Platform/blob/main/stewart-sizing-calcs.ipynb){:target="_blank"}


## Software Design


### Servo Driver
```cpp
#include "servos.h"

Servos::Servos() {
  pca9685 = Adafruit_PWMServoDriver();
  servo_count = NUM_SERVOS;
}

// Initialize the PCA9685
void Servos::init() {
  pca9685.begin();
  pca9685.setOscillatorFrequency(25000000);  // Set to 25 MHz (default)
  pca9685.setPWMFreq(PWM_FREQ);  // Set PWM frequency for servos (50Hz)
  delay(10);
}

// Set the PWM signal on the specified channel
void Servos::setServoAngle(uint8_t channel, uint16_t angle) {
  // Ensure angle is in valid range
  if (angle < MIN_SERVO_ANGLE) angle = MIN_SERVO_ANGLE;
  if (angle > MAX_SERVO_ANGLE) angle = MAX_SERVO_ANGLE;
  pca9685.setPWM(channel, 0, angleToPWM(angle));
}

void Servos::setServoAngles(uint16_t angles[]) {
  for (uint8_t i = 0; i < servo_count; i++) {
    setServoAngle(i, angles[i]);
  }
}
```

### PID Control


### Inverse Kinematics
$e=mc^2$

### Web Interface
Next.js webserver hosted on Raspberry Pi 5 displays control interface. ROS backend integration takes keypresses, button presses, and mouse clicks and transforms it into commands that the Stewart platform can interpret. 

### ROS Integration
Travel router provides a contained subnetwork for wireless connection between host computer, raspberry pi webserver, and raspberry pico. 

Micro-ROS Agent
Micro-ROS on Pico

## Build Log
> 3-29-25: Refined CAD for printing
>
> ![3-29-25 stewart proto](/assets/media/stewart-platform_media/stewart-proto_3-13-25.JPG){: 
style="height:400px;display: block; margin: auto;"}

> 3-20-25: Refined CAD for printing
>
> ![3-20-25 stewart test fit](/assets/media/stewart-platform_media/stewart-proto_3-13-25.JPG){: 
style="height:400px;display: block; margin: auto;"}

> 3-13-25: Refined CAD for printing
>
> ![3-13-25 stewart proto](/assets/media/stewart-platform_media/stewart-proto_3-13-25.JPG){: 
style="height:400px;display: block; margin: auto;"}

> 3-11-25: CAD prototype
>
> ![3-11-25 stewart proto](/assets/media/stewart-platform_media/stewart-proto.JPG){: 
style="height:400px;display: block; margin: auto;"}

> 3-6-25: Servo driver code is functional
>
> ![3-6-25 servo test](/assets/media/stewart-platform_media/servo-test.JPG){: 
style="height:400px;display: block; margin: auto;"}

## References
This project was inspired by recent studies on control systems[^1] and previous research on Stewart platforms[^2].
### Inspiration
1. [3DOF STEWART PLATFORM: ECE4760 MICROCONTROLLERS FINAL PROJECT](https://people.ece.cornell.edu/land/courses/ece4760/FinalProjects/f2017/psl58_aw698_eb645/psl58_aw698_eb645/)
2. [Stewart Platform by thiagohersan](https://www.instructables.com/Stewart-Platform/)
3. [Ball Balancing Robot by Aaed Musa](https://www.youtube.com/watch?v=kAaYaZcpbLo&list=PLTqchMECawAp3Q6hHfBDlCq_db-DOYmcD&index=28)
4. [6-DOF Stewart Platfor by Yichuan Wang](https://yichuan33.blogspot.com/2017/11/6-dof-stewart-platform.html)
### Sources
[^1]: K. Ogata. *Modern Control Engineering*. Pearson, 2010. 
[^2]: ["Stewart Platform Control"](https://content.instructables.com/FFI/8ZXW/I55MMY14/FFI8ZXWI55MMY14.pdf), Accessed March 6, 2025.  
[^3]: **Book:** K. Ogata. *Modern Control Engineering*. Pearson, 2010.  
[^4]: **Website:** ["Stewart Platform Control"](https://example.com). Accessed: March 6, 2025.  
[^5]: **Journal:** Doe, J. *Optimization of Robotic Mechanisms*. *Journal of Robotics Research*, Vol. 25, 2023, pp. 45-60.  
[^6]: **Technical Report:** NASA. *Adaptive Control for Space Robotics*. Tech Report No. 4567, 2022.  

<!-- Hidden references trigger the footnote rendering -->
<span id="hidden-references"> [^3] [^4] [^5] [^6]</span>


