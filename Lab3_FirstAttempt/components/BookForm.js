import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const BookForm = ({ books, addBook, updateBook }) => {
    const { id } = useParams();
    const history = useHistory();
    const [book, setBook] = useState({ title: '', author: '' });

    useEffect(() => {
        if (id) {
            const selectedBook = books.find(book => book._id === id);
            setBook(selectedBook);
        }
    }, [id, books]);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setBook({ ...book, [name]: value });
    };

    const handleSubmit = event => {
        event.preventDefault();

        if (id) {
            updateBook(id, book);
        } else {
            addBook(book);
        }

        history.push('/');
    };

    return (
        <div>
            <h1>{id ? 'Edit Book' : 'Add Book'}</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" name="title" value={book.title} onChange={handleInputChange} />
                </div>
                <div>
                    <label>Author:</label>
                    <input type="text" name="author" value={book.author} onChange={handleInputChange} />
                </div>
                <button type="submit">{id ? 'Update' : 'Add'}</button>
            </form>
        </div>
    );
}

export default BookForm;
