---
title: "Virtual Whiteboard in Proj 2"
description: "TESTING TESTING TESTING"
pubDate: "Jan 4, 2025"
image: "/images/previews/doodleJump.png"
---
# Virtual Whiteboard
## Overview
<strong>Inspiration:</strong> The idea for this project came to me while I was on a video call. I was trying to explain how to do a Fourier transform to a friend and I tried to use a dry erase whiteboard to show them how I solved it. I quickly realized that the glare was too much and my writing was to small to be visible on the camera. I decided this would be a fun solution. This was also vaguely inspired from a video I remember seeing when I was young about Pranav Mistry's SixthSense.

<strong>Tech Stack:</strong> Python (OpenCV, Mediapipe, numpy)

This program utilizes your device's camera to mimic a digital whiteboard. When running, the user can fully control the program thru their device's camera by putting their hands in view of the camera and making certain gestures. For optimal hand detection, when trying to perform a gesture, try to have your entire hand in frame with your palm directly facing the camera. Performance is limited by your device's performance because this program runs frame by frame. As a result, lines may not appear continuous if you move your hands too fast. For optimal results, move your hand slowly to match your device's FPS.

<strong>Source Code: </strong><a href="https://github.com/Krish-Gandhi/VirtualWhiteboard" target="_blank" rel="noopener noreferrer">GitHub Repository</a>

<video width="560" height="420" controls>
    <source src="path/to/your/video.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
NOTE: There is no demo video yet, check back soon!
<hr/>

### Features

<ul>
    <li><strong>Hand Movement/Position Tracking</strong> - Utilizing Mediapipe and OpenCV, I was able to
        use the user's device's camera to track the user's hands. 
    </li>
    <li><strong>Draw</strong> - When the user touches their thumb and pointer fingers, 
        the thumb landmark will turn blue. The thumb landmark will then leave a blue dot
        wherever it does.
    </li>
    <li><strong>Erase</strong> - When the user touches their thumb and pinky fingers,
        the thumb landmark will turn green and a countdown will begin. If the countdown
        reaches zero, all drawn dots will be erased.
    </li>
    <li><strong>Exit</strong> - When the user touches their thumb and ring fingers,
        the thumb landmark will turn red and a countdown will begin. If the countdown
        reaches zero, the program will close.
    </li>
</ul>

### Design Decisions
I decided to make the thumb the center of all functionality because every other finger easily accessible to it. Thumb and the pointer finger have to be closer together to trigger the Draw functionalty than the thumb/pinky or thumb/ring finger have to be to trigger the Exit or Erase functionality. This was done on purpose to prevent any accidental drawing. The Erase and Exit features are triggered by a timer for this same reason, to prevent accidental erasing or exitting.

### Possible Future Updates

<ul>
    <li><strong>Undo</strong> - Undo the previous draw</li>
    <li><strong>Change Draw Color</strong> - Change the color for future drawing</li>
    <li><strong>Change Draw Radius</strong> - Change the radius of future dots drawn</li>
</ul>
