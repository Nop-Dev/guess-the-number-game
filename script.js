// Criação de Número aleatório de 0 a 9
const randomNumber = Math.round(Math.random() * 9);

alert(randomNumber)

// Variáveis de telas
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

let xAttempts = 1;

function tryToCheckInput(event) {
    event.preventDefault()
    
    let input = document.querySelector("#inputNumber");

    if(Number(input.value) == randomNumber) {
        screen1.classList.add("hide");
        screen2.classList.remove("hide");

        screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas!`;
    } else {
        alert("Você errou, tente novamente...")
    }
    
    console.log(input.value);
    input.value = ''

    xAttempts++;
}

function resetGame() {
    screen1.classList.remove("hide");
    screen2.classList.add("hide");

    xAttempts = 1;
}

const toTry = document.querySelector("#btnTry");
const toReset = document.querySelector("#btnReset");

toTry.addEventListener('click', tryToCheckInput)
toReset.addEventListener('click', resetGame)