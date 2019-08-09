/*function relay() {
	// body...
	console.log("This is relay function");
}
function longjump() {
	// body...
	console.log("This is the longjump function which is timeouted by timeout function.");
}

module.exports.relay = relay;  //the first relay belong to the module and the second relay belongs to the function
module.exports.longjump = longjump; // if this line of code is not written then this function will not be exported to the parent module.
*/


// the above code can be minimised by using the following code by using module.export object.
module.exports = {
	relay: function(){ //passing function as a value.
		console.log("this is the relay function");
	},
	longjump: function(){ //passing function as a value.
		console.log("this is the long jump function");
	}
}