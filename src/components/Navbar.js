import React from 'react';
import './Navbar.css'

const Navbar = props => {
 
  return(
  

  <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
  {/* <div class ="container"> */}

  <i className={props.icon} id="icon" onClick={props.onclick}></i>
  <img src="images/logo.png" style={{height:"60px"}}></img>
  <h2 className="navbar-brand " id="c-name">SAHYOG</h2>

    

    
      <ul className="navbar-nav ml-auto mr-5 "> 
      <div  id="google_translate_element" >  </div>
      </ul>
      {/* </div> */}
  </nav>

);
}

  

export default Navbar;
