const http = require("http"); // appel du module http
const routes = require('./routes') // import du fichier route pour l'utiliser dans le fichier app

// creation du server avec http.createServer qui prend deux arg req, res
const server = http.createServer(routes);

server.listen(3000); // on définit un listener qui prend un arg:  écoute sur le port 3000lo
