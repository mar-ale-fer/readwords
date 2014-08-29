bufUTF8 = new Buffer("Some UTF8.Text.\u00b6 \u30c6 \u20ac",'utf8');
console.log(bufUTF8.toString());
console.log(bufUTF8.toString('utf8', 10, 14));
var StringDecoder = require('string_decoder').StringDecoder;
var decoder = new StringDecoder('utf8');
console.log(decoder.write(bufUTF8));
console.log(decoder.write(bufUTF8));
console.log(bufUTF8[16].toString(10));
console.log(bufUTF8[16].toString(16));
console.log(bufUTF8[16].toString(16));
console.log(bufUTF8.readUInt32BE(16).toString(16));

console.log("Evaluar tamaño del buffer");
var texto = "UTF8 text \u00b6\u00b6\u00b6"
console.log(texto.length) ;

console.log(Buffer.byteLength(texto, 'utf8'));
console.log(Buffer(texto).length);
