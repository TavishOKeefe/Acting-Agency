import React from 'react';
import PropTypes from 'prop-types';

function Profile(props){
  return(
    <div>
      <h4> {props.name}</h4>
      <ul>
        <li>Age: {props.age}</li>
        <li>Height: {props.height}</li>
        <li>Weight: {props.weight}</li>
        <li>Skills: {props.skills}</li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string,
  age:  PropTypes.string,
  height:  PropTypes.string,
  weight: PropTypes.string,
  skills:  PropTypes.string
};

export default Profile;
