const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const momgousage = require("mongoose");
const linkMongo ="mongodb+srv://elizabethchernova:MH8oYJQ93YPuXPg8@cluster0.fqmogym.mongodb.net/email_addresses_db";

// Підключення до бази даних
mongoose.connect(linkMongo);
const database = momgousage.connection;
database.once('connected', () => {
    console.log('Database Connected');
})
database.on('error', (error) => {
    console.log(error)
})
// Створення схеми для колекції email_addresses
const Schema = mongoose.Schema;
const EmailAddressSchema = new Schema({
    surname: String,
    first_name: String,
    middle_name: String,
    email_address: String
});
const EmailAddress = mongoose.model('EmailAddress', EmailAddressSchema);

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Отримання всіх email-адрес з бази даних
app.get('/api/email_addresses', async (req, res) => {
    try {
        const emailAddresses = await EmailAddress.find({});
        res.send(emailAddresses);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

// Додавання нової email-адреси у базу даних
app.post('/api/email_addresses', async (req, res) => {
    console.log(req.body);
    const emailAddress = new EmailAddress(req.body);

    try {
        const saveData = await emailAddress.save();
        res.status(200).json(saveData);
        res.send(emailAddress)
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});


// Вилучення email-адреси з бази даних
app.delete('/api/email_addresses/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await EmailAddress.deleteOne({ _id: id });

        if (result.deletedCount === 0) {
            res.status(404).send({ message: 'EmailAddress not found' });
        } else {
            res.send({ message: 'EmailAddress deleted successfully' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

// Редагування існуюч

app.put('/api/email_addresses/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const emailAddress = await EmailAddress.findOne({ _id: id });
        if (!emailAddress) {
            res.status(404).send({ message: 'EmailAddress not found' });
            return;
        }

        emailAddress.surname = req.body.surname || emailAddress.surname;
        emailAddress.first_name = req.body.first_name || emailAddress.first_name;
        emailAddress.middle_name = req.body.middle_name || emailAddress.middle_name;
        emailAddress.email_address = req.body.email_address || emailAddress.email_address;

        const result = await emailAddress.save();
        res.send(result);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Server listening at http://localhost: ${port}`);
        });

