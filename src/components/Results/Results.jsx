import React from 'react';
import bbc from '../../assets/images/bbc-news-logo.png';
import icon from '../../assets/images/capitol-hill-icon.png';
import { Link } from 'react-router-dom';
import '../../scss/styles.scss';



function Results(){
  return (
    <div className="resultsPage">
      <div className="topArrange">
        <Link to="/"><img className="capHillIcon" src={icon} alt="sample image"></img></Link>
        <h1 className="site-name">Site Name</h1>
      </div>
      <div className="news-layout">
        <div className="card">
          <img src={bbc} alt="sample image"></img>
          <div className="card-container">
            <h4><b>Sample text for a news title that might be pretty lengthy so check if this works</b></h4>
            <p>By author author author</p>
            <p><em>Published on:</em> 05-01-2019</p>
          </div>
        </div>
        <div className="card">
          <img src={bbc} alt="sample image"></img>
          <div className="card-container">
            <h4><b>Sample text for a news title that might be pretty lengthy so check if this works</b></h4>
            <p>By author author author</p>
            <p><em>Published on:</em> 05-01-2019</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// News.propTypes = {
//   img: PropTypes.string,
//   title: PropTypes.string,
//   author: PropTypes.string,
//   date: PropTypes.string
// };

export default Results;
