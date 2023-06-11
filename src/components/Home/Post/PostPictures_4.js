import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./PostPictures_4.css";

export default function PostPictures4({ imgSrc, postId }) {
  return (
    <Fragment>
      <Link to={`/viewImage/${postId}`}>
        <div className="postpicture_group_four_picture">
          {imgSrc?.map((img) => (
            <img
              className="img_post_four_picture"
              src={img}
              alt=""
              style={{
                height: "200px",
                paddingTop: "2px",
              }}
            />
          ))}
        </div>
      </Link>
    </Fragment>
  );
}
