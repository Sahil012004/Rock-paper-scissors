let userScore = 0;
let aiScore = 0;

const choices= document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const contain= document.querySelector(".msgcontainer")

const drawgame = ()=> {
        console.log("The game was a draw");
        msg.innerText="The game was a draw";
        contain.style.backgroundColor="#685762"
}
const Game = (userChoice) =>{
    console.log("user choice",userChoice);
    const AIchoice = aiChoice ();
    console.log("AI choice",AIchoice);

    if (userChoice===AIchoice) {
        // draw condition   
        drawgame();
    } else {
        let userWin = true;
        if (userChoice ==="paper") {
            userWin= AIchoice ==="scissor" ? false : true;
        } else if(userChoice === "rock") {
            userWin = AIchoice ==="paper"? false : true;
        } else {
            userWin = AIchoice ==="rock"? false : true;
        }
        count(userWin);
        showWin(userWin, userChoice, AIchoice);
        
    }

} 

choices.forEach((choice) => {
    choice.addEventListener("click",()=> {
        const userChoice = choice.getAttribute("id");
        Game(userChoice);
    });
});
const aiChoice = () =>{
        // pass rock,paper,scissor as an array to get the position from the math func
        const arr = ["rock","paper","scissor"];
        const ainum = Math.floor(Math.random()*3);
        return arr[ainum];
    };
const showWin = (userWin, userChoice, AIchoice) =>{
    if (userWin==true) {
        console.log("you won");
        msg.innerText=`You win! ${userChoice} beats ${AIchoice}`;
        contain.style.backgroundColor="green";
    } else {
        console.log("You lose");
        msg.innerText=`You lost! ${AIchoice} beats ${userChoice}`;
        contain.style.backgroundColor="red";
    }
}
let ipScore = document.querySelector("#user-score");
let compScore = document.querySelector("#AI-score");
const count = (userWin) =>{
    if (userWin==true) {
        userScore++;
        ipScore.innerText=userScore;
    }
    else{
        aiScore++;
        compScore.innerText=aiScore;
    }
}