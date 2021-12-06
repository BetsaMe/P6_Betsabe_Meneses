const http= require('http'); //importer package http de node
const app= require('./app');

// const normalizePort = val => {
//     const port = parseInt(val, 10);
  
//     if (isNaN(port)) {
//       return val;
//     }
//     if (port >= 0) {
//       return port;
//     }
//     return false;
// };

  const port = process.env.PORT || '3000';
  app.set('port', port);

  const errorHandler = error => {
    if (error.syscall !== 'listen'){
      throw error;
    }
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges.');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use.');
        process.exit(1);
        break;
      default:
        throw error;
    }
  };
  const server = http.createServer(app); //cette fonction prend comme argument la fonction qui sera appelé à chaque requete envoyée vers le serveur//

  server.on('error', errorHandler);

  // server.on('listening', () => {
  //   const address = server.address();
  //   const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  //   console.log('Listening on ' + bind);
  // });
  
  server.listen(port, () =>{ //The method creates a listener on the specified port or path //
    
    console.log('Server is listening on port'+" "+ port)
    
  });
  

