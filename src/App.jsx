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

  return (
    <div>
      <Header />
      <ul className="pageLayout">
        <StudentArg students={student}/>
        <StudentList students={student} />
      </ul>
    </div>
  )
}

export default App;
