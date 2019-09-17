import React from "react";
import { withRouter, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import posed from "react-pose";
import { tween, styler, easing } from "popmotion";
import ReactPlayer from "react-player";

const Box = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 5000 } }
});

const Content = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1000 } }
});

const Videodiv = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0 } }
});

class Welcome extends React.Component {
  state = {
    boxIsVisible: false,
    contentIsVisible: false,
    videoIsVisible: true
  };
  audio = new Audio(require("../../aud/notion_audio.mp3"));

  onEnded = () => {
    this.audio.loop = true;
    this.audio.play();
    this.setState({ videoIsVisible: !this.state.videoIsVisible });
    setTimeout(() => {
      this.setState({ boxIsVisible: !this.state.boxIsVisible });
      setTimeout(() => {
        const divStyler = styler(document.querySelector("#box"));
        tween({
          from: 0,
          to: { x: -450, y: -260 },
          duration: 1000,
          ease: easing.backOut
        }).start(divStyler.set);
        setTimeout(() => {
          this.setState({ contentIsVisible: !this.state.contentIsVisible });
        }, 500);
      }, 3000);
    }, 2000);
  };

  componentWillUnmount() {
    this.audio.pause();
  }
  render() {
    const { boxIsVisible } = this.state;
    const { contentIsVisible } = this.state;
    const { videoIsVisible } = this.state;
    return (
      <div className="page-container">
        <Videodiv
          className="video-div"
          pose={videoIsVisible ? "visible" : "hidden"}
        >
          <ReactPlayer
            id="video"
            height={"auto"}
            width={"100%"}
            url={require("../../vid/notion_intro.mp4")}
            onEnded={this.onEnded}
            playing
          />
        </Videodiv>
        <Box id="box" pose={boxIsVisible ? "visible" : "hidden"}>
          <div className="image-container">
            <img
              className="welcome-logo"
              alt=""
              src={require("../../img/logo.png")}
            />
          </div>
        </Box>
        <Content
          className="content-container container"
          pose={contentIsVisible ? "visible" : "hidden"}
        >
          <div className="row align-items-center">
            <div className="col-12 align-self-center">
              <p>Welcome to our Trivia Activity</p>
            </div>
            <div className="col-12 align-self-center">
              <Link className="welcome-start-button" to="/settings">
                PRESS TO START
              </Link>
            </div>
          </div>
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
    );
  }
}

export default withRouter(Welcome);
