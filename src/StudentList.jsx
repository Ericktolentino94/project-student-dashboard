import React from "react";
import Individual from "./Individual";

const StudentList = ({ students }) => {
  return (
    <div>
        <h2>All Students</h2>
        <h3>Total Students:</h3>
       
      {students.map((student) => {
        return (
          <Individual
            id={student.id}
            dob={student.dob}
            username={student.username}
            img={student.profilePhoto}
            certifications={student.certifications}
            cohort={student.cohort}
            names={student.names}
          />
        );
      })}
      ;
    </div>
  );
};

export default StudentList;
