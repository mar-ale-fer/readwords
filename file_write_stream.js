var fs = require('fs');
var grains = ['wheat', 'rice', 'oats'];
var options = { encoding: 'utf8', flag: 'w' };
var fileWriteStream = fs.createWriteStream("grains.txt", options); //stream de escritura
fileWriteStream.on("close",function() {
  console.log("File Closed.");
});
while (grains.length) {
  var data = grains.pop() + " ";
  fileWriteStream.write(data);
  console.log("Wrote: %s", data);
}
fileWriteStream.end();