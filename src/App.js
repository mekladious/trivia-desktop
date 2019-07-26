import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';
// import PageTransition from 'react-router-page-transition';
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'

import GameSettings from "./Components/GameSettings/GameSettings";
import RoundResults from "./Components/RoundResults/RoundResults";
import FinalResults from "./Components/FinalResults/FinalResults";
import Question from "./Components/Question/Question";
import Randomizer1 from "./Components/Randomizer1/Randomizer1";
import Randomizer2 from "./Components/Randomizer2/Randomizer2";
import Welcome from "./Components/Welcome/Welcome";
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
          <BrowserRouter>
            <Switch>
              
                <Route path='/settings' render={(props) => <GameSettings {...this.props} />} />
                <Route path='/round' render={(props) => <RoundResults {...this.props} />} />
                <Route path='/final' render={(props) => <FinalResults {...this.props} />} />
                <Route path='/question' render={(props) => <Question {...this.props} />} />
                <Route path='/rand' render={(props) => <Randomizer1 {...this.props} />} />

                <Route path='/' render={(props) => <Randomizer2 {...this.props} />} />
            </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default (App);
