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
                name:'Warriors',
                score:90
            },
        }
    }

    render() {
        return(
            <div className="container">
                <div className="row padded-row">
                    <div className="col-4">
                        <img className="template-logo" alt="" src={require('../../img/logo.png')}  />
                    </div>
                </div>
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8 question-container">
                        <div className="row">

                            <div className="col-4 team-name">
                                <label htmlFor="">{this.state.current_team.name}</label>
                            </div>
                                {/* <Countdown date={Date.now() + 10000}/> */}
                            <div className="col-4">
                                <Timer seconds = {40}/>
                            </div>
                            <div className="col-4 team-score">
                                <label htmlFor="">Score:{this.state.current_team.score}</label>
                            </div>
                        </div>
                        {/* <br/> */}
                        <div className="row">
                            <div className="col-1"></div>
                            <div className="col-10 question">
                                <p>what is the capital of Peru?</p>
                            </div>
                        </div>
                        
                        <div className="row choices">
                            <div className="col-1"></div>
                            <div className="col-10">
                                <button className="choice">
                                    A. Santiago
                                </button>
                            </div>
                        </div> 
                        <div className="row choices">
                            <div className="col-1"></div>
                            <div className="col-10">
                                <button className="choice">
                                    B. Quito
                                </button>
                            </div>
                        </div> 
                        <div className="row choices">
                            <div className="col-1"></div>
                            <div className="col-10">
                                <button className="choice">
                                    C. Lima
                                </button>
                            </div>
                        </div> 
                        <div className="row choices">
                            <div className="col-1"></div>
                            <div className="col-10">
                                <button className="choice">
                                    D. San Jose
                                </button>
                            </div>
                        </div>   

                        
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Question);