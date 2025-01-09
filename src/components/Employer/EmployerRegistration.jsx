import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from '../SignIn/SignIn.module.css';
import employerStyles from './Employer.module.css';
import { Link } from 'react-router-dom';

const EmployerRegistration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyType, setCompanyType] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [username, setUsername] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email ) {
      setSuccess(true)
    } else {

      setError("Invalid email");
      setSuccess(false)
    }
  };

  return (

    (!success) ? <>
          <div className={styles.authBackground}>
            <div className={styles.authContainer}>
              <h2>Create a New Account</h2>
              
              <div className={employerStyles.headingContainer}>
                <div  className={employerStyles.headingContainerChild}>
                  <Link to="/employer">
                    Sign In
                  </Link>
                </div>
                <div  className={employerStyles.headingContainerLastChild +' '+ employerStyles.headingContainerChild}>
                  <Link to="/employerregistration" >
                      Register
                  </Link>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                  <label>Company Type:</label>
                  <input
                    type="text"
                    value={companyType}
                    onChange={(e) => setCompanyType(e.target.value)}
                    required
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label>Company Name:</label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    required
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label>Contact Person:</label>
                  <input
                    type="text"
                    value={contactPerson}
                    onChange={(e) => setContactPerson(e.target.value)}
                    required
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label>Username:</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label>Create Password:</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label>Your Email:</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label>Your Mobile #</label>
                  <input
                    type="number"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    required
                  />
                </div>

              
                {error && <p className={styles.errorMessage}>{error}</p>}

                <button type="submit">Register</button>
              </form>
            </div>
          </div>
    </> : <>
          <div className={styles.authBackground}>
            <div className={styles.authContainer}>
                <div className={employerStyles.successContainer} >
                    <div>
                      <h2>Congratulation!</h2>
                    </div>
                    <div>
                      Please login to continue.
                    </div>
                </div>

                <div className={employerStyles.successLoginContainer} >
                   <Link to="/employer">
                      Login
                    </Link>
                </div>
                </div>
              </div>
          </>
  );
};

export default EmployerRegistration;
