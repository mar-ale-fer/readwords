fs = require('fs');
fs.rmdir("./data/folderA/folderB/folderD", function (err) {
  fs.rmdir("./data/folderA/folderB", function (err) {
    fs.rmdir("./data/folderA/Maf", function (err) {
	  fs.rmdir("./data/folderA", function (err) {
	  });
	});
  });
});
