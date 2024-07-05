import React, { useState } from "react";
import "./ResumeBuilder.css";

const ResumeBuilder = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    image: "",
    designation: "",
    address: "",
    email: "",
    phoneno: "",
    summary: "",
    skills: [{ skill: "" }],
    achievements: [{ title: "", description: "" }],
    educations: [
      {
        edu_school: "",
        edu_degree: "",
        edu_city: "",
        edu_start_date: "",
        edu_graduation_date: "",
        edu_description: "",
      },
    ],
    experiences: [
      {
        title: "",
        organization: "",
        location: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ],
    projects: [
      {
        proj_title: "",
        proj_link: "",
        proj_description: "",
      },
    ],
  });

  // Function to handle input changes
  const handleInputChange = (e, index = null, section = null) => {
    const { name, value } = e.target;
    if (section && index !== null) {
      const updatedSection = [...formData[section]];
      updatedSection[index][name] = value;
      setFormData({
        ...formData,
        [section]: updatedSection,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Generic function to add an item to a section
  const addItem = (section, newItem) => {
    setFormData({
      ...formData,
      [section]: [...formData[section], newItem],
    });
  };

  // Generic function to remove an item from a section
  const removeItem = (section, index) => {
    const updatedSection = formData[section].filter((_, i) => i !== index);
    setFormData({
      ...formData,
      [section]: updatedSection,
    });
  };

  // Specific functions for each section
  const addAchievement = () =>
    addItem("achievements", { title: "", description: "" });
  const removeAchievement = (index) => removeItem("achievements", index);

  const addExperience = () =>
    addItem("experiences", {
      title: "",
      organization: "",
      location: "",
      startDate: "",
      endDate: "",
      description: "",
    });
  const removeExperience = (index) => removeItem("experiences", index);

  const addEducation = () =>
    addItem("educations", {
      edu_school: "",
      edu_degree: "",
      edu_city: "",
      edu_start_date: "",
      edu_graduation_date: "",
      edu_description: "",
    });
  const removeEducation = (index) => removeItem("educations", index);

  const addProject = () =>
    addItem("projects", {
      proj_title: "",
      proj_link: "",
      proj_description: "",
    });
  const removeProject = (index) => removeItem("projects", index);

  const addSkill = () => addItem("skills", { skill: "" });
  const removeSkill = (index) => removeItem("skills", index);

  // Function to handle image preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          image: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  // Function to print CV
  function printCV() {
    window.print();
  }

  return (
    <div>
      <section id="about-sc" class="">
        <div class="container">
          <div class="about-cnt">
            <form action="" class="cv-form" id="cv-form">
              {/* About Section : Input Field */}
              <div class="cv-form-blk">
                <div class="cv-form-row-title">
                  <h3>about section</h3>
                </div>
                <div class="cv-form-row cv-form-row-about">
                  <div class="cols-3">
                    <div class="form-elem">
                      <label for="" class="form-label">
                        First Name
                      </label>
                      <input
                        name="firstname"
                        type="text"
                        class="form-control firstname"
                        id=""
                        onChange={handleInputChange}
                        placeholder="e.g. John"
                      />
                      <span class="form-text"></span>
                    </div>
                    <div class="form-elem">
                      <label for="" class="form-label">
                        Middle Name <span class="opt-text">(optional)</span>
                      </label>
                      <input
                        name="middlename"
                        type="text"
                        class="form-control middlename"
                        id=""
                        onChange={handleInputChange}
                        placeholder="e.g. Herbert"
                      />
                      <span class="form-text"></span>
                    </div>
                    <div class="form-elem">
                      <label for="" class="form-label">
                        Last Name
                      </label>
                      <input
                        name="lastname"
                        type="text"
                        class="form-control lastname"
                        id=""
                        onChange={handleInputChange}
                        placeholder="e.g. Doe"
                      />
                      <span class="form-text"></span>
                    </div>
                  </div>

                  <div class="cols-3">
                    <div class="form-elem">
                      <label for="" class="form-label">
                        Your Image
                      </label>
                      <input
                        name="image"
                        type="file"
                        className="form-control image"
                        id=""
                        accept="image/*"
                        onChange={handleImageChange}
                      />
                    </div>
                    <div class="form-elem">
                      <label for="" class="form-label">
                        Designation
                      </label>
                      <input
                        name="designation"
                        type="text"
                        class="form-control designation"
                        id=""
                        onChange={handleInputChange}
                        placeholder="e.g. Sr.Accountants"
                      />
                      <span class="form-text"></span>
                    </div>
                    <div class="form-elem">
                      <label for="" class="form-label">
                        Address
                      </label>
                      <input
                        name="address"
                        type="text"
                        class="form-control address"
                        id=""
                        onChange={handleInputChange}
                        placeholder="e.g. Lake Street-23"
                      />
                      <span class="form-text"></span>
                    </div>
                  </div>

                  <div class="cols-3">
                    <div class="form-elem">
                      <label for="" class="form-label">
                        Email
                      </label>
                      <input
                        name="email"
                        type="text"
                        class="form-control email"
                        id=""
                        onChange={handleInputChange}
                        placeholder="e.g. johndoe@gmail.com"
                      />
                      <span class="form-text"></span>
                    </div>
                    <div class="form-elem">
                      <label for="" class="form-label">
                        Phone No:
                      </label>
                      <input
                        name="phoneno"
                        type="text"
                        class="form-control phoneno"
                        id=""
                        onChange={handleInputChange}
                        placeholder="e.g. 456-768-798, 567.654.002"
                      />
                      <span class="form-text"></span>
                    </div>
                    <div class="form-elem">
                      <label for="" class="form-label">
                        Summary
                      </label>
                      <input
                        name="summary"
                        type="text"
                        class="form-control summary"
                        id=""
                        onChange={handleInputChange}
                        placeholder="e.g. Doe"
                      />
                      <span class="form-text"></span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievement Section : Input Field */}
              <div className="cv-form-blk">
                <div className="cv-form-row-title">
                  <h3>Achievements</h3>
                </div>
                <div className="row-separator repeater">
                  {formData.achievements.map((achievement, index) => (
                    <div
                      className="cv-form-row cv-form-row-achievement"
                      key={index}
                    >
                      <div className="cols-2">
                        <div className="form-elem">
                          <label htmlFor="" className="form-label">
                            Title
                          </label>
                          <input
                            name="title"
                            type="text"
                            className="form-control achieve_title"
                            onChange={(e) =>
                              handleInputChange(e, index, "achievements")
                            }
                            value={achievement.title}
                            placeholder="e.g. Award Title"
                          />
                          <span className="form-text"></span>
                        </div>
                        <div className="form-elem">
                          <label htmlFor="" className="form-label">
                            Description
                          </label>
                          <input
                            name="description"
                            type="text"
                            className="form-control achieve_description"
                            onChange={(e) =>
                              handleInputChange(e, index, "achievements")
                            }
                            value={achievement.description}
                            placeholder="e.g. Award Description"
                          />
                          <span className="form-text"></span>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="repeater-remove-btn"
                        onClick={() => removeAchievement(index)}
                      >
                        -
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    className="repeater-add-btn"
                    onClick={addAchievement}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Experience Section : Input Field */}
              <div className="cv-form-blk">
                <div className="cv-form-row-title">
                  <h3>Experience</h3>
                </div>
                <div className="row-separator repeater">
                  {formData.experiences.map((experience, index) => (
                    <div
                      className="cv-form-row cv-form-row-experience"
                      key={index}
                    >
                      <div className="cols-3">
                        <div className="form-elem">
                          <label htmlFor="" className="form-label">
                            Title
                          </label>
                          <input
                            name="title"
                            type="text"
                            className="form-control exp_title"
                            onChange={(e) =>
                              handleInputChange(e, index, "experiences")
                            }
                            value={experience.title}
                          />
                          <span className="form-text"></span>
                        </div>
                        <div className="form-elem">
                          <label htmlFor="" className="form-label">
                            Company / Organization
                          </label>
                          <input
                            name="organization"
                            type="text"
                            className="form-control exp_organization"
                            onChange={(e) =>
                              handleInputChange(e, index, "experiences")
                            }
                            value={experience.organization}
                          />
                          <span className="form-text"></span>
                        </div>
                        <div className="form-elem">
                          <label htmlFor="" className="form-label">
                            Location
                          </label>
                          <input
                            name="location"
                            type="text"
                            className="form-control exp_location"
                            onChange={(e) =>
                              handleInputChange(e, index, "experiences")
                            }
                            value={experience.location}
                          />
                          <span className="form-text"></span>
                        </div>
                      </div>
                      <div className="cols-3">
                        <div className="form-elem">
                          <label htmlFor="" className="form-label">
                            Start Date
                          </label>
                          <input
                            name="startDate"
                            type="date"
                            className="form-control exp_start_date"
                            onChange={(e) =>
                              handleInputChange(e, index, "experiences")
                            }
                            value={experience.startDate}
                          />
                          <span className="form-text"></span>
                        </div>
                        <div className="form-elem">
                          <label htmlFor="" className="form-label">
                            End Date
                          </label>
                          <input
                            name="endDate"
                            type="date"
                            className="form-control exp_end_date"
                            onChange={(e) =>
                              handleInputChange(e, index, "experiences")
                            }
                            value={experience.endDate}
                          />
                          <span className="form-text"></span>
                        </div>
                        <div className="form-elem">
                          <label htmlFor="" className="form-label">
                            Description
                          </label>
                          <input
                            name="description"
                            type="text"
                            className="form-control exp_description"
                            onChange={(e) =>
                              handleInputChange(e, index, "experiences")
                            }
                            value={experience.description}
                          />
                          <span className="form-text"></span>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="repeater-remove-btn"
                        onClick={() => removeExperience(index)}
                      >
                        -
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    className="repeater-add-btn"
                    onClick={addExperience}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Education Section : Input Field */}
              <div class="cv-form-blk">
                <div class="cv-form-row-title">
                  <h3>education</h3>
                </div>

                <div class="row-separator repeater">
                  <div class="repeater" data-repeater-list="group-c">
                    {formData.educations.map((education, index) => (
                      <div key={index} data-repeater-item>
                        <div class="cv-form-row cv-form-row-experience">
                          <div class="cols-3">
                            <div class="form-elem">
                              <label for="" class="form-label">
                                School
                              </label>
                              <input
                                name="edu_school"
                                type="text"
                                class="form-control edu_school"
                                id=""
                                onChange={(e) =>
                                  handleInputChange(e, index, "educations")
                                }
                              />
                              <span class="form-text"></span>
                            </div>
                            <div class="form-elem">
                              <label for="" class="form-label">
                                Degree
                              </label>
                              <input
                                name="edu_degree"
                                type="text"
                                class="form-control edu_degree"
                                id=""
                                onChange={(e) =>
                                  handleInputChange(e, index, "educations")
                                }
                              />
                              <span class="form-text"></span>
                            </div>
                            <div class="form-elem">
                              <label for="" class="form-label">
                                City
                              </label>
                              <input
                                name="edu_city"
                                type="text"
                                class="form-control edu_city"
                                id=""
                                onChange={(e) =>
                                  handleInputChange(e, index, "educations")
                                }
                              />
                              <span class="form-text"></span>
                            </div>
                          </div>

                          <div class="cols-3">
                            <div class="form-elem">
                              <label for="" class="form-label">
                                Start Date
                              </label>
                              <input
                                name="edu_start_date"
                                type="date"
                                class="form-control edu_start_date"
                                id=""
                                onChange={(e) =>
                                  handleInputChange(e, index, "educations")
                                }
                              />
                              <span class="form-text"></span>
                            </div>
                            <div class="form-elem">
                              <label for="" class="form-label">
                                End Date
                              </label>
                              <input
                                name="edu_graduation_date"
                                type="date"
                                class="form-control edu_graduation_date"
                                id=""
                                onChange={(e) =>
                                  handleInputChange(e, index, "educations")
                                }
                              />
                              <span class="form-text"></span>
                            </div>
                            <div class="form-elem">
                              <label for="" class="form-label">
                                Description
                              </label>
                              <input
                                name="edu_description"
                                type="text"
                                class="form-control edu_description"
                                id=""
                                onChange={(e) =>
                                  handleInputChange(e, index, "educations")
                                }
                              />
                              <span class="form-text"></span>
                            </div>
                          </div>

                          <button
                            data-repeater-delete
                            type="button"
                            class="repeater-remove-btn"
                            onClick={() => removeEducation(index)}
                          >
                            -
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button
                    type="button"
                    data-repeater-create
                    value="Add"
                    class="repeater-add-btn"
                    onClick={addEducation}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Project Section : Input Field */}
              <div className="cv-form-blk">
                <div className="cv-form-row-title">
                  <h3>projects</h3>
                </div>

                <div className="row-separator repeater">
                  <div className="repeater" data-repeater-list="group-d">
                    {formData.projects.map((project, index) => (
                      <div key={index} data-repeater-item>
                        <div className="cv-form-row cv-form-row-experience">
                          <div className="cols-3">
                            <div className="form-elem">
                              <label htmlFor="" className="form-label">
                                Project Name
                              </label>
                              <input
                                name="proj_title"
                                type="text"
                                className="form-control proj_title"
                                id=""
                                onChange={(e) =>
                                  handleInputChange(e, index, "projects")
                                }
                              />
                              <span className="form-text"></span>
                            </div>
                            <div className="form-elem">
                              <label htmlFor="" className="form-label">
                                Project link
                              </label>
                              <input
                                name="proj_link"
                                type="text"
                                className="form-control proj_link"
                                id=""
                                onChange={(e) =>
                                  handleInputChange(e, index, "projects")
                                }
                              />
                              <span className="form-text"></span>
                            </div>
                            <div className="form-elem">
                              <label htmlFor="" className="form-label">
                                Description
                              </label>
                              <input
                                name="proj_description"
                                type="text"
                                className="form-control proj_description"
                                id=""
                                onChange={(e) =>
                                  handleInputChange(e, index, "projects")
                                }
                              />
                              <span className="form-text"></span>
                            </div>
                          </div>
                          <button
                            data-repeater-delete
                            type="button"
                            className="repeater-remove-btn"
                            onClick={() => removeProject(index)}
                          >
                            -
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button
                    type="button"
                    data-repeater-create
                    value="Add"
                    className="repeater-add-btn"
                    onClick={addProject}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Skills Section : Input Field */}
              <div className="cv-form-blk">
                <div className="cv-form-row-title">
                  <h3>skills</h3>
                </div>

                <div className="row-separator repeater">
                  <div className="repeater" data-repeater-list="group-e">
                    {formData.skills.map((skill, index) => (
                      <div key={index} data-repeater-item>
                        <div className="cv-form-row cv-form-row-skills">
                          <div className="form-elem">
                            <label htmlFor="" className="form-label">
                              Skill
                            </label>
                            <input
                              name="skill"
                              type="text"
                              className="form-control skill"
                              id=""
                              value={skill.skill}
                              onChange={(e) =>
                                handleInputChange(e, index, "skills")
                              }
                            />
                            <span className="form-text"></span>
                          </div>
                          <button
                            data-repeater-delete
                            type="button"
                            className="repeater-remove-btn"
                            onClick={() => removeSkill(index)}
                          >
                            -
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button
                    type="button"
                    data-repeater-create
                    value="Add"
                    className="repeater-add-btn"
                    onClick={addSkill}
                  >
                    +
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section id="preview-sc" class="print_area">
        <div class="container">
          <div class="preview-cnt">
            <div class="preview-cnt-l bg-green text-white">
              {/* Header Section : Preview */}
              <div class="preview-blk">
                <div class="preview-image">
                  <img
                    src={
                      formData.image ||
                      "https://clipart-library.com/8300/profile-clipart-md.png"
                    }
                    alt=""
                    id="image_dsp"
                  />
                </div>
                <div class="preview-item preview-item-name">
                  <span class="preview-item-val fw-6" id="fullname_dsp">
                    {formData.firstname} {formData.middlename}{" "}
                    {formData.lastname}
                  </span>
                </div>
                <div class="preview-item">
                  <span
                    class="preview-item-val text-uppercase fw-6 ls-1"
                    id="designation_dsp"
                  >
                    {formData.designation}
                  </span>
                </div>
              </div>

              {/* About Section : Preview */}
              <div class="preview-blk">
                <div class="preview-blk-title">
                  <h3>about</h3>
                </div>
                <div class="preview-blk-list">
                  <div class="preview-item">
                    <span class="preview-item-val" id="phoneno_dsp">
                      {formData.phoneno}
                    </span>
                  </div>
                  <div class="preview-item">
                    <span class="preview-item-val" id="email_dsp">
                      {formData.email}
                    </span>
                  </div>
                  <div class="preview-item">
                    <span class="preview-item-val" id="address_dsp">
                      {" "}
                      {formData.address}
                    </span>
                  </div>
                  <div class="preview-item">
                    <span class="preview-item-val" id="summary_dsp">
                      {formData.summary}
                    </span>
                  </div>
                </div>
              </div>

              {/* Skills Section : Preview */}
              <div className="preview-blk">
                <div className="preview-blk-title">
                  <h3>skills</h3>
                </div>
                <div className="skills-items preview-blk-list" id="skills_dsp">
                  {formData.skills.map((skill, index) => (
                    <div key={index} className="preview-item">
                      <p>{skill.skill}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div class="preview-cnt-r bg-white">
              {/* Achievement Section : Preview */}
              <div className="preview-blk">
                <div className="preview-blk-title">
                  <h3>Achievements</h3>
                </div>
                <div
                  className="achievements-items preview-blk-list"
                  id="achievements_dsp"
                >
                  {formData.achievements.map((achievement, index) => (
                    <div key={index} className="achievement-item">
                      <h4>{achievement.title}</h4>
                      <p>{achievement.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education Section : Preview */}
              <div class="preview-blk">
                <div class="preview-blk-title">
                  <h3>educations</h3>
                </div>
                <div
                  class="educations-items preview-blk-list"
                  id="educations_dsp"
                >
                  {formData.educations.map((education, index) => (
                    <div key={index} class="preview-item">
                      <h4>{education.edu_school}</h4>
                      {education.edu_degree && (
                        <p>
                          <strong>Degree:</strong> {education.edu_degree}
                        </p>
                      )}
                      {education.edu_city && (
                        <p>
                          <strong>City:</strong> {education.edu_city}
                        </p>
                      )}
                      {education.edu_start_date && (
                        <p>
                          <strong>Start Date:</strong>{" "}
                          {education.edu_start_date}
                        </p>
                      )}
                      {education.edu_graduation_date && (
                        <p>
                          <strong>Graduation Date:</strong>{" "}
                          {education.edu_graduation_date}
                        </p>
                      )}
                      <p>{education.edu_description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience Section : Preview */}
              <div className="preview-blk">
                <div className="preview-blk-title">
                  <h3>Experiences</h3>
                </div>
                <div
                  className="experiences-items preview-blk-list"
                  id="experiences_dsp"
                >
                  {formData.experiences.map((experience, index) => (
                    <div key={index} className="experience-item">
                      <h4>{experience.title}</h4>
                      {experience.organization && (
                        <p>
                          {experience.organization}, {experience.location}
                        </p>
                      )}
                      {experience.startDate && (
                        <p>
                          {experience.startDate} - {experience.endDate}
                        </p>
                      )}
                      <p>{experience.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects Section : Preview */}
              <div className="preview-blk">
                <div className="preview-blk-title">
                  <h3>projects</h3>
                </div>
                <div
                  className="projects-items preview-blk-list"
                  id="projects_dsp"
                >
                  {formData.projects.map((project, index) => (
                    <div key={index} className="preview-item">
                      <h4>{project.proj_title}</h4>
                      {project.proj_link && (
                        <p>
                          <strong>Project link:</strong> {project.proj_link}
                        </p>
                      )}
                      <p>{project.proj_description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="print-btn-sc">
        <div class="container">
          <button
            type="button"
            class="print-btn btn btn-primary"
            onClick={printCV}
          >
            Print CV
          </button>
        </div>
      </section>
    </div>
  );
};

export default ResumeBuilder;
