var express = require('express');
var bodyParser = require('body-parser');
var router=require('./routes.js');
var session=require('express-session');


var app = express();


app.use(session({
  secret:"123456"
}))


app.use(express.static(__dirname + '/../react-client/dist'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

app.use('/',router)

//
// app.get('/items', function (req, res) {
//   items.selectAll(function(err, data) {
//     if(err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data);
//     }
//   });
// });

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
