import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import log from "../Images/question.jpg";
import "../Compenents/DeleteAlert.css";
import html2pdf from "html2pdf.js";
import html2canvas from "html2canvas";
function BookedAlert(props) {
  const handleClose = () => {
    // Call the onClose prop from the parent to close the modal
    props.onClose();
  };
  const [user, setUser] = useState({
    id: localStorage.getItem("userId"),
  });
  const [traveler, setTraveler] = useState();

  useEffect(() => {
    console.log("ggjvj");
    fetch("http://localhost:5129/api/User/GetTraveler", {
      method: "POST",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...user, user: {} }),
    })
      .then(async (res) => {
        var myDataa = await res.json();
        if (myDataa.status == 200) {
          alert("succc");
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
        // } else {
        //   alert("login was unsuccessfull");
        // }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleDownloadPDF = () => {
    const input = document.getElementById("bill-generate");
    const pdfOptions = {
      margin: [10, 10],
      filename: "my_component.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2canvas(input).then((canvas) => {
      const pdf = new html2pdf().from(canvas).set(pdfOptions).save();
    });
  }
  return (
    <div className="main">
      <Modal
        show={props.show}
        onHide={handleClose}
        dialogClassName="custom-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Payment Bill</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="card">
            <div class="card-body">
              <div class="container mb-5 mt-3">
                <div class="row d-flex align-items-baseline">
                  <div class="col-xl-9">
                    <p>
                      Invoice <strong>ID: #123-123</strong>
                    </p>
                  </div>
                  <div class="col-xl-3 float-end">
                    <a
                      class="btn btn-light text-capitalize"
                      data-mdb-ripple-color="dark"
                      onClick={handleDownloadPDF}
                    >
                      <i class="far fa-file-pdf text-danger"></i> Export
                    </a>
                  </div>
                  <hr />
                </div>

                <div class="container" id="bill-generate">
                  <div class="col-md-12">
                    <div class="text-center">
                      <h2 className="main-ktw">KTW Tourism</h2>
                      <p class="pt-0"> Book & Travel</p>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-xl-8">
                      <ul class="list-unstyled">
                        <li class="text-muted">
                          To: <span>Praveena</span>
                        </li>
                        <li class="text-muted">No,4 SSM street, Chennai </li>
                        <li class="text-muted">Tamil Name</li>
                        <li class="text-muted">
                          <i class="fas fa-phone"></i> 123-456-789
                        </li>
                      </ul>
                    </div>
                    <div class="col-xl-4">
                      <ul class="list-unstyled">
                        <li class="text-muted">
                          <span class="fw-bold">ID:</span>#123-456
                        </li>
                        <li class="text-muted">
                          {" "}
                          <span class="fw-bold">Creation Date: </span>Jun 8,2023
                        </li>
                        <li class="text-muted">
                          {" "}
                          <span class="me-1 fw-bold">Status:</span>
                          <span class="badge bg-success text-black fw-bold">
                            Paid
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="d-flex flex-row justify-content-between align-items-center order-details">
                    <div>
                      <span class="d-block fs-12">Order date</span>
                      <span class="font-weight-bold">12 March 2020</span>
                    </div>
                    <div>
                      <span class="d-block fs-12">Order number</span>
                      <span class="font-weight-bold">OD44434324</span>
                    </div>
                    <div>
                      <span class="d-block fs-12">Payment method</span>
                      <span class="font-weight-bold">Credit card</span>
                      <img
                        class="ml-1 mb-1"
                        src="https://i.imgur.com/ZZr3Yqj.png"
                        width="20"
                      />
                    </div>
                    <div>
                      <span class="d-block fs-12">Shipping Address</span>
                      <span class="font-weight-bold text-success">
                        New Delhi
                      </span>
                    </div>
                  </div>
                  <hr />

                  <div class="mt-5 amount row">
                    <div class="d-flex justify-content-center col-md-6">
                      <img
                        src="https://i.imgur.com/AXdWCWr.gif"
                        width="250"
                        height="100"
                      />
                    </div>
                    <div class="col-md-6">
                      <div class="billing">
                        <div class="d-flex justify-content-between">
                          <span>Subtotal</span>
                          <span class="font-weight-bold">$120</span>
                        </div>
                        <div class="d-flex justify-content-between mt-2">
                          <span>Shipping fee</span>
                          <span class="font-weight-bold">$15</span>
                        </div>
                        <div class="d-flex justify-content-between mt-2">
                          <span>Tax</span>
                          <span class="font-weight-bold">$5</span>
                        </div>
                        <div class="d-flex justify-content-between mt-2">
                          <span class="text-success">Discount</span>
                          <span class="font-weight-bold text-success">$25</span>
                        </div>
                        <hr />
                        <div class="d-flex justify-content-between mt-1">
                          <span class="font-weight-bold">Total</span>
                          <span class="font-weight-bold text-success">
                            $165
                          </span>
                        </div>
                      </div>
                      <hr />
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-xl-12">
                      <h5 className="thank-you">
                        Thank you for Booking in KTW Tourism
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default BookedAlert;
