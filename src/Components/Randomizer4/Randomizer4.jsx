import React from "react";
import { withRouter } from "react-router-dom";
import RandomWheel from 'react-random-wheel';

class Randomizer4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            segments:[
                {
                    name: 'Red',
                    color: 'red'
                },
                {
                    name: 'Green',
                    color: 'green'
                },
                {
                    name: 'Blue',
                    color: 'blue'
                },
            ]
        }
        this.onSpinComplete = this.onSpinComplete.bind(this);
    }
	onSpinComplete = ( result ) => {
		console.log( 'spin complete', result );
	}

    render() {
        let wheel;
        const onSpinClick = () => {
            wheel.spinWheel();
        };
        return (
            <div>
                <RandomWheel
                    segments={this.state.segments}
                    onComplete={this.onSpinComplete}
                    ref={( wheelRef ) => {
                        wheel = wheelRef;
                    }}
                />
                <button onClick={onSpinClick}>
                    Spin
                </button>
            </div>
            
        );
    }
}
export default withRouter(Randomizer4);