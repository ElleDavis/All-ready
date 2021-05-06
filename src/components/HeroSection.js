
import React from "react";
import "../App.css";
// import { Button } from "./Button";
import "./HeroSection.css";
import Button from "react-bootstrap/Button";

function handleClick(e) {
  e.preventDefault();
  console.log('The link was clicked.');
}


class HeroSection extends React.Component {
  constructor(props) {
    super(props);
    this.switchImage = this.switchImage.bind(this);
    this.state = {
      currentImage: 0,
      //sets image array. 
      images: [
        "../images/img-11.jpg",
        "../images/img-12.jpg",
        "../images/img-13.jpg",
        "../images/img-14.jpg",
      ],
    };
  }
// logic for the image to update. 
  switchImage() {
    if (this.state.currentImage < this.state.images.length - 1) {
      this.setState({
        currentImage: this.state.currentImage + 1,
      });
    } else {
      this.setState({
        currentImage: 0,
      });
    }
    return this.currentImage;
  }
// sets up the slideshow to change at whatever time it is to set.
  componentDidMount() {
    setInterval(this.switchImage, 5000);
  }



  render() {
    return (
      <div className="hero-container">
        {/* shows whatever image the state is in */}
         <img src={this.state.images[this.state.currentImage]}alt='images'/>
        <h1> Let's Get Ready!</h1>
        <p>Love Your Outfit</p>
        
        <div className="hero-btns">
            {/* <>
            <Button className="btns" buttonStyle="btn--outline"
            buttonSize="btn--large" variant="primary">Sign-in</Button>{''}
            </> */}
          {/* <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Join Us!
          </Button> */}
          
        </div>
      </div>
    );
  }
}

export default HeroSection;