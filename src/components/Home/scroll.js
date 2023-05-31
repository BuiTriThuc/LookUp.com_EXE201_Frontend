import React, { useRef } from "react";
import "./scroll.css";

const ScrollList = () => {
  const listRef = useRef(null);

  return (
    <div>
      <div
        ref={listRef}
        style={{
          height: "300px",
          overflowY: "scroll",
          marginBottom: "20px",
        }}
      >
        <div className="newfeed_list_cmt">
          <img
            className="newfeed_avt_cmt"
            src="https://www.w3schools.com/howto/img_avatar2.png"
            alt=""
          />
          <div className="newfeed_cmt_content">
            <h5>Công ty Thức</h5>
            <p>alo cmt đê aloasdsadsa</p>
          </div>
        </div>
        <div className="newfeed_list_cmt">
          <img
            className="newfeed_avt_cmt"
            src="https://www.w3schools.com/howto/img_avatar2.png"
            alt=""
          />
          <div className="newfeed_cmt_content">
            <h5>Công ty Thức</h5>
            <p>Provide a valid, navigable address as the href value</p>
          </div>
        </div>
        <div className="newfeed_list_cmt">
          <img
            className="newfeed_avt_cmt"
            src="https://www.w3schools.com/howto/img_avatar2.png"
            alt=""
          />
          <div className="newfeed_cmt_content">
            <h5>Công ty Thức</h5>
            <p>
              ine 458:11: The href attribute requires a valid value to be
              accessible. Provide a valid, navigable address as the href value.
              If you cannot provide a valid href, but still need the element to
              resemble a link, use a button and change it with appropriate
              styles. Learn more:
            </p>
          </div>
        </div>
        <div className="newfeed_list_cmt">
          <img
            className="newfeed_avt_cmt"
            src="https://www.w3schools.com/howto/img_avatar2.png"
            alt=""
          />
          <div className="newfeed_cmt_content">
            <h5>Công ty Thức</h5>
            <p>
              ine 458:11: The href attribute requires a valid value to be
              accessible. Provide a valid, navigable address as the href value.
              If you cannot provide a valid href, but still need the element to
              resemble a link, use a button and change it with appropriate
              styles. Learn more:
            </p>
          </div>
        </div>
        <div className="newfeed_list_cmt">
          <img
            className="newfeed_avt_cmt"
            src="https://www.w3schools.com/howto/img_avatar2.png"
            alt=""
          />
          <div className="newfeed_cmt_content">
            <h5>Công ty Thức</h5>
            <p>
              ine 458:11: The href attribute requires a valid value to be
              accessible. Provide a valid, navigable address as the href value.
              If you cannot provide a valid href, but still need the element to
              resemble a link, use a button and change it with appropriate
              styles. Learn more:
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollList;
