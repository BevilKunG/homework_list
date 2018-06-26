var express = require("express");
var app = express();

app.set("view engine","ejs");
app.use(express.static(__dirname+"/public"));

//Landing Page
app.get("/",function(req,res){
  res.send("Landing Page");
});

//Index
app.get("/homeworks",function(req,res){
  res.render("homeworks/index");
});


//listen
app.listen(3000,process.env.IP);
