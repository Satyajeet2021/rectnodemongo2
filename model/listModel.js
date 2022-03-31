const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({

  id:{
  	type:String,
  	trim:true,
  	min:4,
  	max:20
  },
  text:{
  	type:String,
  	trim:true,
  	min:4,
  	max:20
  },
 

},{timestamps:true})


module.exports = mongoose.model("list",listSchema);