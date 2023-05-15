import React, { Component } from "react";
import './Image.css'
class ImageSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        "/Images/H6e59ec2205274bada6d8d1fbd199d1584.jpg",
        "/Images/H048a01cdd5564809809d6dc2c6cfb596m.jpg",
        "/Images/download.jpg",
        
      ],
      currentIndex: 0,
      isSliding: true,
    };
  }

  componentDidMount() {
    this.startSlide();
  }

  componentWillUnmount() {
    clearInterval(this.slideInterval);
  }

  startSlide = () => {
    this.slideInterval = setInterval(() => {
      this.slideToNext();
    }, 2000);
    this.setState({ isSliding: true });
  };


  slideToNext = () => {
    const { currentIndex, images } = this.state;
    const newIndex = (currentIndex + 1) % images.length;
    if (newIndex === 0) {
      this.stopSlide();
    } else {
      this.setState({ currentIndex: newIndex });
    }
  };
  

  slideToPrev = () => {
    const { currentIndex, images } = this.state;
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    if (newIndex !== images.length - 1) {
      this.setState({ currentIndex: newIndex });
    }
    
    this.stopSlide();
  };

  
  stopSlide = () => {
    clearInterval(this.slideInterval);
    this.setState({ isSliding: false });
  };



  render() {
    const { images, currentIndex, isSliding } = this.state;
    return (
      
        <div>
          <div className="imgg">
        <img
          src={images[currentIndex]}
          alt="Slider Image"
          style={{ width: "300px", height: "200px" }}
        /></div>
       <div className="btn">
          <button onClick={this.slideToPrev}>Prev</button>
          {isSliding ? (
            <button onClick={this.stopSlide}>Stop</button>
          ) : (
            <button onClick={this.startSlide}>Slide</button>
          )}
          <button onClick={this.slideToNext}>Next</button>
        </div></div>
     
    );
  }
}

export default ImageSlider;
