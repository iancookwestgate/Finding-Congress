import React from 'react';
import PropTypes from 'prop-types';
import '../../scss/styles.scss';


function Article(props) {

  return (
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
  );
}

Article.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  source: PropTypes.string,
  date: PropTypes.string,
};


export default Article;
