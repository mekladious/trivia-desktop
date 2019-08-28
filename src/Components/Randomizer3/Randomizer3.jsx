
import React from "react";
import { withRouter } from "react-router-dom";
// import { SpinningWheel } from "react-random-selection-wheel";
import { ReactRouletteSlot } from 'react-roulette-slot';
 
class Randomizer3 extends React.Component {
    constructor(props) {
        super();
        this.state = { 
            max: 12,
            min: 1
        }
        this.displayResult = this.displayResult.bind(this);
    }
 
    displayResult(fn) {
        const rand = Math.floor(Math.random() * (this.state.max - this.state.min)) + this.state.min;
        console.log(rand);
        fn({ data: rand });
    }
 
    render(){
        return(
            <ReactRouletteSlot
                className="ch"
                data={this.props.categoriesObj}
                action={this.displayResult}
                size={300}
                height={350}
                width={550}
            />
        );
    }
}
export default withRouter(Randomizer3);