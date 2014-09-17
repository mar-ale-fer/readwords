fs = require('fs');
fs.rename("musica01.mp3", "musica02.mp3", function (err) {
  console.log(err ? "Rename Failed" : "File Renamed");
});
fs.rename("testDir", "renamedDir", function (err) {
  console.log( err ? "Rename Failed": "Folder Renamed");
});