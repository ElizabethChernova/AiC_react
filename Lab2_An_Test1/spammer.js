module.exports = async function Spammer(emails,subject,text) {
    console.log(emails);
    let nodemailer=require("nodemailer");
    let transporter = nodemailer.createTransport({
        host: "smtp-mail.outlook.com", // hostname
        secureConnection: false, // TLS requires secureConnection to be false
        port: 587, // port for secure SMTP
        tls: {
            ciphers:'SSLv3'
        },
        auth: {
            user: "yelyzaveta.chernova@ukma.edu.ua",
            pass: "Red2908AnD"
        }
    });
    for ( let i = 0; i < emails.length; i ++ ) {
        let result =  await transporter.sendMail({
            from: 'yelyzaveta.chernova@ukma.edu.ua',
            to: emails[i],
            subject: subject,
            text: text

        });
    }
}
