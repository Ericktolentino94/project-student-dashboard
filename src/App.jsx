import "./app.css";
import React from "react";
import { useState } from "react";
import Header from "./header";
import StudentList from "./StudentList";
import studentsData from "./data/data.json";
import StudentArg from "./StudentArranger";





function App() {
  const [student, setStudent] = useState(studentsData)
  const [studentList, setStudentList] = useState([])

  const filterStudentsByCohort = (cohort) => {
    const filteredList = student.filter(student => student.cohort.cohortCode === cohort)
    setStudentList([...filteredList])
    console.log(filteredList)
  }

  return (
    <div>
      <Header />
      <ul className="pageLayout">
        <StudentArg onClick={filterStudentsByCohort} students={student} setStudentList={setStudentList}/>
        <StudentList studentList={studentList} setStudentList={setStudentList}students={student} />
      </ul>
    </div>
  )
}

export default App;
