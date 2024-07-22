import "./ViewTour.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
function ViewTour() {
  const navigate = useNavigate();

  const [tours, setTours] = useState([]);
  const bookNow = (id) => {
    localStorage.setItem("tourId", id)
    navigate("/viewItinerary");
  };

  useEffect(() => {
    fetch("http://localhost:5128/api/Tour/GetAllTourPackage", {
      method: "GET",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        var myDataa = await res.json();
        setTours(myDataa);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="main-tour">
      <div class="main-viewTour">
        <div class="container-expand-lg">


   	 
          <div class="card-deck row">
            {tours.map((u) => (
              <div class="col-md-4">
                <div class="card mb-4">
                  <div class="view overlay">
                    <img class="card-img-top" src={`http://127.0.0.1:10000/devstoreaccount1/tourisim/tour/${u.tourImage}`} alt="Card image cap" />
                    <a href="#!">
                      <div class="mask rgba-white-slight"></div>
                    </a>
                  </div>
                  <div class="card-body">
                    <h4 class="card-title">{u.tourDescription}</h4>
                    <p style={{  color: "black" }}>Number of Days {u.noOfDays}</p>
                    <p style={{  color: "black" }}>Number of Nights {u.noOfNights}</p>

                    <hr />From  <span className="money">${u.tourPrice}</span><hr />
                    <button type="button" id="book-btn" onClick={() => bookNow(u.tourId)}>
                     More Info
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewTour;
