import React from "react";
import { withRouter } from "react-router-dom";
// import LuckyWheel from 'lucky-wheel';

class Randomizer extends React.Component {

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
          {/* <LuckyWheel
             onLoadData={this.handleLoadData}
             position={this.state.position}
             areaNum={7}
             cycle={10}
             isComplete={this.state.isComplete}
             onComplete={this.handleComplete}
          /> */}
        )
      }
}

export default withRouter(Randomizer);