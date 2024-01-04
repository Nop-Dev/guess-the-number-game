// Criação de Número aleatório de 0 a 9
let randomNumber = Math.round(Math.random() * 9);

// Variáveis de telas
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

// Variáveis dos botões
const toTry = document.querySelector("#btnTry");
const toReset = document.querySelector("#btnReset");

// Variável das tentativas
let xAttempts = 1;

// Eventos
toTry.addEventListener('click', tryToCheckInput);
toReset.addEventListener('click', resetGame);
document.addEventListener('keydown', keydownEnter);

// Funções
function tryToCheckInput(event) {
    event.preventDefault();
    let input = document.querySelector("#inputNumber");

    if(Number(input.value) == randomNumber && xAttempts == 1) {
        toggleScreen();
        screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativa!`;
    } else if (Number(input.value) == randomNumber) {
        toggleScreen();
        screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas!`;
    } else {
        alert("Você errou, tente novamente...");
    };

    input.value = '';
    xAttempts++;
}

function resetGame() {
    toggleScreen();
    xAttempts = 1;
    let randomNumber = Math.round(Math.random() * 9);
}

function toggleScreen() {
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
}

function keydownEnter(e) { // Colocando o Enter para funcionar na hora de resetar o jogo...
    if(e.key == 'Enter' && screen1.classList.contains('hide')) {
        resetGame();
    };
};