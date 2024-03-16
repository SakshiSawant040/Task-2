import React from 'react'
import '../Home/Home.css';
import BrowseRange from '../../Components/BrowseRange/BrowseRange';
import Products from '../../Components/Products/Products';
import Footer from '../../Components/Footer/Footer';
import FuniroFurniture from '../../Components/FuniroFurniture/FuniroFurniture';
import { Link } from 'react-router-dom';
import RoomPrototypes from '../../Components/RoomPrototypes/RoomPrototypes';



const Home = () => {
  return (
    <div className='Home'>
        <div className="Home-bg">
            <div className="Home-Discover">
                <p style={{fontWeight:'600',fontSize:'18px'}}>New Arrival</p>
                <div>
                <h1>Discover Our New Collection</h1>
                <p style={{fontWeight:'500',}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                </div>
                
                <Link to='/shop'>
                <button>BUY NOW</button>
                </Link> 
            </div>
        </div>

        <div className="BrowseRange">
          <BrowseRange/>
        </div>

        <div className="Products">
          <Products/>
        </div>

        <div className="RoomPrototypes">
          <RoomPrototypes/>
        </div>

        <div className="FuniroFurniture">
          <FuniroFurniture />
        </div>

        <div className="Footer">
          <Footer />
        </div>
    </div>
  )
}

export default Home
