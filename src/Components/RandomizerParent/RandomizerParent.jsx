import React from "react";
import { withRouter } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Randomizer1 from "../Randomizer1/Randomizer1";
import Randomizer2 from "../Randomizer2/Randomizer2";
import Randomizer3 from "../Randomizer3/Randomizer3";
import Randomizer4 from "../Randomizer4/Randomizer4";
import Randomizer5 from "../Randomizer5/Randomizer5";
import Randomizer6 from "../Randomizer6/Randomizer6";

class RandomizerParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomizer: Math.floor(Math.random() * 4),
      randomizer_list: [
        // <Randomizer1 {...this.props} />,
        <Randomizer2
          {...this.props}
          get_category={this.get_category_from_img_url}
        />,
        <Randomizer3 {...this.props} />,
        // <Randomizer4 {...this.props} />,
        <Randomizer5 {...this.props} />,
        <Randomizer6
          {...this.props}
          get_category={this.get_category_from_img_url}
        />
      ]
    };
  }
  get_randomizer_number = () => {
    let randomizer = this.state.randomizer;
    let previously_used_randomizer = localStorage.getItem(
      "previously_used_randomizer"
    );
    console.log(randomizer, previously_used_randomizer);
    localStorage.setItem("previously_used_randomizer", randomizer);
    return randomizer == previously_used_randomizer
      ? randomizer === 3
        ? 0
        : randomizer + 1
      : randomizer;
  };

  get_category_from_img_url = url => {
    let category = "";
    if (url.includes("sport")) category = "sports";
    if (url.includes("science")) category = "science";
    if (url.includes("history")) category = "history";
    if (url.includes("medicine")) category = "medicine";
    if (url.includes("world")) category = "world";
    if (url.includes("intel")) category = "intelligence";
    if (url.includes("music")) category = "music";
    return category;
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <Fade left>
            <div className="col-2" />
            <div className="col-8 rand-container roulette">
              {this.state.randomizer_list[this.get_randomizer_number()]}
            </div>
            <div className="col-2" />
          </Fade>
        </div>
      </div>
    );
  }
}
export default withRouter(RandomizerParent);
