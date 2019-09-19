import React from "react";
import { withRouter, Link, Redirect } from "react-router-dom";
import { Button } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import { RadioGroup, RadioButton } from "react-radio-buttons";

class GameSettings extends React.Component {
  constructor() {
    super();
    this.onRoundCountChange = this.onRoundCountChange.bind(this);
    this.onTeamCountChange = this.onTeamCountChange.bind(this);
    this.onTeamNameChange = this.onTeamNameChange.bind(this);
    this.state = {
      teams_num: 1,
      rounds_num: 1,
      teams: [{ name: "" }],
      allFieldsValid: false
    };
  }
  onTeamNameChange(event, index) {
    let teams = this.state.teams;
    teams[index].name = event.target.value;
    this.setState({ teams: teams });
  }

  onRoundCountChange(event) {
    this.setState({ rounds_num: event.target.value });
  }

  onTeamCountChange(value) {
    let teams = this.state.teams;
    let teams_num = value;
    let old_num = teams.length;
    teams.length = teams_num;
    teams.fill({ name: "" }, old_num);
    this.setState({ teams_num: value, teams: teams });
  }

  start_game () {
    if (this.state.teams.some(item => "" === item.name)) return;
    localStorage.setItem("teams_count", this.state.teams_num);
    localStorage.setItem("current_team", 1);
    localStorage.setItem("rounds_count", this.state.rounds_num);
    localStorage.setItem("current_round", 1);
    localStorage.setItem("teams", JSON.stringify(this.state.teams));
    this.state.teams.forEach(team => {
      localStorage.setItem(team.name + "_score", 0);
      localStorage.setItem(team.name + "_streak", 0);
    });
    console.log("here")
    // this.props.load_questions();
    // this.props.history.push('/round');
  };

  componentDidMount() {

  }

  render() {
    return (
      <div className="container">
        <div className="row padded-row">
          <div className="col-4">
            <img
              className="template-logo"
              alt=""
              src={require("../../img/logo.png")}
            />
          </div>
        </div>
        <div className="row">
          <Fade left>
            <div className="col-2" />
            <div className="col-8 settings-container">
              <div className="row">
                <div className="col-2" />
                <div className="col-8">
                  <div className="row radio">
                    <label htmlFor="">Number of teams</label> <br />
                    <RadioGroup
                      style={{ display: "contents" }}
                      onChange={this.onTeamCountChange}
                      horizontal
                    >
                      {Array.from(Array(8).keys()).map((value, index) => {
                        return (
                          <RadioButton
                            value={value + 1}
                            iconSize="0"
                            iconInnerSize="0"
                          >
                            {value + 1}
                          </RadioButton>
                        );
                      })}
                    </RadioGroup>
                  </div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-2" />
                <div className="col-8">
                  <label htmlFor="">Number of rounds</label>
                  <div className="input">
                    <input
                      type="number"
                      name=""
                      id=""
                      onChange={e => this.onRoundCountChange(e)}
                      value={this.state.rounds_num}
                      min={1}
                    />
                  </div>
                </div>
              </div>
              <br />
              <hr />
              <div className="row">
                <div className="col-2" />
                <div className="col-8">
                  {this.state.teams.map((team, index) => (
                    <div>
                      <label htmlFor="">Team ({index + 1}) name *</label>
                      <br />
                      <div className="input">
                        <input
                          type="text"
                          name=""
                          id=""
                          value={team.name}
                          onChange={e => this.onTeamNameChange(e, index)}
                          defaultValue="TeamName"
                          required
                        />
                      </div>
                    </div>
                  ))}
                  <h6>(*) required fields</h6>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-4">
                  <div className="demo-button white-button">
                    <Link className="white-button" variant="primary" to="/rand">
                      DEMO
                    </Link>
                  </div>
                </div>
                <div className="col-4" />
                <div className="col-4">
                  <div className="start-game-button">
                    <Link
                      className="white-button"
                      variant="primary"
                      onClick={this.start_game}
                    >
                      START GAME
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default withRouter(GameSettings);
