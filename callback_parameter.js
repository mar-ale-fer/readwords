var events = require('events');
function CarShow() {
  events.EventEmitter.call(this);
  this.seeCar = function(car) {
    this.emit('sawCar', car);
  };
}
CarShow.prototype.__proto__ = events.EventEmitter.prototype;
var show = new CarShow();
function logCar(car) {
  console.log("Saw a " + car);
}
function logColorCar(car, color) {
  console.log("Saw a %s %s", color, car);
}
show.on("sawCar", logCar);
show.on("sawCar", function(car){
  var colors = ['red','blue','black'];
  var color = colors[Math.floor(Math.random()*3)];
  logColorCar(car, color);
});
show.seeCar("Ferrari");
show.seeCar("Bugatti");
show.seeCar("Lamborghini");
show.seeCar("Aston Martin");
