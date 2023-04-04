import React from 'react';

const Book = ({ title, author, year }) => {
    return (
        <div>
            <h2>{author}</h2>
            <p>Автор: {title}</p>

        </div>
    );
};

export default Book;
