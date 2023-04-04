const express = require('express');
const app = express();
const port = 3001;

// Дані про книги в масиві
const books = [
    {
        author: 'Іванов',
        title: 'I am crazy'
    },
    {
        author: 'Petrov',
        title: 'Get off me'
    },
    {
        author: 'Galamaga',
        title: 'miaoo'
    }
];

// Запит на отримання списку книг з масиву
app.get('/books', (req, res) => {
    res.send(books);
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});