var five = require("johnny-five");
var express = require('express');
var bodyParser = require('body-parser');
var handlebars = require("handlebars");
var exphbs = require('express-handlebars');
var app = express();


app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));


app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));


var board = new five.Board();
var counter = 1;

board.on("ready", function() {

  var ledRed = new five.Led(13);
  var ledGreen = new five.Led(12);
  var ledOrange = new five.Led(11);

  // "blink" the led in 500ms on-off phase periods
  // ledRed.blink(500);
  // ledGreen.blink(500);
  // ledOrange.blink(500);
  //
  //////////////////////////////////////////////////////////////////////////////
  app.get("/onRed", function(req, res){
    ledRed.on();
    res.render("home");
  });
  app.get("/offRed", function(req, res) {
    ledRed.off();
    res.render("home");
  });
////////////////////////////////////////////////////////////////////////////////
app.get("/onGreen", function(req, res){
  ledGreen.on();
  res.render("home");
})
app.get("/offGreen", function(req, res){
  ledGreen.off();
  res.render("home");
})
////////////////////////////////////////////////////////////////////////////////
app.get("/onOrange", function(req, res){
  ledOrange.on();
  res.render("home");
})
app.get("/OffOrange", function(req, res){
  ledOrange.off();
  res.render("home")
})
////////////////////////////////////////////////////////////////////////////////
  app.set('port', (process.env.PORT || 5000));
  //start the app like this:
  app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
  });


});
