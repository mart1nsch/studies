const http = require('http');
const fs = require('fs');
const url = require('url');

const port = 3005;

const server = http.createServer((req, res) => {
    const q = url.parse(req.url, true);
    let fileName = q.pathname.substring(1);

    if (fileName.includes('html')) {
        if (!fs.existsSync(fileName)) {
            fileName = '404.html';
        }
        fs.readFile(fileName, (err, data) => {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        })
    }
});

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});