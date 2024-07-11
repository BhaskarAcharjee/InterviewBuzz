import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
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
import InterviewExperiences from "./pages/InterviewExperiences/InterviewExperiences";
import ResumeBuilder from "./pages/ResumeBuilder/ResumeBuilder";
import ProfilePage from "./pages/Profile/ProfilePage";
import Auth from "./pages/Auth/Auth";
import Hero from "./pages/Hero/Hero";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import "./App.css";
import {
  getQuestions,
  createQuestion,
  updateQuestion,
  deleteQuestion,
} from "./services/api";

const App = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await getQuestions();
      setQuestions(response.data);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  const addNewQuestion = async (newQuestion) => {
    try {
      const response = await createQuestion(newQuestion);
      setQuestions([...questions, response.data]);
    } catch (error) {
      console.error("Error adding question:", error);
    }
  };

  const editQuestion = async (updatedQuestion) => {
    try {
      const response = await updateQuestion(
        updatedQuestion._id,
        updatedQuestion
      );
      setQuestions(
        questions.map((q) =>
          q._id === updatedQuestion._id ? response.data : q
        )
      );
    } catch (error) {
      console.error("Error editing question:", error);
    }
  };

  const deleteQuestionById = async (id) => {
    try {
      await deleteQuestion(id);
      setQuestions(questions.filter((q) => q._id !== id));
    } catch (error) {
      console.error("Error deleting question:", error);
    }
  };

  const toggleFavorite = async (id) => {
    const question = questions.find((q) => q._id === id);
    const updatedQuestion = { ...question, isFavorite: !question.isFavorite };
    await editQuestion(updatedQuestion);
  };

  return (
    <Router>
      <MainContent
        questions={questions}
        setQuestions={setQuestions}
        addNewQuestion={addNewQuestion}
        editQuestion={editQuestion}
        deleteQuestionById={deleteQuestionById}
        toggleFavorite={toggleFavorite}
      />
    </Router>
  );
};

const MainContent = ({
  questions,
  setQuestions,
  addNewQuestion,
  editQuestion,
  deleteQuestionById,
  toggleFavorite,
}) => {
  const location = useLocation();
  const excludePaths = ["/login", "/signup"];
  const showSidebar = !excludePaths.includes(location.pathname);

  return (
    <div className="App">
      {showSidebar && <Sidebar />}
      <main className="main-content">
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
              <BehavioralQuestionEdit
                questions={questions}
                onSave={editQuestion}
              />
            }
          />
          <Route path="/projects" element={<ProjectQuestions />} />
          <Route path="/technical" element={<TechnicalQuestions />} />
          <Route path="/flashcards" element={<Flashcards />} />
          <Route path="/dream-company" element={<DreamCompanyList />} />
          <Route
            path="/dream-company/create"
            element={<DreamCompanyCreate />}
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
