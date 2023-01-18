import React from 'react'
import img2 from '../../images/img2.jpg'
import './home.css'
import img3 from '../../images/img3.jpg'
import { Link } from 'react-router-dom'


export default function Home() {
  return (
    <div>
        <h1 className='home-logo'>Technical Solutions</h1>
  <ul className='nav-ul'>
  <li  className='nav-li'><Link to='/'>Home</Link></li>
  <li className='nav-li'><Link to='/Login'>Sign up</Link></li>
 
  <li className='nav-li'><Link to='/Employees'>Team</Link></li>
</ul>

<div className='section-1'>

    <h3 className='h3-content'>Great Marketing<br></br>Make The Customer
     <br></br> <span>Feel Smart</span>
     </h3>
     
<img src={img2} alt='img' className='img2'/>
</div>

<div className='section-2'>
    <img src={img3} alt='' className='img3'/>
<h1 className='section2-content'>Let's Level Up<br></br>Your Business With<br></br><span>Digital Media</span></h1>
</div>
<div className='section-4'>
    <center>
    <p>Focused On Growing Brands Online<br></br>Integrating Brand Strategy<br></br>
     With Digital Initiative to<br></br>Improve Customer Experience<br></br>
     Online & Offline
    </p>
    <button type='button' className='home-btn'>Learn More</button>
    </center>
</div>
    </div>
  )
}
