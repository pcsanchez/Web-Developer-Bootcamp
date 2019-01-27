var express = require("express");
var app = express();

app.get("/",function(req, res){
    res.send("Hi there, welcome to my assignment");
});

app.get("/speak/:animal",function(req, res){
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof",
        cat: "Meow",
        goldfish: "..."
    };
    var animal = req.params.animal.toLowerCase();
    res.send("The " + animal + " says " + sounds[animal]);
});

app.get("/repeat/:word/:times",function(req, res){
    var word = req.params.word;
    var times = Number(req.params.times);
    var result = "";
    for(var i = 0;i < times;i++){
        result = result + word + " ";
    }
    res.send(result);
});

app.get("*",function(req, res){
    res.send("Sorry, page not found... What are you doing with your life?");
});



app.listen(3000,function(){
    console.log("Started server on port 3000");
});