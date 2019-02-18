import React from 'react';
import PropTypes from 'prop-types';
import Profile from './Profile';

function NewFaces(props) {

  return(
    <div>
      <h3>New Faces</h3>
      {props.actorList.map((actor, index) =>
        <Profile
          name={actor.name}
          age={actor.age}
          height={actor.height}
          weight={actor.weight}
          skills={actor.skills}
          key={index}
        />
      )}
    </div>
  );
}

NewFaces.propTypes = {
  actorList: PropTypes.array
};

export default NewFaces;
