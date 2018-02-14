

var answers=["red","orange","yellow","green","blue","purple"];



function startGame(){
var userGuess=prompt("I'm thinking of a color. Try to guess what it is.");
document.getElementById("user").innerHTML="You guessed \"" + userGuess + ".\"";
var pointsEarned=0;
if(userGuess.toLowerCase() === ""){
    alert("Please provide an answer.");
    
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
    if (computerGuess.toLowerCase() === "red"){
    document.getElementById("computer").style.backgroundColor = "red";
    document.getElementById("messageBox").style.backgroundColor = "red";
}else if(computerGuess.toLowerCase() === "orange"){
    document.getElementById("computer").style.backgroundColor = "orange";
    document.getElementById("messageBox").style.backgroundColor = "orange";
}else if(computerGuess.toLowerCase() === "yellow"){
    document.getElementById("computer").style.backgroundColor = "yellow";
    document.getElementById("messageBox").style.backgroundColor = "yellow";
}else if(computerGuess.toLowerCase() === "green"){
    document.getElementById("computer").style.backgroundColor = "green";
    document.getElementById("messageBox").style.backgroundColor = "green";
}else if(computerGuess.toLowerCase() === "blue"){
    document.getElementById("computer").style.backgroundColor = "blue";
    document.getElementById("messageBox").style.backgroundColor = "blue";
}else if(computerGuess.toLowerCase() === "purple"){
    document.getElementById("computer").style.backgroundColor = "purple";
    document.getElementById("messageBox").style.backgroundColor = "purple";
}

//------------------message to user-------------------------------------------

if(userGuess.toLowerCase() === computerGuess.toLowerCase()){
    var newScore=(pointsEarned + 1);
    document.getElementById("score").innerHTML=(newScore);
    document.getElementById("messageBox").innerHTML="Congratulations, you just might be psychic! Try again!!";       
}else{
    document.getElementById("messageBox").innerHTML="That's incorrect. Try again.";
}
}
