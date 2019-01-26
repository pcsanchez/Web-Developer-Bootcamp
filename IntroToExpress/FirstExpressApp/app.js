var express = require("express");
var app = express();

// "/" => "HI THERE!"
app.get("/", function(req, res){
    res.send("Hi there!");
});
// "/bye" => "GOODBYE!"
app.get("/bye",function(req, res){
    res.send("Goodbye!");
});
// "/dog" => "MEOW!"
app.get("/dog",function(req, res){
    console.log("Request made for dog");
    res.send("MEOW!");
})

app.get("/r/:subredditName", function(req, res){
    var subreddit = req.params.subredditName;
    res.send("WELCOME TO THE "  + subreddit + " SUBREDDIT!");
});

app.get("/r/:subredditName/comments/:id/:title/",function(req, res){
    res.send("WELCOME TO THE COMMENTS PAGE!");
});


app.get("*", function(req, res){
    res.send("you are a star");
});

//Tell express to listen for requests (start server)

app.listen(3000,function(){
    console.log("Started server on port 3000")
});