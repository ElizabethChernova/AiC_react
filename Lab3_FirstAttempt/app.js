const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
const dbUri = 'mongodb://localhost:27017/myapp';
mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to database'))
    .catch(err => console.log('Error connecting to database:', err));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// API routes
const routes = require('./routes');
app.use('/api', routes);

// All other requests return the React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
