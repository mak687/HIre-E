import React , {useState} from "react";
import styles from '../SignIn/SignIn.module.css';
import employerStyles from '../Employer/Employer.module.css';
import jobStyles from './Job.module.css';
import { Link } from 'react-router-dom';

const JobApplication = () => {

  const [filter,setFilter] = useState('');

  const handleChange = (value) =>{
    setFilter(value)
  }
  

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
        <div className={jobStyles.wrap}>
          <div className={jobStyles.search}>
            <input type="text" placeholder='Search for applications' className={jobStyles.searchTerm} id="input_text"></input>
            <button type="submit" className={jobStyles.searchButton}>
              Search
            </button>
          </div>
        </div>


        <div className={jobStyles.filterContainer}>
            
            <input
              id="all"
              value="all"
              name="filter"
              type="radio"
              onChange={(e) => handleChange(e.target.value)}
            
            /> All
            
            <input
              id="vacant"
              value="vacant"
              name="filter"
              type="radio"
              onChange={(e) => handleChange(e.target.value)}
             
            /> Vacant
            
            <input
              id="filled"
              value="filled"
              name="filter"
              type="radio"
              onChange={(e) => handleChange(e.target.value)}
            /> Filled

        </div>

        <div >
          <div className={jobStyles.applicationContainer}>
            <div>
              <h2>Product Manager</h2>
              <p>Applied on : 03-12-2024</p>
              <p>Location : Karachi</p>
            </div>
            <div>
              image
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default JobApplication;
