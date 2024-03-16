import React from 'react'
import '../Features/Feature.css';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';

import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import RedeemOutlinedIcon from '@mui/icons-material/RedeemOutlined';

const Feature = () => {
  return (
    <div className='Feature'>
      <div className="quality">
        <EmojiEventsOutlinedIcon style={{height:'60px',width:'60px'}} />
        <div className="heading">
            <h1>High Quality</h1>
            <p>crafted from top materials</p>
        </div>
      </div>
      <div className="warranty">
        <VerifiedUserOutlinedIcon style={{height:'60px',width:'60px'}}/>
        <div className="heading">
            <h1>Warranty Protection</h1>
            <p>Over 2 years</p>
        </div>
      </div>
      <div className="shipping">
        <RedeemOutlinedIcon style={{height:'60px',width:'60px'}}/>
        <div className="heading">
            <h1>Free Shipping</h1>
            <p>Order over 150 $</p>
        </div>
      </div>
      <div className="support">
        <SupportAgentOutlinedIcon style={{height:'60px',width:'60px'}}/>
        <div className="heading">
            <h1>24/7 Support</h1>
            <p>Dedicated support</p>
        </div>
      </div>
    </div>
  )
}

export default Feature
