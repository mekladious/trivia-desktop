import React from "react";
import { withRouter } from "react-router-dom";
import Fade from "react-reveal/Fade";
import RandomWord from "react-random-word";

class Randomizer5 extends React.Component {
  get_category = () => {
    let category = this.props.categories[
      Math.floor(Math.random() * this.props.categories.length)
    ];
    localStorage.setItem("current_category", category.toLowerCase());
    return category;
  };

  componentDidMount() {
    setTimeout(() => {
      this.props.history.push(`/question`);
    }, 6000);
  }

  render() {
    return <RandomWord word={this.get_category()} speed={100} rounds={20} />;
  }
}
export default withRouter(Randomizer5);
