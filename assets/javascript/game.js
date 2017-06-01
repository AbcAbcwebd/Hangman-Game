var yourGuesses = [];
var secretWord = "tiki";
var letterCount = secretWord.length;
var mysteryDisplay = ""
var wordArray = secretWord.split("");
var displayArray = [];

// Onkey up function
document.onkeyup = function(event) {
    userText.textContent = event.key;
    if ((userText.textContent != "Meta") && ((userText.textContent).match(/[a-z]/i))){
        yourGuesses.push(userText.textContent);
        instances = findAllInstances(wordArray, userText.textContent);
        instances.forEach(recordLetter);
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
    alert(letter);
}