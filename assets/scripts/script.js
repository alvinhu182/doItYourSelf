// Função para tocar o alarme
function ringAlarm() {
    // Aqui você pode usar um áudio específico para o alarme
    const audio = new Audio('assets/sounds/alarm.mp3');
    audio.play();
}

// Função para iniciar o temporizador
function startExerciseTimer(duration) {
    let timer = duration;
    const countdownElement = document.getElementById('timerDisplay');
    
    const countdown = setInterval(() => {
        if (timer <= 0) {
            clearInterval(countdown);
            ringAlarm();
            countdownElement.textContent = 'Tempo esgotado!';
        } else {
            // Atualizar o elemento de exibição do temporizador
            let minutes = Math.floor(timer / 60000);
            let seconds = Math.floor((timer % 60000) / 1000);
            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;
            countdownElement.textContent = `Tempo restante: ${minutes}:${seconds}`;
        }
        timer -= 1000; // Decrementa o timer a cada segundo
    }, 1000);
}

// Evento para quando o botão é clicado
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('startTimerButton').addEventListener('click', function() {
        const duration = parseInt(prompt("Defina o tempo para o exercício em segundos:"), 10) * 1000; // Converter para milissegundos
        if (!isNaN(duration)) {
            startExerciseTimer(duration);
        }
    });
});
// Inclua esta linha para inicializar o timerInterval
let timerInterval;






