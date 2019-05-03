import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/styles.scss';

function Selection(){
  return (
    <div className="secondRound"}>
      <Link to="/Results"><button type="submit">Select Representative</button></Link>
      <div className="issueInput">
        <p>Issue: </p>
        <input type="text"></input>
      </div>
    </div>
  );
}

export default Selection;
