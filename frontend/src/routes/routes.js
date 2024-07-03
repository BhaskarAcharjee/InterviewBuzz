import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import BehavioralQuestionList from "../pages/BehavioralQuestions/BehavioralQuestionList";
import BehavioralQuestionCreate from "../pages/BehavioralQuestions/BehavioralQuestionCreate";
import BehavioralQuestionDetail from "../pages/BehavioralQuestions/BehavioralQuestionDetail";
import BehavioralQuestionEdit from "../pages/BehavioralQuestions/BehavioralQuestionEdit";
import ProjectQuestions from "../pages/ProjectQuestions/ProjectQuestions";
import TechnicalQuestions from "../pages/TechnicalQuestions/TechnicalQuestions";
import Flashcards from "../pages/Flashcards/Flashcards";
import DreamCompany from "../pages/DreamCompany/DreamCompany";

const routes = (questions, addNewQuestion, editQuestion, toggleFavorite) => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route
      path="/behavioral"
      element={
        <BehavioralQuestionList
          questions={questions}
          onEdit={editQuestion}
          toggleFavorite={toggleFavorite}
        />
      }
    />
    <Route
      path="/behavioral/create"
      element={<BehavioralQuestionCreate onSave={addNewQuestion} />}
    />
    <Route
      path="/behavioral/:id"
      element={<BehavioralQuestionDetail questions={questions} />}
    />
    <Route
      path="/behavioral/edit/:id"
      element={
        <BehavioralQuestionEdit questions={questions} onSave={editQuestion} />
      }
    />
    <Route path="/projects" element={<ProjectQuestions />} />
    <Route path="/technical" element={<TechnicalQuestions />} />
    <Route path="/flashcards" element={<Flashcards />} />
    <Route path="/dream-company" element={<DreamCompany />} />
  </Routes>
);

export default routes;
