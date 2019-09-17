import React from "react";
// import { withRouter } from "react-router-dom";
import RandomItemSpinner from "../randomItemSpinner/src/scripts/components/randomItemSpinner";

class Randomizer6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frameworks: [
        { name: "Science", img: require("../../img/sciencew.png") },
        { name: "Sports", img: require("../../img/sportw.png") },
        { name: "World", img: require("../../img/worldw.png") },
        { name: "History", img: require("../../img/historyw.png") },
        { name: "Medicine", img: require("../../img/medicinew.png") },
        { name: "Music", img: require("../../img/musicw.png") },
        { name: "Intelligence", img: require("../../img/intelw.png") }
      ],
      imagesReady: false
    };
  }
  componentWillMount() {
    var index = 0;
    var imageArray = this.state.frameworks;
    if (imageArray && imageArray.length > index) {
      var img = new Image();
      img.src = imageArray[index].img;
      img.onload = () => {
        this.setState({ imagesReady: true }, console.log("loaded"));
        // this.preload(imageArray, index + 1);
      };
    } else {
      this.setState({ imagesReady: true }, console.log("loaded"));
    }
  }

  render() {
    const { imagesReady } = this.state;
    return (
      <div>
        {!imagesReady ? (
          <div>Loading images...</div>
        ) : (
          <RandomItemSpinner items={this.state.frameworks} />
        )}
      </div>
    );
  }
}
export default Randomizer6;
