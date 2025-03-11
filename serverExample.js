const api = require('http');
const path = require('path')
const fs = require('fs');
const PORT = 9090;
// create a server
const server = api.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/user') {
        const user = [{id: 1, name: 'vijay'}]
        res.write(JSON.stringify(user));
        res.end();
    }
    if (req.method === 'GET' && req.url === '/demo') {
        const fileName = path.join(__dirname, 'files', 'Demo.html')
        fs.readFile(fileName, (err, data) => {
            if(err) {
                res.writeHead(404, {"content-type": 'pain/text'});
                res.end();
            } else {
                res.write(data);
                res.end();
            }
        })
    }
    if (req.method === 'GET' && req.url === '/login') {
        const fileName = path.join(__dirname, 'files', 'login.html')
        const reader = fs.createReadStream(fileName);
        // read the file chuck by chunk
        reader.on('data', (chunk) => {
            res.write(chunk);
            res.end();
        })
        
        reader.on('end', () => {
            res.end();
        })

        reader.on('error', () => {
            res.writeHead(404, {"content-type": 'pain/text'});
            res.end();
        })
    }

    // image API
    if (req.method === 'GET' && req.url === '/photo') {
        const fileName = path.join(__dirname, 'files', 'image.png');
        const reader = fs.createReadStream(fileName);
        //reader pipe
        reader.pipe(res);
    }
});

server.listen((PORT), (err)=> {
    if(!err) {
        console.log(`Server is running on port ${PORT}...`);
    }
})

