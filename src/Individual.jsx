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
  isOnTrack,
}) => {
  const [showMore, setShowMore] = useState(false);

  const [commenter, setCommenter] = useState("");
  const [comment, setComment] = useState("");
  const [notes, setNotes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (commenter && comment) {
      const newNote = {
        id: id,
        commenter: commenter,
        comment: comment,
      };
      setNotes([...notes, newNote]);
      setCommenter("");
      setComment("");
    }
  };

  const studentNotes = notes.filter((note) => note.id === id);

  return (
    <div className="card">
      <p style={{color: isOnTrack.color}}>Student on Track to Graduate: {isOnTrack ? "Yes" : "No"}</p>
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
            <span style={{ color: "green" }}>
              Current Total:{" "}
              <strong style={{ color: "black" }}>
                {codeWars.current.total}
              </strong>{" "}
              Last Week:{" "}
              <strong style={{ color: "black" }}>
                {codeWars.current.lastWeek}
              </strong>
              Goal: <strong style={{ color: "black" }}>
              {codeWars.goal.total}
              </strong> Percentage of Goal Achieved:
              <strong style={{ color: "black" }}>
                {codeWars.goal.lastWeek}
              </strong>
            </span>
          </p>
          <p>
            Scores:
            <span style={{ color: "green" }}>
              Assignments:
              <strong style={{ color: "black" }}>
                {cohort.scores.assignments}
              </strong>{" "}
              Projects:
              <strong style={{ color: "black" }}>
                {cohort.scores.projects}
              </strong>
              Assesments:{" "}
              <strong style={{ color: "black" }}>
                {cohort.scores.assessments}
              </strong>
            </span>
          </p>
          <p>
            Certifications:
            <span style={{ color: "green" }}>
              GitHub: {JSON.parse(certifications.github) ? "✅" : "❌"}
              LinkedIn: {JSON.parse(certifications.linkedin) ? "✅" : "❌"}
              Mocked Interview:{" "}
              {JSON.parse(certifications.mockInterview) ? "✅" : "❌"}
              Resume: {JSON.parse(certifications.resume) ? "✅" : "❌"}
            </span>
          </p>

          <div className="oneOnOne">
            <h1>
              <strong>1-on-1 Notes</strong>
            </h1>
            <form onSubmit={handleSubmit}>
              <label>Commenter Name </label>
              <input
                type="text"
                value={commenter}
                onChange={(e) => setCommenter(e.target.value)}
              ></input>

              <label>Comment </label>
              <input
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <button>Add Note </button>
            </form>
            {studentNotes.map((note, index) => (
              <div key={index}>
                <p>
                  <strong>{note.commenter}</strong> {note.comment}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Individual;
