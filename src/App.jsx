import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Core/Footer/Footer';
import Header from './Core/Navigation/Header';
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';
import About from './Pages/About/About';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/portfolio' element={<Projects />} />
                    <Route path='/about' element={<About />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App
