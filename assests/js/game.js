// variables
var win = 0;
var loss = 0;
var guesses =6;
var input =[];
var correctGuess = -1;

// randomizing the word
var wordList = ["summer","morty","jerry","beth", "rick"]

 randomWord = wordList[Math.floor(Math.random() * wordList.length)]
 console.log (randomWord);

//  creating the spaces for the letters 
    var answerDisplay = [];
 for (i = 0; i < randomWord.length; i++) 
{
answerDisplay[i] = "_";
}
var spaces = randomWord.length;
console.log (answerDisplay);
var randomWordLetters = [];
for (j = 0; j < randomWord.length; j++)
{
    randomWordLetters[j] = randomWord.charAt(j);
}
console.log(randomWordLetters);
document.onkeyup = function(event)
 {
    var input = event.key.toLowerCase();
    if (input ==="a" ||input ==="j"|| input ==="c" || input ==="d" || input ==="e" || input ==="f"|| input ==="g"|| input ==="h"|| input ==="i"||
    input ==="j"|| input ==="k"||  input ==="l"|| input ==="m" || input ==="n"|| input ==="o"|| input ==="p" || input ==="q"|| input ==="r" ||
    input ==="s"|| input ==="t"|| input ==="u" || input ==="v" || input ==="w" || input ==="x" || input ==="y" || input ==="z")
    {
        for (k = 0; k < randomWord.length; k++)  
        {
            if (input == randomWordLetters [k])
            {
                answerDisplay[k] = randomWordLetters[k];
                spaces--;
                console.log (spaces);
                correctGuess++;
            }
            console.log(answerDisplay);
                        
        }
        if(correctGuess >= 0)
        {
            guesses=guesses;
            correctGuess= -1;

        }
        else if(correctGuess < 0)
        {
            guesses--;
            console.log(guesses);
        }
        
      
    }
}






































// function startgame()
// {

// }
// //a word is made
// var wordList = ["summer","morty","jerry","beth", "rick"]
// // random word is choosen
// var randomWord =function()
// {
//     return wordList[Math.floor(Math.random() * wordList.length)]

//     // word are being split into letters
//      WordArray = Word.split("");
// };

// // created array from word
// var Word = randomWord();

// console.log(Word);
// // create for loop with an if statement and checks if user guess is in the array

    
//  for (var k = 0; k < WordArray.length; k++)
//  {
//      if(keyWord = WordArray)
//      {

//      }
//  }
// // the spaces are made 
// var spaces = [];

// for (i = 0; i < Word.length; i++) 
// { 
//     spaces[i] ="_";
// }
// var wordSpaces = Word.length;

// console.log(spaces);

// // get user guess

// document.onkeyup = function(event)
// {
//      var keyCode = event.keyCode;
//     var keyWord = String.fromCharCode(keyCode);
//     console.log(keyWord);
   
// // if users guess is right
// //    if(keyWord.indexof(keyWord) >-1)
// //     {
// //         lettersUsed.push(keyWord);
// //     }
// //     else 
// //     {
// //         letterUsed.push(keyWord);
// //     }
    
// }