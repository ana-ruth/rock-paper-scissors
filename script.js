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

console.log(getHumanChoice());
