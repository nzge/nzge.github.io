---
layout: project
category: "professional"
title: "moxa-vision"
date: 2028-08-13
image: "moxa-vision.png"
description: "Moxibustion computer vision system"
---

A stereo-vision pipeline for a moxibustion treatment system. A Raspberry Pi
captures a MetaSense 435 depth camera, JPEG-encodes four channels — IR, depth,
an RGB overlay, and colour — and pushes them over a single TCP socket to a
laptop, which serves a live quad view in the browser and sends camera controls
back up the same connection.

## [Explore the interactive system map →](/projects/moxa-vision/)

Every source file, what it actually does, and the named function or socket that
connects it to the next. Click a box to open its dossier; click a wire to read
what crosses it. Available in English and 中文 — the toggle sits in the
top-right corner.

## How it works

| Piece | Runs on | Job |
|---|---|---|
| `quad_sender` | Raspberry Pi | capture, JPEG-encode, push 4 channels over one socket |
| `stream_server` | laptop | receive, demux by stream id, serve MJPEG + controls |
| the browser page | anywhere | 2x2 live view, FPS readout, IR laser and stereo tuning |

One TCP connection carries all four channels, each frame tagged with its stream
id. Because TCP is full duplex, the laser toggle and the stereo-matcher sliders
travel back up the same connection — no second port, and no reconnect when you
press a button.

Written in C++17 with OpenCV, cross-compiled for aarch64 against a sysroot
cloned from the board. The streaming path is about 1,530 lines of code across
seven files.
