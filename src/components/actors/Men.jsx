import React from 'react';
import Profile from './Profile';
import { v4 } from 'uuid';

const mensList = [
  {
    name: 'Tavish OKeefe',
    age: '31',
    height: '5\' 10',
    weight: '170',
    skills: 'Looking Slick all day',
    id: v4()
  },
  {
    name: 'Charley McGowan',
    age: '31',
    height: '5\' 9',
    weight: '170',
    skills: 'Drums',
    id: v4()
  },
  {
    name: 'Alex Garcia',
    age: '29',
    height: '5\' 7',
    weight: '170',
    skills: 'Firefighting',
    id: v4()
  },
  {
    name: 'Chris Cahill',
    age: '28',
    height: '6\' 0',
    weight: '170',
    skills: 'Tennis',
    id: v4()
  },
  {
    name: 'Ralph Perdomo',
    age: '33',
    height: '5\' 10',
    weight: '170',
    skills: 'Bagels',
    id: v4()
  }
];

function Men(){
  return(
    <div>
      <h3>Men</h3>
      {mensList.map((man) =>
        <Profile
          name={man.name}
          age={man.age}
          height={man.height}
          weight={man.weight}
          skills={man.skills}
          key={man.id}
        />
      )}
    </div>
  );
}

export default Men;
