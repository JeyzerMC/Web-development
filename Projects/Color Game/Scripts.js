var rec = document.querySelectorAll(".square");

var squareNumbers = 6;

var colors = createColors(squareNumbers);

var pickedColor = pickColor();

var gameOver = false;

initialiseOpacity();

document.querySelector("h1").textContent = pickedColor;

squareListeners();

difficultySelector();

newColors();


function createColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {

        var red = Math.floor(Math.random() * 256);
        var green = Math.floor(Math.random() * 256);
        var blue = Math.floor(Math.random() * 256);

        arr.push("rgb(" + red + ", " + green + ", " + blue + ")");
        rec[i].style.background = arr[i];
    }

    return arr;
}

function pickColor() {
    var colorSelected = colors[Math.floor(Math.random() * (squareNumbers))];
    return colorSelected;
}

function squareListeners() {
    for (var i = 0; i < rec.length; i++) {
        rec[i].addEventListener("click", function () {
            var animationFinished = false;
            if (!gameOver) {
                if (this.style.background === pickedColor) {
                    document.querySelector(".feedback").textContent = "Correct!";
                    gameOver = true;
                    document.querySelector("#newCG").textContent = "Play Again!"
                    console.log("RIGHT!");
                    document.querySelector(".header").style.background = pickedColor;
                    document.querySelector(".selected").style.background = pickedColor;
                } else {
                    console.log("WRONG!");
                    var square = this;
                    setInterval(function () {
                        if (!animationFinished && square.style.opacity > 0) {
                            square.style.opacity -= 0.1;
                        } else {
                            animationFinished = true;
                        }
                    }, 50);
                }
            }
        });
    }
}

function difficultySelector() {
    document.querySelectorAll(".difficulty").forEach(function (btn) {
        optionsListener(btn);
    });
}

function optionsListener(btn) {
    btn.addEventListener("click", function () {
        if (!gameOver) {
            if (this.textContent === "Easy") {
                chooseDifficulty("Easy");
            } else {
                chooseDifficulty("Hard");
            }
        }
    });
}

function chooseDifficulty(diff) {
    document.querySelectorAll(".difficulty").forEach(function (btn) {
        btn.classList.remove("selected");
    });

    if (diff === "Easy") {
        squareNumbers = 3;
        for (var i = 3; i < 6; i++) {
            document.querySelectorAll(".square")[i].style.display = 'none';
        }
        document.querySelector(".difficulty").classList.toggle("selected");
    } else {
        squareNumbers = 6;
        for (var i = 3; i < 6; i++) {
            document.querySelectorAll(".square")[i].style.display = 'block';
        }
        document.querySelectorAll(".difficulty")[1].classList.toggle("selected");
    }

    newGame(squareNumbers);
}

function newGame(squareN) {
    document.querySelector(".feedback").textContent = "";
    document.querySelector("#newCG").textContent = "New Colors"
    gameOver = false;
    squareNumbers = squareN;
    colors = createColors(squareNumbers);
    pickedColor = pickColor();
    document.querySelector("h1").textContent = pickedColor;
    initialiseOpacity();
    document.querySelector(".header").style.background = "rgb(76, 95, 137)";
    document.querySelector(".selected").style.background = "rgb(76, 95, 137)";
}

function newColors() {
    document.querySelector("#newCG").addEventListener("click", function () {
        newGame(squareNumbers);
    });
}

function initialiseOpacity() {
    document.querySelectorAll(".square").forEach(function (square) {
        square.style.opacity = 1.0;
    });
}