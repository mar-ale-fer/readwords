var stream = require('stream');
var util = require('util');
util.inherits(Answers, stream.Readable);
function Answers(opt) {
  stream.Readable.call(this, opt);
  this.quotes2 = ["yes", "no", "maybe"];
  this._index = 0;
}

Answers.prototype._read = function() {
  if (this._index > this.quotes2.length) {
    this.push(null);
  } else {
	this.push(this.quotes2[this._index]);
	this._index +=1;
  }
};

var r = new Answers();
console.log("Direct read: "+ r.read().toString());
r.on('data', function(data){
  console.log("Callback read: " + data.toString());
});
r.on('end', function(data) {
  console.log("No more answers.");
});
