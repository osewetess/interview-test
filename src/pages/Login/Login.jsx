import React from 'react';
import './login.css';
import backgroundimg from '../../images/img1.jpg'
import { Link } from 'react-router-dom';



export default function Login() {

 
  return (
   
      
      <div class="container">

         <img src={backgroundimg} alt='image' className='log_background' />
    
    <h1 className='logo'>Technical solutions</h1>

   <div className='form'>
    <h2 className='heading'>sign in</h2>
  <form >
    <div className="form-group">
     
      <input type="text" className="form-control" id="uname" placeholder="Enter username" name="uname" required/>
      
    </div>

    <div className="form-group">
     
      <input type="text" className="form-control" id="email" placeholder="Enter email" name="email" required/>
      
    </div>

    <div className="form-group">
     
      <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" required/>
      
    </div>
  
    <button  type="" className="btn btn-primary">Submit</button>
   
    </form>
  </div>
</div>

  
       
   
  )
}
