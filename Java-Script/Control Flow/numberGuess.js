var secretNumber = 7;
var answer = Number(prompt("Guess the number!"));
if(answer === secretNumber){
    alert("You guessed it right! Congratulations!");
} else{
    alert("You guessed wrong, try again");
}