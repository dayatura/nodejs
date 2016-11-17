var events = require('events');
var eventEmitter = new events.EventEmitter();

//listener #1
var listner1 = function listner1() {
	console.log('listner1 excuted');
}

var listner2 = function listner2() {
	console.log('listner2 excuted');
}

//bind the connection envent with the listner1
eventEmitter.addListener('connection', listner1);

//bind the connection event with the listner 2
eventEmitter.on('connection', listner2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + "listner(s) listenig to connection");

//fire the connection
eventEmitter.emit('connection');

//remove the binding of listner1 function
eventEmitter.removeListener('connection', listner1);
console.log("listner1 will not listen now");

eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + "listener(s) listening to connection.");

console.log("program ended.");

