import React, { useRef, useEffect } from "react";
import "./scroll.css";
import "./NewFeed.css";

import { Link } from "react-router-dom";
import { FaRegComment } from "react-icons/fa";
import { TbSend } from "react-icons/tb";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "./Home.css";
import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getPost } from "../actions/postActions";

const ReadMore = ({ text }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleReadMore = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      {expanded ? (
        <div>{text}</div>
      ) : (
        <div>
          {text.slice(0, 100)}...{" "}
          <button onClick={toggleReadMore}>Read More</button>
        </div>
      )}
    </div>
  );
};
// Animation Like button333333
const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };
  return (
    <button onClick={handleClick} className={liked ? "liked" : "like"}>
      <AiOutlineHeart className="item_like_cmt_send" icon={AiOutlineHeart} />
      <div className="item_act_post"> {liked ? "Yêu thích" : "Yêu thích"}</div>
    </button>
  );
};

const ScrollList = () => {
  const listRef = useRef(null);

  const dispatch = useDispatch();
  const { loading, error, posts } = useSelector((state) => state.posts);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openPic, setOpenPic] = React.useState(false);
  const handleOpenPic = () => setOpenPic(true);
  const handleClosePic = () => setOpenPic(false);

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }

    dispatch(getPost());
  }, [dispatch, error]);

  const longText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum magna et risus commodo, vitae lacinia lectus sodales. In maximus sem et tristique aliquam. Nulla tincidunt massa ut dui eleifend, in viverra velit ultrices. Nam dictum facilisis nulla, id ullamcorper orci vulputate vel. Fusce aliquet magna eget felis finibus vestibulum. Suspendisse potenti. Mauris consectetur elit a turpis semper commodo. Phasellus non velit id mauris efficitur lacinia. Nulla facilisi. Nam eget aliquet felis. In maximus elementum purus id auctor. Nullam ut congue leo, vitae mattis felis.";

  return (
    <div>
      <div
        ref={listRef}
        style={{
          height: "580px",
          overflowY: "scroll",
          marginBottom: "20px",
        }}
      >
        <div className="body_top_item5">
          <Link to="/login" className="post_detail">
            <img
              className="img_company"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu1rHFVKfQUJJELrxv_GkP___edS_EoiDjg8W_9NFH0Q&s"
              alt=""
            />
            <div to="/login" className="post_title">
              <h5 className="home_name_company">Công ty TNHH Thức Bùi</h5>
              <p>Được tài trợ</p>{" "}
            </div>
          </Link>
          <div className="post_detail_home">
            {" "}
            <ReadMore text={longText} />
          </div>

          <img
            onClick={handleOpenPic}
            className="img_post"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbVAfrqNk2EtEhre_GStV9vvqw4FUoMJ3ygpMqHdmtgt3TRztRIMULhzTH9qr5Zq2AIes&usqp=CAU"
            alt=""
          />

          <Modal open={openPic} onClose={handleClosePic}>
            <Box className="modal_img_post">
              <img
                className="img_post_modal"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbVAfrqNk2EtEhre_GStV9vvqw4FUoMJ3ygpMqHdmtgt3TRztRIMULhzTH9qr5Zq2AIes&usqp=CAU"
                alt=""
              />
            </Box>
          </Modal>

          <div>
            <div className="total_like_cmt">
              <div className="total_like">
                <p>
                  {" "}
                  <AiFillHeart /> 1.2k
                </p>
              </div>
              <p>5 Bình luận</p>
            </div>
            <div className="act_post">
              <div className="act_post_item_scroll">
                <div className="item_act">
                  <LikeButton className="item_like_cmt_send" />
                </div>
                <div className="item_act">
                  <button onClick={handleOpen} className="item_act_post">
                    <FaRegComment className="item_like_cmt_send" /> Bình luận
                  </button>
                </div>

                <div className="item_act">
                  <Link to="/chatbox">
                    <button className="item_act_post">
                      <TbSend className="item_like_cmt_send" /> Gửi tin nhắn
                    </button>
                  </Link>
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
                    accessible. Provide a valid, navigable address as the href
                    value. If you cannot provide a valid href, but still need
                    the element to resemble a link, use a button and change it
                    with appropriate styles. Learn more:
                  </p>
                </div>
              </div>
              <div className="newfeed_input_cmt">
                <img
                  className="newfeed_avt_cmt"
                  src="https://www.w3schools.com/howto/img_avatar2.png"
                  alt=""
                />
                <input className="newfeed_input_cmt_detail" type="text" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollList;
