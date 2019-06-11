import React from "react";
import { withRouter,Link } from "react-router-dom";
import { Button } from 'react-bootstrap'

class Welcome extends React.Component {

    render() {
        return(
            <div className="Welcome app-slide">
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
            </div>
        )
    }
    
}

export default withRouter(Welcome);