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
    circleIsSmall: false
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ circleIsSmall: !this.state.circleIsSmall });
    }, 200);
    let audio = new Audio(require("../../aud/winner.mp3"));
    audio.play();
    audio.onended = () => {
      this.props.history.push("goodbye");
    };
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
                    <p className="winner-name">Warriors</p>
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
