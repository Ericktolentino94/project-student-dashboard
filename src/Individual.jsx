import React from 'react';

const Individual = ({key, username, dob, img, certifications, cohort, names}) => {
    return <div className="card">
                <img src={img} alt="" width="200" height="200"></img>
                <h3>{names.preferredName} {names.middleName} {names.surname}</h3>
                <h2>{username}</h2>
                <h2>Birthday: {dob}</h2>
                <button>Show More...</button>
    </div>
}

export default Individual;
