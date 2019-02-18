import React from 'react';
import Men from './Men';
import Women from './Women';
import NewFaces from './NewFaces';
import PropTypes from 'prop-types';


function Actors(props){
  return(
    <div>
      <h3>Actors</h3>
      <Men/>
      <Women/>
      <NewFaces actorList={props.actorList}/>
    </div>
  );
}

Actors.propTypes = {
  actorList: PropTypes.array
};

export default Actors;
