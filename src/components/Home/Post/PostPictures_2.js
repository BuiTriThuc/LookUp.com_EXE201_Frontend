import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./PostPictures.css";

export default function PostPictures2({ imgSrc, postId }) {
  return (
    <Fragment>
      {imgSrc?.map((img) => (
        <Link to={`/viewImage/${postId}`}>
          {" "}
          <div className="postpicture_group_top">
            <img className="img_post_two_picture" src={img} alt="" />
          </div>
        </Link>
      ))}
    </Fragment>
  );
}
