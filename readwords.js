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