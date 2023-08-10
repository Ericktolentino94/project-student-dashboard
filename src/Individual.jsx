import React from 'react';
import { useState } from 'react';
const Individual = ({key, username, id, dob, img, certifications, cohort, names, onClick}) => {
const [showMore, setShowMore] = useState(false)




    return (<div className="card">
                <img src={img} alt="" width="200" height="200"></img>
                <h3>{names.preferredName} {names.middleName} {names.surname}</h3>
                <h2>{username}</h2>
                <h2>Birthday: {dob}</h2>
                <button onClick={ () => setShowMore(!showMore)}>Show More...</button>
                
    </div>
    )
}

export default Individual;
