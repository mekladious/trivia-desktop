import React, { Component } from "react";
// import { withRouter } from 'react-router-dom';
// import PageTransition from 'react-router-page-transition';
import { Switch, Route, BrowserRouter, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { csv } from "d3-request";

import GameSettings from "./Components/GameSettings/GameSettings";
import RoundResults from "./Components/RoundResults/RoundResults";
import RoundNumber from "./Components/RoundNumber/RoundNumber";
import FinalResults from "./Components/FinalResults/FinalResults";
import Question from "./Components/Question/Question";
import Randomizer1 from "./Components/Randomizer1/Randomizer1";
import Randomizer2 from "./Components/Randomizer2/Randomizer2";
import Randomizer3 from "./Components/Randomizer3/Randomizer3";
import Randomizer4 from "./Components/Randomizer4/Randomizer4";
import RandomizerParent from "./Components/RandomizerParent/RandomizerParent";
import Welcome from "./Components/Welcome/Welcome";
import Goodbye from "./Components/Goodbye/Goodbye";
import "./App.css";
import { createBrowserHistory } from "history"; // you need to install this package
let history = createBrowserHistory();

class App extends Component {
  constructor() {
    super();
    this.state = {
      history: history,
      categories: [
        "Science",
        "Sports",
        "World",
        "History",
        "Medicine",
        "Music",
        "Intelligence"
      ],
      categoriesObj: [
        { id: 1, img: require("./img/science.png"), label: "Science" },
        { id: 2, img: require("./img/sport.png"), label: "Sports" },
        { id: 3, img: require("./img/world.png"), label: "World" },
        { id: 4, img: require("./img/history.png"), label: "History" },
        { id: 5, img: require("./img/medicine.png"), label: "Medicine" },
        { id: 6, img: require("./img/music.png"), label: "Music" },
        { id: 7, img: require("./img/intel.png"), label: "Intelligence" }
      ]
    };
  }

  get_current_round = () => {
    return parseInt(localStorage.getItem("current_round"));
  };

  get_current_team = () => {
    let team_number = parseInt(localStorage.getItem("current_team"));
    let team_names = JSON.parse(localStorage.getItem("teams"));
    return team_names[team_number - 1];
  };

  get_team_score = name => {
    return parseInt(localStorage.getItem(name + "_score"));
  };

  get_team_streak = name => {
    return parseInt(localStorage.setItem(name + "_streak", 0));
  };

  load_questions = () => {
    csv("Questions⁩/Science_questions.csv", function(error, data) {
      if (error) throw error;
      console.log(data);
    });
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter history={history}>
          <Switch>
            <Route
              path="/settings"
              render={props => (
                <GameSettings
                  {...this.props}
                  load_questions={this.load_questions}
                />
              )}
            />
            <Route
              path="/round"
              render={props => (
                <RoundNumber
                  {...this.props}
                  get_current_round={this.get_current_round}
                  get_current_team={this.get_current_team}
                />
              )}
            />
            <Route
              path="/result"
              render={props => <RoundResults {...this.props} />}
            />
            <Route
              path="/final"
              render={props => <FinalResults {...this.props} />}
            />
            <Route
              path="/question"
              render={props => (
                <Question
                  {...this.props}
                  get_current_round={this.get_current_round}
                  get_current_team={this.get_current_team}
                  get_team_score={this.get_team_score}
                  get_team_streak={this.get_team_streak}
                />
              )}
            />
            <Route
              path="/rand"
              render={props => (
                <RandomizerParent
                  {...this.props}
                  categories={this.state.categories}
                  categoriesObj={this.state.categoriesObj}
                />
              )}
            />
            <Route
              path="/goodbye"
              render={props => <Goodbye {...this.props} />}
            />
            <Route path="/" render={props => <Welcome {...this.props} />} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
