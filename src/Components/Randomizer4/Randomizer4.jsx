import React from "react";
import { withRouter } from "react-router-dom";
import Slot from 'react-slot-machine';
import Fade from "react-reveal/Fade";

class Randomizer4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            target: Math.floor(Math.random()*5) + 1 ,
            times: 1,
            duration: 3000,
            turn: true
        }
    }

    render() {
        return (
            <Slot className="slot"
                duration={this.state.duration}
                times={this.state.times}
                target={this.state.turn ? this.state.target : 0}
            >
            {
                this.props.categories.map(value =>
                    <div className="slot-item">
                        <div>{value}</div>
                    </div>
                )
                // Children of `Slot` be sure to be `width` and `height` are 100%.
            }
            </Slot>
            
        );
    }
}
export default withRouter(Randomizer4);