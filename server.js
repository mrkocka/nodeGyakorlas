const http = require("http");
const port = 8000;

const htmlValasz = (req, res) => {
  console.log("htmlValasz választ küldtem", req.url);
  res.end(`
    <html>
       <html lang="hu">
       <head>
           <meta charset="UTF-8">
           <title>Hello, Node!</title>
        </head>
        <body>
            <h1>Hello!</h1>
            <p>Ez az én első Node szerverem!</p>
        </body>
    </html>
    `);
};

const server = http.createServer(htmlValasz);

server.listen(port, () => {
  console.log(`Szerver fut a következő porton: http://localhost:${port}`);
});