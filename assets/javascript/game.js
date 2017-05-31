var yourGuesses = [];
var secretWord = "tiki";
var letterCount = secretWord.length;
var mysteryDisplay = ""
var l = -2;

// Give JavaScript a function to execute when onkeyup event fires.
document.onkeyup = function(event) {
    userText.textContent = event.key;
       	if (userText.textContent != "Meta"){
        	yourGuesses.push(userText.textContent);
        	var n = secretWord.search(userText.textContent);
        	if (n >= 0){
        		//Letter is present
        		updateMysteryDisplay(n)
        	} else {
        		//Letter is not present
        	}
        } else {
        	updateMysteryDisplay(-3)
        }
    document.getElementById("already_guessed").innerHTML = yourGuesses.join(" ");
}

function updateMysteryDisplay(l){
	//if l = 0 {
		//mysteryDisplay.setText("")
	//	for (i = 0; i < letterCount; i++) { 
    		//mysteryDisplay = mysteryDisplay + "_"
	//	}
	//}

	//document.getElementById("mystery-word-display").innerHTML = mysteryDisplay;

}