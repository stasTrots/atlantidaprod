import React, { Component } from "react";
import Slider from "react-slick";
import './sliderFoot.css'


export default class Rtl extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      rtl: true,
      arrows: false  
    };
    return (
        <div className="container container-servis">
           
            <Slider {...settings}>
                <div>
                    <div className="sleder">
                        <div className="slider-img">
                            <img src="image/slider.png" alt=""/>
                        </div>
                        <div className="slider-text">
                            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu libero ut erat sodales finibus sed in dolor. 
                                Etiam iaculis, nibh a lobortis egestas, est urna sodales</h2>
                        </div>
                        <div className="slider-inf">
                            <h3>alexandr podvalny</h3>
                            <i>Free-PSD-Template.com Company</i>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="sleder">
                        <div className="slider-img">
                            <img src="image/slider.png" alt=""/>
                        </div>
                        <div className="slider-text">
                            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu libero ut erat sodales finibus sed in dolor. 
                                Etiam iaculis, nibh a lobortis egestas, est urna sodales</h2>
                        </div>
                        <div className="slider-inf">
                            <h3>alexandr podvalny</h3>
                            <i>Free-PSD-Template.com Company</i>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="sleder">
                        <div className="slider-img">
                            <img src="image/slider.png" alt=""/>
                        </div>
                        <div className="slider-text">
                            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu libero ut erat sodales finibus sed in dolor. 
                                Etiam iaculis, nibh a lobortis egestas, est urna sodales</h2>
                        </div>
                        <div className="slider-inf">
                            <h3>alexandr podvalny</h3>
                            <i>Free-PSD-Template.com Company</i>
                        </div>
                    </div>
                </div>
          
            </Slider>
            
        </div>
           
            
            
       
        
        
      
    );
  }
}