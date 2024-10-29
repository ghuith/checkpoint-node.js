//Afficher "HELLO WORLD"// 

console.log("HELLO WORLD");

//2. Créer un serveur Node.js//
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hello Node !!!!</h1>\n');
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

//3. Créer et lire un fichier//

const fs = require('fs');

// Crée un fichier "welcome.txt" avec le texte "Hello Node"
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('Fichier créé avec succès.');

  // Lis le contenu du fichier "welcome.txt"
  fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Contenu du fichier :', data);
  });
});






