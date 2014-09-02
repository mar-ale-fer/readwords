var numbers = new Buffer("123456789");
console.log(numbers);
console.log(numbers.toString());
var slice = numbers.slice(3,6); //start 3; end 6; length 6-3 = 3
console.log(slice.toString());
slice[0] = '#'.charCodeAt(0);
console.log(slice[0].toString(16)); //En hexa
console.log(slice[0].toString()); //En decimal, ascci
slice[slice.length-1] = '#'.charCodeAt(0); //charCodeAt(posicion)
console.log(slice.toString());
console.log(numbers.toString());