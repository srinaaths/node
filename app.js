const http = require('http')

http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('hello')
}).listen(8081, () => console.log('listening to port 8081'));

console.log('hello123')