var express = require("express");
var router = express.Router();
var Homework = require("../models/homework");
var moment = require("moment");
//Index
router.get("/stats",function(req,res){
  Homework.find({},function(err,foundHomework){
    if(err){
      console.log(err);
    }else{
      res.render("stats/index",{homeworks:foundHomework,moment:moment});
    }
  });
});

module.exports = router;
