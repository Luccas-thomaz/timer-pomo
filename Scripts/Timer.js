let timer;
let timeLeft = 25 * 60;
let isRunning = false;

const display = document.getElementById('Timer');
const startButton = document.getElementById('Start');
const resetButton = document.getElementById('Stop');

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    display.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function startTimer() {
    if (isRunning) return;

    isRunning = true;
    timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
            isRunning = false;
            alert('Tempo esgotado!');
        } else {
            timeLeft--;
            updateDisplay();
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    timeLeft = 25 * 60;
    updateDisplay();
}

startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);

updateDisplay();