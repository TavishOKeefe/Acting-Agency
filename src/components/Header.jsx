import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  const navStyle = {
    float: 'left',
    textAlign: 'left'

  };


  return(
    <div>
      <h1> OH-K Agency</h1>
      <div style={navStyle}>
        <Link to="/actors">Actors</Link><br/>
        <Link to="/get-scouted">Get Scouted</Link><br/>
        <Link to="/">Home</Link><br/>
      </div>
    </div>
  );
}

export default Header;
