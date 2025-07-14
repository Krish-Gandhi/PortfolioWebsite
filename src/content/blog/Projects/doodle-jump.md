---
title: "Doodle Jump on an FPGA"
description: "I implemented Doodle Jump on a RealDigital Urbana Board with an AMD Spartan 7 FPGA. I also implemented a MicroBlaze Processor to help wiht USB I/O from a keyboard and VGA/HDMI output. Who doesn't love Doodle Jump?"
pubDate: "Dec 21, 2024"
image: "/images/previews/doodleJump.png"
skills: ["Embedded Systems/SoC", "SystemVerilog", "C"]
---
# Doodle Jump on an FPGA
## Overview
<strong>Motivation:</strong> This project was done as my final project for ECE 385 - Digital Systems Laboratory at the University of Illinois at Urbana-Champaign. I have attached the final video demo here. I recieved an A on the final project and an A- in the course.

<strong>Tech Stack:</strong> SystemVerilog, C

For the final project, I implemented a simplified version of Doodle Jump on an <a href="https://www.amd.com/en/corporate/university-program/aup-boards/realdigital-urbana-board.html" target="_blank" rel="noopener noreferrer">RealDigital Urbana Board</a>. Using a Spartan-7 FPGA with a MicroBlaze processor, I developed a real-time gaming environment that integrates gameplay mechanics, graphics, and keyboard controls. The game features character movement, random platform generation, collision detection, scoring, and an animated character, all rendered on a 640 by 480 screen. To achieve this, I implemented SPI communication for USB keyboard inputs and VGA-to-HDMI conversion. I designed custom modules for the gameplay features, showcasing the FPGA's capabilities through an interactive game.

<strong>Source Code: </strong>Unfortunately, due to ECE 385's strict course guidelines, I am unable to post my code to any online source at all. I have, however, attached my Final Project Lab Report, which has descriptions of how my code's functionality and how it was written, and Final Project Video Demo.

<video width="560" height="420" controls>
    <source src="videos/doodleJumpPresentation.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>

---

### Notes
- Even though this was a partner class, my partner did not contribute to anything in this class from about Week 4 to the end. He didn't download the given files from the 5th lab on, and did not make a single contribution to this final project.
- This final project was built as an extension of the 6th lab in this course, so I have attached the lab report for both Lab 6 and the Final Project. To see all the design decisions I made, look through these reports.

### Lab Reports
<a href="files\lab 6 report (1).pdf" target="_blank" rel="noopener noreferrer">Lab 6 Report</a> | <a href="files\Final Project Report.pdf" target="_blank" rel="noopener noreferrer">Final Project Report</a> 