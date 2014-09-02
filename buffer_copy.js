var alphabet = new Buffer('abcdefghijklmnopqrstuvwxyz');
                           01234567890123456789012345
console.log(alphabet.toString());
//copy full buffer
var blank = new Buffer(26);
blank.fill();
console.log("Blank: "+blank.toString());
alphabet.copy(blank);
console.log(" Blank: "+blank.toString());
// copy part of buffer
var dashes = new Buffer(26);
dashes.fill('-');
console.log("Dashes: "+dashes.toString());
alphabet.copy(dashes, 5, 10, 15); //(destino,inicio_destino,inicio_origen,fin_origen)
console.log("Dashes: "+dashes.toString());
var dots = new Buffer('--------------------------');
console.log("Dots: "+dots);
dots.fill('.');
console.log("Dots: "+dots.toString());
for (var i=0; i < dots.length; i++){
  if ( !(i % 2)) { dots[i] = alphabet[i];}
}
console.log("dots: "+dots.toString());
