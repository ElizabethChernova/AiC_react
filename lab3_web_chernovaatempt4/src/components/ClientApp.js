import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import ReadOnlyBookList from "./ReadOnlyBookList";
import AdminApp from "./AdminApp";
import LoginPage from "../LoginPage";

axios.defaults.baseURL = 'http://localhost:3000/api';

function ClientApp() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('/books')
            .then(res => {
                setBooks(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <Router>
            <Switch>
                <Route path="/admin">
                    { <LoginPage />}
                </Route>
                <Route exact path="/">
                    <ReadOnlyBookList books={books}  />
                </Route>

            </Switch>
        </Router>
    );
}


export default ClientApp;
