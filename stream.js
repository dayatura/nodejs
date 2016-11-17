var fs = require('fs');
var data = '';

//create readable stream
var readerStream = fs.createReadStream('input.txt');

//set the encoding to be utf8.
readerStream.setEncoding('UTF8');

//handle stream envents --> data end and error
readerStream.on('data', function(chunk){
	data += chunk
});

readerStream.on('end', function(){
	console.log(data);
});

readerStream.on('error', function(err){
	console.log(err.stack);
});

console.log("Program Ended.");