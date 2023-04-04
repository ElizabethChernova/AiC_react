const nodemailer = require('nodemailer');
const EmailAddress = require('./models/emailAddress');

async function sendEmails() {
    const emailAddresses = await EmailAddress.find();
    const emailList = emailAddresses.map(emailAddress => emailAddress.email_address).join(',');

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'your_email@gmail.com',
            pass: 'your_password'
        }
    });

    const message = {
        from: 'your_email@gmail.com',
        to: emailList,
        subject: 'Test Email',
        text: 'This is a test email'
    };

    transporter.sendMail(message, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log(`Email sent to ${emailList}: ${info.response}`);
        }
    });
}

sendEmails();
