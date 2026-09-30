---
layout: project
category: "professional"
title: "acu-scan"
date: 2026-09-21
image: "acu-scan.png"
description: "RGB-D 3D reconstruction of the body surface"
---

## Depth reconstruction pipeline

A hand-held RGB-D sweep turned into a measured 3D surface. 

where a point on the body actually *is* in space to millimetre accuracy using a top-down scanner path ( hand-held serpentine sweep, not a turntable. )

[Interactive scan viewer](/projects/acu-scan/)



### Methods

| Method | Tracking | Representation |
|---|---|---|
| `kinectfusion` | frame-to-**model** | TSDF, 4 mm voxel — every frame aligned against the accumulated surface |
| `rgbd_tsdf` | frame-to-**frame** | hybrid RGB-D odometry, geometric loop closure, pose-graph optimisation |
| `surfel_map` | frame-to-model | surfels: oriented discs, no voxel grid at all |

The distinction that matters is **frame-to-model versus frame-to-frame**. A
frame-to-frame chain only ever compares consecutive frames, so when two
neighbouring views share little surface the chain breaks and the scan fragments.
Aligning against the accumulated model instead means usable overlap almost always
exists, because the model holds surface from *every* previous frame.

The surfel path exists because a TSDF quantises the surface onto its voxel grid:
at 4 mm that is a 4 mm floor on accuracy no matter how good the sensor is. A
surfel stores the measured position directly, with a radius equal to the real
sample spacing. Measured surface thickness comes out at **0.93 mm** — the sensor's
own precision, roughly four times below the voxel it replaces.

### Capture

Hardware
The sensor is an Orbbec Gemini 215:
- active stereo at 850 nm
- a **0.20–0.70 m** working band
- rated spatial precision under 0.5 mm at 0.30 m

because stereo error grows as `Z²`, standoff is the dominant accuracy lever — moving from 0.30 m to 0.70 m costs a factor of 5.4.

Frames are packed losslessly at capture time: FFV1 for depth (bit-exact against
the raw samples) and lossless x265 for colour, which took a 49-frame capture from
570 MB to 66 MB with no change to a single pixel. A 6-DoF IMU is recorded
alongside and used as a *gated* rotation prior for tracking — it drops about 30%
of its ticks, so intervals with poor coverage are discarded rather than trusted.

### What limits the accuracy

Every error term here is engineerable and none of them is the algorithm:
- sensor noise
- subsurface scattering where near-infrared light penetrates skin
- registration drift
- breathing motion
- thermal drift

At millimetre targets the physics of the measurement — not the reconstruction — is the hard part. That is
why the pipeline refuses to infer geometry it cannot see: the surface it reports is only ever surface that was actually measured.


### Segmentation



## References
