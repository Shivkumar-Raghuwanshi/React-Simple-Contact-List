import React, { useState } from 'react'
import './App.css'
const Contact = (props) => {

  const [showAge, setShowAge] = useState(false);

  return (
    <div className='contact-card'>
      <img src={props.avatarurl} alt='profile' />
      <div className='user-details'>
        <p><b>Name:</b> {props.title} {props.firstName} {props.lastName}</p>
        <p><b>Gender:</b> {props.gender}</p>
        <p> <b>Country:</b> {props.country}</p>
        <p><b>City:</b> {props.city}</p>
        <p><b>Email:</b> {props.email}</p>

        <button onClick={() => setShowAge(!showAge)}>Show Age</button>
        {showAge && <p><b>Age:</b> {props.age}</p>}

      </div>

    </div>
  )
}
export default Contact