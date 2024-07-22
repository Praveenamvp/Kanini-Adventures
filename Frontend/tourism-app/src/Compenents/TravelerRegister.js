import Menu from "./Menu";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";
import "./TravelerRegister.css";
import { AiFillGithub } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

function TravelerRegister() {
  const navigate = useNavigate();
  const [traveler, setTraveler] = useState({
    user: {
      userEmail: "",
    },

    userName: "",
    mobileNumber: "",
    passwordString: "",
  });
  var travelerRegister = () => {
    console.log(traveler);
    fetch("http://localhost:5129/api/User/AddTraveler", {
      method: "POST",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...traveler, traveler: {} }),
    })
      .then(async (res) => {
        var myDataa = await res.json();
        localStorage.setItem("token", myDataa.token);
        localStorage.setItem("role", myDataa.role);
        if (res.status == 201) {
          if (myDataa.user.role == "traveler") {
            alert("register was successfull");
            navigate("/chooseRegister");
          }
          else{
            alert("register was unsuccessfull");
  
          }
   
        } 
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div class="main">
      <Menu />
      <div class="container">
        <div class="main-login">
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
                        <div>
                          <div class="col-md-12 mb-4">
                            <div class="form-outline">
                              <label class="form-label" for="form3Example1">
                                First name
                              </label>

                              <input
                                type="text"
                                id="form3Example1"
                                class="form-control"
                                onChange={(event) => {
                                  setTraveler({
                                    ...traveler,
                                    userName: event.target.value,
                                  });
                                }}
                              />
                            </div>
                          </div>
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
                              
                              setTraveler((prevState) => ({
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
                            Phone Number
                          </label>

                          <input
                            type="text"
                            id="form3Example4"
                            class="form-control"
                            onChange={(event) => {
                              setTraveler({
                                ...traveler,
                                mobileNumber: event.target.value,
                              });
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
                              setTraveler({
                                ...traveler,
                                passwordString: event.target.value,
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
                          onClick={travelerRegister}
                        >
                          Sign up
                        </button >

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
export default TravelerRegister;
