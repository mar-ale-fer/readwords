var events = require("events");

function myCallback(){
  console.log("...hola...");
}


function MyObj(){
  events.EventEmitter.call(this); //Inherit the eventEmitter in the object
}
MyObj.prototype.__proto__ = events.EventEmitter.prototype;

var myObj = new MyObj();
var myObj2 = new MyObj();

myObj.on("someEvent", myCallback);

setTimeout(
  function (){
    myObj.emit("someEvent");
  }
, 5000 );

//console.log(events.EventEmitter.listenerCount());



//console.log(MyObj.prototype);
//console.log(MyObj.prototype.__proto__);
