import "./EditProfile.css";
import React from "react";
import EditProfileModal from "./EditProfileModal";

export default function EditProfile() {
  return (
    <div>
      <div className="editProfile">
        <div className="editProfile_top">
          <EditProfileModal />
        </div>
        <div className="editProfile_center">
          <div className="editProfile_center_input">
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </div>
        </div>
      </div>
    </div>
  );
}
