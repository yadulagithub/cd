const express = require("express");
const path = require('path');
const fs = require('fs');
let files = [];
let cats = [];
let cars = [];
let newform = [];

app = express();
port = 8000;
app.use(express.static(__dirname +"/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
  console.log(" Here we are ");
  res.render('cats');
});
app.get('/kittycat1', (req, res) => {
      catsdata = {
        name: "Kittycat1",
        age: 10,

      }
      res.render('details', {cat:catsdata});
});
app.get('/kittycat2', (req, res) => {
  catsdata = {
    name: "Kittycat2",
    age: 10,

  }
  res.render('details', {cat:catsdata});
});
app.get('/kittycat3', (req, res) => {
  catsdata = {
    name: "Kittycat3",
    age: 10,

  }
  res.render('details', {cat:catsdata});
});


app.listen(port, () => {
    console.log("listening to port" + port);
});
