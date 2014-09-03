var stream = require('stream');
var util = require('util');
util.inherits(Duplexer, stream.Duplex);
function Duplexer(opt) {
  stream.Duplex.call(this, opt);
  this.data = ['aaa','bbb','ccc','aaa','bbb','ccc'];
}
Duplexer.prototype._read = function readItem(size) {
  var chunk = this.data.shift();
  if (chunk == "stop") {
    this.push(null);
  } else {
    if (chunk) {
      this.push(chunk);
    } else {
      setTimeout(readItem.bind(this),500, size);
    }
  }
};
Duplexer.prototype._write = function(data, encoding, callback) {
  this.data.push(data);
  callback();
};
var d = new Duplexer();
d.on('data', function(chunk) {
  console.log('read: ', chunk.toString());
});
d.on('end', function() {
  console.log('Message Complete');
});
d.write("I think, ");
d.write("therefore ");
d.write("I am.");
d.write("Rene Descartes");
bbb();
bbb();
bbb();
bbb();

setTimeout(aaa('stop'),10000);
setTimeout(bbb(),300);
setTimeout(bbb(),600);
setTimeout(bbb(),900);
setTimeout(bbb(),1200);
setTimeout(bbb(),1500);
setTimeout(bbb(),2000);

//setInterval(bbb(),1000);
//var myvar = setInterval(function(){ bbb();}, 300);
//setTimeout(aaa('222'),2000);
//setTimeout(aaa('333'),3000);


function aaa(texto) {
  d.write(texto);
}

function bbb() {
  //d.write('bbb');
  //console.log('ddd');
  d.data.push('ddd');
}