import React from 'react'
import './Products.css'
import {ProductList} from './ProductList';
import { Link } from 'react-router-dom';
import ShareIcon from '@mui/icons-material/Share';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Products = () => {
  return (
    <div className='Products'>
      <div className="products-heading">
        <h1>Our Products</h1>
      </div>
      <div className="product-container" >
      
        {
          ProductList.map((item)=>
            <div className="product">
              <div className="product-img">
                <img src={item.image} alt="img" />     
              </div>
              <div className="product-details">
                <h1>{item.title}</h1>
                <p className='Description'>
                  {item.Description}
                </p>
                <p className='price'>
                  <span>{item.rp1}</span>
                  <span id='price-2'>{item.rp2}</span>
                </p>
              </div>
              <div className="product-layer">
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
          )
        }
      </div>
      <div className="showmore-btn">
                <Link to='/shop'>
                <button>Show More</button>
                </Link> 
        </div>
    </div>
  )
}

export default Products
