import React, { useState } from "react";
import { PopupMenu } from "react-simple-widgets";
import "./Dropdown.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../actions/userActions";

function Dropdown() {

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const logout = () => {
    dispatch(logoutUser());
  }

  return (
    <div className="text-end">
      <PopupMenu>
        <button>
          <img
            className="header_img_dropdown"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXp3DxP80ArpRzsB0XWBG9Ow5GeuefbLrUHw&usqp=CAU"
            alt=""
          />
        </button>

        <div className="card text-start">
          <div className="card-body px-4 py-4">
            <div>
              <img
                id="circle-avatar"
                className="text-center mx-auto mb-4"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXp3DxP80ArpRzsB0XWBG9Ow5GeuefbLrUHw&usqp=CAU"
                alt=""
              />
            </div>

            <h5 className="text-center mb-0">John Doe</h5>
            <p className="text-center mb-2">jd@gmail.com</p>

            <hr />

            {/* <p
              className="mb-0"
              style={{ color: "#bebebe", fontWeight: "bold", fontSize: 12 }}
            >
              ROLES
            </p> */}
            {/* <p style={{ fontSize: 12 }}>
              {["Submitter", "Project manager", "Change control board"].join(
                ", "
              )}
            </p> */}

            <hr className="mb-0" style={{ margin: "0 -24px 0" }} />

            <div
              className="list-group list-group-flush"
              style={{ margin: "0 -24px 0" }}
            >
              <Link to="/profile">
                {" "}
                <button className="list-group-item list-group-item-action px-4">
                  <small>Profile</small>
                </button>{" "}
              </Link>
              <Link>
                {" "}
                <button className="list-group-item list-group-item-action px-4">
                  <small>Chưa biết để gì</small>
                </button>
              </Link>

              <Link>
                {" "}
                <button className="list-group-item list-group-item-action px-4">
                  <small>Language</small>
                </button>
              </Link>
            </div>

            <hr style={{ margin: "0 -24px 24px" }} />

            <div className="d-grid">
              <button className="btn btn-secondary" onClick={logout}>
                <small>Logout</small>
              </button>
            </div>
          </div>
        </div>
      </PopupMenu>
    </div>
  );
}

export default Dropdown;
