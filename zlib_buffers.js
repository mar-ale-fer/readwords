var zlib = require("zlib");
var input = '...............text__________----=';
zlib.deflate(input, function(err, buffer) {
  if (!err) {
	//en buffer recibe input comprimido
    console.log("deflate (%s): ", buffer.length, buffer.toString('base64'));
	//lo descomprimo
	zlib.inflate(buffer, function(err, buffer) {
	  if (!err) {
	    console.log("inflate (%s): ", buffer.length, buffer.toString());
	  }
	});
	//Lo descomprimo
	zlib.unzip(buffer, function(err, buffer) {
	  if (!err) {
	    console.log("unzip deflate (%s): ", buffer.length, buffer.toString());
	  }
	});
  }
});
	
