import React from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';
import icon from '../assets/images/capitol-hill-icon.png';
import '../scss/styles.scss';
import Results from './Results/Results';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stateSelect: "select",
      activeClass: true,
      stageVisibleOnPage: true,
      masterArray: [],
      html: null,
      newsHtml: null,
      newsPrep: [],
      newsArray: []
    };
    this.disappear = this.disappear.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.apiCall = this.apiCall.bind(this);
    this.handleCardClick = this.handleCardClick.bind(this);
    this.newsCall = this.newsCall.bind(this);
  }

  disappear() {
    if (this.state.stageVisibleOnPage === true) {
      this.setState({stageVisibleOnPage: false});
    }
    if (this.state.activeClass === true) {
      this.setState({activeClass: false});
    }
  }

  handleCardClick(name) {
    console.log(name);
    let newsArray = this.state.newsPrep;
    newsArray = [name];
    console.log(newsArray);
    this.setState({newsPrep: newsArray});
    console.log(this.state);
  }

  apiCall(event) {
    event.preventDefault();
    let stateAbbreviation = this.state.stateSelect;
    return fetch(`https://api.propublica.org/congress/v1/members/senate/${stateAbbreviation}/current.json`, {
      headers: {
        "X-API-Key": "qBzsniwfy44MpdRfy4z1WX8bnqsfkxryYtt0hdE4",
      }
    }).then(
      response => response.json(),
    ).then((input) => {
      if (input) {
        let newState = this.state.masterArray;
        input.results.forEach(function(el) {
          newState.push(el);
        })
        console.log(newState);
        this.setState({masterArray: newState});
        const htmlVar = this.state.masterArray.map((card, index) =>
          <Card name={card.name}
            senateYear={card.role}
            party={card.party == "R" ? "Republican" : "Democrat"}
            nextUp={card.next_election}
            key={index}
            onCardClick={this.handleCardClick}/>
        );
        this.setState({html: htmlVar});
        this.disappear()
      } else {
        alert("Something messed up");
      }
    })
  }

  newsCall() {
    let senatorChoice = this.state.newsPrep[0].name;
    return fetch(`https://newsapi.org/v2/everything?q=${senatorChoice}&from=2019-04-08&sortBy=publishedAt&apiKey=021335e9d273430db49ad77537475195`).then(
      response => response.json(),
    ).then((input) => {
      if (input) {
        let newsGather = this.state.newsArray;
        input.articles.forEach(function(el) {
          newsGather.push(el);
        })
        this.setState({newsArray: newsGather});
        console.log(this.state.newsArray);
      } else {
        alert("News api isn't accessing!");
      }
    })
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({stateSelect: event.target.value})
  }

  render() {
    return (
      <div>
        <div className="topArrange">
          <Link to="/"><img className="capHillIcon" src={icon} alt="sample image"></img></Link>
          <h1 className="site-name">Site Name</h1>
        </div>
        <div className={true===this.state.activeClass? "main-select show" : "main-select hide"}>
          <form onSubmit={this.apiCall}>
            <select value={this.state.stateSelect} onChange={this.handleChange}>
              <option defaultValue="">-- Select Your State --</option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
            <button id="firstButton" type="submit">Search</button>
          </form>
        </div>
        <div className={true===this.state.stageVisibleOnPage? "secondRound hide" : "secondRound show"}>
          <div className="cardLanding">
            {this.state.html}
          </div>
          <div class="centered">
            <div class="group">
              <input type="text" id="name" required="required"/>
              <label htmlFor="name">What political issue interests you?</label>
              <div class="bar"></div>
            </div>
          </div>
        </div>
        <div className={true===this.state.stageVisibleOnPage? "submitButton hide" : "submitButton show"}>
          <form onSubmit={this.newsCall}>
            <Link to="/Results" info={this.state.newsArray}><button type="submit">Search</button></Link>
          </form>
        </div>
      </div>
    );
  }
}

export default Home;
