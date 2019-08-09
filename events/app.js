var events = require('events'); // events is core module

var eventEmitter = new events.EventEmitter(); //EventEmitter Class is required to use on and emit function

var ringbell = function () {
	// body...
	console.log(" Ring ring ring");
	eventEmitter.emit('bellrings','Welcome');
}
eventEmitter.on('doorOpen',ringbell); // it specify what has to happen when this happens.(trigger)
eventEmitter.on('bellrings',function(message){
	console.log(message);
})

eventEmitter.emit('doorOpen'); // it emits the action. calling of trigger.in the brackets trigger name should be written
eventEmitter.on('bellrings',function(message){
	console.log(message);
})

// the order should be on and then emit oherwise it won't work
