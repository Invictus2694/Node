// stream write and read is done asyncronously

var fs = require('fs'); //fs is a file system module.
var readableStream = fs.createReadStream('input.txt'); //creating an object of the createReadStream function.

var data =''; //initialising data variable
readableStream.setEncoding('UTF8'); //setting the read encoding(format)
readableStream.on('data',function (chunk) {
	// body...
	data +=chunk;

});
readableStream.on('end',function(){
console.log(data);	
});


//write stream 


var writeData = "hello world";
var writeableStream = fs.createWriteStream('output.txt');
writeableStream.write(writeData,'UTF8');
writeableStream.end();
writeableStream.on('finish',function(){
	console.log("write complete")
});