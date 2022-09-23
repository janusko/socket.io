import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = (props) => {
    const navigate = useNavigate();
    const { socket } = props;
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('username', username);
        
        socket.emit('newUser', { username, socketId: socket.id})
        // create an event that listens to users when they sign in.
        // sends username and socket id to node.js server
        navigate('/chat');
    };
    return (
        <div>
            <form className="home__container" onSubmit={handleSubmit}>
                <h2 className="home__header">Airbnb Chat</h2>
                <label htmlFor="username">Username</label>
                <input type="text" minLength={2} name="username" id="username" className="username__input" value={username} onChange={(e) => setUsername(e.target.value)}
                />
                <button className="home__cta">Sign In</button>
            </form>
        </div>
    );
};

export default Home;