const express = require("express");
const { route } = require(".");
var router = express.Router()

const pic = require("./api/pic")
const date = require("./api/date")
const funny = require("./api/funny")

router.get("/",(req,res)=>{
   res.send("api接口")
 })
 
 router.use("/date",date)
 router.use("/pic",pic)
 router.use("/funny",funny)


 module.exports = router