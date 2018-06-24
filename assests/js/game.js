// variables
var win = 0;
var loss = 0;
var lives = 5;


//a word is made
var wordList = ["summer","citadel of ricks","morty","jerry","beth","portal gun","wubba lubba dub dub","peace among worlds", "get schwift", "awwww geeez", "gazorpazorpfield","anatomy park","mr meseeks", "tiny rick","pickle rick"]
// random word is choosen
var randomWord =function()
{
    return wordList[Math.floor(Math.random() * wordList.length)];
};

var Word = randomWord();
console.log(Word);

// the spaces are made 
var spaces = [];

for (i = 0; i <= Word.length; i++) 
{ 
    spaces[i] ="_";
}
var wordSpaces = Word.length;

console.log(spaces);

// get user guess

document.onkeyup = function(event)
{
    var keyCode = event.keyCode;
    var keyWord = String.fromCharCode(keyCode);
    console.log(keyWord);
}

//var answer =[];

// for (var i = 0; i <Word.length; i++)
// {
//     answer[i] = Word.charAt(i);
    
//     // console.log(answer);
// }
   


