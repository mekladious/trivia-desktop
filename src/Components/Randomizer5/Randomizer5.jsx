import React from "react";
import { withRouter } from "react-router-dom";
import Fade from "react-reveal/Fade";
import RandomWord from "react-random-word"

class Randomizer5 extends React.Component {

    render() {
        return (
            <RandomWord
                word={this.props.categories[Math.floor(Math.random() * this.props.categories.length)]}
                speed={100}
                rounds={20}
            />
        );
    }
}
export default withRouter(Randomizer5);