const logEvents = require("./logEvents");
const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

/* initialite object */
const myEmitter = new MyEmitter();

/* add listener for the log event */
myEmitter.on("log", (msg) => logEvents(msg));

setTimeout(() => {
    /* emit event */
	myEmitter.emit("log", "Log event emitted!", "login succed");
}, 2000);
