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
import Randomizer3 from "./Components/Randomizer3/Randomizer3";
import Randomizer4 from "./Components/Randomizer4/Randomizer4";
import RandomizerParent from "./Components/RandomizerParent/RandomizerParent";
import Welcome from "./Components/Welcome/Welcome";
import './App.css';
import { createBrowserHistory } from 'history'; // you need to install this package
let history = createBrowserHistory();

class App extends Component {
  constructor(){
    super();
    this.state = {
      history: history,
      categories:[
        "Science",
        "Sports", 
        "World",
        "History",
        "Medicine",
        "Music",
        "Intelligence"
      ]
    }
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
                <Route path='/rand' render={(props) => <Randomizer1 {...this.props} />} />

                <Route path='/' render={(props) => <RandomizerParent {...this.props} categories={this.state.categories}/>} />
            </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default (App);
