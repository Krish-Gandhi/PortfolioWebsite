---
title: "Suggest A Project"
description: "Want to request me to do a project? Use this form!"
pubDate: "Jan 1, 2000"
image: "/images/previews/engagement.png"
skills: []
---
# Suggest a Project for Me!

If you are a recruiter or a person in industry and you are interested in hiring me (or even if you just have a project idea for me), but you feel like there is a gap or two in my portfolio/resume, leave a suggestion for a project for me to build! If I complete your project, I will be sure to reach out and let you know! Be specific as you want on the tech stack and details.

I am a hardworker and a quick learner, so feel free to make the project as challenging as you want and include any technologies you are looking for, even if I don't have any experience with them. Thanks!

fetch("https://portfolio-website-backend-pmak.onrender.com/send-suggestion", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "Krish Gandhi",
    company: "My Portfolio",
    title: "Feedback on CLI",
    request: "Love the terminal but would like to see themes!"
  })
})
.then(res => res.json())
.then(console.log)
.catch(console.error);