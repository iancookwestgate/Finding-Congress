import React from 'react';
import blank from '../assets/images/blank-profile-pic.png';
import PropTypes from 'prop-types';
import '../scss/styles.scss';


function Card(props) {

  function handleSenatorClick() {
    props.onCardClick({
      name: props.name,
    });
    return;
  }

  return (
    <div onClick={handleSenatorClick} className="congress-layout">
      <div className="card">
        <img src={blank} alt="sample image"></img>
        <div className="card-container">
          <p><b>{props.name}</b> - {props.senateYear}</p>
          <p>{props.party}</p>
          <p><em>Next Election:</em> {props.nextUp}</p>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  senateYear: PropTypes.string,
  party: PropTypes.string,
  nextUp: PropTypes.string,
  onCardClick: React.PropTypes.func,
};


export default Card;
