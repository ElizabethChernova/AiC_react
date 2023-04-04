import React from 'react';
import { Link } from 'react-router-dom';

const BookList = ({ books, deleteBook }) => {

    return (
        <div>
            <h1>Book List</h1>
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {books.map(book => (
                    <tr key={book._id}>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>
                            <button onClick={() => deleteBook(book._id)}>Delete</button>
                            <Link to={`/edit/${book._id}`}>
                                <button>Edit</button>
                            </Link>
                            <Link to={`/detail/${book._id}`}>
                                <button>Details</button>
                            </Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <Link to="/add">
                <button>Add Book</button>
            </Link>
        </div>
    );
}

export default BookList;
