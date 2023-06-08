import React from "react";
import { Link } from "react-router-dom";
import "./PostPictures_3.css";

export default function PostPictures_3({ imgSrc }) {
  return (
    <div>
      <Link to="/viewimage">
        <div className="postpicture_group_three_picture">
          {imgSrc?.map((img, index) => (
            <img
              className="img_post_three_picture"
              style={index === 2 ? { width: "100%", height: "275px" } : {}}
              src={img}
              alt=""
              key={index}
            />
          ))}
        </div>
      </Link>
    </div>
  );
}
