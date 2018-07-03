var express  = require("express"),
    router   = express.Router(),
    Homework = require("../models/homework"),
    moment   = require("moment");

//Index
router.get("/homeworks",function(req,res){
  Homework.find({},function(err,allHomework){
    if(err){
      console.log(err);
    }else{
      res.render("homeworks/index",{homeworks:allHomework,moment:moment});
    }
  });
});

//New
router.get("/homeworks/new",function(req,res){
  res.render("homeworks/new");
});

//Create
router.post("/homeworks",function(req,res){
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
router.get("/homeworks/:id/edit",function(req,res){
  Homework.findById(req.params.id,function(err,foundHomework){
    if(err){
      console.log(err);
    }else{
      res.render("homeworks/edit",{homework:foundHomework});
    }
  });
});

//Update
router.put("/homeworks/:id",function(req,res){
  Homework.findByIdAndUpdate(req.params.id,req.body.homework,function(err,updateHomework){
    if(err){
      console.log(err);
    }else{
      res.redirect("/homeworks");
    }
  });
});

//Destroy
router.delete("/homeworks/:id",function(req,res){
  Homework.findByIdAndRemove(req.params.id,function(err){
    if(err){
      console.log(err);
    }else{
      res.redirect("/homeworks");
    }
  });
});

module.exports = router;
