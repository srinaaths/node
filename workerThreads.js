/*
Worker threads
kind of like web workers or thread in other languages
js - single threaded
blocking the event loop
node can do multiple things when it comes to I/O processes
Clusters were used - offloads cpu - spread workload across multiple processes
workers - lightweight and better at sharing data
*/

const {Worker, isMainThread, parentPort} = require('worker_threads')

if(isMainThread) {
    const worker = new Worker(__filename);
    worker.on('message', (msg) => {
        console.log(msg);
    })
}
else {
    parentPort.postMessage('hello world')
}