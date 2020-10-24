import React from 'react';
import { Link} from "@reach/router";
import './Sidebar.css'

const Sidebar = () => {

  const NavLink = props => {
    return(<Link
      {...props}
      getProps={({ isCurrent }) => {
        // the object returned here is passed to the
        // anchor element's props
        return {
          style: {
            color: isCurrent ? "darkBlue" : "black"
          }
        };
      }}
    />
  )}
  return(
    <div  id="wrapper">


<div className="bg-light border-right" id="sidebar-wrapper">
  <div className="sidebar-heading item">HELLO ADMIN</div>
  <div className="list-group list-group-flush"> 
    <NavLink to="/" className="list-group-item list-group-item-action bg-light item">Home</NavLink>
    <NavLink to="/register" className="list-group-item list-group-item-action bg-light item">Register</NavLink>
    <NavLink to="/goandgive" className="list-group-item list-group-item-action bg-light item">Go And Give</NavLink>
    <NavLink to="/donate" className="list-group-item list-group-item-action bg-light item">Donate</NavLink>
    <NavLink to="/checkavailability" className="list-group-item list-group-item-action bg-light item">Check Availability</NavLink>
    <NavLink to="/organisations" className="list-group-item list-group-item-action bg-light item">Organisations</NavLink>
    <NavLink to="/faq" className="list-group-item list-group-item-action bg-light item">FAQ</NavLink>
    <NavLink to="/contactus" className="list-group-item list-group-item-action bg-light item">Contact us</NavLink>
   

  </div>

</div>

</div>
);
  }
export default Sidebar;
