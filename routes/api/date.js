const express = require("express");
var router = express.Router()
var moment = require('moment');

var current_time = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')

if(current_time){
  var date = {
    "date":current_time,
    "res":"success"
  }
}
else{
  var date = {
    "date":null,
    "status":"False"
  }
}


router.get("/", (req, res) => {
  res.send(date)
})


module.exports = router