import React from 'react';
import { Link } from 'react-router-dom';
import merkley from '../assets/images/Jeff-Merkley.jpg';
import '../scss/styles.scss';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeClass: true,
      stageVisibleOnPage: true
    };
    this.disappear = this.disappear.bind(this);
  }

  disappear() {
    if (this.state.stageVisibleOnPage === true) {
      this.setState({stageVisibleOnPage: false});
    }
    if (this.state.activeClass === true) {
      this.setState({activeClass: false});
    }
  }

  render() {
    return (
      <div>
        <h1 className="site-name">Site Name</h1>
        <div className={true===this.state.activeClass? "main-select show" : "main-select hide"}>
          <select>
            <option disabled selected value="">-- Select Your State --</option>
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
          <button id="firstButton" type="submit" onClick={()=>this.disappear()}>Button</button>
        </div>
        <div className={true===this.state.stageVisibleOnPage? "secondRound hide" : "secondRound show"}>
          <div className="congress-layout">
            <div className="card">
              <img src={merkley} alt="sample image"></img>
              <div className="card-container">
                <h4><b>Jeff Merkley</b></h4>
                <p>Senator, First Class</p>
                <p>Democratic Party</p>
                <p>Next Election: 2020</p>
              </div>
            </div>
          </div>
          <div className="issueInput">
            <p>Issue: </p>
            <input type="text"></input>
          </div>
        </div>
        <Link to="/Results"><button type="submit">Input Selection</button></Link>
      </div>
    );
  }
}



export default Home;
