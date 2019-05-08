import React from 'react';
import Article from './Article';
import icon from '../../assets/images/capitol-hill-icon.png';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../scss/styles.scss';

class Results extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      newsArray: [],
      newsPrep: props.newsPrep,
      html: null,
    };
  }

  componentDidMount() {
    let senatorChoice = this.state.newsPrep[0].name;
    console.log(senatorChoice);
    return fetch(`https://newsapi.org/v2/everything?q=${senatorChoice}&from=2019-04-08&sortBy=publishedAt&apiKey=021335e9d273430db49ad77537475195`).then(
      response => response.json(),
    ).then((input) => {
      if (input) {
        let newsGather = this.state.newsArray;
        input.articles.forEach(function(el) {
          newsGather.push(el);
        })
        this.setState({newsArray: newsGather});
        const htmlVar = this.state.newsArray.map((article, index) =>
          <Article image={article.urlToImage}
            title={article.title}
            source={article.source.name}
            date={article.publishedAt}/>
        );
        this.setState({html: htmlVar});
      } else {
        alert("News api isn't accessing!");
      }
    })
  }

  render() {
    console.log(this.state.newsPrep[0].name);
    return (
      <div className="resultsPage">
        <div className="topArrange">
          <Link to="/"><img className="capHillIcon" src={icon} alt="sample image"></img></Link>
          <h1 className="site-name">Site Name</h1>
        </div>
            {this.state.html}
      </div>
    );
  }
}

Results.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  source: PropTypes.string,
  date: PropTypes.string,
  info: PropTypes.array,
  newsArray: PropTypes.array,
  newsPrep: PropTypes.array
};

export default Results;
