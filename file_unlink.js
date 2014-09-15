fs = require('fs');
fs.unlink('Abraham.mp3', function(err) {
  console.log(err ? "File Delete Failed" : "File Deleted");
});
fs.truncate("LogTruncar.txt",500, function(err) { //archivo, bytes, callback
  console.log(err ? "File Truncate Failed" : "File Truncated");
});