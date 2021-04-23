const http = require('http');
const app=require('./app');
const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://nour-12:nour123@cluster0.squru.mongodb.net/nour-12?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const normalizePort= val => {
    const port= parseInt(val,10);
    
  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
const port=normalizePort(process.env.PORT || 3000)
app.set('port',port);

const errorHandler = error =>
{ 
 if (error.syscall !== 'listen') 
    { throw error; } 

 const address = server.address(); 
 const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port; 

 switch (error.code) 
   { case 'EACCES': console.error(bind + ' requires elevated privileges.'); process.exit(1); break; 
     case 'EADDRINUSE': console.error(bind + ' is already in use.'); process.exit(1); break; 
     default: throw error; 
    } 

}
const server=http.createServer(app)
server.on ( "erreur" , errorHandler);  
server.on('listening', () => {
    const address = server.address(); 
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port; 
    console.log('listening on ' + bind); }); 

server.listen(port);