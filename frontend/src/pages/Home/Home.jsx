import React, { useState, useEffect } from "react";
import "./Home.css";
import Calender from "../../components/Calender/Calender";
import { sampleInterviews } from "../../constants/schedule";
import { isLoggedIn } from "../../services/auth";

const Home = () => {
  const [schedule, setSchedule] = useState({
    date: "",
    startTime: "",
    endTime: "",
    company: "",
  });
  const [interviews, setInterviews] = useState([]);
  const [latestInterviews, setLatestInterviews] = useState([]);

  useEffect(() => {
    // Check if user is logged in and use sample data if not
    if (!isLoggedIn()) {
      setInterviews(sampleInterviews);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSchedule({ ...schedule, [name]: value });
  };

  const handleAddInterview = () => {
    if (!schedule.date) {
      alert("Please select a date");
      return;
    }
    setInterviews([...interviews, schedule]);
    setSchedule({ date: "", startTime: "", endTime: "", company: "" });
  };

  useEffect(() => {
    const updateLatestInterviews = () => {
      const width = window.innerWidth;
      let numberOfInterviews = 5;
      if (width <= 768) {
        numberOfInterviews = 1;
      } else if (width <= 1024) {
        numberOfInterviews = 2;
      }
      setLatestInterviews(interviews.slice(-numberOfInterviews));
    };

    updateLatestInterviews();
    window.addEventListener("resize", updateLatestInterviews);

    return () => {
      window.removeEventListener("resize", updateLatestInterviews);
    };
  }, [interviews]);

  return (
    <div className="home-container">
      <h2 className="title">Prepare for Your Interviews</h2>
      <p className="subtitle">
        Explore our comprehensive list of coding and technical questions,
        prepare with real-time mock interviews, and track your progress.
      </p>

      <div className="section">
        <h3>Add Interview Schedule</h3>
        <div className="input-group">
          <input
            type="date"
            name="date"
            value={schedule.date}
            onChange={handleInputChange}
            className="input"
          />
          <input
            type="time"
            name="startTime"
            value={schedule.startTime}
            onChange={handleInputChange}
            className="input"
          />
          <input
            type="time"
            name="endTime"
            value={schedule.endTime}
            onChange={handleInputChange}
            className="input"
          />
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={schedule.company}
            onChange={handleInputChange}
            className="input"
          />
          <div className="button-container">
            <button onClick={handleAddInterview} className="design-button">
              Add
            </button>
          </div>
        </div>
      </div>
      <div className="section upcoming">
        <h3>Upcoming Interviews</h3>
        {latestInterviews.length > 0 && (
          <Calender interviews={latestInterviews} />
        )}
      </div>
      <div className="section">
        <h3>All Interviews Schedule</h3>
        <ul className="interview-list">
          {interviews.map((interview, index) => (
            <li key={index} className="interview-item">
              <span>{interview.date}</span>
              <span>{interview.startTime}</span>
              <span>{interview.endTime}</span>
              <span>{interview.company}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h3>Target Interviews</h3>
        <p>
          Identify the companies and roles you are targeting. Track your
          progress and prepare accordingly.
        </p>
      </div>

      <div className="section">
        <h3>Full Analysis</h3>
        <p>
          Get detailed insights on your interview performance, strengths, and
          areas for improvement.
        </p>
      </div>

      <div className="section dashboard">
        <h3>Dashboard</h3>
        <div className="dashboard-section">
          <div className="dashboard-card">
            <h3>Total Interviews</h3>
            <p>{interviews.length}</p>
          </div>
          <div className="dashboard-card">
            <h3>Upcoming Interviews</h3>
            <p>{latestInterviews.length}</p>
          </div>
          {/* Add more cards as needed */}
        </div>
      </div>
    </div>
  );
};

export default Home;
