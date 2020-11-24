const express = require("express");
var router = express.Router()

const list = require("./admin/list")
const nav = require("./admin/nav")

router.get("/",(req,res)=>{
   res.send("后台管理中心")
})

router.use("/list",list)
router.use("/nav",nav)
 
module.exports = router