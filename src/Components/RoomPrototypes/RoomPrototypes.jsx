import React, { useState } from 'react'
import './RoomPrototypes.css'
import {images} from './shop';
import Slider from 'react-slick';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const RoomPrototypes = () => {

  const NextArrow = ({onclick}) =>{
    return(
      <div className="next-arrow">
          <ChevronRightRoundedIcon />
      </div>
    );

  };
  const [imageIndex, setImageIndex] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    arrows: false,
    centerMode:true,
    nextArrow:<NextArrow />,
    beforeChange:(current, next)=> setImageIndex(next)
  };
  return (
    <div className='RoomPrototypes'>
      <div className="RoomPrototypes-heading">
                <h1 className='head'>50+ Beautiful rooms inspiration</h1>
                <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
            <button id='Explore-btn'>Explore More</button>
      </div>
      <div className="slider-container">
        <div className="slider">
          <Slider {...settings}>
            {
              images.map((item)=>
                <div className={item.id === imageIndex ? "slide activeSlide" : "slide"}>
                    <img src={item.image} alt="" /> 
                    <p className='space'></p>
                </div>
              )
            }
          </Slider>
        </div>


          {/* <div className="img-box">
            <img src="" alt="" /> 
             <div className="carousel-layer">
              <h3></h3>
              <h1></h1>
            </div> */}
          </div>
      </div>
    
  )
}

export default RoomPrototypes
