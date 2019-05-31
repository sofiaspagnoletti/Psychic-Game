var allOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

var wins = 0;
var losses = 0;
var numGuesses = 10;
var guessChoices = [];

function getRandomLetter() {
    var randomNumber = Math.floor(Math.random() * allOptions.length);
    var randomLetter = allOptions[randomNumber];
    return randomLetter;
}

function isUserInputValid(userInput) {
    // Checks if the input is part of the allOptions array
    return allOptions.indexOf(userInput) > -1;
}

function win() {
    wins++;
    resetGame();
}

function lose() {
    losses++;
    resetGame();
}

function resetGame() {
    numGuesses = 10;
    guessChoices = [];
    computerGuess = getRandomLetter();
}

function writeGameStatus() {
    document.querySelector("#wins").innerHTML = "Wins: " + wins;
    document.querySelector("#losses").innerHTML = "Losses: " + losses;
    document.querySelector("#guesses-left").innerHTML = "Guesses Left: " + numGuesses;
    document.querySelector("#guesses").innerHTML = "Your Guesses so far: " + guessChoices.join(", ");
}

var computrGuess = getRandomLetter();

document.onkeyup = function (event) {

    var userGuess = event.key;

    // Only calculate if the user entered a valid key.
    if (isUserInputValid(userGuess)) {

        if (userGuess === computerGuess) {
            win();
        }

        if (userGuess != computerGuess) {
            numGuesses--;
            guessChoices.push(userGuess);
        }

        if (numGuesses === 0) {
            lose();
        }

        writeGameStatus();
    }
};