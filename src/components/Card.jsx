import React from 'react';
import blank from '../assets/images/blank-profile-pic.png';
import '../scss/styles.scss';


function Card(props) {
  return (
    <div className="congress-layout">
      <div className="card">
        <img src={blank} alt="sample image"></img>
        <div className="card-container">
          <h4><b>{props.name}</b></h4>
          <p>{props.senateYear}</p>
          <p>{props.party}</p>
          <p>Next Election: {props.nextUp}</p>
        </div>
      </div>
    </div>

  );
}

// <div className="congress-layout">
//   <div className="card">
//     <img src={merkley} alt="sample image"></img>
//     <div className="card-container">
//       <h4><b>Jeff Merkley</b></h4>
//       <p>Senator, First Class</p>
//       <p>Democratic Party</p>
//       <p>Next Election: 2020</p>
//     </div>
//   </div>
//   <div className="card">
//     <img src={wyden} alt="sample image"></img>
//     <div className="card-container">
//       <h4><b>Ron Wyden</b></h4>
//       <p>Senator, Second Class</p>
//       <p>Democratic Party</p>
//       <p>Next Election: 2022</p>
//     </div>
//   </div>
// </div>

export default Card;
