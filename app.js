var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
	const choices = ["p", "r", "s"];
	const randomnumber = Math.floor(Math.random() * 3);
	return choices[randomnumber];
}

function convertToWord(letter) {
	if (letter == "r") return "Rock";
	else if (letter == "p") return "Paper";
	return "Scissors";
}

function win(userChoice, computerChoice) {
	userScore++;
	userScore_span.innerHTML = userScore;
	const userSmallWord = "user".fontsize(4).sub();
	const compSmallWord = "comp".fontsize(4).sub();
	result_p.innerHTML = `${convertToWord(userChoice)}${userSmallWord} beats ${convertToWord(computerChoice)}${compSmallWord}. You win ! \u{1F525}`;
	document.getElementById(userChoice).classList.add("greenglow");
	setTimeout(() => document.getElementById(userChoice).classList.remove("greenglow"), 300);
}

function lose(userChoice, computerChoice) {
	computerScore++;
	computerScore_span.innerHTML = computerScore;
	const userSmallWord = "user".fontsize(4).sub();
	const compSmallWord = "comp".fontsize(4).sub();
	result_p.innerHTML = `${convertToWord(userChoice)}${userSmallWord} loses to ${convertToWord(computerChoice)}${compSmallWord}. You lose... \u{1F614}`;
	document.getElementById(userChoice).classList.add("redglow");
	setTimeout(() => document.getElementById(userChoice).classList.remove("redglow"), 300);
}
function draw(userChoice, computerChoice) {
	const userSmallWord = "user".fontsize(4).sub();
	const compSmallWord = "comp".fontsize(4).sub();
	result_p.innerHTML = `${convertToWord(userChoice)}${userSmallWord} equals to ${convertToWord(computerChoice)}${compSmallWord}. It's a draw. \u{1F610}`;
	document.getElementById(userChoice).classList.add("grayglow");
	setTimeout(() => document.getElementById(userChoice).classList.remove("grayglow"), 300);
}

function game(userChoice) {
	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice) {
		case "rs":
		case "pr":
		case "sp":
			win(userChoice, computerChoice);
			break;
		case "rp":
		case "ps":
		case "sr":
			lose(userChoice, computerChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice, computerChoice);
			break;
	}
}

function Main() {
	rock_div.addEventListener("click", () => game("r"));
	paper_div.addEventListener("click", () => game("p"));
	scissors_div.addEventListener("click", () => game("s"));
}

Main();
