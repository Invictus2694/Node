// use of build-in modules(http module)

// creation of server

var http = require('http');
http.createServer(function(request,response){ //here function is an annoynmous function with two objects requset and reponse.
	response.writeHead(200,{"Content-Type":"text/plain"}); //creation of write head with 200 status and object as Content-Type
	response.write("Hello world");
	response.end();
	
}).listen(8888);


//create server is a http module function and the call back function is a call back function.