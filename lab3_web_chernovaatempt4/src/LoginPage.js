import React, { useState } from 'react';
import {Link} from "react-router-dom";

const LoginPage = ({ setUser }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        // Check if the credentials are correct (this is just an example)
        if (username === 'admin' && password === 'password') {
            const user = {
                username: 'admin',
                isAdmin: true,
            };

            // Save the user data in local storage
            localStorage.setItem('user', JSON.stringify(user));

           // setUser(user);
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <form onSubmit={handleLogin}>

            <label>
                Username:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <br />
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <br />

            {   username=="admin" && password=="password"?   <Link to={`/adminApp`}>
            <button  type="submit">Login</button>
        </Link>: null
            }
        </form>
    );
};
export default LoginPage;
