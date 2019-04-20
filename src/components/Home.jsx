import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/styles.scss';

function Home(){
  return (
    <div>
      <h1>This is the home component.</h1>
      <Link to="/">Home Link</Link>
    </div>
  );
}

export default Home;
