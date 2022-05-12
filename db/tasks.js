require("dotenv").config();
const mongodb = require("mongodb");
const mongoose = require("mongoose");

const connect = (url)=>{
    mongoose.connect(
        url,{useNewUrlParser: true,useUnifiedTopology: true,useFindAndModify:false})
        .then(()=>console.log("successfully connected"))
        .catch(err=>{console.log(err)})
    }

module.exports = connect;