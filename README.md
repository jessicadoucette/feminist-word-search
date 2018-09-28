<h1>Hangman Homework</h1>

1. Created my array first with my "feminist icons"

2. Created variables (most of them placeholders so they can be filled in later)- 
    var wins = 0;
    var guessesLeft = 10;
    var gameRunning = false;
    var pickedWord = ''; 
    var wordPlaceholderArr = [];
    var guessedLetterBank = [];
    var incorrectLetterBank = [];

3. Next I used a splash of jQuery for my document.getElementById's so I can link the place holders in my .html document to my .js

4. Next I create I use math.floor/math.random to round down to a whole number/have the computer select a random word in my array

5. Next I have my fancy DOM info stuff. This is where the users entries will be connected to the above variables. 

6. Now for the game play function. Here is where I start the game, and run through the letters in each item in my array in a for loop. 

7. Next function, I check for incorrect letters using push and .textcontent

8. Next function is checking to see if I won. Huge thanks to @Brady, he showed me how I needed an else function and a new game reset to reset the game. 

9. Lastly, I have an event listener for the New Game button and my onkeyup function so the browser can read the key clicks. The if statement was created so only A-Z characters can be entered.


<H2>What I want to learn (why I signed up for a tutor)</H2>
1. How to switch out the guess image with the feminst icon word



