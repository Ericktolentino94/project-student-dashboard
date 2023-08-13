import React from "react";
import Individual from "./Individual";
import { useState } from "react";

const StudentList = ({
  students,
  studentList,
  onClick,
  expandedList,
  toggleList,
  title,
}) => {
  console.log(studentList);
  return (
    <div>
      <h2>{title}</h2>
      <p>
        Total Students:{" "}
        <span style={{ color: "green" }}>{studentList.length} </span>
      </p>

      {studentList.map((student) => {
        const isStudentOnTrack =
          student.certifications.resume &&
          student.certifications.linkedin &&
          student.certifications.github &&
          student.certifications.mockInterview &&
          student.codewars.goal.total > 600;

        return (
          <div key={student.id}>
            <Individual
              id={student.id}
              dob={student.dob}
              username={student.username}
              img={student.profilePhoto}
              codeWars={student.codewars}
              certifications={student.certifications}
              cohort={student.cohort}
              names={student.names}
              onClick={() => onClick(student.cohort.cohortCode)}
              toggleList={() => toggleList(student.id)}
              isExpanded={expandedList.includes(student.id)}
              isOnTrack={isStudentOnTrack}
            />
          </div>
        );
      })}
    </div>
  );
};

export default StudentList;
