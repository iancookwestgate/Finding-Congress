import React from 'react';
import PropTypes from 'prop-types';
import '../../scss/styles.scss';


function Article(props) {

  return (
    <div>
      <div className="articleLink">
        <a href="https://www.economist.com/">
          <img src={props.image} alt="sample image"></img>
          <div className="article-container">
            <h4><b>{props.title}</b></h4>
            <p>Source: {props.source}</p>
            <p><em>Published on:</em> {props.date}</p>
          </div>
        </a>

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
