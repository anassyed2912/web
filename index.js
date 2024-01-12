const http = require('http')
const fs = require ('fs');

const hostname = '127.0.0.1';
const port = 3000;
const home=fs.redadFileSync('./index.html')
const about=fs.readFileSynch('./about.html')
const contact=fs.redadFileSync('./contact.html')
const services =fs.redadFileSync('./services.html')


const server = http.createserver((req, res)=>{
    console.log(req.url)

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('home');
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
