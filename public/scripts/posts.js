async function openPost(slug) {
  history.pushState({ slug }, "", `#${slug}`);
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
}

function closePost() {
    const postEl = document.getElementById("show-post");
    if (postEl) {
        postEl.classList.remove("show");
        postEl.innerHTML = "";
        document.body.style.overflow = "hidden";
        history.pushState({}, "", window.location.pathname);
    }
}