//Générateur de mots de passe//

const generatePassword = require('generate-password');

const password = generatePassword.generate({
  length: 10,
  numbers: true,
});

console.log('Mot de passe généré :', password);
