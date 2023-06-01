const express = require('express');
const app = express();
const servers = [
  { port: 3000, message: 'Hello from Server 1!' },
  { port: 4000, message: 'Hello from Server 2!' },
  { port: 5000, message: 'Hello from Server 3!' }
];

servers.forEach(server => {
  const serverApp = express();

  serverApp.get('/', (req, res) => {
    res.send(server.message);
  });

  serverApp.listen(server.port, () => {
    console.log(`Server ${server.port} is listening at http://localhost:${server.port}`);
  });
});
