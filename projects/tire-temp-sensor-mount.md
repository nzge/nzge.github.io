---
layout: project
category: "racing"
title: "Tire Temperature Sensor Mount"
date: 2022-04-05
image: "temp_sensor.PNG"
description: "Wheel temperature sensor mounting solution"
repo: "https://github.com/nzge/tire-temp-sensor"
---

Tire temperature sensors provide useful data about how the tire reacts to the track we are testing on. These sensors allow us to analyze the wear on different parts of a tire by tracking the heat. This new member project will involve the research and implementation of a tire temperature sensor for mk8 testing. By analyzing the tire temperature data in different testing environments, we will be able to optimize our suspension and wheels and steering setup for a given course to ensure we are getting the most out of the tire, with even wear. (heat uniform across the tire). 

<br>
<div class="container" style="border: 1px solid white; color: white; padding: 1em; border-radius: 6px;">
<p style="text-align: center;" >Model</p>
<model-viewer
  src="https://nzge.github.io/assets/media/tire-temp_media/temp-sensor.gltf"
  alt="Stewart Platform"
  camera-controls
  touch-action="pan-y"
  camera-orbit="0deg 0deg auto"
  orientation="180deg 20deg 0deg"
  field-of-view="45deg"
  shadow-intensity="1"
  exposure="1.0"
  environment-image="legacy"
  style="width: 800px; height: 500px; display: block; margin: 0 auto 0.5em auto; background-color: #1a1a1a; border-radius: 4px;" >
</model-viewer>
<br>
</div>

## Build Log
> 5-2-23: Fracture along the bend closest to the suspension
> 
>![Alt text](/assets/media/tire-temp_media/IMG_5827.JPG){: 
style="width:500px;display: block; margin: auto;"}

> 4-19-23: Test Fit
>
> ![Alt text](/assets/media/tire-temp_media/test-mount.JPG){: 
style="width:500px;display: block; margin: auto;"}
> ![Alt text](/assets/media/tire-temp_media/IMG_5827.JPG){: 
style="width:500px;display: block; margin: auto;"}
> ![Alt text](/assets/media/tire-temp_media/IMG_5826.JPG){: 
style="width:500px;display: block; margin: auto;"}
> ![Alt text](/assets/media/tire-temp_media/IMG_5821.JPG){: 
style="width:500px;display: block; margin: auto;"}

## References
**Design protocols**  
[hermeticity](https://www.google.com/search?q=hermeticity&rlz=1C1RXQR_enUS930US930&oq=hermeticity&aqs=chrome..69i57j0i512l5j0i30l4.1520j1j7&sourceid=chrome&ie=UTF-8) 

**SENSORS**
[tire temperature sensor fsae google search](https://www.google.com/search?q=tire+temperature+sensor+fsae&rlz=1C1RXQR_enUS930US930&oq=&aqs=chrome.2.69i57j69i59l2j69i60.2903j0j4&sourceid=chrome&ie=UTF-8#ip=1)   
[tire temperature sensor fsae](https://www.google.com/search?q=tire+temperature+sensor+fsae&rlz=1C1RXQR_enUS930US930&sxsrf=AJOqlzXVL8QokuUACqbUzVYSmsUD6Mljgw:1677553348626&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi24b6bnbf9AhWUJEQIHabSCrMQ_AUoAXoECAEQAw&biw=2560&bih=1297&dpr=1)   
[🔍 TMS-4: Tyre Temperature & Pressure Monitor | PRODUCT OVERVIEW](https://www.youtube.com/watch?v=yzU5tvID_PA) 
[Lateral sensing with IMC Technology | Melexis](https://www.melexis.com/en/campaigns/imc/imc-technology-overview)  
- MLX90640  
[MLX90640 FIR Sensor - digikey](https://www.digikey.com/en/product-highlight/m/melexis/mlx90640-fir-sensor?utm_adgroup=Supplier_Melexis&utm_source=google&utm_medium=cpc&utm_campaign=EN_Supplier_Melexis&utm_term=mlx90640&utm_content=Supplier_Melexis&gclid=Cj0KCQiA1ZGcBhCoARIsAGQ0kkpVCtMXhGfYJbjr_XQYV9-Rnqd70c6EBersfzDiNoQm4qLRrybB77EaAkpJEALw_wcB)  
[https://www.mouser.com/c/?marcom=145139989](https://www.mouser.com/c/?marcom=145139989)   
[MLX90640 Far Infrared Thermal Sensor \- Melexis | Mouser](https://www.mouser.com/new/melexis/melexis-mlx90640-fir-sensor/?gclid=Cj0KCQiA6fafBhC1ARIsAIJjL8kTXTaCnpFirFXBZfaa6tsOhkzTqZR4cCzSnMt2bUvlKXfAOLnhMLYaAlWTEALw_wcB)   
[Far Infrared Thermal Sensor Array (32x24 RES) I Melexis](https://www.melexis.com/en/product/MLX90640/Far-Infrared-Thermal-Sensor-Array)  
[https://www.youtube.com/watch?v=WSZ3GGDusTk\&t=38s](https://www.youtube.com/watch?v=WSZ3GGDusTk&t=38s)    
[https://www.melexis.com/en/product/EVB90640-41/Evaluation-Board-MLX90640-MLX90641](https://www.melexis.com/en/product/EVB90640-41/Evaluation-Board-MLX90640-MLX90641)   
[MLX Sensor 3D models](https://www.melexis.com/en/documents/documentation/packages/package-3d-models)  
[melexis 90640 housing](https://www.google.com/search?q=melexis+90640+housing&rlz=1C1RXQR_enUS930US930&sxsrf=AJOqlzUYQ7x6uQ4jziKSgQdKcJdiLHku1w:1678525191200&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjalJLOwdP9AhUyL0QIHWqkBi8Q_AUoBHoECAEQBg&biw=2560&bih=1297&dpr=1#imgrc=GNoneKQCgdAbcM)  
[MLX90614 Distance to Spot Ratio | Create Makers](https://www.createmakers.com/becoming-makers/mlx90614-distance-to-spot-ratio/)   
[Distance to Spot](https://www.google.com/search?q=distance+to+spot+melexis+90640&tbm=isch&ved=2ahUKEwiX4oOCu9P9AhX8PUQIHe4EBN8Q2-cCegQIABAA&oq=distance+to+spot+melexis+90640&gs_lcp=CgNpbWcQAzoECCMQJ1CqGFjKGWCqHWgAcAB4AIABMogBjgGSAQEzmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=HDwMZJfkOvz7kPIP7omQ-A0&bih=1240&biw=2560&rlz=1C1RXQR_enUS930US930) 
[https://www.aliexpress.us/item/3256801183658598.html?gatewayAdapt=glo2usa4itemAdapt&\_randl\_shipto=US](https://www.aliexpress.us/item/3256801183658598.html?gatewayAdapt=glo2usa4itemAdapt&_randl_shipto=US) 

**REDDIT** 
[IR tyre temp sensors : r/FSAE](https://www.reddit.com/r/FSAE/comments/m2c0e4/ir_tyre_temp_sensors/)  
[Tire Temperature Sensor \- Formula SAE](https://forum.arduino.cc/t/tire-temperature-sensor-formula-sae/468760)  

**PAPERS**  
[Tyre Models in Multibody Vehicle Simulations \- Claytex](https://www.claytex.com/blog/methods/tyre-modelling/)   
[Tech Explained: Formula 1 Tyre Model Development \- Racecar Engineering](https://www.racecar-engineering.com/articles/tech-explained-formula-1-tyre-model-development/)  
[Tire Model with Temperature Effects for Formula SAE Vehicle](https://www.mdpi.com/2076-3417/9/24/5328)   
[(PDF) Tire Model with Temperature Effects for Formula SAE Vehicle](https://www.researchgate.net/publication/337784329_Tire_Model_with_Temperature_Effects_for_Formula_SAE_Vehicle)   
[Tuning Tires \- Tracking tire temperatures and tuning your setup accordingly can pay dividends on the racetrack \- NASA Speed News Magazine](https://nasaspeed.news/tech/wheels-tires/tuning-tires-tracking-tire-temperatures-and-tuning-your-setup-accordingly-can-pay-dividends-on-the-racetrack/#:~:text=One%20sign%20of%20how%20hard,tire%20is%20working%20too%20hard)
[https://www.millikenresearch.com/Contents\_Round9.pdf](https://www.millikenresearch.com/Contents_Round9.pdf) 

**ENCLOSURE**  
[3D Printed Enclosures Made EASY\!](https://www.youtube.com/watch?v=IQBCHTy2dm4)   
[3D Printed Project Enclosure/Box with Lid (no screws needed)](https://www.youtube.com/watch?v=cBhhoOXhUOw) 
- HEAT SET INSERTS  
[Heat-Set Threaded Inserts (M2.5 Threads) - Maker Tech Store](https://www.makertechstore.com/products/copy-of-heat-set-threaded-inserts-m2-5-threads?variant=29739547852897)   
[ShineNow Threaded Inserts](https://www.amazon.com/ShineNow-Inserts-Printing-Threaded-Assortment/dp/B09MK3VCYC?th=1)   
[https://www.mcmaster.com/94459A439/](https://www.mcmaster.com/94459A439/) 

**ACESSORIES**  
[Molex Connector Part Number \- 43650-0400](https://www.molex.com/molex/products/part-detail/pcb_headers/0436500400)   
[Molex Connector Part Number \- 43645-0400](https://www.molex.com/molex/products/part-detail/crimp_housings/0436450400) 

**I2C protocol** 
[What Is...I2C?](https://www.youtube.com/watch?v=qTLRRg6Mee0)   
[Serial bus](https://www.google.com/search?q=serial+bus&rlz=1C1RXQR_enUS930US930&sxsrf=AJOqlzVSKb_GN9AWGN6vC-lkP5OWQ6ilLQ%3A1678521389844&ei=LTQMZJCYM-j_kPIPvpaW8AQ&ved=0ahUKEwjQ4sG5s9P9AhXoP0QIHT6LBU4Q4dUDCBA&uact=5&oq=serial+bus&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIECCMQJzIECAAQQzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgoIABBHENYEELADSgQIQRgAUNsEWNsEYM0FaAFwAXgAgAFhiAFhkgEBMZgBAKABAcgBCMABAQ&sclient=gws-wiz-serp)  

**CAD**  
[unable to export model ("body has null shape") · Issue \#798 · GitHub](https://github.com/realthunder/FreeCAD_assembly3/issues/798) 