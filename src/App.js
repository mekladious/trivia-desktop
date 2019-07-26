import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';
// import PageTransition from 'react-router-page-transition';
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'

import GameSettings from "./Components/GameSettings/GameSettings";
import RoundResults from "./Components/RoundResults/RoundResults";
import FinalResults from "./Components/FinalResults/FinalResults";
import Question from "./Components/Question/Question";
import Randomizer from "./Components/Randomizer/Randomizer";
import Welcome from "./Components/Welcome/Welcome";
import './App.css';
import { createBrowserHistory } from 'history'; // you need to install this package
let history = createBrowserHistory();

class App extends Component {
  constructor(){
    super();
    this.state = {history: history}
  }
  render() {
    return (
      <div className="App">
          <BrowserRouter history={history}>
            <Switch>
              
                <Route path='/settings' render={(props) => <GameSettings {...this.props} />} />
                <Route path='/round' render={(props) => <RoundResults {...this.props} />} />
                <Route path='/final' render={(props) => <FinalResults {...this.props} />} />
                <Route path='/question' render={(props) => <Question {...this.props} />} />
                <Route path='/rand' render={(props) => <Randomizer {...this.props} />} />

                <Route path='/' render={(props) => <Welcome {...this.props} />} />
            </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default (App);
