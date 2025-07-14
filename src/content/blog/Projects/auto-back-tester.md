---
title: "Automatic Algorithm Trading Strategy Backtesting Pipeline"
description: "Using an Ubuntu VM, Jenkins, and Strategy Studios, I built a CI/CD pipeline to automatically pull and backtest algorithmic trading strategies, and push the results back to GitLab."
pubDate: "Dec 22, 2024"
image: "/images/previews/autoBacktest.png"
skills: ["Jenkins", "Python", "C++"]
---
# Automatic Algorithm Trading Strategy Backtesting Pipeline
## Overview
<strong>Motivation:</strong> This project was done as part of a final project for IE 421 - High Frequency Trading Technology at the University of Illinois at Urbana-Champaign. The whole project was to build a trading strategy to trade $GBTC. My portion of the project was to build an automated backtesting pipeline, which I have highlighted in this video.

<strong>Tech Stack:</strong> Ubuntu, Jenkins, Python, C++

This Jenkins pipeline runs on an Ubuntu VM pulls the strategy from a GitLab repository, backtests the strategy on a given dates, and pushes the output back to the GitLab repository. Unfortunately, due to time constraints, we were unable to complete this project, but I still recieved an A on this project and an A+ in the course, because the time constraints were factored into the grading.

<strong>Source Code: </strong> </strong><a href="https://gitlab.engr.illinois.edu/ie421_high_frequency_trading_fall_2024/ie421_hft_fall_2024_group_07/group_07_project" target="_blank" rel="noopener noreferrer">GitLab Repository</a>

<video width="560" height="420" controls>
    <source src="videos\ie421explanation.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>

---

### Report
An in-depth explanation on the design decisions made, as well as an overview of the project, can be found in the GitLab repository.