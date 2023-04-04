
const exp1 = require('express');
const router = exp1.Router()
module.exports = router;
const Book = require('./Book');

// GET all books
router.get('/books', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET a specific book
router.get('/books/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) throw new Error('Book not found');
        res.json(book);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// CREATE a new book
router.post('/books', async (req, res) => {
    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        year: req.body.year
    });

    try {
        const newBook = await book.save();
        res.status(201).json(newBook);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// UPDATE a book
router.patch('/books/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) throw new Error('Book not found');

        if (req.body.title) book.title = req.body.title;
        if (req.body.author) book.author = req.body.author;
        if (req.body.genre) book.genre = req.body.genre;
        if (req.body.year) book.year = req.body.year;

        const updatedBook = await book.save();
        res.json(updatedBook);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE a book
router.delete('/books/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) throw new Error('Book not found');

        await book.remove();
        res.json({ message: 'Book deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
