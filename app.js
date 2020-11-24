const http = require("http");
const express = require("express");
const bodyParser = require('body-parser')
const ejs = require("ejs");
const querystring = require('querystring');
const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'users';
var UserModel = require('./model/user.js');
var NewsModel = require('./model/funny.js');

const index = require("./routes/index")
const api = require("./routes/api")
const admin = require("./routes/admin")

const app = express()

app.use(express.static("static"))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("/", index)
app.use("/api", api)
app.use("/admin", admin)

app.get("/pic", (req, res) => {
  ejs.renderFile("./views/pic.ejs", {}, (err, data) => {
    res.send(data)
  })
})

app.get("/login", (req, res) => {
  ejs.renderFile("./views/login.ejs", {}, (err, data) => {
    res.send(data)
  })
})

app.post('/doLogin', (req, res) => {

  UserModel.find({ "name": req.body.name }, function (err, data) {
    if (err) {
      console.log(err);
      return;
    }
    if (data.length) {
      if (data[0].passwd == req.body.passwd) {
        res.send( { age:data[0].age });
      }
      else{
        res.send("密码错误");
      }
    }
    else {
      res.send("该用户尚未注册");
    }

  })
})


app.get('/register', function (req, res) {
  ejs.renderFile("./views/register.ejs", {}, (err, data) => {
    res.send(data);
  })
})

app.post('/doRegister', function (req, res) {

  var user = new UserModel({
    name: req.body.name,
    passwd: req.body.passwd,
    age: req.body.age
  })
  user.save(function (err) {
    if (err) {
      console.log(err);
      return;
    }
  })
  res.send("增加数据成功");
})


http.createServer(app).listen(3000);
console.log("server running at http://127.0.0.1:3000")