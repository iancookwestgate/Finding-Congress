import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/styles.scss';

function Navbar(){
  return (
    <div>
      <h2>This is the Navbar component.</h2>
      <Link to="/">Home Link</Link>
    </div>
  );
}

export default Navbar;
