import React from "react";
import { withRouter } from "react-router-dom";
// import { SpinningWheel } from "react-random-selection-wheel";
import { ReactRouletteSlot } from "react-roulette-slot";

class Randomizer3 extends React.Component {
  constructor(props) {
    super();
    this.state = {
      max: 12,
      min: 1
    };
    this.displayResult = this.displayResult.bind(this);
  }

  displayResult(fn) {
    const rand =
      Math.floor(Math.random() * (this.state.max - this.state.min)) +
      this.state.min;
    console.log("randomizer2", rand);
    let category = "";
    switch (rand) {
      case 2:
        category = "sports";
        break;
      case 3:
        category = "world";
        break;
      case 4:
        category = "history";
        break;
      case 5:
        category = "medicine";
        break;
      case 6:
        category = "music";
        break;
      case 7:
        category = "intelligence";
        break;
      case (8, 9, 10):
        category = "science";
        break;
    }
    localStorage.setItem("current_category", category);
    console.log("start");
    setTimeout(() => {
      this.props.history.push(`/question`);
    }, 8000);
    fn({ data: rand });
  }

  render() {
    return (
      <ReactRouletteSlot
        data={this.props.categoriesObj}
        action={this.displayResult}
        size={300}
        height={350}
        width={550}
      />
    );
  }
}
export default withRouter(Randomizer3);
