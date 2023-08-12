import React from "react";
import { useState } from "react";
const Individual = ({
  key,
  username,
  id,
  dob,
  img,
  cohort,
  certifications,
  scores,
  names,
  onClick,
  codeWars,
  isOnTrack
}) => {
  const [showMore, setShowMore] = useState(false);
    console.log(isOnTrack)

  const [commenter, setCommenter] = useState('');
  const [comment, setComment] = useState ('');
    
  return (
    <div className="card">
        <p>On Track: {isOnTrack ? "Yes" : "No"}</p>
      <img src={img} alt="" width="200" height="200"></img>
      <h3>
        {names.preferredName} {names.middleName} {names.surname}
      </h3>
      <h2>{username}</h2>
      <h2>Birthday: {dob}</h2>
      <button onClick={() => setShowMore(!showMore)}>
        {!showMore ? "Show More..." : "Show Less..."}
      </button>
      {showMore ? (
        <div className="showMore">
          <p>
            Codewards:
            <span>
              Current Total: {codeWars.current.total} Last Week:{" "}
              {codeWars.current.lastWeek} Goal: {codeWars.goal.total} Percentage
              of Goal Achieved:{codeWars.goal.lastWeek}
            </span>
          </p>
          <p>
            Scores:
            <span>
              Assignments:{cohort.scores.assignments} Projects:{" "}
              {cohort.scores.projects} Assesments: {cohort.scores.assessments}{" "}
            </span>
          </p>
          <p>
            Certifications:{" "}
            <span>
              GitHub: {JSON.parse(certifications.github) ? "Yes" : "No"} 
              LinkedIn: {JSON.parse(certifications.linkedin) ? "Yes" : "No"} 
              Mocked Interview: {JSON.parse(certifications.mockInterview) ? "Yes" : "No"} 
              Resume: {JSON.parse(certifications.resume) ? "Yes" : "No" }
              
            </span>
          </p>

        </div>
      ) : null}
      <div className="studentDetails">

      </div>
      
    </div>
  );
};

export default Individual;
