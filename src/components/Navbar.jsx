import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/styles.scss';

function Navbar(){
  return (
    <div className="bg-nvy navbar">
      <Link to="/"><a>Home</a></Link>
      <Link to="/"><a>About</a></Link>
    </div>
  );
}

export default Navbar;
