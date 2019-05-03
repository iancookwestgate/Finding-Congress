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
            <h4><b>Sample text for a news title that might be pretty lengthy so check if this works</b></h4>
            <p>By author author author</p>
            <p>Published date: 05-01-2019</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Results;
