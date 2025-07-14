---
title: "Event-Driven Order Matching Engine"
description: "I developed a low-latency matching engine in C++ and created Python bindings for this engine. The next steps are to build an interactive web-based interface, making it accessible for users to experiment with, visualize order flows, and simulate market scenarios in real-time."
pubDate: "Jun 4, 2025"
image: "/images/previews/orderbook.png"
skills: ["C++", "Python"]
---
# Event-Driven Order Matching Engine
## Overview
<strong>Motivation:</strong> This project was inspired by a topic I learned about in IE 421 - High Frequency Trading Technology at the University of Illinois at Urbana-Champaign.

<strong>Tech Stack:</strong> C++, Python

The end goal for this project is to create a web app to help users learning about trading, orderbooks and matching engines. I have already implemented the matching engine in C++ and have written Python bindings, which means I can now use the engine as a Python module that calls the C++ code. The next steps are to create a scalable backend and frontend.

<strong>Source Code: </strong> </strong><a href="https://github.com/Krish-Gandhi/EventDrivenOrderMatchingEngine" target="_blank" rel="noopener noreferrer">GitHub Repository</a>

---

### Matching Engine Features

- <strong>Multiple Order Types</strong> - The engine currently supports market orders, limit orders, stop orders, stop-limit orders, and Fill-Or-Kill market orders.                                        
- <strong>Summary of Transaction</strong> - The engine also provides a summary of each transaction.
- <strong>Order Visibility</strong> - The engine supports orders with "public" or "hidden" visibility and correctly sorts them in the order book.

### Next Steps

The immediate next steps of this project are:
- Implement the Python module into a web app.
- Implement a database (probably Redis for its low-latency) into the web app, so all users can see and make orders to the same order book.
- Deploy the web app.
- Go back and optimize the model

