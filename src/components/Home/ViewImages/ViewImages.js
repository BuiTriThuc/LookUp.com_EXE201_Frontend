import React, { useState } from "react";
import "./ViewImages.css";
import { GrNext } from "react-icons/gr";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { SlClose } from "react-icons/sl";
import ScrollListCmt from "../ScrollListCmt";
import { Link } from "react-router-dom";

const ViewImages = () => {
  const pictureUrls = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBC1F66EwirdF6kpYfY7zb292dTYqeLjzLww&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVeXmmgy4UHViI1nvK0X5Mddk3b_Kx9hkEug&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2llBexmTz8VbZ6l7zYXQvKsyWXEsOzV42Yg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRisv-yQgXGrto6OxQxX62JyvyQGvRsQQ760g&usqp=CAU",
  ];

  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);

  const handleNextPicture = () => {
    if (currentPictureIndex < pictureUrls.length - 1) {
      setCurrentPictureIndex(currentPictureIndex + 1);
    }
  };

  const handlePreviousPicture = () => {
    if (currentPictureIndex > 0) {
      setCurrentPictureIndex(currentPictureIndex - 1);
    }
  };

  return (
    <div className="viewimages_main">
      <Link to="/">
        <button className="viewimage_btn_backhome">
          <SlClose />
        </button>
      </Link>
      <div className="viewimages">
        <div className="img_next_back_item">
          <button
            className="btn_back_image_item"
            onClick={handlePreviousPicture}
            disabled={currentPictureIndex === 0}
          >
            <MdOutlineArrowBackIosNew />
          </button>
          <img
            className="view_image_item"
            src={pictureUrls[currentPictureIndex]}
            alt="Status Picture"
          />
          <button
            className="btn_next_image_item"
            onClick={handleNextPicture}
            disabled={currentPictureIndex === pictureUrls.length - 1}
          >
            <GrNext />
          </button>{" "}
        </div>

        <div className="view_image_cmt">
          <ScrollListCmt />
        </div>
      </div>
    </div>
  );
};

export default ViewImages;
