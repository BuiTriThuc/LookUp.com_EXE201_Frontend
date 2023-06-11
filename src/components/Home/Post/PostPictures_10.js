import React from "react";
import { Link } from "react-router-dom";
import "./PostPictures.css";

export default function PostPictures10({ imgSrc, postId }) {
  const displayImages = imgSrc?.slice(0, 4);

  return (
    <div>
      <Link to={`/viewImage/${postId}`}>
        <div className="postpicture_group_more_picture">
          {displayImages?.map((img, index) => (
            <img
              key={index}
              className="img_post_more_picture"
              style={
                index > 1
                  ? {
                      width: "183.333px",
                      height: "200px",
                      paddingRight: "2px",
                    }
                  : {}
              }
              src={img}
              alt=""
            />
          ))}

          {imgSrc && imgSrc.length >= 5 && (
            <div className="the_last_pic_group">
              <img
                className="img_post_more_picture"
                style={{
                  width: "183.333px",
                  height: "200px",
                  opacity: "0.5",
                }}
                src={imgSrc[4]}
                alt=""
              />
              {imgSrc.length > 5 ? (
                <div className="number_pictures">+{imgSrc.length - 5} </div>
              ) : (
                ""
              )}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}
