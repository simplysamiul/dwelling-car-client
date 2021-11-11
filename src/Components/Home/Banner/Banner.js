import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import bannerOne from '../../../resource/banner-img/banner-1.jpg';
import bannerTwo from '../../../resource/banner-img/banner-2.jpg';
import bannerThree from '../../../resource/banner-img/banner-3.jpg';
import './Banner.css';


const Banner = () => {
    return (
        <div>
        <Fade easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${bannerOne})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${bannerTwo})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${bannerThree})`}}>
            </div>
          </div>
        </Fade>
      </div>
    );
};

export default Banner;