import React, { useState, useEffect } from "react";
import HappyInterview from "../../components/HappyInterview/HappyInterview";
import "./ProfilePage.css";

const ProfilePage = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Retrieve user data from local storage
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUsername(user.username); // Assuming the user object has a username property
    }
  }, []);

  const handleLogout = () => {
    // Add logout logic here, for example:
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login"; // Redirect to login page after logout
  };

  return (
    <>
      <div className="profile-page-container">
        <h1>Welcome, {username}!</h1> {/* Display the username here */}
      </div>
      <HappyInterview />
      <div className="profile-page-container">
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </>
  );
};

export default ProfilePage;
