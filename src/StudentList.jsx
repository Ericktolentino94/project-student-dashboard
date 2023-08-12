import React from "react";
import Individual from "./Individual";
import { useState } from "react";


  const StudentList = ({ students, studentList, onClick, expandedList, toggleList}) => {
    
  return (
    <div>
        <h2>All Students</h2>
        <h3>Total Students: {studentList.length} </h3>
       
      {studentList.map((student) => {
        const isStudentOnTrack = 
        student.certifications.resume &&
        student.certifications.linkedin &&
        student.certifications.github &&
        student.certifications.mockInterview &&
        student.codewars.goal.total > 600;
       

        return (
        <li key={student.id}>
          <Individual 
            id={student.id}
            dob={student.dob}
            username={student.username}
            img={student.profilePhoto}
            codeWars={student.codewars}
            certifications={student.certifications}
            cohort={student.cohort}
            names={student.names}
            onClick={()=> onClick(student.cohort.cohortCode)}
            toggleList={()=> toggleList(student.id)}
            isExpanded={expandedList.includes(student.id)}
            isOnTrack = {isStudentOnTrack}

          />
          </li>
        )
      })}
      
      
    </div>
    
  );
  
};


export default StudentList;
