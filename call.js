//user 1
console.log("User 1 made a request");
setTimeout(callback,5000);


//user 2
console.log("User 2 made a request");
setTimeout(callback,5000);


//user 3
console.log("User 3 made a request");
setTimeout(callback,5000);


function callback(){
	console.log("Queried the datbase and delivered data in 5 seconds");
}

// in this program we are showing the delayed execution of code without blocking anything.