import React from "react";
import logo from '../Images/logo.png'
import { Link } from "react-router-dom";
import { MdAddIcCall } from "react-icons/md";

import './Menu.css'
function Menu() {
  return <div><div class="container-fluid-lg">

	
  <nav class="navbar navbar-expand-lg navbar-light">
  <img  className="ss" src={logo} alt="Card image cap" />

      <button class="navbar-toggler" type="button" 
      data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto topnav">
             
              <li class="nav-item">
                  <Link class="nav-link text-black" to="/viewTour">View Packages</Link>
              </li>
            
              <li class="nav-item">
                  <Link class="nav-link btn b text-black" type="button" to="/login" data-toggle="modal" data-target="#myModal">Sign In</Link>                  
              </li>
              <li class="nav-item">
                  <Link class="nav-link  text-black"   to="/chooseregister" data-toggle="modal" data-target="#myModal">Register</Link>
              </li>
              <li class="icon-call">
                  <Link class="nav-link  text-black"   data-toggle="modal" data-target="#myModal"><i><MdAddIcCall/></i></Link>
              </li>
              <li class="">
                  <Link class="nav-link  text-black"   data-toggle="modal" data-target="#myModal">Need-help-booking?<br/>1-234-456-542</Link>
              </li>
          </ul>
      </div>
      


          

  </nav>
</div>           
</div>           

}
export default Menu;
