var censor = require("censorifymaf");
console.log(censor.getCensoredWords());
console.log(censor.censor("Some very sad, bad an mad text."));
censor.addCensoredWords("gloomy");
console.log(censor.getCensoredWords());
console.log(censor.censor("A very gloomy day."));

//II. Learning Node.js
function simpleTimeout(consoleTimer){
  console.timeEnd(consoleTimer);
 }
 
 console.time("twoSecond");
 setTimeout(simpleTimeout, 2000, "twoSecond");
 console.time("oneSecond");
 setTimeout(simpleTimeout, 1000, "oneSecond");
 console.time("fiveSecond");
 setTimeout(simpleTimeout, 5000, "fiveSecond");
 console.time("50Millisecond");
 setTimeout(simpleTimeout, 50, "50Millisecond");
 
 //Listing 4.2 simple_interval.js
var x=0, y=0, z=0;
function displayValues(){
  console.log("X=%d; Y=%d; Z=%d", x, y, z);
}
function updateX(){
  x += 1;
}
function updateY(){
  y += 1;
}
function updateZ(){
  z += 1;
  displayValues()
}
//setInterval(updateX, 500);
//setInterval(updateY, 1000);
//setInterval(updateZ, 2000);

function hola() {
  console.log("hola");
}
myImmediate = setImmediate(hola);
clearImmediate(myImmediate);

//unref
console.time("tenSecond");
myInterval = setInterval(simpleTimeout, 5000,"tenSecond");
myInterval.unref();
myInterval.ref();
