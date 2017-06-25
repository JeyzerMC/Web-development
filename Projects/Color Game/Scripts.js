var rec = document.querySelectorAll(".square");

var squareNumbers = 6;

var colors = createColors(squareNumbers);

var pickedColord = pickColor();

for (var i = 0; i < rec.length; i++) {
    rec[i].addEventListener("click", function () {

        if (this.style.background === pickedColord) {
            console.log("RIGHT!");
        } else {
            console.log("WRONG!");
        }
    });
}

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
    var colorSelected = colors[Math.floor(Math.random() * (squareNumbers + 1))];

    return colorSelected;
}