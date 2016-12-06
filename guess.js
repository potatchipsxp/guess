// 
// A form of n-back task test.  
// See https://en.wikipedia.org/wiki/N-back
// 
// 

var mynum = 1;  //the number the computer is thinking of for the player to guess
var player_guess;  // the number the player guesses
var usednums = [];  //array of numbers the computer has already used
var hits = 0;  //number of players correct guesses

//
// Called externally every time the player presses the guess button
// 
function turn() {
    pickNewNumber();
    var guess = document.getElementById("playerguess").value;
    if (checkCorrectGuess(guess) == true) {
        alert("you got it!");
        ++hits;
        if (hits > 9) {
            alert("you win");
        }
    } else if (checkAlreadyUsed(guess) == true) {
        alert("bad guess, my number was..." + mynum);
    } else {
        alert("good guess but no, the number was " + mynum);
    }
    console.log("made it tall the way to the end");
    //alert("made it tall the way to the end");
    
}

//
// Function for the computer to pick a new number.
// 
function pickNewNumber() {
    console.log("called pick function");

    // Generate random numbers within the appropriate range
    // until it generates a random number that is appropriate
    // and hasnt been used   
    while (true) {
        console.log(usednums);

        i = getRandomInt(0,5);
        // Use the check stupid guess function to if number is already used
        if (checkAlreadyUsed(i) == false) {
            mynum = i;
            // Generated number was good so we assign it to computer's number
            console.log("mynum set to" + mynum);
            usednums.push(i);
            // Then we add the computer's number to the array of used numbers
            console.log("usednums set to" + usednums);
            // Were doing a three back so if used nums is greater than three we use shift to delete
            // The oldest number which allows it to be usable again. like recycling.
            if (usednums.length > 3) {
                usednums.shift();
                console.log("usednums shifted to" + usednums);
            }
            break;
        }
        //if the random number was a used number, we dont go inot the if, and we repeat the loop.
    }
    console.log("got out of the loop");
}


//
// Checks to see if the player guess was one of the used numbers.
//
function checkAlreadyUsed(player_guess) {
    for (var i = usednums.length - 1; i >= 0; i--) {
        if (usednums[i] == player_guess)
            return true;
            console.log("checkstupidguess returned true");
    }

    console.log("checkstupidguess returned true");
    return false;
}

//
// Checks to see if the player guess was the computer number
// 
function checkCorrectGuess(player_guess) {
    if (mynum == player_guess) {
        return true;
    } else {
        return false;
    }
}


//
//Random number generator for computer to use when picking numbers
//
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}