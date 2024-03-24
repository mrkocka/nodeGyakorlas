const express = require("express");
const server = express();
let port = 8000;

const listeningStartedCallback = () => {
  console.log(`Szerver fut a következő porton: http://localhost:${port}`);
};

server.listen(port, listeningStartedCallback);

//Ez a fő oldal

server.get("/", (request, response) => {
  console.log("Érkezett egy kérés a" + request.url);
  response.send(`
  <html>
      <head>
        <title>Programozáskarrier</title>
      </head>
      <body>
        <h1>Hello</h1>
        <p>Üdv a főoldalon!</p>
        <a href="/about">Rólam</a>
      </body>
  </html>
  `);
});

server.get("/about", (request, response) => {
  console.log("Érkezett egy kérés a" + request.url);
  response.send(`
  <html>
      <head>
        <title>Programozáskarrier</title>
      </head>
      <body>
        <h1>Üdv</h1>
        <p>Ez a rólam oldal!</p>
        <a href="/">Főoldal</a>
      </body>
  </html>
  `);
});

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
