import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { ContextProvider } from "./context/BehavioralQuestionsContext";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import BehavioralQuestionList from "./pages/BehavioralQuestions/BehavioralQuestionList";
import BehavioralQuestionCreate from "./pages/BehavioralQuestions/BehavioralQuestionCreate";
import BehavioralQuestionDetail from "./pages/BehavioralQuestions/BehavioralQuestionDetail";
import BehavioralQuestionEdit from "./pages/BehavioralQuestions/BehavioralQuestionEdit";
import ProjectQuestions from "./pages/ProjectQuestions/ProjectQuestions";
import TechnicalQuestions from "./pages/TechnicalQuestions/TechnicalQuestions";
import Flashcards from "./pages/Flashcards/Flashcards";
import DreamCompanyList from "./pages/DreamCompany/DreamCompanyList";
import DreamCompanyCreate from "./pages/DreamCompany/DreamCompanyCreate";
import DreamCompanyEdit from "./pages/DreamCompany/DreamCompanyEdit";
import InterviewExperiences from "./pages/InterviewExperiences/InterviewExperiences";
import ResumeBuilder from "./pages/ResumeBuilder/ResumeBuilder";
import ProfilePage from "./pages/Profile/ProfilePage";
import Auth from "./pages/Auth/Auth";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import "./App.css";
import LaunchPage2 from "./pages/Hero/LaunchPage2";
import ProjectDetail from "./pages/ProjectQuestions/ProjectDetail";

const App = () => {
  return (
    <ContextProvider>
      <Router>
        <MainContent />
      </Router>
    </ContextProvider>
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
          <Route path="/" element={<LaunchPage2 />} />
          <Route path="/home" element={<Home />} />
          <Route path="/behavioral" element={<BehavioralQuestionList />} />
          <Route
            path="/behavioral/create"
            element={<BehavioralQuestionCreate />}
          />
          <Route
            path="/behavioral/:id"
            element={<BehavioralQuestionDetail />}
          />
          <Route
            path="/behavioral/edit/:id"
            element={<BehavioralQuestionEdit />}
          />
          <Route path="/projects" element={<ProjectQuestions />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/technical" element={<TechnicalQuestions />} />
          <Route path="/flashcards" element={<Flashcards />} />
          <Route path="/dream-company" element={<DreamCompanyList />} />
          <Route
            path="/dream-company/create"
            element={<DreamCompanyCreate />}
          />
          <Route
            path="/dream-company/edit/:id"
            element={<DreamCompanyEdit />}
          />
          <Route
            path="/interview-experiences"
            element={<InterviewExperiences />}
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
