var http = require('http');

//option to be used by request
var option = {
	host: 'localhost',
	port: '8081',
	path: '/index.html'
};

//callback function is used to deal with response
var callback = function (response) {
	// countinuosly update stream with data
	var body = '';
	
	response.on('data', function(data){
		body += data;
	});

	response.on('end', function(){
		console.log(body);
	});
}

//make request to the server
var req = http.request(option, callback);
req.end();

