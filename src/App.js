import React from 'react';
import io from 'socket.io-client';
import Home from './views/Home';
import ChatPage from './views/ChatPage'
import { Routes, Route } from 'react-router-dom'


// connecting our app to socket.io server
const socket = io.connect('http://localhost:8000');

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home socket={socket} />}></Route>
      <Route path="/chat" element={<ChatPage socket={socket} />}></Route>
    </Routes>
  );
}

export default App;