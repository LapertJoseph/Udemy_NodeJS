const http = require('http');                           // appel du module http

const server = http.createServer((req, res) => {        // creation du server avec http.createServer qui prend deux arg req, res
    console.log(req.url, req.method, req.headers);          
    // process.exit();
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.JS Server !</h1></body>');
    res.write('</html>');

});

server.listen(3000);                                    // on définit un listener qui prend un arg:  écoute sur le port 3000lo