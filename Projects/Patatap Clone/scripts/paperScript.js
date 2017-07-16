var circlesArray = [];


function onKeyDown(event) {
    if (dataSet[event.key]) {
        var maxPoint = new Point(view.size.width, view.size.height);
        var randomPoint = Point.random();
        var point = maxPoint * randomPoint;
        var circle = new Path.Circle(point, 100);
        circle.fillColor = dataSet[event.key]["color"];
        circlesArray.push(circle);
        dataSet[event.key]["sound"].play();
    }
}

function onFrame(event) {
    circlesArray.forEach(function (circle) {
        circle.fillColor.hue += 1;
        circle.position.x += 1;
        circle.position.y += 1;
        circle.scale(0.97);
    });
}