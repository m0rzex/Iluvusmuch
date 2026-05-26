document.addEventListener('DOMContentLoaded', function() {
    const card = document.getElementById('mainCard');
    const magicButton = document.getElementById('magicButton');
    const stepText = document.getElementById('stepText');
    const nameHeader = document.querySelector('.blurred-name');
    const decisionButtons = document.getElementById('decisionButtons');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    
    const words = [
        "I",
        "I love",
        "I love u",
        "I love u so",
        "I love u so much...",
        "I love u so much... Do",
        "I love u so much... Do u",
        "I love u so much... Do u wanna",
        "I love u so much... Do u wanna be",
        "I love u so much... Do u wanna be my",
        "I love u so much... Do u wanna be my girlfriend? 🌹"
    ];
    
    let currentStep = -1;

    function handleYesScenario() {
        stepText.textContent = "You made me the happiest person! 🥰❤️";
        decisionButtons.style.display = 'none';
        setInterval(createHearts, 300);
    }

    function transformNoToYes() {
        if (noBtn && !noBtn.classList.contains('transformed')) {
            noBtn.classList.add('transformed');
            noBtn.textContent = "Yes! 💖";
            noBtn.style.background = "linear-gradient(135deg, #9f1239 0%, #4c0519 100%)";
            noBtn.style.borderColor = "#f43f5e";
            noBtn.style.color = "#ffffff";
            noBtn.style.boxShadow = "0 0 25px rgba(225, 29, 72, 0.7)";
            noBtn.style.position = "static";
        }
    }

    // Функция активации и раскрытия
    function revealCard() {
        if (currentStep === -1) {
            currentStep = 0;
            card.classList.remove('initial-blur');
            if (nameHeader) {
                nameHeader.classList.remove('blurred-name');
                nameHeader.classList.add('moved-up');
            }
            createSparkles();
        }
    }

    // Клик по самой карточке (работает для заблюренного квадрата)
    if (card) {
        card.addEventListener('click', function(e) {
            if (currentStep === -1) {
                revealCard();
                e.stopPropagation();
            }
        });
    }

    // Клик по кнопке (для последующих шагов)
    if (magicButton) {
        magicButton.addEventListener('click', function(e) {
            if (currentStep === -1) {
                revealCard();
                return;
            }

            currentStep++;
            const wordIndex = currentStep - 1;

            if (wordIndex < words.length) {
                stepText.textContent = words[wordIndex];
                createSparkles();
            }

            if (wordIndex === words.length - 1) {
                magicButton.style.display = 'none';
                if (decisionButtons) {
                    decisionButtons.classList.add('visible');
                }
                createHearts();
            }
        });
    }

    if (yesBtn) {
        yesBtn.addEventListener('click', handleYesScenario);
    }

    if (noBtn) {
        noBtn.addEventListener('mouseover', transformNoToYes);
        noBtn.addEventListener('click', function(e) {
            if (!noBtn.classList.contains('transformed')) {
                e.preventDefault();
                transformNoToYes();
            } else {
                handleYesScenario();
            }
        });
    }
});

function createHearts() {
    let count = 0;
    const maxHearts = 35;
    
    const interval = setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart-fall');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = Math.random() * 20 + 20 + 'px'; 
        
        const duration = Math.random() * 2 + 3;
        heart.style.animationDuration = duration + 's';
        
        document.body.appendChild(heart);
        
        setTimeout(() => heart.remove(), duration * 1000);
        
        count++;
        if (count >= maxHearts) clearInterval(interval);
    }, 60); 
}

function createSparkles() {
    const button = document.getElementById('magicButton');
    if (button && button.style.display !== 'none') {
        button.classList.add('magical');
        setTimeout(() => button.classList.remove('magical'), 1500);
    }
}
