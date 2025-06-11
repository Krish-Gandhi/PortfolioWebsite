fetch('/data/socials.json')
  .then(response => response.json())
  .then(data => {
    const socialsContainer = document.getElementById('socials');

    if (!socialsContainer) return;

    socialsContainer.innerHTML = `
      <p></p>
      <a href="${data.linkedin}" target="_blank" aria-label="LinkedIn">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="${data.github}" target="_blank" aria-label="GitHub">
        <i class="fab fa-github"></i>
      </a>
      <a href="mailto:${data.gmail}" aria-label="Gmail">
        <i class="fas fa-envelope"></i>
      </a>
    `;
  })
  .catch(error => {
    console.error('Error loading socials:', error);
  });
