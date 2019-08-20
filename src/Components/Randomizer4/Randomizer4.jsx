import React from "react";
import { withRouter } from "react-router-dom";
import Slot from 'react-slot-machine';
import Fade from "react-reveal/Fade";

class Randomizer4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[
                "Science",
                "Sports", 
                "World",
                "History",
                "Medicine",
                "Music",
                "Intelligence"
            ]
        }
        this.onSpinComplete = this.onSpinComplete.bind(this);
    }
	onSpinComplete = ( result ) => {
		console.log( 'spin complete', result );
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
                            <Slot target={"1"} duration={"3000"} times={"2"} turning={true}>
                            {
                                this.state.list.map(value =>
                                <div style={{ width: '100%', height: '100%' }}>
                                    {value}
                                </div>
                                )
                                // Children of `Slot` be sure to be `width` and `height` are 100%.
                            }
                            </Slot>
                        </div>
                        <div className="col-2" />
                    </Fade>
                </div>
            </div>
            
        );
    }
}
export default withRouter(Randomizer4);