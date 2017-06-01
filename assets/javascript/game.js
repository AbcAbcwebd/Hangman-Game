var yourGuesses = [];
var secretWord = "tiki";
var letterCount = secretWord.length;
var mysteryDisplay = ""
var l = -2;
var wordArray = secretWord.split("");
var displayArray = [];

// Onkey up function
document.onkeyup = function(event) {
    userText.textContent = event.key;
    updateMysteryDisplay(1);
       	if ((userText.textContent != "Meta") && ((userText.textContent).match(/[a-z]/i))){
        	yourGuesses.push(userText.textContent);
        	var n = wordArray.indexOf(userText.textContent);
        	if (n >= 0){
        		//Letter is present
        		updateMysteryDisplay(n);
        	} else {
        		//Letter is not present
        	}
        } else if (userText.textContent === "Meta") {
        	updateMysteryDisplay(-3)
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

function findAllInstances(array, t) {
    indexes = []
    for (y = 0; y < array.length; y++) { 
            if (array[y] === t) {
                indexes.push(y);
            }
    }
    return indexes
}