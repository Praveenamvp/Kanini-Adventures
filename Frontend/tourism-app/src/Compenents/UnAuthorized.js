import React from "react";
import Menu from "./Menu";
import "../Compenents/ChooseRegister.css";
import log from '../Images/404.jpg';


function ChooseRegister() {
  return (
    <div class="main">
        <Menu/>
        <div className="un-img">        <img src={log} ></img>
</div>
    <div class="alert alert-danger un-text"  role="alert">
  Your UnAuthorized to Book Tour Package 
</div>
    </div>
  );
}
export default ChooseRegister;
