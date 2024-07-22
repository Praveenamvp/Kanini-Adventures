
import "./TourRegistration.css";
import {  useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BlobServiceClient } from "@azure/storage-blob";
import AgentNav from "./AgentNav";

function TourRegistration() {
  var [images, setImages] = useState([]);
  const [tourData, setTourData] = useState({
    tourDescription: "11",
    tourState: "df",
    tourPrice: 21,
    noOfDays: 2,
    noOfNights: 2,
    tourImage: "rfe",
    tourDates: [
      {
        startDate: "erf",
        endDate: "ef",
        maxCapacity: 20,
      },
    ],
    tourInclusions: [
      {
        inclusionId: 4,
      },{
        inclusionId: 1
      },{
        inclusionId: 2
      },{
        inclusionId: 3
      }

    ],
    tourExclusions: [
      {
        exclusionId: 4,
      }, {
        exclusionId: 3,
      }, {
        exclusionId: 1,
      }
    ],
    tourItinerary: [
      {
        dayNo: 1,
        locationName: "fes",
        locationDescription: "sfd",
        arivalTime: "",
        depatureTime: "",
        destinationImage: "3d",
        destinationActivity: "dss",
      },
    ],
  });

  const handleExChange = (index, field, value) => {
    setTourData((prevTourData) => ({
      ...prevTourData,
      tourExclusions: value,
    }));
  };
  useEffect(() => {
    console.log("Updated tourExclusions:", tourData.tourExclusions);
  }, [tourData.tourExclusions]);

  const [inclusions, setInclusions] = useState([]);
  const [exclusions, setExclusions] = useState([]);
  useEffect(() => {}, [inclusions, exclusions]);
  useEffect(() => {
    getTypes();
    getCategories();
  }, []);
  var getTypes = () => {
    fetch("http://localhost:5128/api/Tour/GetAllInclusion  ", {
      method: "GET",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
        // 'Authorization': 'Bearer ' + localStorage.getItem('token')
      },
    })
      .then(async (data) => {
        if (data.status == 200) {
          setInclusions([]);
          var mydata = await data.json();
          inclusions.push(mydata);
          setInclusions([...mydata]);
          console.log(inclusions);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  var getCategories = () => {
    fetch("http://localhost:5128/api/Tour/GetAllExclusion ", {
      method: "GET",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
        // 'Authorization': 'Bearer ' + localStorage.getItem('token')
      },
    })
      .then(async (data) => {
        if (data.status == 200) {
          setExclusions([]);
          var mydata = await data.json();
          exclusions.push(mydata);
          setExclusions([...mydata]);
          console.log(exclusions);
        }
      })
      .catch((err) => {});
  };

  const navigate = useNavigate();

  const [dates, setDates] = useState([{ startDate: "1", endDate: "1" }]);

  const handleAddDate = () => {
    setDates([...dates, { startDate: "", endDate: "" }]);
  };

  const handleDateChange = (index, field, value) => {
    console.log(field);
    const updatedDates = [...dates];
    updatedDates[index][field] = value;
    setDates(updatedDates);
    setTourData((prevTourData) => ({
      ...prevTourData,
      tourDates: updatedDates,
    }));
    console.log(dates);
    console.log("newew");
    console.log(...tourData.tourDates);
  };
  const handleDeleteDate = (index) => {
    const updatedDates = [...dates];
    updatedDates.splice(index, 1);
    setDates(updatedDates);
    setTourData((prevTourData) => ({
      ...prevTourData,
      tourDates: updatedDates,
    }));
  };

  const handleDeleteEntry = (index) => {
    const updatedAdds = [...itineraryData];
    updatedAdds.splice(index, 1);
    setItineraryData(updatedAdds);
    setTourData((prevTourData) => ({
      ...prevTourData,
      tourItinerary: updatedAdds,
    }));


  };
  const [itineraryData, setItineraryData] = useState([
    {
      dayNo: "",
      locationName: "",
      description: "",
      activities: "",
      arrivalTime: "",
      departureTime: "",
      image: "",
    },
  ]);
  const handleAddEntry = () => {
    setItineraryData([
      ...itineraryData,
      {
        dayNo: "",
        locationName: "",
        description: "",
        activities: "",
        arrivalTime: "",
        departureTime: "",
        image: "",
      },
    ]);
    console.log(itineraryData);
  };

  var login = () => {
    const AZURITE_BLOB_SERVICE_URL = "http://localhost:10000";
    const ACCOUNT_NAME = "devstoreaccount1";
    const ACCOUNT_KEY =
      "Eby8vdM02xNOcqFlqUwJPLlmEtlCDXJ1OUzFT50uSRZ6IFsuFq2UVErCz4I6tq/K1SZFPTOtr/KBHBeksoGMGw==";

    const blobServiceClient = new BlobServiceClient(
      "http://127.0.0.1:10000/devstoreaccount1/tourisim?sv=2018-03-28&st=2023-08-08T07%3A44%3A09Z&se=2023-08-09T07%3A44%3A09Z&sr=c&sp=racwdl&sig=q0gdocL%2FP2HOgeLxAb6q5YMcYVHjSSmoMdcLgs3m6pM%3D",
      "sv=2018-03-28&st=2023-08-08T07%3A44%3A09Z&se=2023-08-09T07%3A44%3A09Z&sr=c&sp=racwdl&sig=q0gdocL%2FP2HOgeLxAb6q5YMcYVHjSSmoMdcLgs3m6pM%3D"
    );
    const containerClient = blobServiceClient.getContainerClient("tour");
    console.log(images, "imgae");
    for (let i = 0; i < images.length; i++) {
      const blobClient = containerClient.getBlobClient(images[i].name);
      const blockBlobClient = blobClient.getBlockBlobClient();
      const result = blockBlobClient.uploadBrowserData(images[i], {
        blockSize: 4 * 1024 * 1024,
        concurrency: 20,
        onProgress: (ev) => console.log(ev),
      });
      console.log(result, "result");
    }
    console.log(tourData);
    fetch("http://localhost:5128/api/Tour/AddTourPackage", {
      method: "POST",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...tourData, tourData: {} }),
    })
      .then(async (res) => {
        if (res.status == 201) {
          alert("register was successfull");
        } else {
          alert("register was unsuccessfull");
        }
  
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleAddChange = (index, field, value) => {
    const updatedAdds = [...itineraryData];
    updatedAdds[index][field] = value;
    setItineraryData(updatedAdds);
    console.log(itineraryData);
    setTourData((prevTourData) => ({
      ...prevTourData,
      tourItinerary: updatedAdds,
    }));
    console.log("newew");
    console.log(...tourData.tourItinerary);
  };

  var applyInclusions = (event) => {
    var branchObj = JSON.parse(event.target.value);
    console.log("Ids");
    console.log(branchObj.inclusionId);

    const ss = new Object();

    ss.inclusionId = branchObj.inclusionId;
    setTourData((prevTourData) => ({
      ...prevTourData,
      tourInclusions: ss,
    }));
  };
 

  return (
    <div class="main">
      <AgentNav />
      <div class="container">
        <div class="main-login">
          <div class="px-4 py-5 px-md-5 text-center bac">
            <div class="container">
              <div class="row gx-lg-5 align-items-center justify-content-md-center">
                <div class="col-lg-10 mb-5 mb-lg-0">
                  <h1 class="my-5 display-3] fw-bold ls-tight">
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

                <div class="col-lg-10 mb-5 mb-lg-0 ">
                  <div class="card">
                    <div class="card-body py-5 px-md-5">
                      <div>
                        <div></div>
                        <div class="form-outline mb-4">
                          <label class="form-label" for="form3Example3">
                            Tour Name Description
                          </label>

                          {/* <input type="text" rows="5" id="form3Example3" class="form-control custom-width" /> */}
                          <textarea
                            class="form-control"
                            rows="3"
                            id="comment"
                            onChange={(event) => {
                              setTourData({
                                ...tourData,
                                tourDescription: event.target.value,
                              });
                            }}
                          ></textarea>
                        </div>
                        <div class="col-md-12 mb-4">
                          <div class="form-outline">
                            <label class="form-label" for="form3Example1">
                              State
                            </label>

                            <input
                              type="text"
                              id="form3Example1"
                              class="form-control"
                              onChange={(event) => {
                                setTourData({
                                  ...tourData,
                                  tourState: event.target.value,
                                });
                              }}
                            />
                          </div>
                        </div>
                        <div class="col-md-12 mb-4">
                          <div class="form-outline">
                            <label class="form-label" for="form3Example1">
                              Tour Price
                            </label>

                            <input
                              type="number"
                              id="form3Example1"
                              class="form-control"
                              onChange={(event) => {
                                setTourData({
                                  ...tourData,
                                  tourPrice: event.target.value,
                                });
                              }}
                            />
                          </div>
                        </div>{" "}
                        <h5> Tour Dates</h5> <br />
                        {dates.map((date, index) => (
                          <div className="row" key={index}>
                            <div className="col-md-4">
                              <label
                                className="form-label"
                                htmlFor={`startDate-${index}`}
                              >
                                Start Date
                              </label>
                              <input
                                type="date"
                                className="form-control"
                                id={`startDate-${index}`}
                                value={date.startDate}
                                onChange={(e) =>
                                  handleDateChange(
                                    index,
                                    "startDate",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                            <div className="col-md-4">
                              <label
                                className="form-label"
                                htmlFor={`endDate-${index}`}
                              >
                                End Date
                              </label>
                              <input
                                type="date"
                                className="form-control"
                                id={`endDate-${index}`}
                                value={date.endDate}
                                onChange={(e) =>
                                  handleDateChange(
                                    index,
                                    "endDate",
                                    e.target.value
                                  )
                                }
                              />
                            </div>

                            <div className="col-md-3">
                              <label
                                className="form-label"
                                htmlFor={`endDate-${index}`}
                              >
                                Max Capacity
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                id={`maxCapacity-${index}`}
                                value={date.maxCapacity}
                                onChange={(e) =>
                                  handleDateChange(
                                    index,
                                    "maxCapacity",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                            <div className="col-md-1">
                              <br />

                              {/* "Delete" button to remove the particular date */}
                              <i
                                onClick={() => handleDeleteDate(index)}
                                className="loan-search-icon"
                                style={{ cursor: "pointer" }}
                              >
                                <AiOutlineCloseCircle />
                              </i>
                            </div>
                          </div>
                        ))}
                        <br />
                        <h6>
                          <button
                            className="handleAddDate"
                            onClick={handleAddDate}
                          >
                            +
                          </button>
                        </h6>
                      </div>
                      <br />
                      <div class="col-md-12 mb-4">
                        <div class="form-outline">
                          <label class="form-label" for="form3Example1">
                            No Of Days
                          </label>

                          <input
                            type="number"
                            id="form3Example1"
                            class="form-control"
                            onChange={(event) => {
                              setTourData({
                                ...tourData,
                                noOfDays: event.target.value,
                              });
                            }}
                          />
                        </div>
                      </div>
                      <div class="col-md-12 mb-4">
                        <div class="form-outline">
                          <label class="form-label" for="form3Example1">
                            No Of Nights
                          </label>

                          <input
                            type="number"
                            id="form3Example1"
                            class="form-control"
                            onChange={(event) => {
                              setTourData({
                                ...tourData,
                                noOfNights: event.target.value,
                              });
                            }}
                          />
                        </div>{" "}
                      </div>

                      <div class="col-md-12 mb-4">
                        <div class="form-outline">
                          <label class="form-label" for="form3Example1">
                            Tour Image
                          </label>

                          <input
                            id="form3Example1"
                            class="form-control"
                            type="file"
                            variant="outlined"
                            multiple
                            onChange={(event) => {
                              const selectedImages = event.target.files;
                              setImages(selectedImages);
                              setTourData((prevDetails) => ({
                                ...prevDetails,
                                tourImage: selectedImages[0].name,
                              }));
                            }}
                            required
                          />
                        </div>
                      </div>

                      <div class="form-outline col-md-12">
                        <label class="form-label" for="inputState">
                          <h4>Inclusions</h4>
                        </label>
                        <div>
                          {inclusions.map((item, index) => (
                            <div className="form-check text-start" key={index}>
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value={JSON.stringify(item)} 
                                id={`checkbox-${index}`}
                                onChange={(event) => applyInclusions(event)}
                              />
                              <div className="col-md-6">
                                <label
                                  className="form-check-label "
                                  htmlFor={`checkbox-${index}`}
                                >
                                  {item.inclusionDescription}{" "}
                                </label>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div class="form-outline col-md-12">
                        <br />

                        <label class="form-label" for="inputState">
                          <h4> Exclusions</h4>
                        </label>
                   
                        <div>
                          {exclusions.map((item, index) => (
                            <div className="form-check text-start" key={index}>
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value={item.exclusionId}
                                id={`exclusionId-${index}`}
                                onChange={(e) =>
                                  handleExChange(
                                    index,
                                    "exclusionId",
                                    e.target.value
                                  )
                                }
                              />

                              <label
                                className="form-check-label"
                                htmlFor={`exclusionId-${index}`}
                              >
                                {item.exclusionDescription}{" "}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                      <br />
                      <div>
                        <h5>Itinerary</h5> <br />
                        {itineraryData.map((data, index) => (
                          <div key={index}>
                            <div className="row text-start">
                              <div className="col-md-6">
                                <input
                                  type="number"
                                  className="form-control"
                                  placeholder="Day Number"
                                  id={`dayNo-${index}`}
                                  value={data.dayNo}
                                  onChange={(e) =>
                                    handleAddChange(
                                      index,
                                      "dayNo",
                                      e.target.value
                                    )
                                  }
                                />
                              </div>
                              <div className="col-md-6">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Location Name"
                                  id={`locationName-${index}`}
                                  value={data.locationName}
                                  onChange={(e) =>
                                    handleAddChange(
                                      index,
                                      "locationName",
                                      e.target.value
                                    )
                                  }
                                />
                              </div>

                            </div>
                            <br />
                            <div className="row text-start">
                              <div className="col-md-6">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Description"
                                  id={`description-${index}`}
                                  value={data.description}
                                  onChange={(e) =>
                                    handleAddChange(
                                      index,
                                      "description",
                                      e.target.value
                                    )
                                  }
                                />
                              </div>
                              <div className="col-md-6">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Activities"
                                  id={`activities-${index}`}
                                  value={data.activities}
                                  onChange={(e) =>
                                    handleAddChange(
                                      index,
                                      "activities",
                                      e.target.value
                                    )
                                  }
                                />
                              </div>
                            </div>
                            <br />

                            <div className="row text-start">
                              <div className="col-md-6">
                                <label className="form-label">
                                  Arrival Time
                                </label>

                                <input
                                  type="date"
                                  className="form-control"
                                  placeholder="Day Number"
                                  id={`arrivalTime-${index}`}
                                  value={data.arrivalTime}
                                  onChange={(e) =>
                                    handleAddChange(
                                      index,
                                      "arrivalTime",
                                      e.target.value
                                    )
                                  }
                                />
                              </div>
                              <div className="col-md-6">
                                <label className="form-label">
                                  Departure Time{" "}
                                </label>

                                <input
                                  type="date"
                                  className="form-control"
                                  placeholder="Departure Time"
                                  id={`departureTime-${index}`}
                                  value={data.departureTime}
                                  onChange={(e) =>
                                    handleAddChange(
                                      index,
                                      "departureTime",
                                      e.target.value
                                    )
                                  }
                                />
                              </div>
                            </div>
                            <br />
                            <div className="text-start">
                              <label className="form-label ">Image </label>
                              <div class="row">
                                <div className="col-md-10">
                                  <input
                                    className="form-control"
                                    id={`image-${index}`}
                                    onChange={(e) => {
                                      const selectedImages = e.target.files;
                                      setImages(selectedImages);
                                      handleAddChange(
                                        index,
                                        "image",
                                        selectedImages[0].name
                                      );
                                    }}
                                    type="file"
                                    variant="outlined"
                                    multiple
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-2">
                              <i
                                onClick={() => handleDeleteEntry(index)}
                                className="loan-search-icon"
                                style={{ cursor: "pointer" }}
                              >
                                <AiOutlineCloseCircle />
                              </i>
                            </div>
                          </div>
                        ))}
                        <h6>
                          <button
                            className="handleAddDate"
                            onClick={() => handleAddEntry()}
                          >
                            +
                          </button>
                        </h6>
                      </div>
                      <button
                        type="submit"
                        class="btn btn-primary btn-block mb-4 col-md-12"
                        onClick={login}
                      >
                        Submit
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
  );
}
export default TourRegistration;
