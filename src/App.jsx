import "./app.css";
import React from "react";
import { useState } from "react";
import Header from "./header";
import StudentList from "./StudentList";
import studentsData from "./data/data.json";
import StudentArg from "./StudentArranger";





function App() {
  const [students, setStudents] = useState(studentsData)
  const [studentList, setStudentList] = useState([...students])
  const [showMore, setShowMore] = useState(false)

  const filterStudentsByCohort = (cohort) => {
  
    const filteredList = students.filter(student => student.cohort.cohortCode === cohort)
   if(!filteredList) {
    setStudentList([...studentList])
   } else {
    setStudentList([...filteredList])
   }
  }

  return (
    <div>
      <Header />
      <ul className="pageLayout">
        <StudentArg onClick={filterStudentsByCohort} students={students} setStudentList={setStudentList}/>
        <StudentList studentList={studentList} setStudentList={setStudentList}students={students} />
      </ul>
    </div>
  )
}

export default App;
