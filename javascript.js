
var answers=["red","orange","yellow","green","blue","purple"];
var computerGuess=answers[Math.floor(Math.random()*answers.length)];
var userGuess=prompt("I'm thinking of a color. Try to guess what it is.");
if(userGuess.toLowerCase() === computerGuess.toLowerCase()){
    alert("That's right!");
    console.log(computerGuess);
    console.log(userGuess);
    document.getElementsByClassName("computerAnswer").innerHTML="The correct answer was " + computerGuess + " .";
    document.getElementsByClassName("userAnswer").innerHTML="You guessed " + userGuess + " .";

}else{
    alert("Sorry, that's incorrect. Please try again.");
    console.log(userGuess);
    console.log(computerGuess);
    document.getElementsByClassName("computerAnswer").innerHTML="The correct answer was " + computerGuess + " .";
    document.getElementsByClassName("userAnswer").innerHTML="You guessed " + userGuess + " .";
}