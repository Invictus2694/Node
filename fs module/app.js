var fs = require('fs');
//read the data asyncronously

fs.readFile('input.txt',function (err,data) {
	// body... 
	if(err)
	{
		console.log(err);
	}
	else{
		console.log("async data is "+data.toString());
	}
});

//read the data syncronously
//in sync file read the program flow stops untill the data is completly read,
//in async file read the program flow don't stop to read the file.

var data = fs.readFileSync('input.txt');
console.log("Sync data is "+data.toString());
console.log("This is the end");