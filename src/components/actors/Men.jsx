import React from 'react';
import Profile from './Profile';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

const mensList = [
  {
    name: 'Tavish OKeefe',
    age: '31',
    height: '5\' 10',
    weight: '170',
    skills: 'Looking Slick all day',
    id: v4(),
    likes: 0
  },
  {
    name: 'Charley McGowan',
    age: '31',
    height: '5\' 9',
    weight: '170',
    skills: 'Drums',
    id: v4(),
    likes: 0
  },
  {
    name: 'Alex Garcia',
    age: '29',
    height: '5\' 7',
    weight: '170',
    skills: 'Firefighting',
    id: v4(),
    likes: 0
  },
  {
    name: 'Chris Cahill',
    age: '28',
    height: '6\' 0',
    weight: '170',
    skills: 'Tennis',
    id: v4(),
    likes: 0
  },
  {
    name: 'Ralph Perdomo',
    age: '33',
    height: '5\' 10',
    weight: '170',
    skills: 'Bagels',
    id: v4(),
    likes: 0
  }
];



function Men(props){

  function like(key) {
    props.likePost(key);
  }

  function disLike(key) {
    props.disLikePost(key);
  }

  return(
    <div>
      <h3>Men</h3>
      {mensList.map((man) =>
        <div key={man.id}>
          <Profile
            likes={man.likes}
            name={man.name}
            age={man.age}
            height={man.height}
            weight={man.weight}
            skills={man.skills}
            key={man.id}
          />
          <button onClick={() => like(man.id)}>like</button>
          <button onClick={() => disLike(man.id)}>dislike</button>
        </div>
      )}
    </div>
  );
}

Men.propTypes = {

  likePost: PropTypes.func,
  disLikePost: PropTypes.func,
};

export default Men;
