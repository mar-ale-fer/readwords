var http = require('http');
var options = {
  hostname: 'localhost',
  path: '/otrodocumento.html',
  port: '8080',
  method: 'GET'
};
var req =  http.request(options, function (response){
  var str = '';
  response.on('data', function (chunk) {
    str += chunk;
	console.log(chunk);
  });
  response.on('end', function() {
    console.log(str);
  });
});
req.end();