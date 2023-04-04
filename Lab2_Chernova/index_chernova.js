
const exp1 = require('express');
const momgousage = require('mongoose');
const linkMongo ="mongodb+srv://elizabethchernova:MH8oYJQ93YPuXPg8@cluster0.fqmogym.mongodb.net/email_addresses_db";
const app1 = exp1();
const parceBodyy = require('body-parser');
const routes = require('./routes');

app1.use(exp1.json());
app1.use(parceBodyy.json());
app1.use(parceBodyy.urlencoded({
    extended: true
}));

app1.use('/api', routes);
app1.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})
momgousage.connect(linkMongo);
const database = momgousage.connection;
database.once('connected', () => {
    console.log('Database Connected');
})
database.on('error', (error) => {
    console.log(error)
})









