import React from 'react';
import { Link } from 'react-router-dom';

const BookList = ({ books, deleteBook }) => {

    return (
        <div>
            <h1>Book List</h1>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Year</th>
                </tr>
                </thead>
                <tbody>
                {books.map(book => (
                    <tr key={book._id}>
                        <td>{book.name}</td>
                        <td>{book.year_of_publication}</td>
                        <td>
                            <button onClick={() => deleteBook(book._id)}>Delete</button>


                        </td>
                    </tr>
                ))}

                </tbody>
            </table>
            <Link to="/adminApp/add">
                <button>Add Book</button>
            </Link>
            <Link to={`/`}>
                <button>Exit</button>
            </Link>
        </div>
    );
}

export default BookList;
