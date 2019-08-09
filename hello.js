console.log("hello world");	// display text on screen
console.log(__filename);  //shows the file name
console.log(__dirname);   //shows the directory

function printstuff(){
	console.log("this was from setTimeout");  //this is function body
}

setTimeout(printstuff,5000);  //this is the set time out function used to time delay processing

function intervalstuff(){
	console.log("this was from set Interval");  //this is function body
}


setInterval(intervalstuff,2000); //this is the set Interval function used to start the processing at a time interval, it will not stop automatically.