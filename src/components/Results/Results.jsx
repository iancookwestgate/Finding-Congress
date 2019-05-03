import React from 'react';
import bbc from '../../assets/images/bbc-news-logo.png';
import '../../scss/styles.scss';

function Results(){
  return (
    <div className="resultsPage">
      <div className="news-layout">
        <div className="card">
          <img src={bbc} alt="sample image"></img>
          <div className="card-container">
            <h4><b>Jeff Merkley</b></h4>
            <p>Senator, First Class</p>
            <p>Democratic Party</p>
            <p>Next Election: 2020</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Results;
