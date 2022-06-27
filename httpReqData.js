const http = require('http')

const server = http.createServer((req, res) => {
    let data = "";
    req.on('data', (chunk) => {
        data += chunk;
    })
    req.on('end', () => {
        console.log(JSON.parse(data));
        console.log('ending');
    })
    // for await .. of available in v>10
})