const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('start', () => {
    console.log("Martin");
});

eventEmitter.emit('start'); //Dispara o evento ali em cima