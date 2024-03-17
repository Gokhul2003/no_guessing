let randomno = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt')

const userinput = document.querySelector('#guessField')

const guessslot = document.querySelector('.guesses')

const remaining = document.querySelector('.lastResult')

const loworhigh = document.querySelector('.lowOrHi')
const resultParas = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []

let numGuess = 1

let playGame = true

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userinput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid no')
    }
    else if (guess < 1) {
        alert('please enter a number mor than 1')

    }
    else if (guess > 100) {
        alert('please enter a number less than 100')

    }
    else {
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game over. Random number was ${randomno}`)
            endGame()
        }
        else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomno) {
        displayMessage('you guessed right')
        endGame()
    }
    else if (guess < randomno) {
        // userinput.value = ''
        displayMessage('number is  too low')
       

    }
    else if (guess > randomno) {
        // userinput.value = ''
        displayMessage('number is too high')
        
    }
}

function displayGuess(guess) {
    //cleaning up the input value
    userinput.value = ''
    guessslot.innerHTML += `${guess} `
    numGuess++;
    remaining.innerHTML = `${10 - numGuess}`
}

function displayMessage(message) {
    loworhigh.innerHTML = `<h2>${message}<h2>`
}
function newGame() {
    const newgame = document.querySelector('#newgame')
    newgame.addEventListener('click', function (e) {
        randomno = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 1
        guessslot.innerHTML = ''
        remaining.innerHTML = `${10 - numGuess}`
        userinput.removeAttribute('disabled')
        resultParas.removeChild(p)

        playGame = true
    })

}

function endGame() {
    userinput.value = ''
    userinput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newgame" style="background-image: linear-gradient(to right, #4CAF50 , #2E8B57); 
    border: none; color: white; padding: 15px 32px; text-align: center; text-decoration: none; 
    display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer; border-radius: 8px; 
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); transition: background-color 0.3s, box-shadow 0.3s;">Start new Game</h2>`;
    resultParas.appendChild(p)
    playGame = false
    newGame()
}

