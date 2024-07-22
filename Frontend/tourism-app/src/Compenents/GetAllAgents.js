import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./GetAllAgents.css";
import DeleteAlert from "./DeleteAlert";
import AdminNav from "./AdminNav";

function GetAllAgents() {
  const navigate = useNavigate();
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [selectedAgentId, setSelectedAgentId] = useState(0);

  const alertdel = (id) => {
    setSelectedAgentId(id);
    console.log(selectedAgentId + "ched id");
    setShowDeleteAlert(true);
  };

  const closeDeleteAlert = () => {
    setShowDeleteAlert(false);
  };

  const [agents, setAgents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5129/api/User/GetAllAgent", {
      method: "GET",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        var myDataa = await res.json();
        setAgents(myDataa);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const updateLeaveStatus = async (id, status) => {
    try {
      const token = localStorage.getItem("token");

      const updatedLeaveData = {
        id: id,
        status: status === "approved" ? "notapproved" : "approved",
      };

      await fetch("http://localhost:5129/api/User/ApproveAgent", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          // 'Authorization': "Bearer "+token
        },
        body: JSON.stringify(updatedLeaveData),
      }).then((res) => {
        console.log(res.status);
        if (res.status == 202) {
          alert("update status was successful");
          navigate("/getallagents");
        } else {
          alert("update status was unsuccessful");
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  const Del = (idagent) => {
    console.log(idagent);
    // const token = localStorage.getItem('token');
    const IdDTO = {
      id: idagent,
    };
    console.log(IdDTO.id);

    fetch("http://localhost:5129/api/User/Delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        // 'Authorization': "Bearer "+token
      },
      body: JSON.stringify(IdDTO),
    })
      .then((res) => {
        console.log(res.status);
        if (res.status == 202) {
          alert("delete user was successful");
        } else {
          alert("delete user was unsuccessful");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  if (agents.length === 0) {
    return (
      <div>
        <h1 className="alert alert-danger">Loading the Agent details... </h1>
      </div>
    );
  }

  return (
    <div>
      <AdminNav />
      <h4>AGENT DETAILS</h4>
      <br />

      <div className="alterTable ">
        <table className="table table-striped ">
          <thead>
            <tr className="table-info">
              <th scope="col">User Id</th>
              <th scope="col">Agent Name</th>
              <th scope="col">Travel Name</th>
              <th scope="col">Address</th>
              <th scope="col">Mobile Number</th>
              <th scope="col">License Number</th>
              <th scope="col">Status</th>
              <th scope="col">Delete User </th>
            </tr>
          </thead>
          <tbody>
            {agents.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.agentManagerName}</td>
                <td>{u.agentName}</td>
                <td>{u.agentAddress}</td>
                <td>{u.agentMobileNo}</td>
                <td>{u.licenseNumber}</td>
                <td>
                  <button
                    className="btn-change"
                    style={{
                      backgroundColor:
                        u.status === "notapproved" ? "#f9d2c0" : "#cbf2d9",
                    }}
                    onClick={() => updateLeaveStatus(u.id, u.status)}
                  >
                    {u.status}
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => alertdel(u.id)}
                    className="btn-delete"
                    style={{ backgroundColor: u.status === "#f9beb9" }}
                  >
                    {"Delete"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Conditionally render the DeleteAlert component */}
      {showDeleteAlert && selectedAgentId && (
        <DeleteAlert
          prod={selectedAgentId}
          onClose={closeDeleteAlert}
          show={showDeleteAlert}
        />
      )}
    </div>
  );
}

export default GetAllAgents;
