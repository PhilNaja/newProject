import React from 'react'
import { useState, useEffect } from "react";
import Axios from "axios";

function Home() {
  const [house, SetHouse] = useState([])
  const [housenumber, SetHousenumber] = useState("");
  const [owner, setOwner] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [status, setStatus] = useState("");
  const GetHouse = () => {
    Axios.get("http://localhost:3001/house").then((response) => {
      SetHouse(response.data);
    });
  };
  const updateEmployeeWage = (id) => {
    Axios.put("http://localhost:3001/update", {
      owner: owner,
      id: id
    }).then();
  };
  useEffect(() => {
    GetHouse();
  });
  return (
    <div class="container-sm">
      {house.map((val, key) => {
        return (
          <div class="container-sm">
            <div className="card mt-5 ">
              <div className="card-body text-left">
                <p className="card-text">housenumber: {val.housenumber}  owner: {val.id} </p>
                <p className="card-text">email: {val.email} phone: {val.phone}</p>
                <p className="card-text">status: {val.status}</p>
                <div className="mb-3">
                  <label className="form-label" htmlFor=" Owner Name">
                    Owner Name :
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Owner Name"
                    onChange={(event) => {
                      setOwner(event.target.value)
                    }}
                  />
                  </div>
                  <button type="button" class="btn btn-primary" onClick={updateEmployeeWage(val.id)}>
                    update
                  </button>
                </div>
              </div>
            </div>
            );
      })}
          </div>
        )
      }

export default Home
