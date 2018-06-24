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
    spaces[i] ="-";
}
var wordSpaces = Word.length;

console.log(wordSpaces);
console.log(spaces);


var answer =[];

for (var i = 0; i <Word.length; i++)
{
    answer[i] = Word.charAt(i);
    
    console.log(answer);
}
   
// keyboard prints letters being pressed 
document.onkeyup = function(event)
{
    e = e|| window.event;
    var input = e.input;
    character = string.fromCharcode(charcode)

    console.log(charcode);
}

// created lives
var lives =5;
// if they miss a letter
if (input = word.charAt)
{
    lives--;
    // console.log(lives);
}


