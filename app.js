var express        = require("express"),
    app            = express(),
    bodyParser     = require("body-parser"),
    methodOverride = require("method-override"),
    mongoose       = require("mongoose");


//Require Routes
var homeworkRoutes = require("./routes/homeworks"),
    statRoutes     = require("./routes/stats"),
    indexRoutes    = require("./routes/index");

//Connect Mongoose
mongoose.connect("mongodb://localhost/homework_list");
// mongoose.connect(process.env.MONGODBURL);

//App Config
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+"/public"));
app.use(methodOverride("_method"));

//Routes
app.use(homeworkRoutes);
app.use(statRoutes);
app.use(indexRoutes);


//listen
app.listen(3000,process.env.IP);
