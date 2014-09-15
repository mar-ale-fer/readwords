fs = require('fs');
fs.mkdir("./data", function (err) {
  fs.mkdir("./data/folderA", function (err) {
    fs.mkdir("./data/folderA/folderB", function (err) {
	  fs.mkdir("./data/folderA/folderB/folderD", function (err) {
	    fs.mkdir("./data/folderA/Maf", function (err) {
		});
      });
	});
  });
});  