// Criação de Número aleatório de 0 a 9
const randomNumber = Math.round(Math.random() * 9);

alert(randomNumber);

let xAttempts = 1;

function getInput() {
    let input = document.querySelector("#inputNumber");

    if(Number(input.value) == randomNumber) {
        document.querySelector(".screen1").classList.add("hide")
        document.querySelector(".screen2").classList.remove("hide")

        document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} tentativas!`
    }

    xAttempts++
}