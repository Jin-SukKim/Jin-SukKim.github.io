let express = require("express");
let app = express();
let port = process.env.PORT || 8080;
let serverUrl = "127.0.0.1";
let moment = require('moment');
let date = moment().format();
app.get("/", function(req, res) {
  res.send(date);
});
app.listen(port);
console.log('listening...');