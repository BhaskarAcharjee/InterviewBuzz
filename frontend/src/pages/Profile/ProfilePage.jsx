import React from "react";
import HappyInterview from "../../components/HappyInterview/HappyInterview";
import "./ProfilePage.css";

const ProfilePage = () => {
  const handleLogout = () => {
    // Add logout logic here, for example:
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login"; // Redirect to login page after logout
  };

  return (
    <>
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
