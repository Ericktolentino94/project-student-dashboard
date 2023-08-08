import React from 'react';
import Individual from './Individual';


function handleMouseOver() {
    console.log("Working")
}

const StudentArg = ({students}) => {


    return (
        <div >
            <h2 onClick={handleMouseOver}>Choose a Class by Start Date</h2>
      <h2 className="studentArg">All Students</h2>
      <h2 className="studentArg">Winter 2026</h2>
      <h2 className="studentArg">Fall 2026</h2>
      <h2 className="studentArg">Summer 2026</h2>
      <h2 className="studentArg">Spring 2026</h2>
      <h2 className="studentArg">Winter 2025</h2>
      <h2 className="studentArg">Fall 2025</h2>
      <h2 className="studentArg">Summer 2025</h2>
      <h2 className="studentArg">Spring 2025</h2>
      </div>
    );
}

export default StudentArg;
