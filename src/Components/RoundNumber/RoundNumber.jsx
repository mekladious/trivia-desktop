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
      round_number: 0
    };
  }
  componentDidMount() {
    let round_number = localStorage.getItem("current_round");
    this.setState({ round_number });
    setTimeout(() => {
      this.props.history.push(`/rand`);
    }, 5000);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Fade left>
            <div className="col-2" />
            <div className="col-8 rand-container roulette">
              <p className="round-number">Round {this.state.round_number}</p>
            </div>
            <div className="col-2" />
          </Fade>
        </div>
      </div>
    );
  }
}
export default withRouter(RandomizerParent);
