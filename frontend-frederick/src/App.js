import React, { Component } from 'react';
import logo from './logo.svg';
import Leaderboard from './leaderboard/Leaderboard';
import AdminPage from './adminPage/AdminPage';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (

      <Router>
      <div>    
      <Route exact path="/" component={Leaderboard} />
      <Route exact path="/supersecretpath/" component={AdminPage} />
      </div>
    </Router>


    );
  }
}

export default App;
