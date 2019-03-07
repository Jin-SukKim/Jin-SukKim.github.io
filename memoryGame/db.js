let express = require('express');
let app = express();
let http = require('http');
let mysql = require('mysql');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded([extended: true]));

app.get('/', function(req, res) {
   res.sendFile(__dirname + '/game.html');
})

app.get('/summary.html', function(req, res) {
   res.sendFile(__dirname + '/leaderBoard.html');
})

let db = mysql.createPool({
    host: 'localhost',
	user: 'root',
	password: '',
	database: 'quiz'
})

db.getConnection(function(err, conn) {
   app.post('/scores', function(req, res) {
      console.log(req.body.inputname);
      console.log(req.body.userscore);

      let sql = "INSERT INTO xxxx.users (name, score) VALUES ('" + req.body.inputname + "','" + req.body.userscore + "')";
      db.query(sql, function (err, result) { 
         if(err) {
            throw err;
         } else {
            console.log("data added");
         }
      })
      res.redirect('/leaderBoard.html');
      res.end();
   })
})

app.get('/leaderBoard.html', function(req, res) {
   db.query("SELECT * FROM xxx.users", function(err, rows) {
      if (err) throw err;
      res.sendFile(__dirname + 'html');
   })
})

app.listen(3000);