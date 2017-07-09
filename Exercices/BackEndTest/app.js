var app = require("express")();


app.get("/", function(req, res){
    res.send("Hey!");
});


app.listen(8080, function(){
    console.log("Server is running!");
});