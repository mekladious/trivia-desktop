import React from "react";
import { withRouter } from "react-router-dom";
import { SpinningWheel } from "react-random-selection-wheel";

class Randomizer2 extends React.Component {
  constructor(props) {
    super();
    this.state = {
      wheelOptions: {
        1: {
          result: require("../../img/science.png"),
          image: require("../../img/science2.png")
        },
        2: {
          result: require("../../img/sport.png"),
          image: require("../../img/sport2.png")
        },
        3: {
          result: require("../../img/world.png"),
          image: require("../../img/world2.png")
        },
        4: {
          result: require("../../img/history.png"),
          image: require("../../img/history2.png")
        },
        5: {
          result: require("../../img/medicine.png"),
          image: require("../../img/medicine2.png")
        },
        6: {
          result: require("../../img/music.png"),
          image: require("../../img/music2.png")
        },
        7: {
          result: require("../../img/intel.png"),
          image: require("../../img/intel2.png")
        }
      }
    };
    this.displayResult = this.displayResult.bind(this);
  }

  displayResult(spinResult) {
    let category = "";
    if (spinResult.includes("sport")) category = "sports";
    if (spinResult.includes("science")) category = "science";
    if (spinResult.includes("history")) category = "history";
    if (spinResult.includes("medicine")) category = "medicine";
    if (spinResult.includes("world")) category = "world";
    if (spinResult.includes("intel")) category = "intelligence";
    if (spinResult.includes("music")) category = "music";
    localStorage.setItem("current_category", category);
    return <img src={`${spinResult}`} alt={"result"} />;
  }

  render() {
    return (
      <SpinningWheel
        sources={this.state.wheelOptions}
        displayResult={this.displayResult}
        backgroundColor={"#BF1E2D"}
        buttonColor={"#007bff"}
        outerRingColor={"#BF1E2D"}
        buttonBorder={"white"}
      />
    );
  }
}
export default withRouter(Randomizer2);
