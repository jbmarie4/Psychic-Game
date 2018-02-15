

var answers=["red","orange","yellow","green","blue","purple"];
var pointsEarned=0;
var guessesLeft=6;

function startGame(){
document.getElementById("score").innerHTML=pointsEarned;
document.getElementById("guessesLeft").innerHTML=guessesLeft;
var userGuess=prompt("I'm thinking of a color. Try to guess what it is.");
document.getElementById("user").innerHTML="You guessed \"" + userGuess + ".\"";
if(userGuess.toLowerCase() == ""){
    alert("Please provide an answer.");
    document.getElementById("user").style.backgroundColor = "black"; 
}

if(userGuess.toLowerCase() === "red"){
document.getElementById("user").style.backgroundColor = "red";
}else if(userGuess.toLowerCase() === "orange"){
        document.getElementById("user").style.backgroundColor = "orange";
}else if(userGuess.toLowerCase() === "yellow"){
    document.getElementById("user").style.backgroundColor = "yellow";
}else if(userGuess.toLowerCase() === "green"){
    document.getElementById("user").style.backgroundColor = "green";
}else if(userGuess.toLowerCase() === "blue"){
    document.getElementById("user").style.backgroundColor = "blue";
}else if(userGuess.toLowerCase() === "purple"){
    document.getElementById("user").style.backgroundColor = "purple";
}else{
    alert("Please pick either red, orange, yellow, green, blue, or purple.");
    document.getElementById("user").style.backgroundColor= "black";
}

//----------------computer's guess---------------------------------

var computerGuess=answers[Math.floor(Math.random()*answers.length)];
document.getElementById("computer").innerHTML="The correct answer is " + computerGuess + ". ";
    if (computerGuess === "red"){
    document.getElementById("computer").style.backgroundColor = "red";
    document.getElementById("messageBox").style.backgroundColor = "red";
}else if(computerGuess === "orange"){
    document.getElementById("computer").style.backgroundColor = "orange";
    document.getElementById("messageBox").style.backgroundColor = "orange";
}else if(computerGuess === "yellow"){
    document.getElementById("computer").style.backgroundColor = "yellow";
    document.getElementById("messageBox").style.backgroundColor = "yellow";
}else if(computerGuess === "green"){
    document.getElementById("computer").style.backgroundColor = "green";
    document.getElementById("messageBox").style.backgroundColor = "green";
}else if(computerGuess === "blue"){
    document.getElementById("computer").style.backgroundColor = "blue";
    document.getElementById("messageBox").style.backgroundColor = "blue";
}else if(computerGuess === "purple"){
    document.getElementById("computer").style.backgroundColor = "purple";
    document.getElementById("messageBox").style.backgroundColor = "purple";
}

//------------------message to user-------------------------------------------

if(userGuess.toLowerCase() === computerGuess){ 
    pointsEarned = pointsEarned + 1;
    guessesLeft= guessesLeft -1;
    document.getElementById("score").innerHTML=pointsEarned;
    document.getElementById("guessesLeft").innerHTML=guessesLeft;
    document.getElementById("messageBox").innerHTML="Great job!";       
}else{
    guessesLeft= guessesLeft -1;
    document.getElementById("guessesLeft").innerHTML=guessesLeft;
    document.getElementById("messageBox").innerHTML="That's incorrect. Try again.";
}

}

/* if (guessesLeft === 0 && pointEarned > 3){
    stop: startGame ();
    document.getElementById("messageBox").innerHTML="Fantastic! You are psychic!!!";
}else if(guessesLeft === 0 && pointsEarned === 1){
    stop: startGame ();
    document.getElementById("messageBox").innerHTML= "Good job, but you need more practice to become a psychic."
}else if(guessesLeft === 0 && pointsEarned === 2){
    stop: startGame ();
    document.getElementById("messageBox").innerHTML= "Great job!! See if you can get more correct!";    
}else if(guessesLeft === 0 && pointsEarned === 0){
    stop: startGame ();
    document.getElementById("messageBox").innerHTML= "Nice try. Better luck next time!";
}
} */
