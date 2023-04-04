
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const mongoose = require('mongoose');
const routes = require('./routes/routes');

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use("/emails",routes);


app.listen(8888, () => {
    console.log(`Server runs at ${8888}`)
})
mongoose.connect("mongodb+srv://elizabethchernova:MH8oYJQ93YPuXPg8@cluster0.fqmogym.mongodb.net/test")
const database = mongoose.connection
database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Connected to MongoDB');
})


