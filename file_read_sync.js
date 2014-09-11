var fs = require('fs');
fd = fs.openSync('veggie.txt', 'r');
var veggies = "";
do {
  var buf = new Buffer(5);
  buf.fill();
  var bytes = fs.readSync(fd,buf,null,5,null); //fd,buffer,desplazamiento en el buffer, cant a leer, posicion en el archivo para comenzar a leer
  console.log("read  %s %dbytes",buf, bytes);
  veggies += buf.toString();
} while (bytes > 0);
fs.closeSync(fd);
console.log("Veggies: " + veggies);