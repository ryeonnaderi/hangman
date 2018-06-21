//a word is made
var wordList = ["citadel of ricks","morty","jerry","beth","portal gun","wubba lubba dub dub","peace among worlds", "get schwift", "awwww geeez", "gazorpazorpfield","natomy park","mr meseeks", "tiny rick","pickle rick"]

var randomWord =function()
{
    return wordList[Math.floor(Math.random() * wordList.length)];
};

var Word = randomWord();
console.log(Word);

var lives =5;
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