import React from 'react';
import Individual from './Individual';
import StudentList from './StudentList';



const StudentArg = ({onClick}) => {
    
    function handleCohortClick(cohort) {
        onClick(cohort)
    }

    return (
        <div >
            <h2>Choose a Class by Start Date</h2>
      <h2 className="studentArg" onClick={()=> handleCohortClick("All Students")}>All Students</h2>
      <h2 className="studentArg" onClick={()=> handleCohortClick(`Winter2026`)}>Winter 2026</h2>
      <h2 className="studentArg" onClick={()=> handleCohortClick(`Fall2026`)}>Fall 2026</h2>
      <h2 className="studentArg" onClick={()=> handleCohortClick(`Summer2026`)}>Summer 2026</h2>
      <h2 className="studentArg"onClick={()=> handleCohortClick(`Spring2026`)}>Spring 2026</h2>
      <h2 className="studentArg"onClick={()=> handleCohortClick(`Winter2025`)}>Winter 2025</h2>
      <h2 className="studentArg"onClick={()=> handleCohortClick(`Fall2025`)}>Fall 2025</h2>
      <h2 className="studentArg"onClick={()=> handleCohortClick(`Summer2025`)}>Summer 2025</h2>
      <h2 className="studentArg"onClick={()=> handleCohortClick(`Spring2025`)}>Spring 2025</h2>
      </div>
    );
}

export default StudentArg;
