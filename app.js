let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");

let uScore = document.querySelector("#you-score");
let cScore = document.querySelector("#comp-score");

const compChoice = () => {
    const options = ["Rock", "Paper", " Scissors"];
    const radInd = Math.floor(Math.random() * 3);
    return options[radInd];
}

let msg = document.querySelector("#msg")


const showWinner = (userWin, userChoice, comChoice) => {
    if (userWin) {

        console.log("you won!");
        userScore++;
        uScore.innerText = userScore;
        msg.innerText = `You win! ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor = "green";


    } else {
        //msg.innerText="you Lose !";
        console.log("You lose");
        compScore++;
        cScore.innerText = compScore;
        msg.style.backgroundColor = "red";
        msg.innerText = `You Lose! ${comChoice} beats ${userChoice}`;
        compScore++;
    }
}

const playGame = (userChoice) => {
    console.log("user choice=", userChoice);
    const comChoice = compChoice();
    console.log("comp choice=", comChoice)


    if (userChoice === comChoice) {
        console.log("Math draw");
        msg.innerText = "Math was Draw Play Again ! ";
        msg.style.backgroundColor = "black";
    } else {
        let userWin = true;
        if (userChoice === "Rock") {
            userWin = comChoice === "Paper" ? false : true;

        } else if (userChoice === "Paper") {
            userWin = comChoice === "Rock" ? true : false;
        } else {
             userWin=comChoice === "Rock" ? false : true;
        }

        showWinner(userWin, userChoice, comChoice);

    }


};




choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");

        //console.log("choice was clicked",userChoice);
        playGame(userChoice);

    });
});