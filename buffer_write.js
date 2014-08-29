buf256 = new Buffer(256);
buf256.fill(0);
buf256.write("add some text or add other thing");
console.log(buf256.toString());
for (var i = 1; i<=9; i++) {
  buf256.write("1234 6789", 5, i);
  console.log(buf256.toString());
}
buf256[18] = 43;
console.log(buf256.toString());