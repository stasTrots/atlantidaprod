import React, { Component } from "react";
import Slider from "react-slick";
import './sliderFoot.css'
export default class SliderIntro extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    };
    return (
     
        <div className="container container-servis">
            <Slider {...settings}>
                
                    <div className="sleder">
                        <h3>Hi!!!</h3>
                    </div>
                
                <div className="sleder">
                    <h3>How Are You???</h3>
                </div>
                   
                <div className="sleder">
                    <h3>Welcome to Antlatida prod.!</h3>
                </div>
               
            </Slider>
        </div>
        
      
    );
  }
}