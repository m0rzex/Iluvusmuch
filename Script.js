document.addEventListener('DOMContentLoaded', function() {
    const magicButton = document.getElementById('magicButton');
    const compliments = [
        "You look amazing today ✨",
        "Your smile lights up the room! 😊",
        "You have a heart of gold! 💖",
        "Your style is impeccable! 👗",
        "You're truly one of a kind! 🌟",
        "You bring out the best in others! 🌈",
        "Your positivity is infectious! 🌼",
        "You are a ray of sunshine! ☀️",
        "You have a great sense of humor! 😂",
        "You are so talented! 🎨",
        "Your kindness is a gift to everyone! 🎁"
    ];
    const complimentParagraph = document.querySelector('.card p');
    let lastIndex = -1; // Declare lastIndex

    if (magicButton) {
        magicButton.addEventListener('click', function() {
            createHearts();
            createSparkles();
            // Change the compliment
            if (complimentParagraph) {
                let randomIndex;
                do {
                    randomIndex = Math.floor(Math.random() * compliments.length);
                } while (randomIndex === lastIndex);
                lastIndex = randomIndex;
                complimentParagraph.textContent = compliments[randomIndex];
            }
        });
    }
});

function createHearts() {
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart-fall');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = Math.random() * 30 + 25 + 'px';
        heart.style.color = `hsl(${180 + Math.random() * 60}, 100%, ${50 + Math.random() * 20}%)`;
        heart.style.textShadow = `0 0 ${Math.random() * 20 + 10}px currentColor, 0 0 ${Math.random() * 30 + 20}px rgba(0, 212, 255, 0.5)`;
        heart.style.filter = 'drop-shadow(0 0 10px rgba(0, 212, 255, 0.6))';
        const duration = Math.random() * 3 + 3;
        heart.style.animationDuration = duration + 's';
        document.body.appendChild(heart);
        
        setTimeout(() => heart.remove(), duration * 1000);
    }
}

function createSparkles() {
    const button = document.getElementById('magicButton');
    if (button) { // Check if button exists
        button.classList.add('magical');
        setTimeout(() => button.classList.remove('magical'), 1500);
    }
}