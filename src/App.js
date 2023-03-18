import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import Projects from './pages/Projects';
import {
    BrowserRouter,
    Routes, //replaces "Switch" used till v5
    Route,
} from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
