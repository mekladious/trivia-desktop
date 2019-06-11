import React from "react";
import { withRouter, Link } from "react-router-dom";
import { Button } from "react-bootstrap";

class GameSettings extends React.Component {

    constructor(){
        super();
        this.onRoundCountChange = this.onRoundCountChange.bind(this);
        this.onTeamNameChange = this.onTeamNameChange.bind(this);
        this.state = {
            teams_num: 1,
            rounds_num: 1,
            teams:[
                ''
            ]
        }
    }
    onTeamNameChange(event, index){
        // console.log(event.target.value)
        // console.log(index)
        let teams = this.state.teams
        teams[index]=event.target.value
        this.setState({teams: teams})
    }

    onRoundCountChange(event){
        this.setState({rounds_num: event.target.value})
    }

    render() {
        return(
            <div className="Settings app-slide">
                <div>
                    <label htmlFor="">Number of teams</label>
                    <div className="input">
                        <button key="+">+</button>
                    </div>
                </div>
                <br/>
                <div>
                    <label htmlFor="">Number of rounds</label>
                    <div className="input">
                        <input type="number" name="" id="" onChange={(e)=>this.onRoundCountChange(e)} value={this.state.rounds_num}/>
                    </div>
                </div>
                <br/>   
                {this.state.teams.map((team, index)=>
                    <div>
                        <label htmlFor="">Team ({index+1}) name</label>
                        <br/>
                        <div className="input">
                            <input type="text" name="" id="" value={team} onChange={(e)=>this.onTeamNameChange(e, index)}/>
                        </div>
                    </div>
                )}
               
                    <Link to="/round">
                    <Button className="submitbutton" variant="primary">
                        START GAME
                    </Button>
                    </Link>

        </div>
        )
    }
    
}

export default withRouter(GameSettings);