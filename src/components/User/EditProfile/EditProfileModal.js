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

export default function EditProfileModal({ onImageSelected }) {
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  const [image, setImage] = useState([]);

  const createPostsImagesChange = (e) => {
    const files = Array.from(e.target.files);
    const imageData = [];

    const promises = files.map((file) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          resolve(event.target.result);
        };
        reader.readAsDataURL(file);
      });
    });

    Promise.all(promises)
      .then((results) => {
        results.forEach((result) => {
          imageData.push(result);
        });

        setImage(imageData);
        onImageSelected(imageData); 
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {" "}
      <div onClick={toggleShow} className="editProfile_top_img">
        <img
          className="editProfile_top_img_item"
          src={image}
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
              <input 
                type="file"
                name="image"
                accept="image/*"
                onChange={createPostsImagesChange}
                multiple={false} />
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
                onClick={toggleShow}
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
