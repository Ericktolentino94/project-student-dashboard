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
      <p style={{ color: isOnTrack.color }}>
        {" "}
        Current Status: {isOnTrack ? "On Track" : "Off Track"}
      </p>
      <img src={img} alt="" width="200" height="200"></img>
      <h3>
        {names.preferredName} {names.middleName} {names.surname}
      </h3>
      <h2>{username}</h2>
      <h2 style={{ color: "green" }}>
        Birthday:<span style={{ color: "black" }}> {dob}</span>{" "}
      </h2>
      <button
        onClick={() => setShowMore(!showMore)}
        style={{ color: "white", backgroundColor: "green" }}
      >
        {!showMore ? "Show More..." : "Show Less..."}
      </button>
      {showMore ? (
        <div className="showMore">
          <p className="insideMore">
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
              Goal:{" "}
              <strong style={{ color: "black" }}>{codeWars.goal.total}</strong>{" "}
              Percentage of Goal Achieved:
              <strong style={{ color: "black" }}>
                {codeWars.goal.lastWeek}
              </strong>
            </span>
          </p>
          <p className="insideMore">
            Scores:
            <span style={{ color: "green" }}>
              Assignments:
              <strong style={{ color: "black" }}>
                {cohort.scores.assignments * 100}%
              </strong>{" "}
              Projects:
              <strong style={{ color: "black" }}>
                {cohort.scores.projects * 100}%
              </strong>
              Assesments:{" "}
              <strong style={{ color: "black" }}>
                {cohort.scores.assessments * 100}%
              </strong>
            </span>
          </p>
          <p className="insideMore">
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
            <form className="form" onSubmit={handleSubmit}>
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
              <button style={{ color: "white", backgroundColor: "green" }}>
                Add Note{" "}
              </button>
            </form>
            {studentNotes.map((note, index) => (
              <div className="notes" key={index}>
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
