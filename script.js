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
    let count = 0;
    const maxHearts = 30;
    
    
    const interval = setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart-fall');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = Math.random() * 20 + 20 + 'px'; 
        
        
        heart.style.color = "#00ffff"; 
        
        const duration = Math.random() * 2 + 3;
        heart.style.animationDuration = duration + 's';
        
        document.body.appendChild(heart);
        
        setTimeout(() => heart.remove(), duration * 1000);
        
        count++;
        if (count >= maxHearts) clearInterval(interval);
    }, 50); 
}

function createSparkles() {
    const button = document.getElementById('magicButton');
    if (button) { // Check if button exists
        button.classList.add('magical');
        setTimeout(() => button.classList.remove('magical'), 1500);
    }
}

