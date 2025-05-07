---
layout: project
category: "school"
title: "Capstone Robot"
date: 2024-01-15
image: "capstone_robot.png"
description: "Fully Autonomous delivery robot."
repo: "https://github.com/nzge/ROKUSHO"
toc: true
---

<p style="text-align: center;">Autonomous “burger transporter” robot CAPSTONE project</p>

## Hardware Design

<div class="container" style="border: 1px solid white; color: white; padding: 1em; border-radius: 6px;">
<p style="text-align: center;" >Model</p>
<model-viewer
  src="https://nzge.github.io/assets/media/capstone-robot_media/capstone.gltf"
  alt="GMPR Rocket"
  camera-controls
  touch-action="pan-y"
  camera-orbit="0deg 0deg auto"
  orientation="0deg 0deg 0deg"
  field-of-view="45deg"
  shadow-intensity="1"
  exposure="1.0"
  environment-image="legacy"
  style="width: 800px; height: 500px; display: block; margin: 0 auto 0.5em auto; background-color: #1a1a1a; border-radius: 4px;">
</model-viewer>
<br>
</div>

| Component | Description |
| ---------------------- | ---------- |
| Wheels | [Pololu](https://www.pololu.com/product/1423) |
| Wheel motor            | [Pololu](https://www.pololu.com/product 2367)  |
| Simple DC Motor Driver | [Pololu](https://www.pololu.com/product/4733) |
| Servo for gripper      | [Pololu](https://www.pololu.com/product/3424) |
| Servo for four bar     | [Pololu](https://www.pololu.com/product/3443)|
| Elegoo MEGA2560 R3 | [Elegoo](https://us.elegoo.com/products/elegoo-mega-2560-r3-board?srsltid=AfmBOor4bByFFKA7zSr0rdMOJYt_arJlkGCxiVnwVVs5LmO9HElB9PMP) |
| Rasberry Pi Camera     | [Adafruit](https://www.adafruit.com/product/3099?src=raspberrypi) |
| Rasberry Pi 4           | [Adafruit](https://www.adafruit.com/product/3055) |
| Battery                | [Pololu](https://www.pololu.com/product/2223/specs) |
| 5V voltage regulator   | [Pololu](https://www.pololu.com/product/4082) |
| 5V battery pack        | [Amazon](https://www.amazon.com/Anker-Ultra-Compact-High-Speed-VoltageBoost-Technology/dp/B07QXV6N1B/ref=sr_1_6?crid=2ST6YNACSD5HE&dib=eyJ2IjoiMSJ9.iopjHhTzjUDB1HQLCVWAJpbJvrTn0WJ7dR5n45ppjftEDgcgqbS7lfci9lHGNYZyDBbvJXCf7XgxZ5IPXkYgfyfX_IdT3poe34sKtcHdfW2SjX5p38yvLxv8w8XG3NsuH_Y84myrY7Y7ZbgyMqulXV9x88Z8AGz0Y4tFhTeu-PVMoHVvzEpq9lcbaJMI9vDJGvz2a4LofNPXRU0goBpaSuBTe-lmOyov2T5rQ2lTjwE.2X9kcse_WaTLTYJUxgONEZD_FVGRsGnEB-9sNWHzS40&dib_tag=se&keywords=battery+pack&qid=1709542258&sprefix=battery+pack%2Caps%2C184&sr=8-6) |
| Large IR Sensor Array  | [Pololu](https://www.pololu.com/product/4453)|
| JR Connectors (M)      | [Pololu](https://www.pololu.com/product/1925) |
| JR Connectors (F)      | [Pololu](https://www.pololu.com/product/1924) |
| 22 AWG Wire            | [Amazon](https://www.amazon.com/TUOFENG-Hookup-Wires-6-Different-Colored/dp/B07TX6BX47/ref=sr_1_5?crid=1TC1U7FBM4BYT&dib=eyJ2IjoiMSJ9.aWmVac9Jeturh-LvIuLtD8ckuYXhB0AKmIdJrAgDwihHI6BdghYf3xz7ac9T2trX98mJzGeKkj69oe0Y5RfWw-3MvjfwPV7OWtLk5R39ube7PDCQXnrYUYsnIdWQmRXlJ8b8tUEyFW5C0JbL_tyXQCGOYiz-3CuzabWgHu95PRUj84qjuC953WYdbVxGeytR6vA2rXnDa8Ilf8sKJ8KWVOEfJ3lMFUaaTlvuzNK1pcFkGM4kKshJLvW5_JlBdlS-zaeFU6X8jyg_x2uIp1__iGduKx7IdXZ5VBd95T0XjXA.OhkaJuOKDXzXz2hnHvzzIZzBeW6CMRB8hMqdN5D7-dE&dib_tag=se&keywords=solid%2Bcore%2Bwire&qid=1711061371&sprefix=solid%2Bcore%2Bwi%2Caps%2C296&sr=8-5&th=1) |

### Schematic
![Alt text](/assets/media/capstone-robot_media/schematic_group5-1.png){: style="width:600px;display: block; margin: auto;"}

### Four-bar linkage
![Alt text](/assets/media/capstone-robot_media/four-bar.png){: style="width:600px;display: block; margin: auto;"}

## Code

### State machine

```cpp
#include <Arduino.h>

#include <motor.h>
#include <constants.h>
#include <fns.h>
#include <rpi.h>
#include <state.h>

#include <QTRSensors.h>
#include <controller.h>
#include <claw.h>


enum JunctionType {
  NONE,
  LEFT,
  RIGHT,
  T,
};

State state;
RPI rpi(19200);

Claw grabber(four_bar_pwm_pin, claw_pwm_pin, four_bar_potentiometer_pin, claw_potentiometer_pin);
QTRSensors lf;
Controller base_controller(Kp, Kd);
Motor motors[] = {Motor(m_pin[0][0], m_pin[0][1]), 
Motor(m_pin[1][0], m_pin[1][1]), 
Motor(m_pin[2][0], m_pin[2][1]), 
Motor(m_pin[3][0], m_pin[3][1])};

int dropoff_location = 6;
int dropoff_target = 2;

int return_junction(bool left_readings[readings], bool right_readings[readings]) {
  bool right_is_black = false;
  bool left_is_black = false;

  int right_tally = 0;
  int left_tally = 0;

  for (int i = 0; i < readings; i++){
    if (right_readings[i]) right_tally++;
    if (left_readings[i]) left_tally++;
  }

  if (right_tally >= 1 && left_tally >=1) return T;
  else if (right_tally >= readings) return RIGHT;
  else if (left_tally >= readings) return LEFT;
  else return NONE;
}

bool switchPressed_L = false;
bool switchPressed_R = false;
bool switchPressed = false;


int reflectance_counter = 0;

bool left_reflectance_readings[3] = {false, false, false};
bool right_reflectance_readings[3] = {false, false, false};

void loop() {
  state.time_ms = millis();

  state.left_limit_switch = digitalRead(limit_switch_left);   // 1 if not pressed 0 if pressed
  state.right_limit_switch = digitalRead(limit_switch_right); // 1 if not pressed 0 if pressed

  uint16_t sensors[num_line_sensors];
  state.position = lf.readLineBlack(sensors);

  memcpy(state.ssr, sensors, sizeof(sensors));
  
  state.left_low_reflectance = true;
  state.right_low_reflectance = true;

  int right_turn_cutoff_index = 4;
  int left_turn_cutoff_index = 8;

for (int i = num_line_sensors-1; i > right_turn_cutoff_index; i--) {
  if (sensors[i] < 700) {
      state.left_low_reflectance = false;
    }
  }

for (int i = 0; i < left_turn_cutoff_index; i++) {
  if (sensors[i] < 700) {
    state.right_low_reflectance = false;
  }
}

left_reflectance_readings[reflectance_counter] = state.left_low_reflectance;
right_reflectance_readings[reflectance_counter] = state.right_low_reflectance;
reflectance_counter++;
if (reflectance_counter >= readings) reflectance_counter = 0;


  if (state.slow_cycles > 0) {
    state.slow_cycles--;
  }

  else {
    switch (state.current_function) {
      case 0: // Normal Line Following
        switch (return_junction(left_reflectance_readings, right_reflectance_readings)) {
          case LEFT: // 90 degree left turn
            state.current_function = 1;
            state.counted_left_junctions++;
            state.slow_cycles = 10;
            break;
          case RIGHT: // 90 degree right turn for manuvering
            state.slow_cycles = 10;
            state.counted_right_junctions++;
            if (state.counted_right_junctions == dropoff_location){
              state.current_function = 2;
            }
            break;
          case T: // T junction
            // state.current_function = 3;
            motors[0].set_speed(4);
            motors[1].set_speed(4);
            motors[2].set_speed(4);
            motors[3].set_speed(4);
            delay(0.09e3);
            state.counted_T_junctions++;
            state.slow_cycles = 15;

            //@ all T junctions take a right
            state.current_function = 2;
            break;
          case NONE:
            break;
          }
        break;
      case 1: // 90 degree left turn for manuv
        {
        int left_solid_sensor_readings = 0;
        for (int i = 0 ; i < num_line_sensors; i++) {
          if (sensors[i] > 800) left_solid_sensor_readings++;
        }
        if (left_solid_sensor_readings >= 3) state.current_function = 0;
        break;
        }
      case 2: // 90 degree right turn for objective
        {
        int right_solid_sensor_readings = 0;
        for (int i = 0; i < num_line_sensors; i++) {
          if (sensors[i] > 800) right_solid_sensor_readings++;
        }
        if (right_solid_sensor_readings >= 3) state.current_function = 22;
        }
        break;
      case 22: // Line follow until wall then grab or release
      case 221:
      case 220:
      {
        if (!state.left_limit_switch || !state.right_limit_switch) {
          motors[0].set_speed(0);
          motors[1].set_speed(0);
          motors[2].set_speed(0);
          motors[3].set_speed(0);
          
          switch (state.disk_num) {
            case 0:
              grabber.grabDisc(disc_positions[state.disk_num]);
              state.disk_num++;
              break;
            case 1:
              grabber.grabDisc(disc_positions[state.disk_num]);
              state.disk_num++;
              break;
            case 2:
              grabber.grabDisc(disc_positions[state.disk_num]);
              state.disk_num++;
              state.straight_cycles = 8e3 / 50;
              break;
            case 3:
              grabber.releaseDisc();
          }

          state.current_function = 222;
        }
        else if (!state.left_limit_switch){
          state.current_function = 220;
        }
        else if (!state.right_limit_switch)
        {
          state.current_function = 221;
        }
          
        break;
      }
      case 222: // Reversing from obj
      {
        if (state.left_low_reflectance && state.right_low_reflectance) {
          motors[0].set_speed(7);
          motors[1].set_speed(7);
          motors[2].set_speed(7);
          motors[3].set_speed(7);
          delay(200);
          state.current_function = 1;
          state.slow_cycles = 15;
        }
        break;
      }
      case 3: // placing the object
        break; //just stay here for now
      default:
        state.current_function = -1;
        // delay(1e6);
        break;
    }
  }

  switch (state.current_function) {
    case 0: // Normal Line Following
    case 22:
      state.error = state.position - line_center_position;
      state.controller_output = base_controller.update(state.error);
      if (state.straight_cycles > 0) {
        state.straight_cycles--;
        state.base_speed = 10;
        }
      else state.base_speed = base_speed;
      state.left_speed = clamp(state.base_speed + state.controller_output, -clamp_max_speed, clamp_max_speed);
      state.right_speed = clamp(state.base_speed - state.controller_output, -clamp_max_speed, clamp_max_speed);
      if (!state.left_limit_switch || !state.right_limit_switch) {
        state.left_speed = 0;
        state.right_speed = 0;
      }
      break;
    case 220:
      state.left_speed = 10;
      state.right_speed = 0;
      break;
    case 221:
      state.left_speed = 0;
      state.right_speed = 10;
      break;
    case 222: // Reverse Line Follow
      state.error = state.position - line_center_position;
      state.controller_output = base_controller.update(state.error);
      state.left_speed = -3;
      state.right_speed = -3;
      break;
    case 1: // 90 degree left turn

      state.left_speed = clamp(turn_speed, -clamp_max_speed, clamp_max_speed);
      state.right_speed = clamp(-turn_speed, -clamp_max_speed, clamp_max_speed);

      // Code for 90 degree left turn mode
      break;
    case 2: // 90 degree right turn
      state.left_speed = -turn_speed;
      state.right_speed = turn_speed;
      break;
    case 3: //placing the object
      state.left_speed = 0;
      state.right_speed = 0;
      break;
    default:
      state.current_function = -11;
      // delay(1e6);
      break;
  }

  motors[0].set_speed(state.left_speed);
  motors[1].set_speed(state.left_speed);
  motors[2].set_speed(state.right_speed);
  motors[3].set_speed(state.right_speed);

  Serial.print(state.log());
}
```

**State:**
0: Line Following Forward  
1: Left Turn  
2: Right Turn  
3: Line Following Backward  

**Picking up the Disk**
- On every T Junction take a right and enter the following transition sequence
  - Take a right
  - Line follow forward until limits switches are activated
  - Grab Disk
  - Drive Backwards until T
  - Take a Left
  - Line Follow

**Placing Disk**
- Count # Right turns to determine when to take Right
  - Take a right
  - Line follow forward until limit switches
  - Release Disks
  - Drive Backwards until T
  - Take a Left
  - Line Follow

![Alt text](/assets/media/capstone-robot_media/main-loop.png){: style="width:300px;display: block; margin: auto;"}

### Communication protocol
![Alt text](/assets/media/capstone-robot_media/remote-dev.png){: 
style="width:1000px;display: block; margin: auto;"}

### Setup

```cpp
void setup() {
  rpi.begin();
  if (rpi.wait_rpi_ready(1e6) == 1) {
    // Timeout, hold forever
    while (true) {delay(10000000);}
  }
  lf.setTypeAnalog();
  lf.setSensorPins(line_follower_pins, num_line_sensors);

  pinMode(limit_switch_left, INPUT_PULLUP);
  pinMode(limit_switch_right, INPUT_PULLUP);

  grabber.begin();

  digitalWrite(calibration_LED_pin, HIGH);
  for (uint8_t i = 0; i < calibration_iterations; i++)
  {
    lf.calibrate();
    delay(20);
    Serial.println(i);
  }
  digitalWrite(calibration_LED_pin, LOW);
  delay(10e3);
  rpi.sendMessage("ARDUINO_READY");
  rpi.sendMessage(state.log_header());
}
```

Calibration Sequence
<div style="text-align: center;">
  <img src="/assets/media/capstone-robot_media/calibration.gif" alt="4-bar linkage" style="max-width: 100%; height: auto;" />
</div>

## Documentation
<embed src="/assets/media/capstone-robot_media/Team05_Final-Design-Report_MAE162E-2024.pdf" width="950px" height="1200px"/>

## Build Log

> 5-29-24: 
>
> ![Alt text](/assets/media/capstone-robot_media/IMG_1179.JPG){: 
style="width:600px;display: block; margin: auto;"}

> 5-19-24: 4 bar linkage test
>
<div style="text-align: center; margin: 1em 0;">
  <video width="800" controls muted style="max-width: 100%; border-radius: 6px; box-shadow: 0 0 8px rgba(255, 255, 255, 0.1);">
    <source src="/assets/media/capstone-robot_media/4bar-linkage-test.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>

> 5-11-24: 
>
> ![Alt text](/assets/media/capstone-robot_media/prints.JPG){: 
style="width:600px;display: block; margin: auto;"}

> 3-15-24: 
>
> ![Alt text](/assets/media/capstone-robot_media/grabber.png){: 
style="width:300px;display: block; margin: auto;"}

> 2-21-24: 
>
> ![Alt text](/assets/media/capstone-robot_media/concept.JPG){: 
style="width:600px;display: block; margin: auto;"}