import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const BookForm = ({ books, addBook, updateBook }) => {
    const { id } = useParams();
    const history = useHistory();
    const [book, setBook] = useState({ name: '', year_of_publication: '' });

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

        history.push('/adminApp');
    };

    return (
        <div>
            <h1>{id ? 'Edit Book' : 'Add Book'}</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" name="name" value={book.name} onChange={handleInputChange} />
                </div>
                <div>
                    <label>Year:</label>
                    <input type="text" name="year_of_publication" value={book.year_of_publication} onChange={handleInputChange} />
                </div>
                <button type="submit">{id ? 'Update' : 'Add'}</button>
            </form>
        </div>
    );
}

export default BookForm;
