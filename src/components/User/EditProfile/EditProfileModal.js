import React, { useState } from "react";
import { AiOutlineCamera } from "react-icons/ai";

import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import { Padding } from "@mui/icons-material";

export default function EditProfileModal() {
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  return (
    <>
      {" "}
      <div onClick={toggleShow} className="editProfile_top_img">
        <img
          className="editProfile_top_img_item"
          src="https://bootdey.com/img/Content/avatar/avatar1.png"
          alt=""
        />
        <AiOutlineCamera className="editProfile_top_img_icon" />
      </div>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Chỉnh sửa ảnh đại diện</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <div style={{ margin: "10px" }}>Chọn ảnh từ thiết bị</div>
              <input type="file" />
              <div style={{ margin: "10px" }}> Hoặc chọn link</div>
              <input
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  paddingLeft: "10px",
                }}
                type="text"
                placeholder="Nhập địa chỉ hình ảnh"
              />
            </MDBModalBody>

            <MDBModalFooter>
              <button
                style={{
                  width: "80px",
                  height: "40px",
                  borderRadius: "20px",
                  border: "0.1px solid black",
                }}
                color="secondary"
                onClick={toggleShow}
              >
                Close
              </button>
              <button
                style={{
                  width: "120px",
                  height: "40px",
                  borderRadius: "20px",
                  border: "0.1px solid green",
                }}
              >
                Save changes
              </button>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
