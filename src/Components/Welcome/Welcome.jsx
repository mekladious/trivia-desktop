import React from "react";
import { withRouter,Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import posed from 'react-pose';
import { tween, styler, easing } from 'popmotion';

const Box = posed.div({
    hidden: {opacity: 0 },
    visible: {opacity: 1, transition: {duration: 5000 } }
  });

const Content = posed.div({
    hidden: {opacity: 0 },
    visible: {opacity: 1, transition: {duration: 1000 } }
  });

class Welcome extends React.Component {

    state = { boxIsVisible: false, contentIsVisible: false };

    componentDidMount() {
        setTimeout(() => {
            this.setState({ boxIsVisible: !this.state.boxIsVisible });
                setTimeout(() => {
                    const divStyler = styler(document.querySelector('#box'));
                    tween({from: 0,
                        to: { x: -450, y:-280},
                        duration: 1000,
                        ease: easing.backOut,
                    }).start(divStyler.set);
                    setTimeout(() => {
                        this.setState({ contentIsVisible: !this.state.contentIsVisible });
                    }, 500);
                }, 3000);
        }, 2000);
        
    }
    render() {
        const { boxIsVisible } = this.state;
        const { contentIsVisible } = this.state;
        return(
            <div className="page-container">
                <Box id="box" pose={boxIsVisible ? 'visible' : 'hidden'}>
                    <div className="image-container">
                        <img class="welcome-logo" alt="" src={require('../../img/logo.png')}  />
                    </div>
                </Box>
                <Content className="content-container" pose={contentIsVisible ? 'visible' : 'hidden'}>
                    <p>Welcome to trivia app</p>
                    <h6>aucibus rem.</h6>
                    <Link to="/settings">
                    <Button variant="primary" >
                        PRESS TO START
                    </Button>
                    </Link>
                </Content>
             </div>
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