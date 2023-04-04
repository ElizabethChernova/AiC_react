import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import BookList from './components/BookList';
import BookForm from './components/BookForm';
import BookDetail from './components/BookDetail';

function App() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('/api/getAll')
            .then(res => {
                setBooks(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    const addBook = (book) => {
        axios.post('/api/post', book)
            .then(res => {
                setBooks([...books, res.data]);
            })
            .catch(err => console.log(err));
    }

    const updateBook = (id, updatedBook) => {
        axios.patch(`/api/update/${id}`, updatedBook)
            .then(res => {
                setBooks(books.map(book => book._id === id ? res.data : book));
            })
            .catch(err => console.log(err));
    }

    const deleteBook = (id) => {
        axios.delete(`/api/delete/${id}`)
            .then(res => {
                setBooks(books.filter(book => book._id !== id));
            })
            .catch(err => console.log(err));
    }

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <BookList books={books} deleteBook={deleteBook} />
                </Route>
                <Route path="/add">
                    <BookForm addBook={addBook} />
                </Route>
                <Route path="/edit/:id">
                    <BookForm books={books} updateBook={updateBook} />
                </Route>
                <Route path="/book/:id">
                    <BookDetail books={books} />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
