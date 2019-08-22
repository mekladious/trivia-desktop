import React from "react";
import { withRouter } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Randomizer1 from "../Randomizer1/Randomizer1";
import Randomizer2 from "../Randomizer2/Randomizer2";
import Randomizer3 from "../Randomizer3/Randomizer3";
import Randomizer4 from "../Randomizer4/Randomizer4";
import Randomizer5 from "../Randomizer5/Randomizer5";

class RandomizerParent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            randomizer: Math.floor(Math.random()*5) + 1 ,
            randomizer_list: [
                <Randomizer1 {...this.props}/>,
                <Randomizer2 {...this.props}/>,
                <Randomizer3 {...this.props}/>,
                <Randomizer4 {...this.props}/>,
                <Randomizer5 {...this.props}/>
            ]
        }
    }

    render() {
        return (
            <div className="container">
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
                            <div className="col-8 settings-container">
                                {this.state.randomizer_list[Math.floor(Math.random() * this.state.randomizer_list.length)]}
                            </div>
                        <div className="col-2" />
                    </Fade>
                </div>
            </div>
            
        );
    }
}
export default withRouter(RandomizerParent);