import "./app.css";
import React from "react";
import { useState } from "react";
import Header from "./header";
import StudentList from "./StudentList";
import students from "./data/data.json";
import StudentArg from "./StudentArg";

console.log(students);

function App() {
  return (
    <div>
      <Header />
      <p className="pageLayout">
        <StudentArg students={students}/>
      <ul>
        <StudentList students={students} />;
      </ul>
      </p>
    </div>
  );
}

export default App;
