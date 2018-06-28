// variables
var win = 0;
var loss = 0;
var guesses = 6;
var input = [];
var correctGuess = -1;


function gameStart() {
    var guesses = 6;
    var lettersguessed = [];

    // randomizing the word
    var wordList = ["time travel", "summer", "morty", "jerry", "beth", "rick", "squanchy", "ship", "citadel", "portals", "evil morty", "bird person", "council of ricks"]
    // 

    randomWord = wordList[Math.floor(Math.random() * wordList.length)]
    //  console.log (randomWord);

    //  creating the spaces for the letters 
    var answerDisplay = [];
    for (i = 0; i < randomWord.length; i++) {
        answerDisplay[i] = "-";
    }
    var spaces = randomWord.length;
    console.log(answerDisplay);
    var randomWordLetters = [];
    for (j = 0; j < randomWord.length; j++) {
        randomWordLetters[j] = randomWord.charAt(j);
    }
    console.log(randomWordLetters);
    document.onkeyup = function (event) {
        var input = event.key.toLowerCase();
        if (input === "a" || input === "b" || input === "c" || input === "d" || input === "e" || input === "f" || input === "g" || input === "h" || input === "i" ||
            input === "j" || input === "k" || input === "l" || input === "m" || input === "n" || input === "o" || input === "p" || input === "q" || input === "r" ||
            input === "s" || input === "t" || input === "u" || input === "v" || input === "w" || input === "x" || input === "y" || input === "z") {

            for (k = 0; k < randomWord.length; k++) {
                if (input == randomWordLetters[k]) {
                    answerDisplay[k] = randomWordLetters[k];
                    spaces--;
                    console.log(spaces);
                    correctGuess++;
                    
                }
                console.log(answerDisplay);

            }
            if (correctGuess >= 0) {
                guesses = guesses;
                

            }
            else if (correctGuess < 0) {
                guesses--;
                lettersguessed.push(input);



            }
            if (guesses == 0) {
                alert("you lose");
                loss++;

            }
            


        }
        document.getElementById("lettersguessed").innerHTML = lettersguessed.join("");
        document.getElementById("win").innerHTML = win;
        document.getElementById("loss").innerHTML = loss;
        document.getElementById("guesses").innerHTML = guesses;
        document.getElementById("answerDisplay").innerHTML = answerDisplay.join(" ");
    }
    document.getElementById("lettersguessed").innerHTML = lettersguessed.join("");
    document.getElementById("win").innerHTML = win;
    document.getElementById("loss").innerHTML = loss;
    document.getElementById("guesses").innerHTML = guesses;
    document.getElementById("answerDisplay").innerHTML = answerDisplay.join(" ");

}
 



