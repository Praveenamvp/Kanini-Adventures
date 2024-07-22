import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "../src/Compenents/Menu";
import TravelerRegister from "./Compenents/TravelerRegister";
import ChooseRegister from "../src/Compenents/ChooseRegister";
import AgentRegister from "../src/Compenents/AgentRegister";
import Login from "../src/Compenents/Login";
import ViewTour from "./Compenents/ViewTour";
import ViewItinerary from "./Compenents/ViewItinerary";

import ProtectedRoutes from "../src/Compenents/ProtectedRoutes/Protected";
import TourRegistartion from "../src/Compenents/TourRegistration";

// import Modal from "react-bootstrap/Modal";

import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import GetAllAgents from "./Compenents/GetAllAgents";
import DeleteAlert from "./Compenents/DeleteAlert";
import BookedAlert from "./Compenents/BookedAlert";
import Booking from "./Compenents/Booking";
import MainMenu from "./Compenents/MainMenu";
import AdminNav from "./Compenents/AdminNav";
import AgentNav from "./Compenents/AgentNav";
import TravelerNav from "./Compenents/TravelerNav";
import UpdatePassword from "./Compenents/UpdatePassword";
import UnAuthorized from "./Compenents/UnAuthorized";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  var token;
  var role;
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/login" element={<Login />} />
          <Route path="/agentregister" element={<AgentRegister />} />
          <Route path="/travelerregister" element={<TravelerRegister />} />
          <Route path="/chooseregister" element={<ChooseRegister />} />
          <Route path="/deletealert" element={<DeleteAlert />} />
          <Route path="/bookedalert" element={<BookedAlert />} />
          <Route path="/viewTour" element={<ViewTour />} />
          <Route path="/viewItinerary" element={<ViewItinerary />} />
          <Route path="/updatepassword" element={<UpdatePassword />} />
          <Route path="/unauth" element={<UnAuthorized />} />
          <Route path="/tourregistration" element={<TourRegistartion />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/adminnav" element={<AdminNav />} />
          <Route element={<ProtectedRoutes allowedRoles={["agent"]} />}>
            <Route path="/tourregistration" element={<TourRegistartion />} />
            <Route path="/agentnav" element={<AgentNav />} />
          </Route>

          <Route element={<ProtectedRoutes allowedRoles={["traveler"]} />}>
            <Route path="/booking" element={<Booking />} />
            <Route path="/travelernav" element={<TravelerNav />} />

            <Route element={<ProtectedRoutes allowedRoles={["admin"]} />}>
              <Route path="/getallagents" element={<GetAllAgents />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
