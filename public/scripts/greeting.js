function getGreeting(date) {
    const hour = date.getHours();
    if (hour >= 5 && hour < 12) return "Good morning!";
    if (hour >= 12 && hour < 17) return "Good afternoon!";
    if (hour >= 17 && hour < 22) return "Good evening!";
    return "Burning the midnight oil?";
}

function getTime(date) {
    const hour = date.getHours();
    const time = date.toLocaleTimeString([], {
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit'
    });
    if (hour >= 5 && hour < 12) return `☀️ ${time}`;
    if (hour >= 12 && hour < 17) return `🌤️ ${time}`;
    return `🌙 ${time}`;
}

function getLocation() {
    fetch("https://ipapi.co/json")
        .then(res => res.json())
        .then(data => {
            const locEl = document.getElementById("greeting-location");
            if (locEl)
                locEl.textContent = `📍 ${data.city}, ${data.region}`;
        })
        .catch(() => {
            const locEl = document.getElementById("greeting-location");
            if (locEl) 
                locEl.textContent = "📍 Location unavailable";
        });
}

document.addEventListener("DOMContentLoaded", () => {
    const messageEl = document.getElementById("greeting-message");
    const timeEl = document.getElementById("greeting-time");
    date = new Date();

    if (messageEl) 
        messageEl.textContent = getGreeting(date);

    if (timeEl) {
        const updateTime = () => {
            timeEl.textContent = getTime(new Date());
        };
        updateTime();
        setInterval(updateTime, 1000);
    }

    getLocation();
});


