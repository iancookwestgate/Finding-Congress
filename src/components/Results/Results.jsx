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

  CallDate(senatorChoice) {
    let currentDay = Date.now();
    let time = currentDay - 18000000;
    let currentTime = new Date(time);
    let day = currentTime.getDate();
    let dayString;
    if(day < 10) {
      dayString = "0" + day.toString();
      day = parseInt(dayString);
    }
    let year = currentTime.getFullYear();
    let month = currentTime.getMonth();
    let monthString;
    if(month < 10) {
      monthString = "0" + month.toString();
      month = parseInt(monthString);
    }
    return `https://newsapi.org/v2/everything?q=${senatorChoice}&from=${year}-${month}-${day}&pageSize=100&sortBy=popularity&apiKey=021335e9d273430db49ad77537475195`;
  }

  componentDidMount() {
    let senatorChoice = this.state.newsPrep[0].name;
    senatorChoice = senatorChoice.split(" ").join("-");
    let url = this.CallDate(senatorChoice);
    return fetch(url).then(
      response => response.json(),
    ).then((input) => {
      if (input) {
        let newsGather = this.state.newsArray;
        console.log(newsGather);
        input.articles.forEach(function(el) {
          newsGather.push(el);
        });
        this.setState({newsArray: newsGather});
        const htmlVar = this.state.newsArray.map((article, index) =>
          <Article image={article.urlToImage}
            title={article.title}
            source={article.source.name}
            date={article.publishedAt}
            link={article.url}
            key={index}/>
        );
        this.setState({html: htmlVar});
      } else {
        alert("News api isn't accessing!");
      }
    });
  }

  render() {
    return (
      <div className="resultsPage">
        <div className="topArrange">
          <Link to="/"><img className="capHillIcon" src={icon} alt="sample image"></img></Link>
          <h1 className="site-name">Finding Congress</h1>
        </div>
        <div className="news-layout">
          {this.state.html}
        </div>
      </div>
    );
  }
}

Results.propTypes = {
  image: PropTypes.string,
  url: PropTypes.string,
  title: PropTypes.string,
  source: PropTypes.string,
  date: PropTypes.string,
  info: PropTypes.array,
  newsArray: PropTypes.array,
  newsPrep: PropTypes.array,
};

export default Results;
