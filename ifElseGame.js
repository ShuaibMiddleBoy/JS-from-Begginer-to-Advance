const winningNum = 20;

const guessNum = +prompt("Guess a number");

if(guessNum === winningNum){
    console.log("Congo! You Win");
}else{
    console.log("Sorry try again");
    if(guessNum > winningNum){
        console.log("Too Large");
    }else{
        console.log('Too Small');
    }
}