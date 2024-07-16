import React, { useState, useEffect } from "react";
import HappyInterview from "../../components/HappyInterview/HappyInterview";
import Heatmap from "../../components/Heatmap/Heatmap";
import "./ProfilePage.css";

const ProfilePage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUsername(user.username);
      setEmail(user.email);
    }

    // Track visit start time
    const visitStartTime = Date.now();

    // Save visit time on page unload
    const handleUnload = () => {
      const visitEndTime = Date.now();
      const visitDuration = (visitEndTime - visitStartTime) / 1000; // in seconds
      const today = new Date().toISOString().split("T")[0];

      let activityData = JSON.parse(localStorage.getItem("activityData")) || {};
      if (!activityData[today]) {
        activityData[today] = 0;
      }
      activityData[today] += visitDuration;

      localStorage.setItem("activityData", JSON.stringify(activityData));
    };

    window.addEventListener("beforeunload", handleUnload);

    return () => {
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-info">
          <img
            src="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png"
            alt="Profile"
            className="profile-pic"
          />
          <div>
            <h1>Welcome, {username}!</h1>
            <p>{email}</p>
          </div>
        </div>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="profile-section">
        <h2>Heatmap</h2>
        <Heatmap />
      </div>

      <div className="profile-section">
        <HappyInterview />
      </div>

      <div className="profile-section">
        <h2>Settings</h2>
        <div className="settings-options">
          <button className="settings-button">Change Password</button>
          <button className="settings-button">Update Profile</button>
          <button className="settings-button">Notification Preferences</button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
