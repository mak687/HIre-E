import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from '../SignIn/SignIn.module.css';
import employerStyles from '../Employer/Employer.module.css';
import { Link } from 'react-router-dom';

const JobPosting = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [department, setDepartment] = useState("");
  const [location, setLocation] = useState("");
  const [qualification, setQualification] = useState("");
  const [skills, setSkills] = useState("");
  const [jobDescription, setJobDescription] = useState("");

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (jobTitle === "test" ) {
      navigate("/employerdashboard");
    } else {
      setError("Invalid job posting");
    }
  };

  return (
    <div className={styles.authBackground}>
      <div className={styles.authContainer}>
      <div className={employerStyles.headingContainer}>
          <div  className={employerStyles.headingContainerChild}>
            <Link to="/employerdashboard">
               Home
            </Link>
          </div>
          <div  className={employerStyles.headingContainerLastChild +' '+ employerStyles.headingContainerChild}>
            <Link to="/jobapplication" >
                Applications
             </Link>
          </div>
        </div>
        <h2>Post a New Job</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label>Job Title:</label>
            <input
              type="text"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Department:</label>
            <input
              type="text"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Location:</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Qualification:</label>
            <input
              type="text"
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Skills:</label>
            <input
              type="text"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Job Description:</label>
            <textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              required
              cols = {47}
              rows = {10}
            />
          </div>
       

          {error && <p className={styles.errorMessage}>{error}</p>}

          <button type="submit">Proceed</button>
        </form>
      </div>
    </div>
  );
};

export default JobPosting;
