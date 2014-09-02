buf256 = new Buffer(256);
buf256.fill('u');
console.log(buf256);
buf256.write("add some text or add other thing");
console.log(buf256.toString());
for (var i = 1; i<=9; i++) {
  buf256.fill('u');
  buf256.write("1234 6789", i-1, i);
  console.log(buf256.toString());
}
buf256[18] = 43;
console.log(buf256.toString());