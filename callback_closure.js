function logCar(logMsg, callback){
  process.nextTick(function() {
    callback(logMsg);
	console.log(cars);
  });
}
var cars = ["Ferrari", "Porsche", "Bugatti"];
for (var idx in cars) {
  var message = "Saw a " + cars[idx];
  logCar(message,function(){
    console.log("Normal Callback: " + message);
  });
  console.log('>>'+cars[idx]);
}
for (var idx in cars){
  var message = "Saw a " + cars[idx];
  (function(msg){
    logCar(msg, function(){
	  console.log("Closure Callback: " + msg);
	});
  })(message);
}