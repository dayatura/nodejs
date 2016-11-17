var express = require('express');
var app = express();

//this responds with hello worl on the homepage
app.get('/', function (req, res) {
	console.log("Got a GET request fot the homepage");
	res.send('Hello GET');
})

//this responds with hello worl on the homepage
app.post('/', function (req, res) {
	console.log("Got a POST request fot the homepage");
	res.send('Hello post');
})

//this responds with hello worl on the homepage
app.delete('/del_user', function (req, res) {
	console.log("Got a DELETE request for deleteuser");
	res.send('Hello DELETE');
})

//this responds with hello worl on the homepage
app.get('/list_user', function (req, res) {
	console.log("Got a GET request for list_user");
	res.send('Page Listing');
})

//this responds with hello worl on the homepage
app.get('/ab*cd', function (req, res) {
	console.log("Got a GET request for ab*cd");
	res.send('Page pattern match');
})

var server = app.listen(8081, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log("Example page listening at http://%s:%s", host,  port);
})
