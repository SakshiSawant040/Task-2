import React from 'react'
import '../ShopItems/ShopItems.css';
import img1 from '../../images/Syltherine.png';
import img2 from '../../images/Laviosa.png';
import img3 from '../../images/Lolito.png';
import img4 from '../../images/Respira.jpeg';
import ShareIcon from '@mui/icons-material/Share';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
const ShopItems = () => {
  return (
    <div className='ShopItems'>
        <div className="item-1">
            
                <div className="item-img">
                    <img src={img1} alt="" />
                </div>
                <div className="item-details">
                    <h1>Syltherine</h1>
                    <p className='Description'>
                        Stylish cafe chair
                    </p>
                    <p className='price'>
                    <span>Rp 2.500.000</span>
                    <span id='price-2'>Rp 3.500.000</span>
                    </p>
                </div>
            
            <div className="items-layer">
                <button id='cart-btn'>Add to cart</button>
                <div className='layer-icons'>
                    <p>
                        <button><ShareIcon />share</button>
                    
                    
                        <button><SyncAltIcon/>Compare</button>
                        
                    
                    
                        <button><FavoriteBorderOutlinedIcon />Like</button> 
                        
                    </p>              

                </div>
            </div>
        </div>
        <div className="item-2">
            
                <div className="item-img">
                    <img src={img2} alt="" />
                </div>
                <div className="item-details">
                <h1>Leviosa</h1>
                    <p className='Description'>
                        Stylish cafe chair
                    </p>
                    <p className='price'>
                    <span>Rp 2.500.000</span>
                    </p>
                </div>
            
            <div className="items-layer">
                <button id='cart-btn'>Add to cart</button>
                <div className='layer-icons'>
                    <p>
                        <button><ShareIcon/>share</button>
                   
                        <button><SyncAltIcon/>Compare</button>
                        
                 
                        <button><FavoriteBorderOutlinedIcon />Like</button> 
                        
                    </p>              

                </div>
            </div>
        </div>
        <div className="item-3">
            
                <div className="item-img">
                    <img src={img3} alt="" />
                </div>
                <div className="item-details">
                    <h1>Lolito</h1>
                    <p className='Description'>
                    Luxury big sofa
                    </p>
                    <p className='price'>
                    <span>Rp 7.000.000</span>
                    <span id='price-2'>Rp 14.000.000</span>
                    </p>
                </div>
           
            <div className="items-layer">
                <button id='cart-btn'>Add to cart</button>
                <div className='layer-icons'>
                    <p>
                        <button><ShareIcon/>share</button>
                    
                        <button><SyncAltIcon/>Compare</button>
                        
                    
                        <button><FavoriteBorderOutlinedIcon />Like</button> 
                        
                    </p>              

                </div>
            </div>
        </div>
        <div className="item-4">
            
                <div className="item-img">
                <img src={img4} alt="" />
                </div>
                <div className="item-details">
                    <h1>Respira</h1>
                    <p className='Description'>
                    Outdoor bar table and stool
                    </p>
                    <p className='price'>
                    <span>Rp 500.000</span>
                    </p>
                </div>
            
            <div className="items-layer">
                <button id='cart-btn'>Add to cart</button>
                  <div className='layer-icons'>
                    <p>
                        <button><ShareIcon/>share</button>
                    
                        <button><SyncAltIcon/>Compare</button>
                        
                    
                        <button><FavoriteBorderOutlinedIcon />Like</button> 
                        
                    </p>              
                   </div>
            </div>
        </div>
    </div>
  )
}

export default ShopItems
