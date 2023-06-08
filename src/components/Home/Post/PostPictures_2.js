import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./PostPictures.css";

export default function PostPictures_2({ imgSrc }) {
  return (
    <Fragment>
      {imgSrc?.map((img) => (
        <Link to="/viewimage">
          {" "}
          <div className="postpicture_group_top">
            <img className="img_post_two_picture" src={img} alt="" />
          </div>
        </Link>
      ))}
    </Fragment>
  );
}
