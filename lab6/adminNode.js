let express = require('express');
let app = express();
let server = require('http').createServer(app);
let mysql = require('mysql');

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/user.html');
})

app.get('/admin.html', function(req, res) {
	res.sendFile(__dirname + '/admin.html');
})
server.listen(process.env.PORT || 8888);
console.log('Server running on 8888');

let con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'game'
});

con.connect(function(err) {
	con.query("INSERT INTO quiz (q,a1,a2,a3,a4) VALUES ?", function(err, rows) {
	if (err) throw err;
	})
});

app.get('/user.html', function(req, res) {
	con.query("SELECT * FROM game.quiz", function(err, rows) {
		if (err) throw err;
		res.sendFile(__dirname + 'html');
	})
})