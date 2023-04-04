import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BookDetail = () => {
    const { id } = useParams();
    const [book, setBook] = useState({});

    useEffect(() => {
        axios.get(`/api/getOne/${id}`)
            .then(res => {
                setBook(res.data);
            })
            .catch(err => console.log(err));
    }, [id]);

    return (
        <div>
            <h2>{book.title}</h2>
            <p><strong>Author: </strong>{book.author}</p>
            <p><strong>Genre: </strong>{book.genre}</p>
            <p><strong>Description: </strong>{book.description}</p>
        </div>
    );
}

export default BookDetail;
