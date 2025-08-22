let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg")
const userScorepara =document.querySelector("#user");
const computerScorepara =document.querySelector("#computer");

const drawGame=()=>{
  msg.innerText=("game was draw.Play again")
   msg.style.backgroundColor ="#081b31";
}

const showWinner=(userWin)=>{
  if(userWin){
    userScore++
    userScorepara.innerText=userScore;
   msg.innerText="you win";
   msg.style.backgroundColor ="green";
  }
  else{
     console.log("Loose")
      msg.innerText="you losse";
        msg.style.backgroundColor = "red";
        computerScore++
        computerScorepara.innerText=computerScore;

  }
}


const genComputerChoices = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
};

const playGame = (userChoice) => {
  console.log("click", userChoice);
  const computerChoice = genComputerChoices();
  console.log("computer", computerChoice);


  if(userChoice==computerChoice){
     drawGame();
  } else{
    let userWin =true;
    if(userChoice ==="rock"){
      userWin=computerChoice==="paper"? false : true;
        }else if(userChoice==="paper"){
          userWin=computerChoice==="scissors"? false: true;

        }else{
            userWin=computerChoice==="rock"? false : true;
        }
        showWinner(userWin);
  }


};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
