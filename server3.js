const express = require("express");
const server = express();
server.use(express.static("public"));
let port = 8080;

const listeningStartedCallback = () => {
  console.log(`Szerver fut a következő porton: http://localhost:${port}`);
};

server.listen(port, listeningStartedCallback);


server.use((req, res) => {
  res.status(404).send(`
    <html>
        <head>
          <title>404 Hiba - Az oldal nem található</title>
        </head>
        <body>
          <h1>404 Hiba</h1>
          <p>A keresett oldal nem található.</p>
          <a href="/">Vissza a főoldalra</a>
        </body>
    </html>
  `);
});