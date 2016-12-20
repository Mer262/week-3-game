$(document).ready(function() {
    var rawrFull = new Audio('assets/Tommy.m4r');
    var rawrClip = new Audio('assets/RawrClip.m4r');


    // create an array of (uppercase) words for computer to select from; they match the theme  
    var wordBank = ["DINOSAUR", "RAPTOR", "CLAWS", "FOSSIL", "EXTINCT", "JURASSIC", "VELOCIRAPTOR", "TYRANNOSAURUS"]
    console.log(wordBank)
        // create function countDown to track number of user guesses; starts with a value of 10; each time countDown() is called, 1 is subtracted from the counter.
        // var letter;    
    var guessCounter;
    var userGuesses;
    var numWins;
    var computerPick;
    var n;
    var underScores;
    var justWon = false;

    // call function to reset the game
    function reset() {
        justWon = false;
        guessCounter = 10;
        userGuesses = []
        computerPick = wordBank[Math.floor(Math.random() * wordBank.length)];
        n = computerPick.length;
        underScores = ("_").repeat(n);
        console.log("n = " + n);
        $("#win-counter").text(numWins);
        $("#guess-counter").text(guessCounter);
        $("#letters-guessed").empty();
        $("#current-word").text(underScores);
    }

    function youWin() {
        if (justWon === false) {
            justWon = true;
            rawrFull.play();
            alert("You won!!! The word was " + computerPick + "!");
            numWins++;
            reset();
        }
    }

    String.prototype.replaceAt = function(index, character) {
        return this.substr(0, index) + character + this.substr(index + character.length);
    }

    reset();

    $("#guess-counter").text(guessCounter)


    // create counter to track user wins
    var numWins = 0
    $("#win-counter").text(numWins)

    function waitForIt() {
        var windowTimeout = setTimeout(function() {
            youWin();
        }, 300);
    }


    // if var guessNumber = 0, user runs out of guesses and game ends

    // when game begins, computer selects item from the array
    // create 2 variables: 
    // var computerPick to contain the word selected by computer from the array
    // select random item from word bank array and set as value of var computerPick


    //var underScores containing underscores for each character in var computerPick. 
    // to set value of var underScores, populate it w/number of underscores matching number of characters in var computerPick


    $("#current-word").text(underScores)

    // onkeyup function to caputure the key code/character selected by the user
    document.onkeypress = function(event) {

        // Captures the key press, converts it to uppercase, and saves it to a variable.
        var letter = String.fromCharCode(event.keyCode).toUpperCase();
        console.log(letter)

        // computer logs key up event and compares user guess to previously selected keys
        // if key has been previously selected, inform user that you've picked this letter before, but do not count this from guessNumber
        if (underScores.includes("_") === false) {
            $("#current-word").text(computerPick);
            waitForIt();
            // youWin();

        } else if (computerPick.includes(letter) === true) {
            var justWon = false;
            for (var i = 0; i < computerPick.length; i++) {
                if (computerPick[i] === letter) {
                    underScores = underScores.replaceAt(i, letter);
                }
                $("#current-word").text(underScores);
                if (underScores.includes("_") === false) {
                    $("#current-word").text(computerPick);
                    justWon = true;
                    //waitForIt();
                    // youWin();
                }
            };

            if (justWon) {
                waitForIt();
            }

        } else if (userGuesses.includes(letter) === true) {
            rawrClip.play();
            alert("You've already guessed that!");

        } else if (computerPick.includes(letter) === false) {
            guessCounter = guessCounter -= 1;
            if (guessCounter < 1) {
                rawrClip.play();
                alert("You got eaten by a T-Rex! The word was " + computerPick + "!");
                reset();

            } else {
                $("#guess-counter").text(guessCounter);
                userGuesses.push(letter);
                $("#letters-guessed").text(userGuesses.join(" "));
            }
        } else {
            rawrClip.play()
        };

    };

});





// 

// if the onkeyup character has not yet been selected by user, loop through characters in var computerPick to find matches. 

// if character matches, replace correct underscore position with the letter from onkeyup

// if character does not match, letter is added to "letters already guessed" and number of guesses remaining is reduced by 1

// if countDown = 0,  game is reset

// if there are no more underscores in var underScores, user wins. Add 1 to number or wins. reset game.
