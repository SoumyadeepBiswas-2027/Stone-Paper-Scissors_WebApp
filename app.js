let userScore =0;
let compScore=0;
const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");


const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const getCompChoice = () => {
  const options =["stone","paper","scissors"];
  const randIdx =Math.floor(Math.random() * 3);
  return options[randIdx];
}

//we will send above compchoice to playgame func

const drawGame =() =>{
    msg.innerText ="Game was Draw. Play again!";
    msg.style.backgroundColor="#081b31";
}


const showWinner=(userWin, userChoice,compChoice) =>{
if(userWin){
    userScore++;
    userScorePara.innerText= userScore;
    msg.innerText =`You Won! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
}else{
    compScore++;
    compScorePara.innerText= compScore;
    msg.innerText =`You Lose! ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor="red";
}
};




const playGame = (userChoice) =>{
    //above says comp what is user-choice, but now we will generate comp choice below
    const compChoice = getCompChoice(); 



    if(userChoice === compChoice){
    drawGame ();
    } else{
        let userWin= true;
        if(userChoice ==="stone") {
            //scissors,paper
          userWin= compChoice === "paper" ? false:true;
        } else if(userChoice === "paper"){
            //stone,scissors
            userWin= compChoice === "scissors" ? false:true;
        }else{
            //stone,paper
           userWin= compChoice === "stone" ? false:true;
        }
        showWinner(userWin, userChoice,compChoice); //strt here
    }
};




choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
    const userChoice = choice.getAttribute("id")
    playGame(userChoice);
    })
})







