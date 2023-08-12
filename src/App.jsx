import "./app.css";
import React from "react";
import { useState } from "react";
import Header from "./header";
import StudentList from "./StudentList";
import studentsData from "./data/data.json";
import StudentArg from "./StudentArranger";

console.log(studentsData)

function App() {
  const [students, setStudents] = useState(studentsData);
  const [studentList, setStudentList] = useState([...students]);
  const [expandedList, setExpandedList] = useState([]);
  const [showMore, setShowMore] = useState(false)

function toggleShowMore(){
  setShowMore(!showMore)
}

  const filterStudentsByCohort = (cohort) => {
    if (cohort) {
      const filteredList = students.filter(
        (student) => student.cohort.cohortCode === cohort
      );
      setStudentList([...filteredList]);
    } else {
      setStudentList(students);
    }
  };

  const toggleList = (studentId) => {
    if(expandedList.includes(studentId)) {
      setExpandedList(expandedList.filter(id => id !== studentId))
    } else {
      setExpandedList([...expandedList, studentId])
    }
  }

  return (
    <div>
      <Header />
      <span className="pageLayout">
        <StudentArg
          onClick={filterStudentsByCohort}
          students={students}
          setStudentList={setStudentList}
        />
        <StudentList
          studentList={studentList}
          setStudentList={setStudentList}
          students={students}
          toggleShowMore={toggleShowMore}
          showMore={showMore}
          expandedList={expandedList}

        />
      </span>
    </div>
  );
}

export default App;
