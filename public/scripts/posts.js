async function openPost(slug) {
  const postEl = document.getElementById("show-post");
  console.log("Printing", slug);
  if (!postEl) return;

  const res = await fetch(`/blog/${slug}`);
  if (!res.ok) {
    console.error("Post not found:", slug);
    return;
  }

  const html = await res.text();

  postEl.innerHTML = `
    <button class="close-btn" onclick="closePost()">Close</button>
    <div class="post-content">${html}</div>
  `;
  postEl.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closePost() {
    const postEl = document.getElementById("show-post");
    if (postEl) {
        postEl.classList.remove("show");
        postEl.innerHTML = "";
        document.body.style.overflow = "hidden";
    }
}