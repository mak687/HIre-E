import React , {useEffect, useState} from "react";
import styles from '../SignIn/SignIn.module.css';
import employerStyles from '../Employer/Employer.module.css';
import jobStyles from './Job.module.css';
import { Link } from 'react-router-dom';

const JobApplication = () => {

  const [filter,setFilter] = useState('');
  const [jobApplications,setJobApplications] = useState('');

  const handleChange = (value) =>{
    setFilter(value)
  }


  const fetchPosts = async () => {
    try {

      const response = await fetch('https://dummyjson.com/posts/user/5');
      const jsonData = await response.json(); 
      setJobApplications(jsonData); // Log the data
    } catch (error) {
      console.error('Error fetching data:', error); // Handle any errors
    }
  };

  useEffect(()=>{  
    fetchPosts()
  },[])


  console.log(jobApplications);

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
                <img src='https://media.istockphoto.com/id/1430983955/vector/emphasis-check-mark-check-box-vector.jpg?s=612x612&w=0&k=20&c=ThIMQiUjqkLBVDSoPeyuZ3SpwWQ-221SQJyPbcNuBvU=' width="10%" alt="logo" />
            </div>
          </div>

          <div className={jobStyles.applicationContainer}>
            <div>
              <h2>Application Engineer</h2>
              <p>Applied on : 03-12-2024</p>
              <p>Location : Karachi</p>
            </div>
            <div>
                <img src='https://banner2.cleanpng.com/20180328/gge/avjsiiav2.webp' width="10%" alt="logo" />
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default JobApplication;
