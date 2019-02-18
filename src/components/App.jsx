import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Actors from './actors/Actors';
import GetScouted from './GetScouted';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';




function App(){
  const appStyles = {

    header: {
      position: 'fixed',
      background: 'red',
      top: '0'
    },

    body: {
      height: '500px',
      width: '500px',
      background: 'blue',
      position: 'absolute',
      clear: 'both'
    },

    footer: {
      position: 'fixed',
      bottom: '0',
      background: 'green'
    }

  }

  return (
    <div>
      <div style={appStyles.header}>
        <Header/>
      </div>

      <div style={appStyles.body}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/actors' component={Actors} />
          <Route exact path='/get-scouted' component={GetScouted} />
        </Switch>
      </div>

      <div style={appStyles.footer}>
        <Footer/>
      </div>

    </div>
  );
}

export default App;
