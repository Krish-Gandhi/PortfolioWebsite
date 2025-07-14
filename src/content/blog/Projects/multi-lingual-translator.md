---
title: "AI Multi-Lingual Translator and Summarizer"
description: "This project was made by utilizing Facebook's mbart-large-50-many-to-many-mmt model hosted by Hugging Face and Google's gemma-2-2b-it model, which I am currently hosting model thru Google Cloud Platform's Vertex AI platform."
pubDate: "Jan 12, 2025"
image: "/images/previews/translatorAndSummarizer.png"
skills: ["AI/ML", "Back-End/Cloud Development", "GCP", "Python"]
---
# AI Multi-Lingual Translator and Summarizer
## Overview
<strong>Motivation:</strong> This project was 

<strong>Tech Stack:</strong> Python, Hugging Face, Google Cloud Platform (Vertex AI)

The motivation behind this project was simply the fact that I wanted to learn more about using LLMs. So, I went to Hugging Face and found a couple that fit my use-case. I deployed one of them on Google Cloud Platform's Vertex AI and created an API endpoint to call inferences. To save on costs, I am using the free trial of GCP. When my free trial credits run out, I will take down the endpoint and link 1 of the project will no longer work. However, live link 2 will be active.

<p><strong>Live Link 1 (With Summarizer): </strong><a href="https://multi-lingual-translator-and-summarizer-krish-gandhi.streamlit.app/" target="_blank" rel="noopener noreferrer">AI Multi-Lingual Translator and Summarizer</a></p>
<p><strong>Live Link 2 (Without Summarizer): </strong><a href="https://multi-lingual-translator-krish-gandhi.streamlit.app/" target="_blank" rel="noopener noreferrer">AI Multi-Lingual Translator</a></p>
                                    

<video width="560" height="420" controls>
    <source src="path/to/your/video.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
NOTE: There is no demo video yet, check back soon!

---

### Notes
This project was made by utilizing two different LLMs. For translation, I used Facebook's mbart-large-50-many-to-many-mmt model with 611M parameters. This model is a fine-tuned checkpoint of mBART-large-50. mbart-large-50-many-to-many-mmt is fine-tuned for multilingual machine translation. The model has support for 53 different languages. This model is hosted by Hugging Face and inferences are made via API calls, which are limited to 1,000 per day. For summaries, I used Google's gemma-2-2b-it model with 2B parameters. This model is a conversational Text Generation model in the Gemma 2 family. I am currently hosting this model thru Google Cloud Platform's Vertex AI platform. I have set up an API endpoint to use to make inferences with this model. To save on costs, I am using the free trial of GCP. When my free trial credits run out, I will take down the endpoint and link 1 of the project will no longer work. However, live link 2 will be active. This is essentially the same project, but without the summarization model.