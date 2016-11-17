var http = require("http");

http.createServer(function (request, response) {

	// send the HTTP header
	// HTTP status: 200 : OK
	//content type: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});

	//send the response body as "Hello World"
	response.end('Hello World\n');
}).listen(8081);

// console will print the message
console.log('Server runnning at http://127.0.0.1:8081/');