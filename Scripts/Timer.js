let timer;
//let timeLeft = 25 * 60;//coloca o timer para 25 min
let timeLeft = 5 //coloca o timer em 5 segundo para teste
let isRunning = false;

const display = document.getElementById('Timer');//pega o timer
const startButton = document.getElementById('Start');//pega o start button
const resetButton = document.getElementById('Reset');//pega o Reset button
const stopButton = document.getElementById('Stop');//pega o stop button
const audio = document.getElementById('audioElement');//pega o alarme
const apertar = document.getElementById('audioClick'); //pega o click


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
            audio.play();
            resetTimer;
            setTimeout(() => {
                alert('Tempo esgotado!');
                timeLeft = 25*60;
                updateDisplay();
            }, 100);
        
           
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
function stopTimer(){
    clearInterval(timer);
    isRunning = false;
    audio.pause();
}

function playButtonSound() {
    apertar.currentTime = 0; // Reiniciar o som para o início
    apertar.play().catch(error => {
        console.log("Erro ao tocar o som de clique:", error);
    });
}

startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);
stopButton.addEventListener('click',stopTimer);

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', playButtonSound);
});
updateDisplay();