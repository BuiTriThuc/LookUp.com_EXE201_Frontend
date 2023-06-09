import "./EditProfile.css";
import React from "react";
import EditProfileModal from "./EditProfileModal";
import { Link } from "react-router-dom";

export default function EditProfile() {
  return (
    <div className="ads">
      <div className="editProfile_all">
        <div className="editProfile_top">
          <EditProfileModal />
        </div>
        <div className="editProfile_center">
          <div className="editProfile_center_input">
            <div>Tên</div>
            <input className="editprofile_input" type="text" />
            <div>Mô hình kinh doanh </div>
            <input className="editprofile_input" type="text" />
            <div>Số điện thoại</div>
            <input className="editprofile_input" type="text" />
            <div>Địa chỉ</div>
            <input className="editprofile_input" type="text" />
          </div>
        </div>
        <div className="editprofile_button">
          <Link to="/">
            {" "}
            <button className="editprofile_button_cancel">Thoát</button>
          </Link>
          <Link to="/profile">
            {" "}
            <button className="editprofile_button_save">Lưu</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
