var events = require('events');
var eventEmitter = new events.EventEmitter();

var ringbell = function () {
	// body...
	console.log("RING RING RING");
	setTimeout(dooropen,2000);
}
var dooropen =function(){
	eventEmitter.emit('dooropen','WELCOME');
}

eventEmitter.on('ringbell',ringbell);
eventEmitter.on('dooropen',function(message){
	console.log(message);
});
eventEmitter.emit('ringbell');