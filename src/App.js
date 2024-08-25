// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import Navbar component
import Home from './Pages/Home';
import Gallery from './Pages/Gallery.jsx';
import Messages from './Pages/Messages.jsx';
import { Container } from 'react-bootstrap'; // Import Container from Bootstrap
import Footer from './components/Footer.jsx';
import Timeline from './Pages/Timeline.jsx';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <Container>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/timeline" element={<Timeline />} />
                        <Route path="/messages" element={<Messages />} />
                    </Routes>
                </Container>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
