import React from "react";
import { withRouter, Link } from "react-router-dom";
import { thisExpression } from "@babel/types";
import Countdown from "react-countdown-now";
import Timer from "../Timer/Timer";
import Randomizer from "react-randomizer";
import { Redirect } from "react-router-dom";

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.tick = this.tick.bind(this);
    this.state = {
      round_number: 0,
      current_team: {
        name: "",
        score: 0
      },
      countdown_seconds: 10,
      next_question_available: false,
      disable_answers: "",
      correct_answer_sound_url: [
        require("../../aud/correct1.mp3"),
        require("../../aud/correct2.mp3"),
        require("../../aud/correct3.wav"),
        require("../../aud/correct4.wav")
      ],
      wrong_answer_sound_url: [
        require("../../aud/wrong1.mp3"),
        require("../../aud/wrong2.wav"),
        require("../../aud/wrong3.mp3")
      ]
    };
  }

  componentDidMount() {
    this.timer = setInterval(this.tick, 1000);
    let round_number = this.props.get_current_round();
    let name = this.props.get_current_team().name;
    let score = this.props.get_team_score(name);
    let current_team = { name: name, score: score };
    this.setState({ round_number, current_team });
  }

  play_countdown_over_sound() {
    let audio = new Audio(require("../../aud/countdownover.mp3"));
    audio.play();
    audio.onended = () => {
      console.log("move on to next page");
    };
  }

  stop_counter() {
    this.setState({ next_question_available: true });
    clearInterval(this.timer);
    setTimeout(() => {
      //   this.props.history.push("goodbye");
    }, 500);
  }

  tick() {
    if (this.state.countdown_seconds > 0) {
      this.setState({ countdown_seconds: this.state.countdown_seconds - 1 });
    } else {
      this.setState({ disable_answers: "disabled" });
      this.play_countdown_over_sound();
      this.stop_counter();
      // window.location.reload();
    }
  }

  play_correct_sound() {
    let random_number = Randomizer.randomNumber(
      0,
      this.state.correct_answer_sound_url.length - 1
    );
    let audio = new Audio(this.state.correct_answer_sound_url[random_number]);
    audio.play();
    audio.onended = () => {
      this.stop_counter();
    };
  }

  play_wrong_sound() {
    let random_number = Randomizer.randomNumber(
      0,
      this.state.wrong_answer_sound_url.length - 1
    );
    let audio = new Audio(this.state.wrong_answer_sound_url[random_number]);
    audio.play();
    audio.onended = () => {
      this.stop_counter();
    };
  }

  answer_correctly() {
    this.setState({ disable_answers: "disabled" });
    this.state.answer_result = "correct";
    this.play_correct_sound();
  }

  answer_incorrectly() {
    this.setState({ disable_answers: "disabled" });
    this.state.answer_result = "wrong";
    this.play_wrong_sound();
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
              <div className="col-3">
                <p>Round {this.state.round_number}</p>
              </div>
              <div className="col-4 category-div">
                <img
                  className="category-icon"
                  alt=""
                  src={require("../../img/worldw.png")}
                />
              </div>
              <div className="col-3 next-button">
                {this.state.next_question_available && (
                  <Link className="white-button" variant="primary" to="/result">
                    next question
                  </Link>
                )}
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-4 team-name">
                <label htmlFor="">{this.state.current_team.name}</label>
              </div>
              {/* <Countdown date={Date.now() + 10000}/> */}
              <div className="col-4">
                <Timer seconds={this.state.countdown_seconds} />
              </div>
              <div className="col-4 team-score">
                <label htmlFor="">Score: {this.state.current_team.score}</label>
              </div>
            </div>
            {/* <br/> */}
            <div className="row">
              <div className="col-1" />
              <div className="col-10 question">
                <p>what is the capital of Peru?</p>
              </div>
            </div>

            <div className="row choices">
              <div className="col-1" />
              <div className="col-10">
                <button
                  className={
                    "choice wrong-choice " + this.state.disable_answers
                  }
                  onClick={() => {
                    this.answer_incorrectly();
                  }}
                >
                  A. Santiago
                </button>
              </div>
            </div>
            <div className="row choices">
              <div className="col-1" />
              <div className="col-10">
                <button
                  className={
                    "choice wrong-choice " + this.state.disable_answers
                  }
                  onClick={() => {
                    this.answer_incorrectly();
                  }}
                >
                  B. Quito
                </button>
              </div>
            </div>
            <div className="row choices">
              <div className="col-1" />
              <div className="col-10">
                <button
                  className={
                    "choice correct-choice " + this.state.disable_answers
                  }
                  onClick={() => {
                    this.answer_correctly();
                  }}
                >
                  C. Lima
                </button>
              </div>
            </div>
            <div className="row choices">
              <div className="col-1" />
              <div className="col-10">
                <button
                  className={
                    "choice wrong-choice " + this.state.disable_answers
                  }
                  onClick={() => {
                    this.answer_incorrectly();
                  }}
                >
                  D. San Jose
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Question);
