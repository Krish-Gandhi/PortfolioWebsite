let helpText = 
`All available commands:
    intro       - reprint intro message
    clear       - clear terminal history
    help        - show all commands
    launch      - continue to UI version of website 
Coming soon:
    linger      - continue to CLI version of website (for the psychopaths)
$ `;

const lingerText = 
`Linger protocol starting...
(1/3) Activating CLI commands...
(2/3) Why would you do this I worked so hard on the front end...
(3/3) Joking, enjoy...
$ `;

function routeFromHash() {
  const hash = window.location.hash;
  const isSmallScreen = window.innerWidth <= 992;

  if (hash || isSmallScreen) {
    document.getElementById("cli-container").style.display = "none";
    document.getElementById("tile-overlay").style.display = "none";
    document.getElementById("ui-container").style.display = "block";
    
    if (hash){
        const slug = hash.substring(1);
        openPost(slug);
    }
    
    return true;
  }
  return false;
}

let terminalText;
let terminalTyping = false;
let promptStartIndex = 0;
let welcomeText = "";

function handleRoute(){
    if (routeFromHash()) return;

    terminalText = document.getElementById("terminal-text");
    const now = new Date();

    fetch("https://portfolio-website-backend-pmak.onrender.com/user-count")
        .then(response => response.json())
        .then(data => {
            const { last_hour_count, last_week_count } = data;

            welcomeText = 
`Hello! Welcome to my personal website. (v2.0.0)

* Projects:         krishgandhi.dev/projects
* GitHub:           github.com/Krish-Gandhi
* LinkedIn:         linkedin.com/in/krish-gandhi12

System Information:
    - Active Users: ${last_hour_count}
    - Total Users In The Past Week: ${last_week_count}
    - Session start datetime: ${now.toLocaleString()}

Type 'help' to begin. (HINT: type 'launch' and hit Enter to access the main page!)
$ `;

            typeText(welcomeText, () => {
                promptStartIndex = terminalText.textContent.length;
                enableUserTyping();
            });
        })
        .catch(error => {
            console.error("Error fetching user counts:", error);

            welcomeText = 
`Hello! Welcome to my personal website. (v2.0.0)

* Projects:         krishgandhi.dev/projects
* GitHub:           github.com/Krish-Gandhi
* LinkedIn:         linkedin.com/in/krish-gandhi12

System Information:
    - Session start datetime: ${now.toLocaleString()}

Type 'help' to begin. (HINT: type 'launch' and hit Enter to access the main page!)
$ `;

        typeText(welcomeText, () => {
            promptStartIndex = terminalText.textContent.length;
            enableUserTyping();
        });
    });
    fetch("https://portfolio-website-backend-pmak.onrender.com/increment/TerminalLandingPage").catch(() => {});
}

document.addEventListener("DOMContentLoaded", handleRoute);
window.addEventListener("hashchange", routeFromHash);

function typeText(text, callback) {
    let index = 0;
    terminalTyping = true;
    const typingInterval = setInterval(() => {
        if (index < text.length) {
            const char = text[index] === '\n' ? '\n' : text[index];
            terminalText.textContent += char;
            index++;
        } else {
            clearInterval(typingInterval);
            terminalTyping = false;
            if (callback) callback();
        }
    }, -1);
}

function enableUserTyping() {
    document.addEventListener("keydown", (event) => {
        if (terminalTyping) return;
        const content = terminalText.textContent;

        if (event.key === "Backspace") {
            event.preventDefault();
            if (content.length > promptStartIndex) {
                terminalText.textContent = content.slice(0, -1);
            }
        } else if (event.key === "Enter") {
            interpretCommand(content.slice(promptStartIndex));
            promptStartIndex = terminalText.textContent.length;
            window.scrollTo(0, document.body.scrollHeight);
        } else if (event.key.length === 1) {
            terminalText.textContent += event.key;
        }
    });
}

function interpretCommand(com){
    const command = com.trim();
    terminalText.textContent += "\n";

    switch(command){
        case "intro":
            typeText(welcomeText, () => {
                promptStartIndex = terminalText.textContent.length;
            });
            break;
        case "clear":
            terminalText.textContent = "";
            promptStartIndex = 0;
            terminalText.textContent += "\$ ";
            break;
        case "help":
            terminalText.textContent += helpText;
            break;
        case "launch":
            terminalTyping = true;
            runTileTransition();
            openPost('home');
            break;
        // case "linger":
        //     typeText(lingerText, () => {
        //         promptStartIndex = terminalText.textContent.length;
        //     });
        //     break;
        default:
            terminalText.textContent += "Unknown command: '" + command + "'";
            terminalText.textContent += "\nFor a list of all known commands, type 'help'.";
            terminalText.textContent += "\n$ ";
    }
}

function runTileTransition(callback) {
    const overlay = document.getElementById("tile-overlay");
    overlay.innerHTML = "";
    overlay.style.display = "block";
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100vw";
    overlay.style.height = "100vh";
    overlay.style.zIndex = "9999";
    overlay.style.pointerEvents = "none";

    const tileSize = 40;
    const cols = Math.ceil(window.innerWidth / tileSize);
    const rows = Math.ceil(window.innerHeight / tileSize);

    const positions = [];
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            positions.push({ x: x * tileSize, y: y * tileSize });
        }
    }

    for (let i = positions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [positions[i], positions[j]] = [positions[j], positions[i]];
    }

    let spawned = 0;

    const spawnTile = () => {
        if (spawned >= positions.length) {
            // swap UI
            document.getElementById("cli-container").style.display = "none";
            document.getElementById("ui-container").style.display = "block";
            
            // pops tiles
            setTimeout(() => {
                const tiles = overlay.querySelectorAll(".tile");
                tiles.forEach((tile, i) => {
                    setTimeout(() => {
                        tile.style.animation = "pop 0.3s ease-in forwards";
                    }, i * 4);
                });

                setTimeout(() => {
                    overlay.style.display = "none";
                    callback();
                }, tiles.length * 4 + 500);
            }, 100);

            setTimeout(() => {
                overlay.style.display = "none";
                if (callback) callback();
            }, tiles.length * 4 + 500);
            
            return;
        }

        const { x, y } = positions[spawned];
        const tile = document.createElement("div");
        tile.className = "tile";
        tile.style.position = "absolute";
        tile.style.left = `${x}px`;
        tile.style.top = `${y}px`;
        tile.style.width = `${tileSize}px`;
        tile.style.height = `${tileSize}px`;
        tile.style.backgroundColor = randomGreenShade();
        tile.style.opacity = "0";
        tile.style.animation = "fadeInTile 0.2s ease-in forwards";
        overlay.appendChild(tile);

        spawned++;
        setTimeout(spawnTile, 3);
    };

    spawnTile();
}


function randomGreenShade() {
    const g = 200 + Math.floor(Math.random() * 55);
    return `rgb(0, ${g}, 0)`;
}
