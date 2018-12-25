var express        = require("express"),
    app            = express(),
    bodyParser     = require("body-parser"),
    methodOverride = require("method-override"),
    mongoose       = require("mongoose"),
    keys           = require('./config/keys');


//Require Routes
var homeworkRoutes = require("./routes/homeworks"),
    statRoutes     = require("./routes/stats"),
    indexRoutes    = require("./routes/index");

//Connect Mongoose
mongoose.connect(keys.mongoUrl);

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
var PORT = process.env.PORT || 3000;
app.listen(PORT,process.env.IP);
