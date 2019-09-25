import React from "react";
import { withRouter, Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import posed from "react-pose";
import { spring, styler } from "popmotion";

const Circle = posed.div({
  small: {
    scale: 1
  },
  large: {
    scale: 1.4,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 0
    }
  }
});

class FinalResults extends React.Component {
  state = {
    circleIsSmall: false,
    winner: ""
  };

  winner_audio;

  componentDidMount() {
    let scores = this.props.get_results();
    scores.sort(function(a, b) {
      return parseFloat(b.score) - parseFloat(a.score);
    });
    if (scores.length == 1 || scores[0].score == scores[1].score)
      this.props.history.push("/result");
    let winner = scores[0].name;
    this.setState({ winner });

    setInterval(() => {
      this.setState({ circleIsSmall: !this.state.circleIsSmall });
    }, 200);
    this.winner_audio = new Audio(require("../../aud/winner.mp3"));
    this.winner_audio.play();
    this.winner_audio.onended = () => {
      this.props.history.push("/result");
    };
  }

  componentWillUnmount() {
    if (this.winner_audio != undefined) this.winner_audio.pause();
  }

  render() {
    const { circleIsSmall } = this.state;
    return (
      <div className="container final-container">
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
            <div className="col-8 winner-container">
              <div className="row">
                <div className="col-4" />
                <div className="col-4">
                  <Circle
                    className="winner-circle"
                    id="circle"
                    pose={circleIsSmall ? "small" : "large"}
                  >
                    <p className="winner-name">{this.state.winner}</p>
                  </Circle>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default withRouter(FinalResults);
