import React from "react";
import { withRouter, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Fade from 'react-reveal/Fade';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

class GameSettings extends React.Component {

    constructor(){
        super();
        this.onRoundCountChange = this.onRoundCountChange.bind(this);
        this.onTeamCountChange = this.onTeamCountChange.bind(this);
        this.onTeamNameChange = this.onTeamNameChange.bind(this);
        this.state = {
            teams_num: 1,
            rounds_num: 1,
            teams:[
                {name:'', score:0}
            ],
            allFieldsValid:false
        }
    }
    onTeamNameChange(event, index){
        let teams = this.state.teams
        teams[index].name=event.target.value
        this.setState({teams: teams})
    }

    onRoundCountChange(event){
        this.setState({rounds_num: event.target.value})
    }

    onTeamCountChange(value){
        let teams = this.state.teams;
        let teams_num = value;
        let old_num = teams.length;
        teams.length = teams_num;
        teams.fill({name:'', score:0}, old_num);
        this.setState({teams_num: value, teams: teams})
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
                    <Fade left>
                        <div className="col-2"></div>
                        <div className="col-8 settings-container">
                            <div className="row radio">
                                <label htmlFor="">Number of teams</label> <br/>
                                <RadioGroup style={{display: "contents"}} onChange={ this.onTeamCountChange } horizontal>
                                {Array.from(Array(8).keys()).map((value, index) => {
                                    return  <RadioButton value={value+1} iconSize="0" iconInnerSize="0">
                                        {value+1}
                                    </RadioButton>
                                })}
                                </RadioGroup>
                            </div>
                            <br/>
                            <div>
                                <label htmlFor="">Number of rounds</label>
                                <div className="input">
                                    <input type="number" name="" id="" onChange={(e)=>this.onRoundCountChange(e)} value={this.state.rounds_num} min={1}/>
                                </div>
                            </div>
                            <br/>   
                            <hr/>
                            {this.state.teams.map((team, index)=>
                                <div>
                                    <label htmlFor="">Team ({index+1}) name *</label>
                                    <br/>
                                    <div className="input">
                                        <input type="text" name="" id="" value={team.name} onChange={(e)=>this.onTeamNameChange(e, index)} defaultValue="TeamName" required/>
                                    </div>
                                </div>
                            )}
                            <h6>(*) required fields</h6>
                        
                            <Link to={{
                                pathname: '/round',
                                state: this.state
                            }}>
                                <div className="submitbutton">
                                    <Button variant="primary">
                                        START GAME
                                    </Button>
                                </div>
                            </Link>

                        </div>
                    </Fade>
                </div>
            </div>
        )
    }
    
}

export default withRouter(GameSettings);