const express = require("express");

var router = express.Router()

router.get("/",(req,res)=>{
   res.send("Node.js路由框架，api接口，连接Mongo数据库等功能")
 })
 
 module.exports = router