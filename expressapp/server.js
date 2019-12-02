const express = require("express");

app = express();
port = 8000;


app.use(express.static(__dirname +"/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
  console.log(" Here we are ");
});
app.get('/cats', (req, res) => {
    res.render('cats');
});
app.get('/cars', (req, res) => {
  res.render('cars');
});
app.get('/new', (req, res) => {
  res.render('new');
});


app.listen(port, () => {
    console.log("listening to port" + port);
});
