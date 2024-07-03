import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home/Home';
import CodingQuestions from './pages/CodingQuestions/CodingQuestions';
import './App.css';
// import './assets/css/style.css';

const App = () => (
    <Router>
        <div className="App">
            <Header />
            <div className="container">
                <Sidebar />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/coding" element={<CodingQuestions />} />
                        {/* Add more routes as needed */}
                    </Routes>
                </main>
            </div>
        </div>
    </Router>
);

export default App;
