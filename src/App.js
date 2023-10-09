import React, { useEffect, useState } from 'react';
import './App.css';
import Contact from './Contact';

const App = () => {

  const [results, setResults] = useState([]);

  useEffect(() => {

    fetch("https://randomuser.me/api/?results=100")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setResults(data.results);
      });

  },[]);

  return (
    <div className='App'>
      <h2>Contact List</h2>
      {results.map((result, index) => {
        return (
            <Contact key={index}
              avatarurl={result.picture.large}
              title={result.name.title}
              firstName={result.name.first}
              lastName={result.name.first}
              gender={result.gender}
              country={result.location.country}
              city={result.location.city}
              email={result.email}
              age={result.dob.age}
            />
        )
      })}



    </div>
  )
}

export default App;