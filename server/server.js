//creating a server
//the file name should be server.js otherwise it will throw error.


var http = require('http');          // including http module

function startserver(){
//the sequence should be same of the code snippet
	function onRequest(req,res) {                  // server configuration
		console.log("Request Received");
		res.writeHead(200,{"Content-Type":"text/plain"});  
		res.write("hello from our server module");
		res.end();
	}
	http.createServer(onRequest).listen(8888);  //creating server

	console.log("server has started on localhost port no 8888");

}
exports.startserver=startserver; //exporting server.js to app.js



//there is one important point about creating the server is that the server should be able to work and accept request in the processing time, the server should be held on hold for request and response.