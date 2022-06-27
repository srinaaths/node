const EventEmitter = require('events')

const eventEmitter = new EventEmitter();


eventEmitter.on('hi', () => console.log('listened to hi'));

eventEmitter.emit('hi')

eventEmitter.on('name', name => console.log(name))

eventEmitter.emit('name', 'sri')