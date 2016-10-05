var mynum = 1;
var player_guess;
var usednums = [];
var hits = 0;

// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function checkguess(player_guess) {
    for (var i = usednums.length - 1; i >= 0; i--) {
        if (usednums[i] == player_guess)
            return true;
    }
    return false;
}

function checkstupidguess(player_guess) {
    for (var i = usednums.length - 1; i >= 0; i--) {
        if (usednums[i] == player_guess)
            return true;
    }
    return false;
}

function checkcorrectguess(player_guess) {
    if (mynum == player_guess) {
        return true;
    } else {
        return false;
    }
}

function Pickanewnumber() {
    while (true) {
        console.log(usednums);
        i = getRandomInt(0,4);
        if (checkstupidguess(i) == false) {
            mynum = i;
            usednums.push(i);
            if (usednums.length > 3) {
                usednums.shift();
            }
            break;
        }
    }
}

function turn() {
    var guess = document.getElementById("playerguess").value;
    if (checkcorrectguess(guess) == true) {
        alert("you got it!");
        ++hits;
        if (hits > 9) {
            alert("you win");
        }
    } else if (checkstupidguess(guess) == true) {
        alert("bad guess");
        alert("my number was...");
        alert(mynum);
    } else {
        alert("good guess but no, the number was " + mynum);
    }
    Pickanewnumber();
}
