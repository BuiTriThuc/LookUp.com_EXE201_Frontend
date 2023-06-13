import "./EditProfile.css";
import React, { useEffect } from "react";
import EditProfileModal from "./EditProfileModal";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetail, loadUser, updateUser } from "../../actions/userActions";
import { UPDATE_USER_RESET } from "../../contants/userContants";
import io, { Socket } from "socket.io-client";
import toast, { Toaster } from "react-hot-toast";

export default function EditProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const { isUpdated } = useSelector((state) => state.profile);
  const { userDetail } = useSelector((state) => state.getUserDetail);
  const [socket, setSocket] = useState();

  useEffect(() => {
    const newSocket = io("http://localhost:8001");
    setSocket(newSocket);

    return () => {
      newSocket.disconnect(); // Clean up the socket connection when the component unmounts
    };
  }, [setSocket]);

  const notifyUpdateSuccess = () => {
    toast.success("Updated Success", {
      duration: 3000,
      position: "top-center",
    });
    dispatch(getUserDetail(user._id));
  };

  const [name, setName] = useState("");
  const [categoryBusiness, setCategoryBusiness] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);
  const [image, setImage] = useState([]);

  useEffect(() => {
    if (user) {
      setName(user.name);
      setCategoryBusiness(user.categoryBusiness);
      setPhoneNumber(user.phoneNumber);
      setAddress(user.address);
    }

    if (socket) {
      socket.on("updatedUser", () => {
        dispatch({ type: UPDATE_USER_RESET });
        notifyUpdateSuccess();
      });
    }
  }, [user, isUpdated, navigate, dispatch, socket, userDetail]);

  const updateUserSubmitHandler = (e) => {
    e.preventDefault();

    const userData = {
      name: name,
      categoryBusiness: categoryBusiness,
      phoneNumber: phoneNumber,
      address: address,
      image: selectedImages,
    };
    dispatch(updateUser(user._id, userData));
  };

  useEffect(() => {
    if (userDetail) {
      setName(userDetail.name);
      setCategoryBusiness(userDetail.categoryBusiness);
      setPhoneNumber(userDetail.phoneNumber);
      setAddress(userDetail.address);
    }
  }, [userDetail]);
  return (
    <div className="ads">
      <div className="editProfile_all">
        <div className="editProfile_top">
          <EditProfileModal onImageSelected={setSelectedImages} />
        </div>
        <div className="editProfile_center">
          <form
            className="editProfile_center_input"
            onSubmit={updateUserSubmitHandler}
          >
            <div>Tên</div>
            <input
              className="editprofile_input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
            />
            <div>Mô hình kinh doanh </div>
            <input
              className="editprofile_input"
              value={categoryBusiness}
              onChange={(e) => setCategoryBusiness(e.target.value)}
              type="text"
            />
            <div>Số điện thoại</div>
            <input
              className="editprofile_input"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="text"
            />
            <div>Địa chỉ</div>
            <input
              className="editprofile_input"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              type="text"
            />
            <div>Mô tả ngắn</div>
            <input className="editprofile_input" type="text" />
            <div>Website</div>
            <input className="editprofile_input" type="text" />
            <div>Email</div>
            <input className="editprofile_input" type="text" />
            <div className="editprofile_button">
              <Link to="/">
                {" "}
                <button className="editprofile_button_cancel">Thoát</button>
              </Link>
              <Link to="/profile">
                {" "}
                <button className="editprofile_button_save" type="submit">
                  Lưu
                </button>{" "}
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
