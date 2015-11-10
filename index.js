var http = require('http');
var dispatch = require('dispatch');


var server = http.createServer(
				
				dispatch({
					'/': function(request, response){


						console.log('visiting %s', request.url);
						response.end('This is the root.');

					}


				})




			);

server.listen(8081, function(){
	console.log('server running on 127.0.0.1:8081');

});