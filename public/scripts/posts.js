async function openPost(slug) {
  history.pushState({ slug }, "", `#${slug}`);
  const postEl = document.getElementById("show-post");
  if (!postEl) return;

  const res = await fetch(`/blog/${slug}`);
  let html = '';

  if (slug === 'developer-tools/engagement') {
    const res = await fetch('https://portfolio-website-backend-pmak.onrender.com/get-views');
    if (res.ok) {
      const data = await res.json();
      const rows = data.views.map(view =>
        `<tr><td>${view.slug}</td><td>${view.views}</td></tr>`
      ).join("");

      const hotRows = data.hot.map(view =>
        `<tr><td>${view.slug}</td><td>${view.count}</td></tr>`
      ).join("");

       html = `
      <div style="display: flex; gap: 2rem; flex-wrap: wrap;">
        <div style="flex: 1; min-width: 300px;">
          <h2 style="text-align: center;">Total Views Per Page</h2>
          <table border="1" cellpadding="6">
            <thead><tr><th>Slug</th><th>Total Views</th></tr></thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
        <div style="flex: 1; min-width: 300px;">
          <h2 style="text-align: center;">Trending</h2>
          <table border="1" cellpadding="6">
            <thead><tr><th>Slug</th><th>View Count (Past Week)</th></tr></thead>
            <tbody>${hotRows}</tbody>
          </table>
        </div>
      </div>
    `;
    } else {
      html = `<p>Failed to load engagement data.</p>`;
    }
   } else {
    if (!res.ok) {
      if(slug == 'home'){
        fetch("https://portfolio-website-backend-pmak.onrender.com/increment/" + slug.replaceAll("/", "-")).catch(() => {});
        return;
      }
      slug = 'developer-tools/error404';
      const res2 = await fetch(`/blog/${slug}`);
      html = await res2.text();
    } else {
      html = await res.text();
    }
  }
  postEl.innerHTML = `
    <div class="post-card">
        <button class="post-card-exit-button" onclick="closePost()">
            <i class="fa-solid fa-xmark"></i>
        </button>
        <div class="post-card-content">
            ${html}
        </div>
    </div>
  `;
  postEl.classList.add("show");
  document.body.style.overflow = "hidden";
  fetch("https://portfolio-website-backend-pmak.onrender.com/increment/" + slug.replaceAll("/", "-")).catch(() => {});
}

function closePost() {
    const postEl = document.getElementById("show-post");
    if (postEl) {
        postEl.classList.remove("show");
        postEl.innerHTML = "";
        document.body.style.overflow = "hidden";
        let slug = 'home';
        history.pushState({ slug }, "", `#${slug}`);
    }
}

async function submitForm(e) {
  // console.log("MADE IT");
  e.preventDefault();

  const form = document.getElementById("suggestion-form");
  const responseMessage = document.getElementById("response-message");
  const formData = new FormData(form);
  const payload = Object.fromEntries(formData.entries());

  try {
    const res = await fetch("https://portfolio-website-backend-pmak.onrender.com/send-suggestion", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const result = await res.json();
    console.log("Sent payload", payload);

    if (res.ok) {
      responseMessage.textContent = "Suggestion sent successfully!";
      responseMessage.style.color = "green";
      form.reset();
    } else {
      throw new Error(result.detail || "Unknown error");
    }
  } catch (err) {
    responseMessage.textContent = "Failed to send suggestion.";
    responseMessage.style.color = "red";
    console.error(err);
  }
}