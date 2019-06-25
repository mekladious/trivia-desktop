import React from "react";
import { withRouter, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Fade from 'react-reveal/Fade';

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
                ''
            ],
            allFieldsValid:false
        }
    }
    onTeamNameChange(event, index){
        let teams = this.state.teams
        teams[index]=event.target.value
        this.setState({teams: teams})
    }

    onRoundCountChange(event){
        this.setState({rounds_num: event.target.value})
    }

    onTeamCountChange(event){
        let teams = this.state.teams;
        let teams_num = event.target.value;
        let old_num = teams.length;
        teams.length = teams_num;
        teams.fill("", old_num);
        this.setState({teams_num: event.target.value, teams: teams})
    }

    render() {
        return(
            <Fade left>
            <div className="Settings app-slide page-container">
                <div>
                    <label htmlFor="">Number of teams</label>
                    <div className="input">
                        <input type="number" onChange={(e)=>this.onTeamCountChange(e)} value={this.state.teams_num} min={1}/>
                        {/* <Button key="+" onClick={this.addFields}>+</Button> */}
                    </div>
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
                            <input type="text" name="" id="" value={team} onChange={(e)=>this.onTeamNameChange(e, index)} defaultValue="TeamName" required/>
                        </div>
                    </div>
                )}
                <h6>(*) required fields</h6>
               
                <Link to={{
                    pathname: '/randomizer',
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
        )
    }
    
}

export default withRouter(GameSettings);