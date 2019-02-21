import React from 'react';
import Profile from './Profile';
import { v4 } from 'uuid';

class Women extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      masterWomensList: [
        {
          name: 'Brooke Perry',
          age: '30',
          height: '5\' 10',
          weight: '130',
          skills: 'Awesomeness',
          id: v4(),
          likes: 0
        },
        {
          name: 'Kristin Brewer',
          age: '30',
          height: '5\' 6',
          weight: '130',
          skills: 'Pottery',
          id: v4(),
          likes: 0
        },
        {
          name: 'Katrina Hockman',
          age: '28',
          height: '5\' 7',
          weight: '130',
          skills: 'Blank Stares',
          id: v4(),
          likes: 0
        },
        {
          name: 'Ngan Nguyen',
          age: '25',
          height: '5\' 5',
          weight: '130',
          skills: 'Bowling',
          id: v4(),
          likes: 0
        },
        {
          name: 'Paige Williams',
          age: '28',
          height: '5\' 7',
          weight: '130',
          skills: 'Competitive Diving',
          id: v4(),
          likes: 0
        }
      ]
    };
    this.onHandleLikePost = this.onHandleLikePost.bind(this);
    this.onHandleDisLikedPost = this.onHandleDisLikedPost.bind(this);
  }

  onHandleLikePost(id){
    let actors = this.state.masterWomensList.slice();
    actors.forEach(function(actor){
      if (id === actor.id) {

        actor.likes += 1;

      }
    });
    this.setState({masterWomensList: actors});
  }
  onHandleDisLikedPost(id){
    let actors = this.state.masterWomensList.slice();
    actors.forEach(function(actor){
      if (id === actor.id) {

        actor.likes -= 1;

      }
    });
    this.setState({masterWomensList: actors});
  }

  render(){
    return(
      <div>
        <h3>Women</h3>
        {this.state.masterWomensList.map((woman) =>
          <div key={woman.id}>
            <Profile
              likes={woman.likes}
              name={woman.name}
              age={woman.age}
              height={woman.height}
              weight={woman.weight}
              skills={woman.skills}
              key={woman.id}
            />
            <button onClick={() => this.onHandleLikePost(woman.id)}>like</button>
            <button onClick={() => this.onHandleDisLikedPost(woman.id)}>dislike</button>
            <hr/>
          </div>
        )}
      </div>
    );
  }
}

export default Women;
