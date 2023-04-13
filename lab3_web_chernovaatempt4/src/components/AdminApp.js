import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import BookList from "./BookList";
import BookForm from "./BookForm";
import ClientApp from "./ClientApp";

function AdminApp() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('/books')
            .then(res => {
                setBooks(res.data);
            })
            .catch(err => console.log(err));
    }, []);


    const addBook = (book) => {

        axios.post('/books', book)
            .then(res => {
                setBooks([...books, res.data]);
            })
            .catch(err => console.log(err));
    }

    const updateBook = (id, updatedBook) => {
        axios.patch(`/books/${id}`, updatedBook)
            .then(res => {
                setBooks(books.map(book => book._id === id ? res.data : book));
            })
            .catch(err => console.log(err));
    }

    const deleteBook = (id) => {
        axios.delete(`/books/${id}`)
            .then(res => {
                setBooks(books.filter(book => book._id !== id));
            })
            .catch(err => console.log(err));
    }

    return (
        <Router>
            <Switch>
                <Route exact path="/adminApp">
                    <BookList books={books} deleteBook={deleteBook} />
                </Route>

                <Route path="/adminApp/add">
                    <BookForm addBook={addBook} />
                </Route>
                <Route path="/adminApp/edit/:id">
                    <BookForm books={books} updateBook={updateBook} />
                </Route>

                <Route path="/">
                    <ClientApp/>
                </Route>
            </Switch>
        </Router>
    );
}

export default  AdminApp ;