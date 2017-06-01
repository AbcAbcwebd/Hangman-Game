var yourGuesses = [];
var possibleWords = ["tiki", "sunscreen", "umbrella", "surf", "beach", "sun", "rum"];
var gameWins = 0;
var secretWord = possibleWords[gameWins];
var letterCount = secretWord.length;
var mysteryDisplay = "";
var wordArray = secretWord.split("");
var displayArray = [];
var lives = 8;
var images = ["TikiMan1H6.png", "TikiMan1H5.png", "TikiMan1H4.png", "TikiMan1H3.png", "TikiMan1H2.png", "TikiMan1H1.png", "TikiMan1H0.png", "TikiMan1HB.png"];
var wins = 0;
var lettersLeft = letterCount;

// Onkey up function
document.onkeyup = function(event) {
    userText.textContent = event.key;
    userText.textContent = userText.textContent.toLowerCase();
    if ((userText.textContent != "Meta") && ((userText.textContent).match(/[a-z]/i)) && (yourGuesses.indexOf(userText.textContent) < 0)){
        yourGuesses.push(userText.textContent);
        instances = findAllInstances(wordArray, userText.textContent);
        if (instances.length > 0) {
            instances.forEach(recordLetter);
        } else if (instances.length <= 0) {
            loseLife();
        }
    } 
    document.getElementById("already_guessed").innerHTML = yourGuesses.join(" ");
}

// Function to iniate the spaces and letters mystery display.
function initiateMysteryDisplay() {
    displayArray = [];
    for (x = 0; x < letterCount; x++) { 
            displayArray.push("_ ");
        }
    document.getElementById("mystery-word-display").innerHTML = displayArray.join(" ");
}

// Function to update the spaces and letters mystery display.
function updateMysteryDisplay(l){
	if (l >= 0) {
		var i = wordArray[l];
        displayArray[l] = i;
        document.getElementById("mystery-word-display").innerHTML = displayArray.join(" ");
	}
}

// Cycles an array for a particular letter and returns all indexes at which that letter appears.
function findAllInstances(array, t) {
    indexes = []
    for (y = 0; y < array.length; y++) { 
            if (array[y] === t) {
                indexes.push(y);
            }
    }
    return indexes
}

// This is what executes if a user guesses a correct letter.
function recordLetter(letter){
    updateMysteryDisplay(letter);
    wins = wins + 1;
    document.getElementById("wins").innerHTML = wins;
    lettersLeft = lettersLeft - 1;
    if (lettersLeft <= 0) {
        //User wins
        userWins()
    }
}

// This is what executes if a user guesses incorrectly. 
function loseLife(){
    lives = lives - 1;
    directory = "assets/images/" + images[lives];
    document.getElementById("game_display").src = directory;
    document.getElementById("guess-remain").innerHTML = lives;
    if (lives <= 0) {
        //User loses
        userLoses()
    }
}

function userWins() {
    alert("You Win!!");
    gameWins = gameWins + 1;
    newGame();
    document.getElementById("total-wins").innerHTML = gameWins;
}

function userLoses() {
    alert("You lose...");
    newGame();
}

function newGame() {
    secretWord = possibleWords[gameWins];
    letterCount = secretWord.length;
    wordArray = secretWord.split("");
    lives = 7;
    wins = 0;
    lettersLeft = letterCount;
    yourGuesses = [];
    initiateMysteryDisplay()
    document.getElementById("game_display").src = "assets/images/TikiMan1HB.png";
}