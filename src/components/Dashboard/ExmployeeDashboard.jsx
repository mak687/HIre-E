import React from "react";
import styles from '../SignIn/SignIn.module.css';
import employerStyles from '../Employer/Employer.module.css';
import dashboardStyle from './Dashboard.module.css';
import { Link } from 'react-router-dom';

const ExmployeeDashboard = () => {

  return (
    <div className={styles.authBackground}>
      <div className={styles.authContainer}>
        <div className={employerStyles.headingContainer}>
          <div  className={employerStyles.headingContainerChild}>
            <Link to="/jobposting">
               Job Posting
            </Link>
          </div>
          <div  className={employerStyles.headingContainerLastChild +' '+ employerStyles.headingContainerChild}>
            <Link to="/jobapplication" >
                Applications
             </Link>
          </div>
        </div>
        <h2>Hello MAK!</h2>
     
          <div className={dashboardStyle.dashboardContainer}>
            <p className={dashboardStyle.dashboardNumbers}>
              <span className={dashboardStyle.dashboardCount}>08</span>  
            </p>
            <p>
              Total Position Posted
            </p>
          </div>
          <div className={dashboardStyle.positionRegionContainer}>
            <div className={dashboardStyle.positionRegion}>
                <b>Position Vacant</b> 05
            </div>
            <div className={dashboardStyle.positionRegion}>
                <b>Position Filled</b> 03
            </div>
         </div>
         <div className={dashboardStyle.postNewJobLink}>
            <Link to="/jobposting" >
                Post a New Job
             </Link>
         </div>
      </div>
    </div>
  );
};

export default ExmployeeDashboard;
