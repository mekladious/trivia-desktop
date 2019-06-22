import React from "react";
import { withRouter,Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import posed from 'react-pose';
import { tween, styler, easing } from 'popmotion';

const Box = posed.div({
    hidden: {opacity: 0 },
    visible: {opacity: 1, transition: {duration: 5000 } }
  });

class Welcome extends React.Component {

    state = { isVisible: false };

    componentDidMount() {
        setTimeout(() => {
            this.setState({ isVisible: !this.state.isVisible });
                setTimeout(() => {
                    const divStyler = styler(document.querySelector('#box'));
                    tween({from: 0,
                        to: { x: -280, y:-280},
                        duration: 1000,
                        ease: easing.backOut,
                    }).start(divStyler.set);
                }, 3000);
        }, 2000);
        
    }
    render() {
        const { isVisible } = this.state;
        return(
            <Box id="box" pose={isVisible ? 'visible' : 'hidden'}>
                <div className="image-container">
                    <img class="welcome-logo" alt="" src={require('../../img/logo.png')}  />
                </div>
            </Box>
           /* <div className="Welcome app-slide">
                <div className="image-container">
                    <img alt="" src={require('../../img/logo.png')}  />
                </div>
                    <p>Welcome to trivia app</p>
                    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor dui, sollicitudin a faucibus ut, suscipit nec eros. Sed a luctus orci, eu scelerisque dolor. Sed fringilla vel nulla eget iaculis. Nam at tristique tortor. Cras eu felis vel massa commodo hendrerit. Pellentesque at leo neque. Vestibulum ipsum odio, mollis ac mauris sit amet, feugiat lacinia ex. In dolor nibh, facilisis placerat gravida a, egestas sit amet sapien. Vivamus luctus felis blandit luctus faucibus. Curabitur porttitor quis arcu a sagittis. Nam id magna vitae arcu maximus maximus eget ac lorem.</h6>
                    <Link to="/settings">
                    <Button variant="primary" >
                        PRESS TO START
                    </Button>
                    </Link>
            </div>*/
        )
    }
    
}

export default withRouter(Welcome);