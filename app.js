var express = require("express");
var app = express();
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/homework_list");

app.set("view engine","ejs");
app.use(express.static(__dirname+"/public"));

//HomeworkSchema & Homework Model
var HomeworkSchema = mongoose.Schema({
                      name:String,
                      timeLimit:Date,
                      status:String
                    });
var Homework = mongoose.model("Homework",HomeworkSchema);

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
