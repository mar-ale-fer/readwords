var stream = require("stream");
var util = require("util");
util.inherits(JSONObjectStream, stream.Transform);

function JSONObjectStream (opt) {
  stream.Transform.call(this, opt);
};
JSONObjectStream.prototype._transform = function (data, encoding, callback) {
  object = data ? JSON.parse(data.toString()) : "";
  object.handled = true;
  
  this.emit("object", object);
  this.push(JSON.stringify(object));
  callback();
};
JSONObjectStream.prototype._flush = function(cb) {
  cb();
};
var tc = new JSONObjectStream();
tc.on("object", function(object) {
  console.log("Name: %s", object.name);
  console.log("Color: %s", object.color);
  console.log("handled: %s", object.handled);
});
tc.on("data", function(data) {
  console.log("Data: %s", data.toString());
});
tc.write('{"name":"Carolinus", "color": "Green"}');
tc.write('{"name":"Solarius", "color": "Blue"}');
tc.write('{"name":"Cesar", "color":"Cesareo"}');
tc.write('{"name":"Ommadon", "color": "Red"}');
  
