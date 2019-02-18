import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Actors from './actors/Actors';
import GetScouted from './GetScouted';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';


const appStyles = {

  header: {
    display: 'inline-block',
    position: 'fixed',
    background: 'red',
    top: '0',
    width: '100%',
    float: 'left',
    clear: 'both',
    marginBottom: '80'
  },

  body: {
    display: 'inline-block',
    background: 'blue',
    position: 'absolute',
    float: 'left',
    clear: 'both'
  },

  footer: {
    display: 'inline-block',
    position: 'fixed',
    bottom: '0',
    background: 'green',
    width: '100%',
    float: 'left',
    clear: 'both'
  }

};


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterActorList: []
    };
    this.handleAddingNewActorToList = this.handleAddingNewActorToList.bind(this);
  }

  handleAddingNewActorToList(newActor){
    var newMasterActorList = this.state.masterActorList.slice();
    newMasterActorList.push(newActor);
    this.setState({masterActorList: newMasterActorList});
  }

  render(){
    return (
      <div>
        <div>
          <Header/>
        </div>

        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/actors' render={()=><Actors actorList={this.state.masterActorList} />} />
            <Route exact path='/get-scouted' render={()=><GetScouted onNewActorCreation={this.handleAddingNewActorToList} />}/>
          </Switch>
        </div>

        <div style={appStyles.footer}>
          <Footer/>
        </div>

      </div>
    );
  }
}

export default App;
