import React from 'react';
import Profile from './Profile';
import { v4 } from 'uuid';


const womensList = [
  {
    name: 'Brooke Perry',
    age: '30',
    height: '5\' 10',
    weight: '130',
    skills: 'Awesomeness',
    id: v4()
  },
  {
    name: 'Kristin Brewer',
    age: '30',
    height: '5\' 6',
    weight: '130',
    skills: 'Pottery',
    id: v4()
  },
  {
    name: 'Katrina Hockman',
    age: '28',
    height: '5\' 7',
    weight: '130',
    skills: 'Blank Stares',
    id: v4()
  },
  {
    name: 'Ngan Nguyen',
    age: '25',
    height: '5\' 5',
    weight: '130',
    skills: 'Bowling',
    id: v4()
  },
  {
    name: 'Paige Williams',
    age: '28',
    height: '5\' 7',
    weight: '130',
    skills: 'Competitive Diving',
    id: v4()
  }
];


function Women(){
  return(
    <div>
      <h3>Women</h3>
      {womensList.map((woman) =>
        <Profile
          name={woman.name}
          age={woman.age}
          height={woman.height}
          weight={woman.weight}
          skills={woman.skills}
          key={woman.id}
        />
      )}
    </div>
  );
}

export default Women;
