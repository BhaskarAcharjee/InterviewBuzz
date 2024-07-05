import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [schedule, setSchedule] = useState({ date: "", time: "", company: "" });
  const [interviews, setInterviews] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSchedule({ ...schedule, [name]: value });
  };

  const handleAddInterview = () => {
    setInterviews([...interviews, schedule]);
    setSchedule({ date: "", time: "", company: "" });
  };

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
            name="time"
            value={schedule.time}
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
          <button onClick={handleAddInterview} className="add-btn">
            Add
          </button>
        </div>
      </div>

      <div className="section">
        <h3>Upcoming Interviews</h3>
        <ul className="interview-list">
          {interviews.map((interview, index) => (
            <li key={index} className="interview-item">
              <span>{interview.date}</span>
              <span>{interview.time}</span>
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

      <div className="section">
        <h3>Dashboard</h3>
        <p>
          View all your interview schedules, progress, and analysis in one
          place.
        </p>
      </div>
    </div>
  );
};

export default Home;
