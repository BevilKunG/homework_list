var mongoose = require("mongoose");

var HomeworkSchema = mongoose.Schema({
                      name:String,
                      deadline:Date,
                      status:String
                    });

module.exports = mongoose.model("Homework",HomeworkSchema);
