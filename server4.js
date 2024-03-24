const express = require("express");
const server = express();
const path = require("path");
server.use(express.static("public"));
let port = 8000;

const listeningStartedCallback = () => {
  console.log(`Szerver fut a következő porton: http://localhost:${port}`);
};

server.listen(port, listeningStartedCallback);

// Főoldal kiszolgálása
server.get("/", (req, res) => {
  console.log("Érkezett egy kérés a " + req.url);
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Rólam oldal kiszolgálása
server.get("/about", (req, res) => {
  console.log("Erre érkezett kérés:" + req.url);
  res.sendFile(path.join(__dirname, "public", "rolunk.html"));
});

// Kapcsolat oldal kiszolgálása
server.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "kapcsolat.html"));
});

// "Catch-all" útvonal a 404-es hiba kezelésére
server.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
});
