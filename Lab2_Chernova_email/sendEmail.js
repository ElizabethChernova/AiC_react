// const nodemailer = require('nodemailer');
// const EmailAddress = require('./emailAddress');
//
// async function sendEmails() {
//     const emailAddresses = await EmailAddress.find();
//     const emailList = emailAddresses.map(emailAddress => emailAddress.email_address).join(',');
//
//     const transporter = nodemailer.createTransport({
//         host: "smtp-mail.outlook.com", // hostname
//         secureConnection: false, // TLS requires secureConnection to be false
//         port: 587, // port for secure SMTP
//         tls: {
//             ciphers:'SSLv3'
//         },
//         auth: {
//             user: 'yelyzaveta.chernova@ukma.edu.ua',
//             pass: 'Red2908AnD'
//         }
//     });
//
//     const message = {
//         from: 'your_email@gmail.com',
//         to: emailList,
//         subject: 'Test Email',
//         text: 'This is a test email'
//     };
//
//     transporter.sendMail(message, (error, info) => {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log(`Email sent to ${emailList}: ${info.response}`);
//         }
//     });
// }
//
// sendEmails();
