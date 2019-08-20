import React from "react";
import { withRouter } from "react-router-dom";
import LuckyWheel from 'lucky-wheel';

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
            position: 0,
            isComplete: true
            })
        }, 1000);
    }
    handleComplete = () => {
    this.setState({isComplete: false})
    }

    render() {
        return (
            <LuckyWheel
            onLoadData={this.handleLoadData}
            position={this.state.position}
            areaNum={7}
            cycle={10}
            isComplete={this.state.isComplete}
            onComplete={this.handleComplete}
            />
        )
    }
}
export default withRouter(Randomizer1);
// import RandomRoller from 'react-random-roller';
// import Fade from 'react-reveal/Fade';

// class Randomizer1 extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//           position: 0,
//           isComplete: false
//         }
//       }
//       handleLoadData = () => {
//         setTimeout(() => {
//           this.setState({
//             position: 2,
//             isComplete: true
//           })
//         }, 1000);
//       }
//       handleComplete = () => {
//         this.setState({isComplete: false})
//       }
       
//       render() {
//         return (
//         <div className="container">
//             <div className="row padded-row">
//                 <div className="col-4">
//                     <img className="template-logo" alt="" src={require('../../img/logo.png')}  />
//                 </div>
//             </div>
//             <div className="row">
//                 <Fade left>
//                     <div className="col-2"></div>
//                     <div className="col-8 settings-container">
//                         <RandomRoller fps={5} duration={ 2000 } list={ ['Hello,', 1, <p>world</p>] }/>
//                     </div>
//                 </Fade>
//             </div>
//         </div>
//         )
//       }
// }

// export default withRouter(Randomizer1);