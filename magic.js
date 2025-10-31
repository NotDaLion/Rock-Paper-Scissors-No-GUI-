let hScore = 0;
let botScore = 0;

let randomInt = (min,max) => Math.floor(Math.random() * (max - min + 1) + min);
function getInput()
{
    let choice = prompt("Rock, Paper or Scissors?")
    let sanChoice = choice.toLowerCase()
    sanChoice = sanChoice.trim()
    while(sanChoice != "rock" && sanChoice != "paper" && sanChoice != "scissors"){
        alert(`Are you stupid?\nwhat even is a ${choice}\nPlease input a valid choice.`)
        choice = prompt("Rock, Paper or Scissors?")
        sanChoice = choice.toLowerCase();
        sanChoice = sanChoice.trim();
    }
    console.log("returning input choice...");
    return sanChoice
}

function getAI()
{
    let num = randomInt(0,2);
    switch(num){
        case 0:
            return "scissors";
        case 1:
            return "rock";
        case 2:
            return "paper";
    }
}
function botScored(human , AI){
    alert(`You lose! ${AI} beats ${human}`);
    botScore++;
}
function humanScored(human , AI){
    alert(`You win! ${human} beats ${AI}`)
    hScore++;
}
///help
function getResult(human,AI){
    switch(human){
        case "scissors":
            if(AI == "scissors"){
                alert("You Tied!");
            }
            else if(AI == "rock"){
                botScored(human,AI);
            }
            else if(AI == "paper"){
                humanScored(human,AI);       
            }
            break;
        case "rock":
            if(AI == "scissors"){
                humanScored(human,AI);
            }
            else if(AI == "rock"){
                alert("You Tied!");
            }
            else if(AI == "paper"){
                botScored(human,AI);
            }
            break;
        case "paper":
            if(AI == "scissors"){
                botScored(human,AI);
            }
            else if(AI == "rock"){
                humanScored(human,AI);                
            }
            else if(AI == "paper"){ 
                alert("You Tied!")
            }
            break;
        default:
            alert("you broke something didn't you")
    }
}
//gayme
function playRound(){
    let humanChoice = getInput();
    let botChoice = getAI();
    getResult(humanChoice,botChoice);
}
function playGame(){
    for(let i = 0;i < 5;i++){
    playRound();
    }
    alert(`Human: ${hScore} \nBot: ${botScore}`);
    hScore = 0;
    botScore = 0;
}

while(true){
    playGame()
    let again = prompt("Do you want to play again?")
    again = again.toLowerCase();
    if(again == "no"){
        alert("ok");
        break;
    }
}


