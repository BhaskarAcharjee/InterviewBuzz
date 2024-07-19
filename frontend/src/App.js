import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import BehavioralQuestionList from "./pages/BehavioralQuestions/BehavioralQuestionList";
import BehavioralQuestionDetail from "./pages/BehavioralQuestions/BehavioralQuestionDetail";
import ProjectQuestions from "./pages/ProjectQuestions/ProjectQuestions";
import TechnicalQuestions from "./pages/TechnicalQuestions/TechnicalQuestions";
import Flashcards from "./pages/Flashcards/Flashcards";
import DreamCompanyList from "./pages/DreamCompany/DreamCompanyList";
import InterviewExperiences from "./pages/InterviewExperiences/InterviewExperiences";
import ResumeBuilder from "./pages/ResumeBuilder/ResumeBuilder";
import ProfilePage from "./pages/Profile/ProfilePage";
import Auth from "./pages/Auth/Auth";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import ProjectDetail from "./pages/ProjectQuestions/ProjectDetail";
import { QuestionsProvider } from "./context/QuestionsContext";
import TechnicalQuestionDetail from "./pages/TechnicalQuestions/TechnicalQuestionDetail";
import InterviewExperienceDetail from "./pages/InterviewExperiences/InterviewExperienceDetail";
import DreamCompanyDetail from "./pages/DreamCompany/DreamCompanyDetail";
import QuestionForm from "./components/QuestionForm/QuestionForm";
import BehavioralQuestionUpdate from "./pages/BehavioralQuestions/BehavioralQuestionUpdate";

const App = () => {
  return (
    <QuestionsProvider>
      <Router>
        <MainContent />
      </Router>
    </QuestionsProvider>
  );
};

const MainContent = () => {
  const location = useLocation();
  const excludePaths = ["/", "/login", "/signup"];
  const showSidebar = !excludePaths.includes(location.pathname);

  return (
    <div className="App">
      {showSidebar && <Sidebar />}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/behavioral" element={<BehavioralQuestionList />} />
          <Route
            path="/behavioral/create"
            element={<BehavioralQuestionUpdate />}
          />
          <Route
            path="/behavioral/:id"
            element={<BehavioralQuestionDetail />}
          />
          <Route
            path="/behavioral/edit/:id"
            element={<BehavioralQuestionUpdate />}
          />
          <Route path="/projects" element={<ProjectQuestions />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/technical" element={<TechnicalQuestions />} />
          <Route
            path="/technical/:categoryId/:type/:questionId"
            element={<TechnicalQuestionDetail />}
          />
          <Route path="/technical/create" element={<QuestionForm />} />
          <Route path="/technical/edit/:id" element={<QuestionForm />} />
          <Route path="/flashcards" element={<Flashcards />} />
          <Route path="/dream-company" element={<DreamCompanyList />} />
          <Route path="/dream-company/:id" element={<DreamCompanyDetail />} />
          <Route
            path="/interview-experiences"
            element={<InterviewExperiences />}
          />
          <Route
            path="/interview-experiences/:id"
            element={<InterviewExperienceDetail />}
          />
          <Route path="/resume-builder" element={<ResumeBuilder />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/signup" element={<Auth />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
