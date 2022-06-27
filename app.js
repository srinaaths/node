const http = require('http')

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain')
	res.end('hello')
})

server.listen(8081, () => console.log('listening to port'));