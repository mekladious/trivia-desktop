
import React from "react";
import { withRouter } from "react-router-dom";
// import { SpinningWheel } from "react-random-selection-wheel";
import { ReactRouletteSlot } from 'react-roulette-slot';
 
class Randomizer3 extends React.Component {
    constructor(props) {
        super();
        this.state = { 
            data: [
                { id: 1, img: 'http://dummyimage.com/30x30', label: 'Larry' },
                { id: 2, img: 'http://dummyimage.com/30x30', label: 'Joseph' },
                { id: 3, img: 'http://dummyimage.com/30x30', label: 'Paul' },
                { id: 4, img: 'http://dummyimage.com/30x30', label: 'Ronald' },
                { id: 5, img: 'http://dummyimage.com/30x30', label: 'Helen' },
                { id: 6, img: 'http://dummyimage.com/30x30', label: 'Maria' },
                { id: 7, img: 'http://dummyimage.com/30x30', label: 'Mark' },
                { id: 8, img: 'http://dummyimage.com/30x30', label: 'Mark' },
                { id: 9, img: 'http://dummyimage.com/30x30', label: 'Carol' },
                { id: 10, img: 'http://dummyimage.com/30x30', label: 'Ronald' },
                { id: 11, img: 'http://dummyimage.com/30x30', label: 'Nancy' },
                { id: 12, img: 'http://dummyimage.com/30x30', label: 'Michelle' },
            ],
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
                data={this.state.data}
                action={this.displayResult}
                size={1}
            />
        );
    }
}
export default withRouter(Randomizer3);