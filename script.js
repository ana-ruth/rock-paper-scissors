function getComputerChoice()
{
    let num = Math.floor(Math.random()*3);
    let choice = " ";
    if(num == 0) {choice = "rock";}
    else if(num==1) {choice= "paper";}
    else  {choice="scissors";}
    return choice;
}

function getHumanChoice()
{
    let choice = prompt("Enter your choice: \"rock\",\"paper\",\"scissors\".");
    return choice;
}

let humanScore = 0;
let computerScore= 0;

function playRound(humanChoice, computerChoice)
{
    let human = humanChoice.toLowerCase();
    let message = " ";
    
    if(human == computerChoice) 
    {
        message = "It's a tie!"
        return message;
    }

    if(human == "rock")
    {
        if(computerChoice == "paper") 
        {
            message = "You lose! Paper beats Rock.";
            computerScore +=1;            
        }
        if(computerChoice == "scissors")
        {
            message = "You win! Rock beats Scissors.";
            humanScore +=1; 
        }

    }

    if(human == "paper")
    {
        if(computerChoice == "rock") 
        {
            message = "You win! Paper beats Rock.";
            humanScore +=1;            
        }
        if(computerChoice == "scissors")
        {
            message = "You lose! Scissors beat Paper.";
            computerChoice +=1; 
        }
    }

    if(human == "scissors")
    {
        if(computerChoice == "rock") 
        {
            message = "You lose! Rock beats scissors.";
            computerScore +=1;            
        }
        if(computerChoice == "paper")
        {
            message = "You win! Scissors beat Paper.";
            humanChoice +=1; 
        }
    }

    return message;
}
