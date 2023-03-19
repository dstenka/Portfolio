import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import Projects from './pages/Projects';
import Refrences from './pages/Refrences';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/Login';

function App() {
    return (
        <>
            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/my_projects" element={<Projects />} />
                    <Route path="/refrences" element={<Refrences />} />
                    <Route path="/about_me" element={<AboutMe />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/login" element={<Login />}></Route>
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;
