import React from 'react';
import icon from '../../assets/images/capitol-hill-icon.png';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../scss/styles.scss';



function Results(props){
  console.log(props.info);
  return (
    <div className="resultsPage">
      <div className="topArrange">
        <Link to="/"><img className="capHillIcon" src={icon} alt="sample image"></img></Link>
        <h1 className="site-name">Site Name</h1>
      </div>
      <div className="news-layout">
        <div className="card">
          <img src={props.image} alt="sample image"></img>
          <div className="card-container">
            <h4><b>{props.title}</b></h4>
            <p>Source: {props.source}</p>
            <p><em>Published on:</em> {props.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

Results.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  source: PropTypes.string,
  date: PropTypes.string,
  info: PropTypes.array,
};

export default Results;
