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

<form id="suggestion-form">
  <label>
    Name:
    <input type="text" name="name" required />
  </label><br><br>

  <label>
    Company:
    <input type="text" name="company" required />
  </label><br><br>

  <label>
    Email:
    <input type="text" name="email" required />
  </label><br><br>

  <label>
    Title:
    <input type="text" name="title" required />
  </label><br><br>

  <label>
    Project Request:
    <textarea name="request" rows="4" required></textarea>
  </label><br><br>

  <button type="submit">Send Suggestion</button>
  <p id="response-message" style="margin-top: 10px;"></p>
</form>

<script is:inline>
  const form = document.getElementById("suggestion-form");
  const responseMessage = document.getElementById("response-message");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("https://portfolio-website-backend-pmak.onrender.com/send-suggestion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const result = await res.json();
      if (result.status === "success") {
        responseMessage.textContent = "✅ Suggestion sent successfully!";
        responseMessage.style.color = "green";
        form.reset();
      } else {
        throw new Error(result.detail || "Unknown error");
      }
    } catch (err) {
      responseMessage.textContent = "❌ Failed to send suggestion.";
      responseMessage.style.color = "red";
      console.error(err);
    }
  });
</script>