var fs = require('fs');
var fruitBowl = ['apple', 'orange', 'banana', 'grapes','manzana','naranja','banana','uva'];
function writeFruit(fd) {
  if (fruitBowl.length) {
    var fruit = fruitBowl.pop() + " ";
	fs.write(fd, fruit, null, null, function(err, bytes) {
	  if (err) {
	    console.log("File Write Failed.");
	  } else {
	    console.log("Wrote: %s %dbytes", fruit, bytes);
		writeFruit(fd); //vuelve a escribir en el archivo
	  }
	});
  } else {
    fs.close(fd);
  }
}

fs.open('fruit.txt', 'w', function (err, fd) {
  writeFruit(fd);
});

