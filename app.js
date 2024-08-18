let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

let msg = document.querySelector(".msg-us"); //msg

let usersc = document.querySelector(".user-sc");
let compsc = document.querySelector(".comp-sc");

const getCompChoice = () => {
  const options = ["rock", "paper", "scissors"];

  let randInx = Math.floor(Math.random() * 3);
  return options[randInx];
};

const drawGame = () => {
  console.log("Game draw");
  msg.setAttribute("class", "msg-draw");
  msg.innerText = "Game Draw";
};

const showWinner = (userwin, userChoice, compChoice) => {
  if (userwin) {
    msg.setAttribute("class", "msg-user");
    msg.innerText = "You Win! Congratulation Your";
    userScore++;
    usersc.innerText = userScore;
  } else {
    msg.setAttribute("class", "msg-comp");
    msg.innerText = "You lose! Better luck next time";
    compScore++;
    compsc.innerText = compScore;
  }
};

const playGame = (userChoice) => {
  console.log("User choice : ", userChoice);

  //Generate computer choice

  const compChoice = getCompChoice();
  console.log("Comp Choice : ", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userwin = true;
    if (userChoice === "rock") {
      // comp= scissors , paper
      userwin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //comp = rock , scissors
      userwin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userwin = compChoice === "rock" ? false : true;
    }
    showWinner(userwin);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    //console.log("choice was clicked", userChoice);
    playGame(userChoice);
  });
});
