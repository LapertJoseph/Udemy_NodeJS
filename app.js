const http = require('http');                           // appel du module http

const server = http.createServer((req, res) => {        // creation du server avec http.createServer qui prend deux arg req, res
    console.log(req);
    // process.exit();
});

server.listen(3000);                                    // on définit un listener qui prend un arg:  écoute sur le port 3000