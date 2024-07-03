import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home/Home';
import BehavioralQuestions from './pages/BehavioralQuestions/BehavioralQuestions';
import ProjectQuestions from './pages/ProjectQuestions/ProjectQuestions';
import TechnicalQuestions from './pages/TechnicalQuestions/TechnicalQuestions';
import Flashcards from './pages/Flashcards/Flashcards';
import DreamCompany from './pages/DreamCompany/DreamCompany';
import './App.css';
// import './assets/css/style.css';

const App = () => (
    <Router>
        <div className="App">
            <Sidebar />
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/behavioral" element={<BehavioralQuestions />} />
                    <Route path="/projects" element={<ProjectQuestions />} />
                    <Route path="/technical" element={<TechnicalQuestions />} />
                    <Route path="/flashcards" element={<Flashcards />} />
                    <Route path="/dream-company" element={<DreamCompany />} />
                </Routes>
            </main>
        </div>
    </Router>
);

export default App;
