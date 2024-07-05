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
import InterviewExperiences from "../pages/InterviewExperiences/InterviewExperiences";
import ResumeBuilder from "../pages/ResumeBuilder/ResumeBuilder";
import ProfilePage from "../pages/Profile/ProfilePage";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import Hero from "../pages/Hero/Hero";

const routes = (
  questions,
  setQuestions,
  addNewQuestion,
  editQuestion,
  deleteQuestionById,
  toggleFavorite
) => (
  <Routes>
    <Route path="/" element={<Hero />} />
    <Route path="/home" element={<Home />} />
    <Route
      path="/behavioral"
      element={
        <BehavioralQuestionList
          questions={questions}
          setQuestions={setQuestions}
          onEdit={editQuestion}
          onDelete={deleteQuestionById}
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
      element={
        <BehavioralQuestionDetail
          questions={questions}
          setQuestions={setQuestions}
        />
      }
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
    <Route path="/interview-experiences" element={<InterviewExperiences />} />
    <Route path="/profile" element={<ProfilePage />} />
    <Route path="/resume-builder" element={<ResumeBuilder />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="*" element={<ProfilePage />} /> {/* Fallback route */}
  </Routes>
);

export default routes;
