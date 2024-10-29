5. //Envoyer un email//


const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'votreemail@gmail.com',
    pass: 'votremotdepasse',
  },
});

const mailOptions = {
  from: 'votreemail@gmail.com',
  to: 'destinataire@example.com',
  subject: 'Email test depuis Node.js',
  text: 'Bonjour ! Ceci est un email envoyé depuis Node.js avec Nodemailer.',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Erreur :', error);
  } else {
    console.log('Email envoyé :', info.response);
  }
});
