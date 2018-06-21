//a word is made
var wordList = ["citadel of ricks","morty","jerry","beth","portal gun","wubba lubba dub dub","peace among worlds", "get schwift", "awwww geeez", "gazorpazorpfield","natomy park","mr meseeks", "tiny rick","pickle rick"]

var randomWord =function()
{
    return wordList[Math.floor(Math.random() * wordList.length)];
};

var Word = randomWord();
console.log(Word);

var lives =5;

for (i = 0; i <= Word.length; i++) 
{ 
    text i ="-";
}
console.log(spaces);
// user has to pck a letter that corresponds to a letter from the word 
// if the letter is right, then it get placed on one of the line
//if they get it wrong, then they lose one of thier lives and when they lose all 6 lives, then game over 