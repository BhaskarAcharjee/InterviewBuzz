import React, { useState } from "react";
import "./ResumeBuilder.css";

const ResumeBuilder = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    education: [],
    experience: [],
    skills: "",
    additionalInfo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const updatedEducation = [...formData.education];
    updatedEducation[index][name] = value;
    setFormData({
      ...formData,
      education: updatedEducation,
    });
  };

  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const updatedExperience = [...formData.experience];
    updatedExperience[index][name] = value;
    setFormData({
      ...formData,
      experience: updatedExperience,
    });
  };

  const handleAddEducation = () => {
    setFormData({
      ...formData,
      education: [...formData.education, { institute: "", degree: "", year: "" }],
    });
  };

  const handleAddExperience = () => {
    setFormData({
      ...formData,
      experience: [...formData.experience, { position: "", company: "", year: "" }],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to server, save to local storage)
    console.log(formData);
    // Reset form data after submission
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      address: "",
      education: [],
      experience: [],
      skills: "",
      additionalInfo: "",
    });
  };

  return (
    <div className="resume-builder-container">
      <h1>Resume Builder</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>Education</label>
          {formData.education.map((edu, index) => (
            <div key={index} className="education-item">
              <input
                type="text"
                name="institute"
                placeholder="Institute"
                value={edu.institute}
                onChange={(e) => handleEducationChange(index, e)}
                required
              />
              <input
                type="text"
                name="degree"
                placeholder="Degree"
                value={edu.degree}
                onChange={(e) => handleEducationChange(index, e)}
                required
              />
              <input
                type="text"
                name="year"
                placeholder="Year"
                value={edu.year}
                onChange={(e) => handleEducationChange(index, e)}
                required
              />
            </div>
          ))}
          <button type="button" className="add-btn" onClick={handleAddEducation}>
            Add Education
          </button>
        </div>
        <div className="form-group">
          <label>Work Experience</label>
          {formData.experience.map((exp, index) => (
            <div key={index} className="experience-item">
              <input
                type="text"
                name="position"
                placeholder="Position"
                value={exp.position}
                onChange={(e) => handleExperienceChange(index, e)}
                required
              />
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={exp.company}
                onChange={(e) => handleExperienceChange(index, e)}
                required
              />
              <input
                type="text"
                name="year"
                placeholder="Year"
                value={exp.year}
                onChange={(e) => handleExperienceChange(index, e)}
                required
              />
            </div>
          ))}
          <button type="button" className="add-btn" onClick={handleAddExperience}>
            Add Experience
          </button>
        </div>
        <div className="form-group">
          <label htmlFor="skills">Skills</label>
          <textarea
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="additionalInfo">Additional Information</label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit">Save Resume</button>
      </form>
    </div>
  );
};

export default ResumeBuilder;
