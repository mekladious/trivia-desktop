import React from "react";
import { withRouter, Link } from "react-router-dom";

class RoundResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = { scores: [], active_game: false };
  }
  componentDidMount() {
    let scores = this.props.get_results();
    scores.sort(function(a, b) {
      return parseFloat(b.score) - parseFloat(a.score);
    });
    let active_game = localStorage.getItem("active_game") == "true";
    this.setState({ scores, active_game });
  }

  navigate() {
    if (this.state.active_game) this.props.history.push("/round");
    else this.props.history.push("/goodbye");
  }
  get_next_button_message() {
    return this.state.active_game ? "Next" : "END GAME";
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
          <div className="col-2" />
          <div className="col-8 question-container">
            <div className="row">
              <div className="col-1" />
              <div className="col-3" />
              <div className="col-4 category-div" />
              <div className="col-3 next-button">
                <Link
                  className="white-button"
                  variant="primary"
                  onClick={() => this.navigate()}
                >
                  {this.get_next_button_message()}
                </Link>
              </div>
            </div>
            <br />

            <div className="row choices">
              <div className="col-1" />
              <div className="col-10">
                <div className="row score score-title">
                  <div className="col-4">
                    <label htmlFor="">TEAM NAME</label>
                  </div>
                  <div className="col-4" />
                  <div className="col-4 ">
                    <label htmlFor="">SCORE</label>
                  </div>
                </div>
                {this.state.scores.map((team, index) => (
                  <div>
                    <div className="row score score-field">
                      <div className="col-4">
                        <label htmlFor="">{team.name}</label>
                      </div>
                      <div className="col-4" />
                      <div className="col-4 ">
                        <label htmlFor="">{team.score}</label>
                      </div>
                    </div>
                    <br />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(RoundResults);
