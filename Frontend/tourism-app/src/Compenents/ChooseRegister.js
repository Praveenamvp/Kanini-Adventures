import React from "react";
import Menu from "./Menu";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../Compenents/ChooseRegister.css";

import main from "../Images/tropical-beach.jpg";

function ChooseRegister() {
  return (
    <div class="main">
      <Menu />
      <div class="card bg-dark text-white">
        <img src={main} class="card-img-main" alt="..." />
        <div className="card-img-overlay ">
          <h1 className="">
            Hey User Welcome to<span>KWT Tourism </span> get started
          </h1>
          <div class="slider"></div>
          <div class="btn-link-ag">
            <Link className="link-choose" to="/agentregister">
              Agent
            </Link>
            <br />
            <Link className="link-choose" to="/travelerregister">
              Traveler
            </Link>
          </div>
        </div>

        {/* <div className="card-img-overlay card-tex">
   
    <h1 className="card-tex">Hey User Welcome to SMS Medico get started
    </h1>
    <div class="slider"></div>
        <div class="btn">
            <Link class="login" to="/docregister">&nbsp;&nbsp;Doctor &nbsp;&nbsp;&nbsp; Register</Link>
            <Link class="signup" to="/registerpatient">Patient Register</Link>
        </div>
    
  </div> */}
      </div>
    </div>
  );
}
export default ChooseRegister;
