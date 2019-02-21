import React from 'react';
import PropTypes from 'prop-types';
import Profile from './Profile';

function NewFaces(props) {


  function like(key) {
    props.likePost(key);
  }

  function disLike(key) {
    props.disLikePost(key);
  }


  return(
    <div>
      <h3>New Faces</h3>
      {props.actorList.map((actor) =>
        <div key={actor.id}>
          <Profile
            likes={actor.likes}
            name={actor.name}
            age={actor.age}
            height={actor.height}
            weight={actor.weight}
            skills={actor.skills}
            key={actor.id}
          />
          <button onClick={() => like(actor.id)}>like</button>
          <button onClick={() => disLike(actor.id)}>dislike</button>
        </div>
      )}
    </div>
  );

}

NewFaces.propTypes = {

  actorList: PropTypes.array,
  likePost: PropTypes.func,
  disLikePost: PropTypes.func,
};

export default NewFaces;
