var yourGuesses = []
var secretWord = "tiki"

// Give JavaScript a function to execute when onkeyup event fires.
document.onkeyup = function(event) {
    userText.textContent = event.key;
       	if (userText.textContent != "Meta"){
        	yourGuesses.push(userText.textContent);
        	alert(secretWord);
        	alert(userText.textContent);
        	var n = secretWord.search(userText.textContent);
        	alert(n);
        	if (n >= 0){
        		alert("Letter is present");
        	} else {
        		alert("Letter is not present");
        	}
        } 
    document.getElementById("already_guessed").innerHTML = yourGuesses.join(" ");
};