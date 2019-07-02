
import React from "react";
import { withRouter } from "react-router-dom";
import RandomRoller from 'react-random-roller';
// import LuckyWheel from 'lucky-wheel';

class Randomizer1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          position: 0,
          isComplete: false
        }
      }
      handleLoadData = () => {
        setTimeout(() => {
          this.setState({
            position: 2,
            isComplete: true
          })
        }, 1000);
      }
      handleComplete = () => {
        this.setState({isComplete: false})
      }
       
      render() {
        return (
          <RandomRoller fps={10} list={ ['Hello,', 1, <p>world</p>] }/>
        )
      }
}

export default withRouter(Randomizer1);