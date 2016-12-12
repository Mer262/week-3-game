$(document).ready(function() {
    var rawrFull = new Audio('assets/Tommy.m4r');
    // rawrFull.play()
    var rawrClip = new Audio('assets/RawrClip.m4r');
    // rawrClip.play()    

    // create an array of (uppercase) words for computer to select from; they match the theme  
    var wordBank = ["DINOSAUR", "RAPTOR", "CLAWS", "FOSSIL", "EXTINCT", "JURASSIC", "VELOCIRAPTOR", "TYRANNOSAURUS"]
    console.log(wordBank)
        // create function countDown to track number of user guesses; starts with a value of 10; each time countDown() is called, 1 is subtracted from the counter.

    var countDown = (function() {
        var counter = 10;
        return function() {
            return counter -= 1;
        }
    })();

    var guessCounter = 10
        // console.log(countDown())
        // write the countDown value into the Guesses Remaining panel
    $("#guess-counter").text(guessCounter)
        // $("#guess-counter").text(countDown())

    // create counter to track user wins

    var numWins = 0
    $("#win-counter").text(numWins)
        // to increment number of user wins



    // create array to hold user key guesses from onkeyup

    var userGuesses = []
    console.log("User guesses so far: " + userGuesses)
        //function to push user onkeyup characters to array
        // userGuesses.push()



    // if var guessNumber = 0, user runs out of guesses and game ends

    // when game begins, computer selects item from the array
    // create 2 variables: 
    // var computerPick to contain the word selected by computer from the array
    // select random item from word bank array and set as value of var computerPick  
    var computerPick = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(computerPick)

    //var underScores containing underscores for each character in var computerPick. 
    // to set value of var underScores, populate it w/number of underscores matching number of characters in var computerPick

    var n = computerPick.length;
    console.log(n)
    var underScores = ("_").repeat(n)
    console.log(underScores)
    $("#current-word").text(underScores)

    // call function to reset the game
    function reset() {

    }

    // var underScores is the variable that will be changed if the onkeyup character is in var computerPick
    // write var underScores to the html

    String.prototype.replaceAt = function(index, character) {
        return this.substr(0, index) + character + this.substr(index + character.length);
    }

    // onkeyup function to caputure the key code/character selected by the user
    document.onkeyup = function(event) {

        // Captures the key press, converts it to uppercase, and saves it to a variable.
        var letter = String.fromCharCode(event.keyCode).toUpperCase();
        console.log(letter)

        // computer logs key up event and compares user guess to previously selected keys
        // if key has been previously selected, inform user that you've picked this letter before, but do not count this from guessNumber

        if (computerPick.includes(letter) === true) {
            // var indices = [];
            for (var i = 0; i < computerPick.length; i++) {
                if (computerPick[i] === letter) {
                    underScores = underScores.replaceAt(i, letter);
                }        
                $("#current-word").text(underScores);
                console.log("updated blanks: " + underScores);
            };

        } else if (underScores.includes("_") === false) {
            alert("You won!!!");
            numWins = parseInt(numWins + 1);
            $("#win-counter").text(numWins);
            // reset()

        } else if (userGuesses.includes(letter) === true) {
            alert("You've already guessed that!");
            rawrClip.play();

        } else if (computerPick.includes(letter) === false) {
            $("#guess-counter").text(countDown());
            userGuesses.push(letter);
            $("#letters-guessed").text(userGuesses);
            rawrClip.play();


        // } else if (true) {

        // } else if (computerPick.includes(letter) === true) {

        //     rawrClip.play();

        } else {
            rawrClip.play()
        };
    // get index i of var letter in computerPick

};

});





// 

// if the onkeyup character has not yet been selected by user, loop through characters in var computerPick to find matches. 

// if character matches, replace correct underscore position with the letter from onkeyup

// if character does not match, letter is added to "letters already guessed" and number of guesses remaining is reduced by 1

// if countDown = 0,  game is reset

// if there are no more underscores in var underScores, user wins. Add 1 to number or wins. reset game.
