import React from 'react'
import '../Navbar/Navbar.css'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Logoimg from '../../images/logo.png'
import { Link} from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className="logo">
             <img src={Logoimg} alt="" style={{width:"60px",height:"68px"}}/>
              <h1>MyFurniture</h1>
        </div>

        <div className="nav-links">
          <ul>
                <li><Link to='/' style={{textDecoration:'none',color:'#000000'}}>Home</Link> </li>
                <li> <Link to='/shop' style={{textDecoration:'none',color:'#000000'}}>Shop</Link> </li>
                <li><Link to='/about'style={{textDecoration:'none',color:'#000000'}}>About </Link> </li>
                <li><Link to='/contact' style={{textDecoration:'none',color:'#000000'}}> Contact </Link> </li>
          </ul>

        </div>

        <div className="nav-icons">
            <span><PersonOutlineIcon /><PriorityHighIcon sx={{position:'relative',left:-9,top:-5,fontSize:15}}/></span>
            <span><SearchRoundedIcon/></span>
            <span><FavoriteBorderRoundedIcon/></span>
            <span><ShoppingCartOutlinedIcon/></span>

        </div>
    </div>
  )
}

export default Navbar
