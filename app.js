var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var moment = require("moment");
var Homework = require("./models/homework");


//Routes
var homeworkRoutes = require("./routes/homeworks");
var statRoutes = require("./routes/stats");

mongoose.connect("mongodb://localhost/homework_list");
// mongoose.connect(process.env.MONGODBURL);


app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+"/public"));
app.use(methodOverride("_method"));



//Landing Page
app.get("/",function(req,res){
  res.redirect("/homeworks");
});

app.use(homeworkRoutes);
app.use(statRoutes);





//listen
app.listen(3000,process.env.IP);
