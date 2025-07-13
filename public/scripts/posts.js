async function openPost(slug) {
  history.pushState({ slug }, "", `#${slug}`);
  const postEl = document.getElementById("show-post");
  if (!postEl) return;

  const res = await fetch(`/blog/${slug}`);
  let html = '';
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