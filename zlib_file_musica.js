var zlib = require("zlib");
var gzip = zlib.createGzip();
var fs = require('fs');
var inFile = fs.createReadStream('01 White flag.mp3');
var outFile = fs.createWriteStream('01 White flag.mp3.gz');
inFile.pipe(gzip).pipe(outFile);
setTimeout(function(){
  var gunzip = zlib.createUnzip({flush:zlib.Z_FULL_FLUSH});
  var inFile = fs.createReadStream('01 White flag.mp3.gz');
  var outFile = fs.createWriteStream('01 White flag descomprimido.mp3');
  inFile.pipe(gunzip).pipe(outFile);
}, 3000);
