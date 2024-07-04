
function getComputerChoice()
{
    let num = Math.floor(Math.random()*3);
    let choice = " ";
    if(num == 0) {choice = "rock";}
    else if(num==1) {choice= "paper";}
    else  {choice="scissors";}
    return choice;
}

let humanScore = 0;
let computerScore= 0;

function playRound(humanChoice, computerChoice)
{
    if(humanScore ===5 || computerScore===5)
    {        
        winner();
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        return;
    }

    let human = humanChoice.toLowerCase();
    let message = " ";
    
    if(human == computerChoice) 
    {
        message = "It's a tie!"
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
            computerScore +=1; 
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
            humanScore +=1; 
        }
    }
    const humanS = document.querySelector("#human");
    const computer = document.querySelector("#computer");
    computer.textContent = computerScore;
    humanS.textContent = humanScore;

    const currGame = document.querySelector("#currentGame");
    currGame.textContent = message; 

}

    const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");
    const scissors = document.querySelector("#scissors");

    rock.addEventListener("click",()=>{
       playRound("rock",getComputerChoice());
    });
    
    paper.addEventListener("click",()=>{
        playRound("paper",getComputerChoice());
    });

    scissors.addEventListener("click",()=>{
        playRound("scissors",getComputerChoice());
    });



function winner()
{
    const result = document.querySelector("#results")
    
    if(computerScore > humanScore) 
    {
        result.textContent = "You Lost.";
        result.style.backgroundColor = "#CF1020";
    }
    else if(computerScore < humanScore)     
    {
        result.textContent = "You Won!";
        result.style.backgroundColor = "green";
    }
    
}




