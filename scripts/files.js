fetch('/data/files.json')
  .then(response => response.json())
  .then(data => {
    const files = [
        {
            name: 'CV',
            icon: 'fas fa-file-alt',
            path: data.CV_path,
            updated: data.CV_last_updated,
        },
        {
            name: 'Resume',
            icon: 'fas fa-file-alt',
            path: data.Resume_path,
            updated: data.Resume_last_updated,
        },
        {
            name: 'Transcript',
            icon: 'fas fa-file-invoice',
            path: data.Transcript_path,
            updated: data.Transcript_last_updated,
        },
      
    ];

    const container = document.getElementById('files');
    if (!container) return;

    container.innerHTML = files.map(file => `
        <a class="file-card" href="${file.path}" target="_blank">
            <i class="${file.icon}"></i>
            <div class="file-text">
                <span>${file.name}</span>
                <small class="file-updated">Last updated: ${file.updated}</small>
            </div>
        </a>
    `).join('');
  })
  .catch(error => console.error('Error loading files:', error));
