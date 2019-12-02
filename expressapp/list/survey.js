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
app.use(express.urlencoded())
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
  console.log(" Here we are ");
  res.render('surveyform');
});
app.get('/survey', (req, res) => {
    res.render('surveyform');
});

app.post('/survey', (req, res) => {
  const name = req.body.name;
  const location = req.body.location;
  const language = req.body.language;
  const comment = req.body.comment;
  

  const sdata = {
     name: name,
     location: location,
     language: language,
     comment: comment
   }
   res.render('result', {sdata:sdata});
});

app.post('/result', (req, res) => {
  
  res.render('surveyform');
  res.end();
});





app.listen(port, () => {
    console.log("listening to port" + port);
});
