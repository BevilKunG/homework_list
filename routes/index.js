var express = require("express"),
    router  = express.Router();

//Landing Page
router.get("/",function(req,res){
  res.redirect("/homeworks");
});

module.exports = router;
