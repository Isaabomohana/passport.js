var express = require('express')
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var path = require('path');
var app = express();

app.use(express.static('public'))
app.use(express.static('views'))
app.use(express.static(path.join(__dirname, 'public')))



var exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'nav'}));
app.set('view engine', 'handlebars');


app.get('/', function (req, res) {
  res.render('index')
})

app.get('/login', function (req, res) {
  res.render('login')
})

app.listen(4000, function () {
  console.log('Example app listening on port 4000!')
})
