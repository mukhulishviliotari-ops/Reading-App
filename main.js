let dateElement = document.querySelector(".date");
const overlay = document.getElementById('welcome-overlay');
const nameInput = document.getElementById('name-input');
let UserName = document.querySelector(".name");

dateElement.textContent = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric"
});

window.addEventListener('DOMContentLoaded', () => {
    nameInput.focus();
});

nameInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const userName = nameInput.value.trim();

        if (userName !== '') {
            // Put the typed name into <h1 class="name"></h1>
            UserName.textContent = userName;

            overlay.classList.add('hidden');
            
            setTimeout(() => {
                overlay.style.display = 'none';
            }, 300);
        }
    }
});