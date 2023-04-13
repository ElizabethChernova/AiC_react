import React from 'react';
import Book from './Book';
import {Link} from "react-router-dom";

function ReadOnlyBookList({ books }) {
    return (
        <div>
            {books.map(book => (
                <tr key={book.id}>
                    <td>{book.name}</td>
                    <td>{book.year_of_publication}</td>

                </tr>

            ))}
            <Link to={`/admin`}>
                <button>Admin</button>
            </Link>
        </div>
    );
}

export default ReadOnlyBookList;