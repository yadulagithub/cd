const express = require("express");
const session = require('express-session');
let counter = 0;
app = express();
port = 8000;
app.use(express.static(__dirname +"/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));


app.get('/', (req, res) => {
    var sss = req.session ;
    if (sss.counter != null) {
        sss.counter ++;
    }
    else{
        sss.counter = 0;
    }


    //console.log("Value of name in session: ", req.session.name);
    
    res.render('index', {counter: sss.counter});
});

app.get('/reset', (req, res) => {
    var sss = req.session ;
        sss.counter = 0;
    //console.log("Value of name in session: ", req.session.name);
    
    res.redirect('/');
});

app.get('/two', (req, res) => {
    var sss = req.session ;
        sss.counter += 1;
    //console.log("Value of name in session: ", req.session.name);
    
    res.redirect('/');
});

app.listen(port, () => {
    console.log("listening to port" + port);
});