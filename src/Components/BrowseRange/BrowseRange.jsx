import React from 'react'
import living from '../../images/living.png';
import Dinning from '../../images/Dinning.png';
import Bedroom from '../../images/Bedroom.png';
import '../BrowseRange/Browserange.css'

const BrowseRange = () => {
  return (
    <div className='BrowseRange'>
      <div className="Browse-heading">
        <h1>Browse The Range</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div className="Browse-imgs">
        <div className="img1">
            <img src={Dinning} alt="" />
            <p>Dinning</p>

        </div>
        <div className="img2">
        <img src={living} alt="" />
            <p>living</p>
        </div>
        <div className="img3">
        <img src={Bedroom} alt="" />
            <p>Bedroom</p>
        </div>
      </div>
    </div>
  )
}

export default BrowseRange
