var yourGuesses = [];
var secretWord = "tiki";
var letterCount = secretWord.length;
var mysteryDisplay = ""
var wordArray = secretWord.split("");
var displayArray = [];
var deaths = 0;
var images = ["TikiMan1H6.png", "TikiMan1H5.png", "TikiMan1H4.png", "TikiMan1H3.png", "TikiMan1H2.png", "TikiMan1H1.png", "TikiMan1H0.png", "TikiMan1HB.png"];
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
}

// This is what executes if a user guesses incorrectly. 
function loseLife(){
    deaths = deaths + 1;
    directory = "assets/images/" + images[deaths];
    document.getElementById("game_display").src=directory;
}