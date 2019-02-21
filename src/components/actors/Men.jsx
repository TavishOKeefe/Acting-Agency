import React from 'react';
import Profile from './Profile';
import { v4 } from 'uuid';


class Men extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      masterMensList: [
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
      ]
    };
    this.onHandleLikePost = this.onHandleLikePost.bind(this);
    this.onHandleDisLikedPost = this.onHandleDisLikedPost.bind(this);
  }

  onHandleLikePost(id){
    let actors = this.state.masterMensList.slice();
    actors.forEach(function(actor){
      if (id === actor.id) {

        actor.likes += 1;

      }
    });
    this.setState({masterMensList: actors});
  }
  onHandleDisLikedPost(id){
    let actors = this.state.masterMensList.slice();
    actors.forEach(function(actor){
      if (id === actor.id) {

        actor.likes -= 1;

      }
    });
    this.setState({masterMensList: actors});
  }

  render(){
    return(
      <div>
        <h3>Men</h3>
        {this.state.masterMensList.map((man) =>
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
            <button onClick={() => this.onHandleLikePost(man.id)}>like</button>
            <button onClick={() => this.onHandleDisLikedPost(man.id)}>dislike</button>
            <hr/>
          </div>
        )}
      </div>
    );
  }
}

export default Men;
