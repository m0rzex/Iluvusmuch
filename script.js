document.addEventListener('DOMContentLoaded', function() {
    const magicButton = document.getElementById('magicButton');
    const audio = document.getElementById('myAudio');
    const speakerIcon = document.getElementById('speaker-icon');
    const musicControl = document.getElementById('music-control');
    const complimentParagraph = document.querySelector('.card p');

    let clickCount = 0;
    let lastIndex = -1;
    const compliments = [
        "You look amazing today ✨",
        "Your smile lights up the room! 😊",
        "You're truly one of a kind! 🌟",
        "You are a ray of sunshine! ☀️",
        "Your kindness is a gift! 🎁"
    ];

    if (magicButton) {
        magicButton.addEventListener('click', function() {
            clickCount++;
            
            createHearts();

            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * compliments.length);
            } while (randomIndex === lastIndex);
            lastIndex = randomIndex;
            complimentParagraph.textContent = compliments[randomIndex];

            
            if (clickCount >= 22) {
                musicControl.classList.remove('hidden');
                musicControl.classList.add('visible');
            }
        });
    }

    musicControl.addEventListener('click', function() {
        if (audio.paused) {
            audio.play().catch(e => console.log("Браузер требует взаимодействия"));
            speakerIcon.innerText = '🔊';
            musicControl.style.animation = "none";
            musicControl.style.transform = "scale(1)";
        } else {
            audio.pause();
            speakerIcon.innerText = '🔇';
        }
    });
});

function createHearts() {
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.classList.add('heart-fall');
            heart.innerHTML = '💙';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.fontSize = Math.random() * 20 + 20 + 'px';
            heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 5000);
        }, i * 100);
    }
}
