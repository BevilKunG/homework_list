var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var moment = require("moment");

mongoose.connect("mongodb://localhost/homework_list");

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+"/public"));
app.use(methodOverride("_method"));

//HomeworkSchema & Homework Model
var HomeworkSchema = mongoose.Schema({
                      name:String,
                      deadline:Date,
                      status:String
                    });
var Homework = mongoose.model("Homework",HomeworkSchema);

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
      res.render("homeworks/index",{homeworks:allHomework,moment:moment});
    }
  });
});

//New
app.get("/homeworks/new",function(req,res){
  res.render("homeworks/new");
});

//Create
app.post("/homeworks",function(req,res){
  var homework = req.body.homework;
  homework.status = "working";
  Homework.create(homework,function(err,newHomework){
    if(err){
      console.log(err);
    }else{
      res.redirect("/homeworks");
    }
  });
});

//Edit
app.get("/homeworks/:id/edit",function(req,res){
  Homework.findById(req.params.id,function(err,foundHomework){
    if(err){
      console.log(err);
    }else{
      res.render("homeworks/edit",{homework:foundHomework});
    }
  });
});

//Update
app.put("/homeworks/:id",function(req,res){
  Homework.findByIdAndUpdate(req.params.id,req.body.homework,function(err,updateHomework){
    if(err){
      console.log(err);
    }else{
      res.redirect("/homeworks");
    }
  });
});

//Destroy
app.delete("/homeworks/:id",function(req,res){
  Homework.findByIdAndRemove(req.params.id,function(err){
    if(err){
      console.log(err);
    }else{
      res.redirect("/homeworks");
    }
  });
});

//listen
app.listen(3000,process.env.IP);
