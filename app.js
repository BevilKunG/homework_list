var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

mongoose.connect("mongodb://localhost/homework_list");

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname+"/public"));

//HomeworkSchema & Homework Model
var HomeworkSchema = mongoose.Schema({
                      name:String,
                      timeLimit:Date,
                      status:String
                    });
var Homework = mongoose.model("Homework",HomeworkSchema);

// //test homework data
// var data = {
//               name:"Homework3",
//               timeLimit:new Date("2018-07-28"),
//               status:"failed"
//             };
// var newHomework = new Homework(data);
// newHomework.save();

//Landing Page
app.get("/",function(req,res){
  res.send("Landing Page");
});

//Index
app.get("/homeworks",function(req,res){
  Homework.find({},function(err,allHomework){
    if(err){
      console.log(err);
    }else{
      res.render("homeworks/index",{homeworks:allHomework});
    }
  });

});


//listen
app.listen(3000,process.env.IP);
