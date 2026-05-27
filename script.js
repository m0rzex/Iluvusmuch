document.addEventListener('DOMContentLoaded', function() {
    const card = document.getElementById('mainCard');
    const magicButton = document.getElementById('magicButton');
    const stepText = document.getElementById('stepText');
    const nameHeader = document.getElementById('andreeaName');
    const placeholder = document.querySelector('.secret-placeholder');
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
        stepText.style.margin = "0"; 
        setInterval(createHearts, 300);
    }

    // Функция плавного поглощения кнопки "No"
    function absorbNoButton(e) {
        if (e) e.preventDefault();
        
        // Добавляем класс сжатия для No и класс расширения для Yes
        if (noBtn && yesBtn) {
            noBtn.classList.add('absorbed');
            yesBtn.classList.add('full-width');
        }
    }

    // Первый клик по заблюренному квадрату
    if (card) {
        card.addEventListener('click', function(e) {
            if (currentStep === -1) {
                currentStep = 0;
                card.classList.remove('initial-blur');
                if (placeholder) placeholder.style.display = 'none';
                if (nameHeader) nameHeader.classList.add('visible-center');
                e.stopPropagation();
            }
        });
    }

    // Клики по кнопке "Click me"
    if (magicButton) {
        magicButton.addEventListener('click', function(e) {
            e.stopPropagation();

            if (currentStep === -1) {
                currentStep = 0;
                card.classList.remove('initial-blur');
                if (placeholder) placeholder.style.display = 'none';
                if (nameHeader) nameHeader.classList.add('visible-center');
                return;
            }

            if (currentStep === 0) {
                if (nameHeader) {
                    nameHeader.classList.remove('visible-center');
                    nameHeader.classList.add('moved-up');
                }
                stepText.style.opacity = "0";
                setTimeout(() => {
                    stepText.textContent = words[0];
                    stepText.style.opacity = "1";
                }, 150);
                
                createSparkles();
                currentStep = 1;
                return;
            }

            if (currentStep >= 1) {
                const wordIndex = currentStep;

                if (wordIndex < words.length) {
                    stepText.style.opacity = "0";
                    setTimeout(() => {
                        stepText.textContent = words[wordIndex];
                        stepText.style.opacity = "1";
                    }, 100);
                    createSparkles();
                    currentStep++;
                }

                if (wordIndex === words.length - 1) {
                    magicButton.style.display = 'none';
                    if (decisionButtons) {
                        decisionButtons.classList.add('visible');
                    }
                    createHearts();
                }
            }
        });
    }

    if (yesBtn) {
        yesBtn.addEventListener('click', handleYesScenario);
    }

    if (noBtn) {
        // Запуск поглощения при наведении (ПК), касании (смартфоны) или клике
        noBtn.addEventListener('mouseover', absorbNoButton);
        noBtn.addEventListener('touchstart', absorbNoButton, { passive: false });
        noBtn.addEventListener('click', absorbNoButton);
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
