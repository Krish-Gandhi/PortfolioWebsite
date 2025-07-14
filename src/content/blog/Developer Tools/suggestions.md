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

<form id="suggestion-form" onsubmit="submitForm(event)">
  <label>
    Name:
    <input type="text" name="name" required />
  </label><br>

  <label>
    Company:
    <input type="text" name="company" required />
  </label><br>

  <label>
    Email:
    <input type="text" name="email" required />
  </label><br>

  <label>
    Title:
    <input type="text" name="title" required />
  </label><br>

  <label>
    Project Request:
    <textarea name="request" rows="4" required></textarea>
  </label><br>

  <button type="submit">Send Suggestion</button>
  <p id="response-message" style="margin-top: 10px;"></p>
</form>