const http = require('http');
const fs = require('fs');
const port = 3003;

const server = http.createServer((req, res) => {
    const urlInfo = require(`url`).parse(req.url, true);
    const name = urlInfo.query.name;

    if(!name) {
        fs.readFile('index.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
    } else {
        const nameWithLine = name + '\r\n';
        
        fs.appendFile('arquivo.txt', nameWithLine, (err, data) => {
            res.writeHead(302, {
                location: '/'
            });
            return res.end();
        });
    }
});

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});