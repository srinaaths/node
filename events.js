const EventEmitter = require('events')

const eventEmitter = new EventEmitter();


eventEmitter.on('hi', () => console.log('listened to hi'));

eventEmitter.emit('hi')

eventEmitter.on('name', name => console.log(name))

eventEmitter.emit('name', 'sri')

/*
EventEmitter - core module of node

EventEmitter is a class - container for properties and methods

create an object for this class

emit - passing a signal - raised an event

listener - needed to listen to the event - on - name of the event and the callback function

*/
