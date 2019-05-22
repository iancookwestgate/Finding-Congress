import React from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';
import icon from '../assets/images/capitol-hill-icon.png';
import capitol from '../assets/images/Capitol-Dome-Night-Light-Blur.jpg';
import '../scss/styles.scss';
import PropTypes from 'prop-types';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stateSelect: "",
      stateText: "",
      activeClass: true,
      stageVisibleOnPage: true,
      masterArray: [],
      html: null,
      stateHtml: null,
      newsHtml: null,
      newsPrep: [],
      newsArray: props.newsArray,
      onChange: props.onChange,
      onNewsPrep: props.onNewsPrep,
    };
    this.disappear = this.disappear.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.apiCall = this.apiCall.bind(this);
    this.handleCardClick = this.handleCardClick.bind(this);
    this.reload = this.reload.bind(this);
  }

  disappear() {
    if (this.state.stageVisibleOnPage === true) {
      this.setState({stageVisibleOnPage: false});
    }
    if (this.state.activeClass === true) {
      this.setState({activeClass: false});
    }
    document.body.style.backgroundImage = {capitol};
  }

  handleCardClick(name) {
    let newsArray = this.state.newsPrep;
    newsArray = [name];
    this.state.onNewsPrep(newsArray);
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
        });
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
        this.disappear();
      } else {
        alert("Something messed up");
      }
    });
  }

  handleChange(event) {
    let index = event.target.selectedIndex;
    this.setState({stateText: event.target[index].text});
    this.setState({stateSelect: event.target.value});
  }

  reload() {
    window.location.reload();
  }

  render() {
    return (
      <div>
        <div className="topArrange">
          <img onClick={this.reload} className="capHillIcon" src={icon} alt="sample image" ></img>
          <h1 className={true===this.state.activeClass? "site-name show" : "site-name hide"}>Finding Congress</h1>
        </div>
        <div className={true===this.state.activeClass? "main-select show" : "main-select hide"}>
          <h2>Learn more about your representatives in the news.</h2>
          <form onSubmit={this.apiCall}>
            <div className="input-area">
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
            </div>
          </form>
        </div>
        <div className={true===this.state.stageVisibleOnPage? "secondRound hide" : "secondRound show"}>
          <span id="rep-text">Select a representative:</span>
          <div className="cardLanding">
            {this.state.html}
          </div>
          <div className="home-input">
            <div className="issueMaster">
              <div id="healthcare" className="issueBox">
                <h2>Healthcare</h2>
              </div>
              <div id="infrastructure" className="issueBox">
                <h2>Infrastructure</h2>
              </div>
              <div id="foreign-policy" className="issueBox">
                <h2>Foreign Policy</h2>
              </div>
              <div id="technology" className="issueBox">
                <h2>Technology</h2>
              </div>
              <div id="climate-change" className="issueBox">
                <h2>Climate Change</h2>
              </div>
              <div id="trade-policy" className="issueBox">
                <h2>Trade Policy</h2>
              </div>
              <div id="abortion" className="issueBox">
                <h2>Abortion</h2>
              </div>
              <div id="immigration" className="issueBox">
                <h2>Immigration</h2>
              </div>
              <div id="military" className="issueBox">
                <h2>Military</h2>
              </div>
              <div id="eu" className="issueBox">
                <h2>European Union</h2>
              </div>
              <div id="welfare" className="issueBox">
                <h2>Welfare</h2>
              </div>
              <div id="space-travel" className="issueBox">
                <h2>Space Travel</h2>
              </div>
            </div>
          </div>
        </div>
        <div className={true===this.state.stageVisibleOnPage? "submitButton hide" : "submitButton show"}>
          <h1>{this.state.stateText}</h1>
          <form>
            <Link to="/Results"><button id="secondButton" type="submit">Search</button></Link>
          </form>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  newsArray: PropTypes.array,
  onChange: PropTypes.func,
  onNewsPrep: PropTypes.func,
};

export default Home;
