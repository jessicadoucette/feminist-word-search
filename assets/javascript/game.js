// variables
var iconList = [
	"ruth bader ginsburg",
	"gloria steinem",
	"maya angelou",
	"hillary clinton",
	"malala yousafzai",
	"beyonce",
	"sojourner truth",
	"susan b anthony",
	"ellen degeneres"
];

var chosenIcon = "";
var lettersInChosenIcon = [];
var numBlanks = 0; 
var blanksAndLetters = []; 
var incorrectLetterBank = [];

var wins = 0;
var losses = 0; 
var guessesLeft = 10;


function startGame() {
//reset to default number of guesses
guessLeft = 10; 

//icon selected randomly
chosenIcon = iconList[Math.floor(Math.random() * iconList.length)];

// breakout icon into individual letters
lettersInChosenIcon = chosenIcon.split(""); 

//count letters for blanks 
numBlanks = lettersInChosenIcon.length; 

console.log("Selected Icon: " + chosenIcon);

//reset blanks and letters & incorrect and incorrect letters
blanksAndLetters = []; 
incorrectLetterBank = []; 

//for loop to push blanks and letters to DOM
 for (var i = 0; i < numBlanks; i++) {
	blanksAndLetters.push("_"); 
 }
 console.log("blanks pushed");

 document.getElementById("guesses-left").innerHTML = guessesLeft; 
 document.getElementById("place-holder").innerHTML = blanksAndLetters.join(" "); 
 document.getElementById("guessed-letters").innerHTML = incorrectLetterBank.join(" "); 

}

function checkedLetters(letter) {
	var letterInIcon = false; 

	//is the letter in the array? 
	for (var i = 0; i < numBlanks; i++) {

		if(chosenIcon[i] === letter) {
			letterInIcon = true; 
		}
	}

	if (letterInIcon) {
	//where is the letter?
	for (var j = 0; j < numBlanks; j++) {
		if (chosenIcon[j] === letter) {
			blanksAndLetters[j] = letter; 
		}
	}
	console.log("Yes, letter in word");
}
	else {
		incorrectLetterBank.push(letter); 
		guessesLeft --; 
	}
}

function roundComplete() {
	var iconImage = $("<img>"); 
console.log("Win Count: " + wins + "Loss Count: " + losses + " | Guesses Left: " + guessesLeft); 

document.getElementById("guesses-left").innerHTML = guessesLeft; 
document.getElementById("place-holder").innerHTML = blanksAndLetters.join(" "); 
document.getElementById("guessed-letters").innerHTML = incorrectLetterBank.join(" "); 

if (lettersInChosenIcon.toString() === blanksAndLetters.toString()) {
	wins ++; 
	alert ("Congrats! You Win! "); 

	


document.getElementById("win-count").innerHTML = wins; 
startGame(); 
}

else if (guessesLeft === 0) {
losses ++;
alert("Sorry you lost! Better brush up on your Feminist Icons for next time.") 
document.getElementById("loss-count").innerHTML = losses; 
startGame();
}
}

startGame();

document.onkeyup = function(event) {
	var letterGuess = String.fromCharCode(event.which).toLowerCase(); 

	checkedLetters(letterGuess);
	roundComplete(); 
}