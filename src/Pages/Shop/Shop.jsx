import '../Shop/Shop.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import ViewDayOutlinedIcon from '@mui/icons-material/ViewDayOutlined';
import ShopItems from '../../Components/ShopItems/ShopItems';
import Footer from '../../Components/Footer/Footer';
import Feature from '../../Components/Features/Feature';
import { Link } from 'react-router-dom';

const Shop = () => {
  return (
    <div className='Shop'>

      <div className="shop-bg">
        <div className="shop-heading">
        <h1>Shop</h1>
          <div className='sub-heading'>
              <Link to='/'>
                <button>Home </button>
                <ArrowForwardIosIcon fontSize='14px' />
              </Link>
              <span>Shop</span> 
              
          </div>
      </div>


      </div>

      <div className="filter-frame">
        <div className="left-frame">
            <div className="filter">
              <p className='fiter-icon'>
                <TuneRoundedIcon  color='#9F9F9F'/>
                <span>Filter</span>
              </p>
              <p className='rounds' style={{height:'15px', overflow:'hidden'}}>
                <DragIndicatorIcon />
              </p>
              <p className='view-list'>
              <ViewDayOutlinedIcon/>
              </p>
            </div>
            <div className="line" style={{width:'1.5px',height:'29px',background:'red',marginRight:'20px'}}>

            </div>
            <div className="results">
              <p>Showing 1–16 of 32 results</p>
            </div>

        </div>
        <div className="right-frame">
            <div className="show-count">
              <h1>Show</h1>
              <div className="count">
                <h1>16</h1>
              </div>
            </div>
            <div className="short-by">
              <h1 >Short by</h1>
              <div className="default">
                <h1>Default</h1>
              </div>
            </div>
        </div>
      </div>
      <div className="items">
        <div><ShopItems /></div>
        <div><ShopItems /></div>
        <div><ShopItems /></div>
        <div><ShopItems /></div>

        <div className="next-button">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button id='next'>Next</button>
        </div>
        
      </div>
      <div className="Features">
        <Feature />
      </div>

      <div className="footer">
        <Footer/>
      </div>
    </div>
  )
}

export default Shop
