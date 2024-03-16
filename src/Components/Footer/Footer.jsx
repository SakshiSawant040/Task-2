import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'



const Footer = () => {
  return (
    <div className='Footer'>
        <div className="Address">
            <h1>MyFurniture.</h1>
            <p className='add'>
            400 University Drive Suite 200 Coral Gables,
            <br/> FL 33134 USA
            </p>
        </div>
        <div className="footer-links">
            <div className="Links">
                <h4>Links</h4>
                <div>
                <ul>
                <li><Link to='/' style={{textDecoration:'none',color:'#000000'}}>Home</Link> </li>
                <li> <Link to='/shop' style={{textDecoration:'none',color:'#000000'}}>Shop</Link> </li>
                <li><Link to='/about'style={{textDecoration:'none',color:'#000000'}}>About </Link> </li>
                <li><Link to='/contact' style={{textDecoration:'none',color:'#000000'}}> Contact </Link> </li>
                </ul>
                
                </div>

            </div>
            <div className="Help">
                <h4>Help</h4>
                <div>
                <ul>
                    <li>Payment option</li>
                    <li>Returns</li>
                    <li>Privacy Policies</li>
                </ul>
                </div>

            </div>
            <div className="Newsletter">
                <h4>Newsletter</h4>
                <div className="email">
                    <input type="text" placeholder='Enter Your Email Address' /> 
                    <button>SUBSCRIBE</button>
                </div>
                <div className="lines" style={{display:'flex',alignItems:'center'}}>
                <hr style={{width:'174px',border:'1px solid black'}}/>
                <hr style={{width:'79px',border:'1px solid black',marginLeft:'3px'}}/>
                </div>
            </div>

        </div>
        
        <div className="copyrights" >
                {/* <hr style={{width:'1440px', border: '1px solid #D9D9D9'}} /> */}
                <p style={{fontSize:'16px'}}>2023 <h1 style={{display:'inline-block',fontSize:'16px'}}>MyFurniture</h1> . All rights reverved</p>
            </div>
    </div>
  )
}

export default Footer
