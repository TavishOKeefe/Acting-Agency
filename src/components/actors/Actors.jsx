import React from 'react';
import Men from './Men';
import Women from './Women';
import NewFaces from './NewFaces';
import PropTypes from 'prop-types';


function Actors(props){

  return(
    <div>
      <h2>Actors</h2>
      <Men/>
      <Women />
      <NewFaces actorList={props.actorList} likePost={props.likePost} disLikePost={props.disLikePost}/>
    </div>
  );
}

Actors.propTypes = {
  actorList: PropTypes.array,
  likePost: PropTypes.func,
  disLikePost: PropTypes.func
};

export default Actors;
