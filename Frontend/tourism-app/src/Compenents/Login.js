import Menu from "./Menu";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";
import "./TravelerRegister.css";
import { AiFillGithub } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    userEmail: "",
    password: "",
  });
  const validateEmail = (email) => {
    // Basic email validation using a regular expression
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password) => {
    // Basic password validation (minimum 6 characters)
    return password.length >= 3;
  };
  var login = () => {
    console.log(user);
    if (!validateEmail(user.userEmail)) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (!validatePassword(user.password)) {
      toast.error("Password should be at least 6 characters long");
      return;
    }
    fetch("http://localhost:5129/api/User/LoginUser", {
      method: "POST",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...user, user: {} }),
    })
      .then(async (res) => {
        var myDataa = await res.json();
        toast.success("Hey welcome to Praveena tourisim!", {
          position: toast.POSITION.TOP_RIGHT,
        });
        localStorage.setItem("token", myDataa.token);
        localStorage.setItem("role", myDataa.role);
        localStorage.setItem("userId", myDataa.userId);
        if (res.status == 200) {
          if (myDataa.role == "admin") {
            toast.success("Hey admin welcome to KTW tourisim!", {
              position: toast.POSITION.TOP_RIGHT,
            });
            navigate("/adminnav");
          }
          if (myDataa.role == "traveler") {
            toast.success("Hey admin welcome to KTW tourisim!", {
              position: toast.POSITION.TOP_RIGHT,
            });
            navigate("/travelernav");
          }
          if (myDataa.role == "agent") {
            toast.success("Hey admin welcome to KTW tourisim!", {
              position: toast.POSITION.TOP_RIGHT,
            });
            navigate("/agentnav");
          }
        } else {
          toast.error("Hey please check you credentials", {
            position: toast.POSITION.TOP_RIGHT,
          });
          alert("login was unsuccessfull");
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
                        <div class="form-outline mb-4">
                          <label class="form-label" for="form3Example3">
                            Email address
                          </label>

                          <input
                            type="email"
                            id="form3Example3"
                            class="form-control"
                            onChange={(event) => {
                              setUser({
                                ...user,
                                userEmail: event.target.value,
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
                              setUser({
                                ...user,
                                password: event.target.value,
                              });
                            }}
                          />
                        </div>
                        <p>
                          not registered user?{" "}
                          <Link to="/chooseRegister">sign up</Link>
                        </p>
                        <button
                          type="submit"
                          class="btn btn-primary btn-block mb-4 col-md-12"
                          onClick={login}
                        >
                          Sign in
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
export default Login;
