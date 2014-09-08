//pos 2538 del libro
var fs = require('fs');
var config = {
  maxFiles: 20,
  maxConnections: 15,
  rootPath: "/webroot"
};
var configTxt = JSON.stringify(config);
var options = {encoding:'utf8', flag:'w'};
fs.writeFile('config.txt', configTxt, options, function(err) {
  if (err) {
    console.log("Config Write Failed.");
  } else {
    console.log("Config saved.");
  }
});