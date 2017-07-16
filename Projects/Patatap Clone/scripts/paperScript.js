// var dataSet = {
//     a: {
//         color: "orange"
//     },
//     q: {
//         color: "blue"
//     },

//     e: {
//         color: "green"
//     },

//     f: {
//         color: "red"
//     }
// }


function onKeyDown(event) {
    var maxPoint = new Point(view.size.width, view.size.height);
    var randomPoint = Point.random();
    var point = maxPoint * randomPoint;
    // console.log(dataSet[event.key.color]);
    // new Path.Circle(point, 50).fillColor = dataSet[event.key.color];
    new Path.Circle(point, 50).fillColor = "blue";
}