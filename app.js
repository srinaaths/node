const http = require('http')

const server = http.createServer((req, res) => {
	console.log('req incoming')
	res.statusCode = 200
	res.setHeader('Content-Type', 'text/plain')
	res.end('Hello World');
})

server.listen(8081, () => console.log('server running'))
