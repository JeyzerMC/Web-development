var scorePlayerOne = 0
document.querySelector("#ScoreOne").textContent = scorePlayerOne;
var scorePlayerTwo = 0;
document.querySelector("#ScoreTwo").textContent = scorePlayerTwo;


var gameOver = false;

var maxScore = 5;
document.querySelector("#MaxScore").textContent = maxScore;

document.querySelector("#BtnOne").addEventListener("click", function () {
    scorePlayerOne++;
    if (scorePlayerOne <= maxScore && !gameOver) {
        document.querySelector("#ScoreOne").textContent = scorePlayerOne;
    }
    if (scorePlayerOne === maxScore) {
        gameOver = true;
    }
});


document.querySelector("#BtnTwo").addEventListener("click", function () {
    scorePlayerTwo++;
    if (scorePlayerTwo <= maxScore && !gameOver) {
        document.querySelector("#ScoreTwo").textContent = scorePlayerTwo;
    }
    if (scorePlayerTwo === maxScore) {
        gameOver = true;
    }
});


document.querySelector("#Reset").addEventListener("click", function () {
    scorePlayerOne = 0
    document.querySelector("#ScoreOne").textContent = scorePlayerOne;
    scorePlayerTwo = 0;
    document.querySelector("#ScoreTwo").textContent = scorePlayerTwo;
    maxScore = 5;
    document.querySelector("#MaxScore").textContent = maxScore;
    gameOver = false;
});

document.querySelector("input").addEventListener("keypress", function (keypress) {
    if (keypress.keyCode === 13) {
        maxScore = document.querySelector("input").value;
        document.querySelector("input").value = "";
        document.querySelector("#MaxScore").textContent = maxScore;

    }
});