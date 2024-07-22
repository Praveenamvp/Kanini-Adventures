import React from "react";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";
import { MdAddIcCall } from "react-icons/md";
import main from "../Images/bech.jpg";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";
import "./Menu.css";
import { AiFillGithub } from "react-icons/ai";
import ViewTour from "./ViewTour";

function MainMenu() {
  return (
    <div>
      <div class="container-fluid-lg">
        <nav class="navbar navbar-expand-lg navbar-light">
          <img className="ss" src={logo} alt="Card image cap" />

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="collapse navbar-collapse justify-content-end "
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav ml-auto topnav">
              <li class="nav-item">
                <Link class="nav-link text-black" to="/viewTour">
                  View Packages
                </Link>
              </li>

              <li class="nav-item">
                <Link
                  class="nav-link btn b text-black"
                  type="button"
                  to="/login"
                  data-toggle="modal"
                  data-target="#myModal"
                >
                  Sign In
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link  text-black"
                  to="/chooseregister"
                  data-toggle="modal"
                  data-target="#myModal"
                >
                  Register
                </Link>
              </li>
              <li class="icon-call">
                <Link
                  class="nav-link  text-black"
                  data-toggle="modal"
                  data-target="#myModal"
                >
                  <i>
                    <MdAddIcCall />
                  </i>
                </Link>
              </li>
              <li class="">
                <Link
                  class="nav-link  text-black"
                  data-toggle="modal"
                  data-target="#myModal"
                >
                  Need-help-booking?
                  <br />
                  1-234-456-542
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div class="card bg-dark text-white">
        <img src={main} class="card-img-main" alt="..." />
        <div className="card-img-overlay card-tex">
          <br />
          <br />
          <br />
          <h1 className="card-text-main">
            <p className="main--tourism">
              Welcome to<span>&nbsp;KWT Tourism </span> <br />
              Get started
            </p>
          </h1>
          <div class="slider"></div>
        </div>

      </div>
      <ViewTour />
      <div class="container">
        <footer class="py-5">
          <div class="row">
            <div class="col-4">
              <h5>Section</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    Home
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    Features
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    Pricing
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    FAQs
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    About
                  </a>
                </li>
              </ul>
            </div>

   

            <div class="col-2">
              <h5>Section</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    Tours
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    Itinerary
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    Inclusions
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    Exclusions
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-4 offset-1">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of whats new and exciting from us.</p>
                <div class="d-flex w-100 gap-2">
                  <label for="newsletter1" class="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    class="form-control"
                    placeholder="Email address"
                  />
                  <button class="btn btn-primary" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
              <br />
              <div class="text-center">
                <button type="button" class="btn btn-link btn-floating mx-1">
                  <AiFillGithub />
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
                  <AiFillGoogleCircle />
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
                  <BsFacebook />
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
                  <i className="loan-search-icon">
                    <AiFillTwitterCircle />
                  </i>
                </button>
              </div>
            </div>
          </div>

          <div class="d-flex justify-content-between py-4 my-4 border-top">
            <p>&copy; 2021 Company, Inc. All rights reserved.</p>
            <ul class="list-unstyled d-flex"></ul>
          </div>
        </footer>
      </div>
    </div>
  );
}
export default MainMenu;
