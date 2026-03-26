const EventEmitter = require("events");

const emitter = new EventEmitter();
// emitter.on("greet", ()=> {
//     console.log("hello mallu");
// });

// emitter.emit("greet");

//you can also pass arguments while emitting.

emitter.on("greet", (username) => {
    console.log(`hello ${username}`);
});

emitter.emit("greet","Mallu");