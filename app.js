let userScore = 0;
let computerScore = 0;
const msg = document.querySelector("#msg");
const userScoreText = document.querySelector("#user-score");
const computerScoreText = document.querySelector("#computer-score");

const choices = document.querySelectorAll(".choice");

const getComputerChoice=()=>{
    const options = ["rock", "paper", "scissors"];
    const randomIdx= Math.floor(Math.random()*3) ;
     return options[randomIdx];
}

const drawGame =()=>{
    // console.log(" Game Draw");
    msg.innerText= "Game Draw";
}


const showWinner =(userWin)=>{
    if(userWin){
        // console.log("You won ");
        msg.innerText   ="You won ";
        userScore++;
        userScoreText.innerText= userScore;
    }
    else {
        // console.log("You lose");
        msg.innerText ="You lost ";
        computerScore++;
        computerScoreText.innerText= computerScore;
    }
}
const playGame =(userChoice)=>{

    console.log("userChoice = "+ userChoice);
    // generate computer choice 
    const computerChoice = getComputerChoice();
    console.log("computerChoice = "+ computerChoice);

    if(userChoice === computerChoice){
        drawGame();
    }
    else {
        let userWin= true;
        if(userChoice === "rock"){
           userWin= computerChoice === "paper"? false: true;
        }
        else if(userChoice === "paper"){
            userWin= computerChoice === "scissors"? false: true;
        }
        else {
           userWin= computerChoice ==="rock"? false: true;
        }
        showWinner(userWin);
    }

}


choices.forEach((choice)=>{
  
    choice.addEventListener("click",()=>{
        const choiceId= choice.getAttribute("id");
        // console.log("choice clicked",choiceId);
        playGame(choiceId);
    }
)
})