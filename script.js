//Adding variables to store datas

let userName = prompt('Por favor, escreva o seu nome: ')

let randomNumber = Math.floor(Math.random() * 100) + 1;
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.low-or-high');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
let guessCount = 1;
let resetButton;

guessSubmit.addEventListener('click', checkGuess);

function checkGuess() {
    const userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = 'Tentativas anteriores: ';
    }

    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        lastResult.textContent = `Parabés ${userName}! Você acertou!`;
        lastResult.style.backgroundColor = 'green';
        lowOrHigh.textContent = '';
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = '!!!GAME OVER!!!\n' + `Lamentamos ${userName}! Você perdeu!`;
        lastResult.style.backgroundColor = 'red';
        lowOrHigh.textContent = '';
        setGameOver();
    } else {
        lastResult.textContent = `${userName}, seu palpite está Errado!!!`;
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randomNumber) {
            lowOrHigh.textContent = `${userName}, A última tentativa ${userGuess} estava muito baixa!\nTente um número maior!`;
        } else if (userGuess > randomNumber) {
            lowOrHigh.textContent = `${userName}, A última tentativa ${userGuess} estava muito alta!\nTente um número menor!`;
            lastResult.style.backgroundColor = 'red';
        }
    }

    guessCount ++;
    guessField.value = '';
    guessField.focus();
}


function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Começar um novo jogo';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;
    const resetFields = document.querySelectorAll('.resultsField p');
    for (const resetField of resetFields) {
        resetField.textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    lastResult.style.backgroundColor = 'white';
    randomNumber = Math.floor(Math.random() * 100) + 1;
}