import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from '../SignIn/SignIn.module.css';
import employerStyles from './Employer.module.css';
import { Link } from 'react-router-dom';

const Employer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "mak@example.com" && password === "test1234") {

      fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: 'test title.',
          userId: 5,
          /* other post data */
        })
      })
      .then(res => res.json())
      .then(console.log);

      navigate("/employerdashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className={styles.authBackground}>
      <div className={styles.authContainer}>
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
        <h2>Welcome Employer!</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className={styles.errorMessage}>{error}</p>}

          <button type="submit">Login In</button>
        </form>
      </div>
    </div>
  );
};

export default Employer;
