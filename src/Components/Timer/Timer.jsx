import React, { Component } from "react";
import { render } from "react-dom";

class Timer extends Component {
  constructor(props) {
    super(props);
    // this.tick = this.tick.bind(this);
    // this.state = { seconds: props.seconds };
  }

  // componentDidMount() {
  //   this.timer = setInterval(this.tick, 1000);
  // }

  // play_countdown_over_sound() {
  //   let audio = new Audio(require("../../aud/countdownover.mp3"));
  //   audio.play();
  //   audio.onended = () => {
  //     console.log("move on to next page");
  //   };
  // }

  // tick() {
  //   if (this.state.seconds > 0) {
  //     this.setState({ seconds: this.state.seconds - 1 });
  //   } else {
  //     clearInterval(this.timer);
  //     this.play_countdown_over_sound();
  //     // window.location.reload();
  //   }
  // }
  render() {
    return (
      <div style={{ width: "100%", textAlign: "center" }}>
        <h1>{this.props.seconds}</h1>
      </div>
    );
  }
}

export default Timer;
