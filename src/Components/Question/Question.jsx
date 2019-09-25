import React from "react";
import { withRouter, Link } from "react-router-dom";
import { thisExpression } from "@babel/types";
import Countdown from "react-countdown-now";
import { Button } from "react-bootstrap";
import Timer from "../Timer/Timer";
import Randomizer from "react-randomizer";
import { Redirect } from "react-router-dom";
import * as d3 from "d3";

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
      no_answer_music_plays: 0,
      disable_answers: "",
      show_correct_answer: "",
      correct_answer_sound_url: [
        require("../../aud/correct1.mp3"),
        require("../../aud/correct2.mp3"),
        require("../../aud/correct3.wav")
      ],
      wrong_answer_sound_url: [
        require("../../aud/wrong1.mp3"),
        require("../../aud/wrong2.wav"),
        require("../../aud/wrong3.mp3")
      ],
      question: {},
      answers_check: {}
    };
  }

  countdown_audio;
  countdown_over_audio;
  correct_audio;
  incorrect_audio;

  componentDidMount() {
    this.choose_question();
    let round_number = this.props.get_current_round();
    let name = this.props.get_current_team().name;
    let score = this.props.get_team_score(name);
    let current_team = { name: name, score: score };
    this.setState({ round_number, current_team });
    this.timer = setInterval(this.tick, 1000);
    this.play_countdown_music();
  }

  choose_question() {
    let category = localStorage.getItem("current_category");
    console.log(category);
    this.props.categories_files.forEach(item => {
      if (item.category == category) this.assign_question(item.file, category);
    });
  }

  assign_question(file, category) {
    let questions = [];
    d3.csv(file, function(data) {
      questions.push(data);
    }).then(() => {
      let questions_tracker_string = localStorage.getItem(category);
      console.log(category, questions_tracker_string);
      var questions_tracker = questions_tracker_string
        .split(",")
        .map(function(item) {
          return parseInt(item, 10);
        });
      var available_questions_count = parseInt(
        localStorage.getItem(category + "_available")
      );
      let question_index = this.get_random_available_question(
        questions,
        questions_tracker,
        available_questions_count,
        category
      );
      console.log(question_index);
      let question = questions[question_index];
      let answers_check = {};
      answers_check["a"] = question.Answer == "A" ? "correct" : "wrong";
      answers_check["b"] = question.Answer == "B" ? "correct" : "wrong";
      answers_check["c"] = question.Answer == "C" ? "correct" : "wrong";
      answers_check["d"] = question.Answer == "D" ? "correct" : "wrong";

      this.setState({ question, answers_check });
    });
  }

  get_random_available_question(
    questions_list,
    questions_tracker,
    available_questions_count,
    category
  ) {
    if (available_questions_count == 0) {
      let index = Math.floor(Math.random() * questions_list.length);
      return index;
    } else {
      let question_index =
        questions_tracker[Math.floor(Math.random() * questions_tracker.length)];
      let question_tracker_index = questions_tracker.indexOf(question_index);
      if (question_tracker_index > -1) {
        questions_tracker.splice(question_tracker_index, 1);
        localStorage.setItem(category, questions_tracker);
        localStorage.setItem(category + "_available", questions_tracker.length);
        return --question_index;
      }
    }
  }

  play_countdown_music() {
    this.countdown_audio = new Audio(require("../../aud/countdown.mp3"));
    this.countdown_audio.preload = "none";
    this.countdown_audio.play();
  }

  play_countdown_over_sound() {
    this.cancel_streak();
    this.countdown_over_audio = new Audio(
      require("../../aud/countdownover.mp3")
    );
    this.countdown_over_audio.play();
    this.countdown_over_audio.onended = () => {
      this.setState({
        no_answer_music_plays: this.state.no_answer_music_plays + 1
      });
      if (this.state.no_answer_music_plays < 2)
        this.countdown_over_audio.play();
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
    this.correct_audio = new Audio(
      this.state.correct_answer_sound_url[random_number]
    );
    this.correct_audio.play();
  }

  play_wrong_sound() {
    let random_number = Randomizer.randomNumber(
      0,
      this.state.wrong_answer_sound_url.length - 1
    );
    this.incorrect_audio = new Audio(
      this.state.wrong_answer_sound_url[random_number]
    );
    this.incorrect_audio.play();
  }

  increase_score() {
    let current_team_name = this.props.get_current_team().name;
    let current_team_score = this.props.get_team_score(current_team_name);
    current_team_score +=
      10 + Math.floor((this.state.countdown_seconds * 10) / 60);
    console.log(current_team_score);
    localStorage.setItem(current_team_name + "_score", current_team_score);
    let current_team_streak = parseInt(
      localStorage.getItem(current_team_name + "_streak")
    );
    current_team_streak += 1;
    localStorage.setItem(current_team_name + "_streak", current_team_streak);
  }

  cancel_streak() {
    let current_team_name = this.props.get_current_team().name;
    let current_team_score = this.props.get_team_score(current_team_name);
    let current_team_streak = 0;
    localStorage.setItem(current_team_name + "_streak", current_team_streak);
  }

  answer_correctly() {
    this.stop_counter();
    this.countdown_audio.pause();
    this.setState({ disable_answers: "disabled" });
    this.state.answer_result = "correct";
    this.play_correct_sound();
    this.increase_score();
  }

  answer_incorrectly() {
    this.setState({ show_correct_answer: "show" });
    this.stop_counter();
    this.countdown_audio.pause();
    this.setState({ disable_answers: "disabled" });
    this.state.answer_result = "wrong";
    this.play_wrong_sound();
    this.cancel_streak();
  }

  answer(choice_letter) {
    if (choice_letter == this.state.question.Answer) this.answer_correctly();
    else this.answer_incorrectly();
  }

  navigate() {
    let rounds_count = parseInt(localStorage.getItem("rounds_count"));
    let current_round = parseInt(localStorage.getItem("current_round"));
    let teams_count = parseInt(localStorage.getItem("teams_count"));
    let current_team = parseInt(localStorage.getItem("current_team"));
    if (teams_count != current_team) {
      localStorage.setItem("current_team", ++current_team);
      this.props.history.push("/round");
    } else if (rounds_count == current_round) {
      this.props.history.push("/final");
      localStorage.setItem("active_game", "false");
    } else {
      localStorage.setItem("current_team", 1);
      localStorage.setItem("current_round", ++current_round);
      this.props.history.push("/result");
    }
  }

  componentWillUnmount() {
    if (this.countdown_audio != undefined) this.countdown_audio.pause();
    if (this.countdown_over_audio != undefined)
      this.countdown_over_audio.pause();
    if (this.correct_audio != undefined) this.correct_audio.pause();
    if (this.incorrect_audio != undefined) this.incorrect_audio.pause();
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
                  <Link
                    className="white-button"
                    variant="primary"
                    onClick={() => this.navigate()}
                  >
                    NEXT
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
                {this.state.question.question}
              </div>
            </div>

            <div className="row choices">
              <div className="col-1" />
              <div className="col-10">
                <button
                  className={
                    "choice " +
                    this.state.show_correct_answer +
                    this.state.answers_check.a +
                    "-answer " +
                    this.state.answers_check.a +
                    "-choice " +
                    this.state.disable_answers
                  }
                  onClick={() => {
                    this.answer("A");
                  }}
                >
                  A. {this.state.question.a}
                </button>
              </div>
            </div>
            <div className="row choices">
              <div className="col-1" />
              <div className="col-10">
                <button
                  className={
                    "choice " +
                    this.state.show_correct_answer +
                    this.state.answers_check.b +
                    "-answer " +
                    this.state.answers_check.b +
                    "-choice " +
                    this.state.disable_answers
                  }
                  onClick={() => {
                    this.answer("B");
                  }}
                >
                  B. {this.state.question.b}
                </button>
              </div>
            </div>
            <div className="row choices">
              <div className="col-1" />
              <div className="col-10">
                <button
                  className={
                    "choice " +
                    this.state.show_correct_answer +
                    this.state.answers_check.c +
                    "-answer " +
                    this.state.answers_check.c +
                    "-choice " +
                    this.state.disable_answers
                  }
                  onClick={() => {
                    this.answer("C");
                  }}
                >
                  C. {this.state.question.c}
                </button>
              </div>
            </div>
            <div className="row choices">
              <div className="col-1" />
              <div className="col-10">
                <button
                  className={
                    "choice " +
                    this.state.show_correct_answer +
                    this.state.answers_check.d +
                    "-answer " +
                    this.state.answers_check.d +
                    "-choice " +
                    this.state.disable_answers
                  }
                  onClick={() => {
                    this.answer("D");
                  }}
                >
                  D. {this.state.question.d}
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
