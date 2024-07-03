import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home/Home';
import BehavioralQuestionList from './pages/BehavioralQuestions/BehavioralQuestionList';
import BehavioralQuestionCreate from './pages/BehavioralQuestions/BehavioralQuestionCreate';
import ProjectQuestions from './pages/ProjectQuestions/ProjectQuestions';
import TechnicalQuestions from './pages/TechnicalQuestions/TechnicalQuestions';
import Flashcards from './pages/Flashcards/Flashcards';
import DreamCompany from './pages/DreamCompany/DreamCompany';
import './App.css';

const App = () => {
    const initialQuestions = [
        { id: 1, question: "Tell me about a time you faced a challenge.", answer: "I faced a challenge when..." },
        { id: 2, question: "How do you handle stress?", answer: "I handle stress by..." }
    ];
    
    const [questions, setQuestions] = useState(initialQuestions);

    const addNewQuestion = (newQuestion) => {
        setQuestions([...questions, newQuestion]);
    };

    return (
        <Router>
            <div className="App">
                <Sidebar />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/behavioral" element={<BehavioralQuestionList questions={questions} />} />
                        <Route path="/behavioral/create" element={<BehavioralQuestionCreate onSave={addNewQuestion} />} />
                        <Route path="/projects" element={<ProjectQuestions />} />
                        <Route path="/technical" element={<TechnicalQuestions />} />
                        <Route path="/flashcards" element={<Flashcards />} />
                        <Route path="/dream-company" element={<DreamCompany />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;
