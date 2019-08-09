// piping is a mechanism in which we read the data from the source and write in the desination without having to manage anything between.


var fs = require('fs');
var readableStream = fs.createReadStream('in.txt');
var writeableStream = fs.createWriteStream('out.txt');

readableStream.pipe(writeableStream); //writing data using pipes.