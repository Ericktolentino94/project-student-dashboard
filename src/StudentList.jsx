import React from "react";
import Individual from "./Individual";


const StudentList = ({ students, studentList, onClick}) => {
   
  return (
    <div>
        <h2>All Students</h2>
        <h3>Total Students: {studentList.length} </h3>
       
      {studentList.map((student) => {
        
        return (<li key={student.id}>
          <Individual 
            id={student.id}
            dob={student.dob}
            username={student.username}
            img={student.profilePhoto}
            certifications={student.certifications}
            cohort={student.cohort}
            names={student.names}
            onClick={onClick}
          />
          </li>
        )
      })}
      
      
    </div>
    
  );
  
};


export default StudentList;
