import React, { useEffect, useState } from "react";
import "./ViewImages.css";
import { GrNext } from "react-icons/gr";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { SlClose } from "react-icons/sl";
import ScrollListCmt from "../ScrollListCmt";
import { Link, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getPostDetail } from "../../actions/postActions";

const ViewImages = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const location = useLocation();
  const { error, postDetail } = useSelector((state) => state.postDetail);
  const pictureUrls = postDetail?.images;

  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);

  const handleNextPicture = () => {
    if (currentPictureIndex < pictureUrls?.length - 1) {
      setCurrentPictureIndex(currentPictureIndex + 1);
    }
  };

  const handlePreviousPicture = () => {
    if (currentPictureIndex > 0) {
      setCurrentPictureIndex(currentPictureIndex - 1);
    }
  };

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }

    dispatch(getPostDetail(id));
  }, [dispatch, error, id]);

  return (
    <div className="viewimages_main">
      <Link to="/">
        <button
          style={{
            backgroundColor: "transparent",
          }}
          className="viewimage_btn_backhome"
        >
          <SlClose style={{ width: "25px", height: "25px" }} />
        </button>
      </Link>
      <div className="viewimages">
        <div className="img_next_back_item">
          {pictureUrls?.length > 1 && (
            <button
              className="btn_back_image_item"
              onClick={handlePreviousPicture}
              disabled={currentPictureIndex === 0}
            >
              <MdOutlineArrowBackIosNew
                style={{ width: "25px", height: "25px" }}
              />
            </button>
          )}
          <img
            className="view_image_item"
            src={pictureUrls && pictureUrls[currentPictureIndex]}
            alt="Status Picture"
          />

          {pictureUrls?.length > 1 && (
            <button
              className="btn_next_image_item"
              onClick={handleNextPicture}
              disabled={currentPictureIndex === pictureUrls?.length - 1}
            >
              <GrNext style={{ width: "25px", height: "25px" }} />
            </button>
          )}
        </div>

        <div className="view_image_cmt">
          <ScrollListCmt />
        </div>
      </div>
    </div>
  );
};

export default ViewImages;
