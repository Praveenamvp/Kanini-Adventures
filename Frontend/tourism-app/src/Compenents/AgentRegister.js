import Menu from "./Menu";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";
import "./AgentRegister.css";
import { AiFillGithub } from "react-icons/ai";

import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import AgentNav from "./AgentNav";

function AgentRegister() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();
  const [agent, setAgent] = useState({
    user: {
      userEmail: "",
    },

    agentManagerName: "",
    agentMobileNo: "",
    agentName: "",
    agentAddress: "",
    state: "",
    country: "",
    licenseNumber: "",
   
    passwordString: "",
  });
  var agentRegister = () => {
    console.log(agent);
    fetch("http://localhost:5129/api/User/AddAgent", {
      method: "POST",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...agent, agent: {} }),
    })
      .then(async (res) => {
        var myDataa = await res.json();
        localStorage.setItem("token", myDataa.token);
        localStorage.setItem("role", myDataa.role);
        // localStorage.setItem("userId", myDataa.userId)
        if (res.status == 201) {
         
            alert("register was successfull");
            // $('#modalRelatedContent').modal('show');

          }
          else{
            alert("register was unsuccessfull");
  
          }
          // else if(myDataa.role=="patient")
          // {
          //   alert("login was successfull")
          //   navigate("/patient");
  
          // }
          // else if(myDataa.role=="admin"){
          //   navigate("/admin");
          //   alert("login was successfull")
  
          // }
        
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div class="main">
      <AgentNav />
      <div class="container">
     

<div class="modal fade right" id="modalRelatedContent" tabindex="-1" role="dialog"
  aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="false" 
 >
  <div class="modal-dialog modal-side modal-bottom-right modal-notify modal-info" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <p class="heading">Related article</p>

        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" class="white-text">&times;</span>
        </button>
      </div>

      <div class="modal-body">

        <div class="row">
          <div class="col-5">
            <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(55).webp"
              class="img-fluid" alt=""/>
          </div>

          <div class="col-7">
            <p><strong>My travel to paradise</strong></p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit [...]</p>
            <button type="button" class="btn btn-info btn-md">Read more</button>

          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        <div class="main-log-agentRegister">
          <div class="px-4 py-5 px-md-5 text-center text-lg-start">
            <div class="container">
              <div class="row gx-lg-5 align-items-center">
                <div class="col-lg-6 mb-5 mb-lg-0">
                  <h1 class="my-5 display-3 fw-bold ls-tight">
                    The best offer <br />
                    <span class="text-primary">for your holiday trip</span>
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                    quibusdam tempora at cupiditate quis eum maiores libero
                    veritatis? Dicta facilis sint aliquid ipsum atque?
                  </p>
                </div>

                <div class="col-lg-6 mb-5 mb-lg-0 ">
                  <div class="card">
                    <div class="card-body py-5 px-md-5">
                      <div>
                        <div class="form-outline mb-4">
                          <label class="form-label" for="form3Example3">
                            Agent Name
                          </label>

                          <input
                            type="text"
                            id="form3Example3"
                            class="form-control"
                            onChange={(event) => {
                              setAgent({
                                ...agent,
                                agentManagerName: event.target.value,
                              });
                            }}
                            
                          />
                        </div>
                        <div class="form-outline mb-4">
                          <label class="form-label" for="form3Example4">
                            Phone Number
                          </label>

                          <input
                            type="text"
                            id="form3Example4"
                            class="form-control"
                            onChange={(event) => {
                              setAgent({
                                ...agent,
                                agentMobileNo: event.target.value,
                              });
                            }}
                            
                          />
                        </div>
                        <div class="form-outline mb-4">
                          <label class="form-label" for="form3Example3">
                            Email address
                          </label>

                          <input
                            type="email"
                            id="form3Example3"
                            class="form-control"
                            onChange={(event) => {
                              
                              setAgent((prevState) => ({
                                ...prevState,
                                user: {
                                  ...prevState.user,
                                  userEmail: event.target.value,
                                },
                              }));
                            }}
                          />
                        </div>

                        <div class="form-outline mb-4">
                          <label class="form-label" for="form3Example4">
                            Password
                          </label>

                          <input
                            type="password"
                            id="form3Example4"
                            class="form-control"
                            onChange={(event) => {
                              setAgent({
                                ...agent,
                                passwordString: event.target.value,
                              });
                            }}
                          />
                        </div>
                        <div class="form-outline mb-4">
                          <label class="form-label" for="form3Example4">
                            Travel Name
                          </label>

                          <input
                            type="text"
                            id="form3Example4"
                            class="form-control"
                            onChange={(event) => {
                              setAgent({
                                ...agent,
                                agentName: event.target.value,
                              });
                            }}
                          />
                        </div>
                        <div class="form-outline mb-4">
                          <label class="form-label" for="form3Example3">
                            Agent address
                          </label>

                          <textarea
                            class="form-control"
                            rows="3"
                            id="comment"
                            onChange={(event) => {
                              setAgent({
                                ...agent,
                                agentAddress: event.target.value,
                              });
                            }}
                          ></textarea>
                        </div>
                        <div class="form-outline mb-4">
                          <label class="form-label" for="form3Example4">
                            State
                          </label>

                          <input
                            type="text"
                            id="form3Example4"
                            class="form-control"
                            onChange={(event) => {
                              setAgent({
                                ...agent,
                                state: event.target.value,
                              });
                            }}
                          />
                        </div>
                        <div class="form-outline mb-4">
                          <label class="form-label" for="form3Example4">
                            Country
                          </label>

                          <input
                            type="text"
                            id="form3Example4"
                            class="form-control"
                            onChange={(event) => {
                              setAgent({
                                ...agent,
                                country: event.target.value,
                              });
                            }}
                          />
                        </div>
                        <div class="form-outline mb-4">
                          <label class="form-label" for="form3Example4">
                            Lisence Number
                          </label>

                          <input
                            type="text"
                            id="form3Example4"
                            class="form-control"
                            onChange={(event) => {
                              setAgent({
                                ...agent,
                                licenseNumber: event.target.value,
                              });
                            }}
                          />
                        </div>
                        <p>
                          registered user? <Link to="/login">sign in</Link>
                        </p>

                        <button
                          type="submit"
                          class="btn btn-primary btn-block mb-4 col-md-12"
                          onClick={agentRegister}
                        >
                          Register
                        </button>

                        <div class="text-center">
                          <p>or sign up with:</p>
                          <button
                            type="button"
                            class="btn btn-link btn-floating mx-1"
                          >
                            <AiFillGithub />
                          </button>

                          <button
                            type="button"
                            class="btn btn-link btn-floating mx-1"
                          >
                            <AiFillGoogleCircle />
                          </button>

                          <button
                            type="button"
                            class="btn btn-link btn-floating mx-1"
                          >
                            <BsFacebook />
                          </button>

                          <button
                            type="button"
                            class="btn btn-link btn-floating mx-1"
                          >
                            <i className="loan-search-icon">
                              <AiFillTwitterCircle />
                            </i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AgentRegister;
