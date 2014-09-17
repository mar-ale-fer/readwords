fs = require('fs');
fs.watchFile("log.txt", {persistent:true, interval:5000}, function (curr, prev) {
  console.log("log.txt modified at: " + curr.mtime);
  console.log("Previous modification was: " + prev.mtime);
});