import React from "react";
import { withRouter } from "react-router-dom";
import { thisExpression } from "@babel/types";
import Countdown from 'react-countdown-now';
import Timer from "../Timer/Timer";

class Question extends React.Component {

    constructor(){
        super();
        this.state = {
            current_team:{
                name:'w',
                score:999
            },
        }
    }

    render() {
        return(
            <div className="Settings app-slide">
                <div className="team-info" >

                    <div className="team-name">
                        <label htmlFor="">{this.state.current_team.name}</label>
                    </div>
                        {/* <Countdown date={Date.now() + 10000}/> */}
                    <div className="team-score">
                        <label htmlFor="">{this.state.current_team.score}</label>
                    </div>
                    <Timer seconds = {100}/>
                </div>
                {/* <br/> */}
                <div className="question">
                    what is thejhiwh3q??
                </div>
                <div style={{textAlign:"center", marginTop:"50px"}}>
                    <button className="choice">
                        A. choiceA
                    </button>
                <div style={{height:"30px"}}></div>
                    <button className="choice">
                        B. choiceB
                    </button>
                <div style={{height:"30px"}}></div>
                    <button className="choice">
                        C. choiceC
                    </button>
                <div style={{height:"30px"}}></div>
                    <button className="choice">
                        D. choiceD
                    </button>
                </div>
                </div>
        )
    }
}

export default withRouter(Question);