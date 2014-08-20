var censor = require("censorifymaf");
console.log(censor.getCensoredWords());
console.log(censor.censor("Some very sad, bad an mad text."));
censor.addCensoredWords("gloomy");
console.log(censor.getCensoredWords());
console.log(censor.censor("A very gloomy day."));