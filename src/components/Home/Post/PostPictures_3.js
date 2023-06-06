import React from "react";
import { FaRegComment } from "react-icons/fa";
import { TbSend } from "react-icons/tb";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ScrollList from "../ScrollList";
import "./PostPictures_3.css";

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

export default function PostPictures_3() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openPic, setOpenPic] = React.useState(false);
  const handleOpenPic = () => setOpenPic(true);
  const handleClosePic = () => setOpenPic(false);

  const longText = "TEST vitae mattis felis.";
  return (
    <div>
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
        <Link to="/viewimage">
          {" "}
          <div className="postpicture_group_top">
            <img
              className="img_post_1"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbVAfrqNk2EtEhre_GStV9vvqw4FUoMJ3ygpMqHdmtgt3TRztRIMULhzTH9qr5Zq2AIes&usqp=CAU"
              alt=""
            />
            <img
              className="img_post_2"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCfPWjM7SRUUpf-zeunqc5YwlPQGDypqQaoA&usqp=CAU"
              alt=""
            />
          </div>
          <div className="postpicture_group_bottom">
            {" "}
            <img
              className="postpic_3_img_post_3"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnes0D8Q0gL6C0CxLdwlMl-rwC_YusGP279A&usqp=CAU"
              alt=""
            />
          </div>
        </Link>

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
          <div className="act_post_postpictures">
            <div className="item_act">
              <LikeButton className="item_like_cmt_send" />
            </div>
            <div className="item_act">
              <button onClick={handleOpen} className="item_act_post">
                <FaRegComment className="item_like_cmt_send" /> Bình luận
              </button>
            </div>

            <Modal
              open={open}
              onClose={handleClose}
              // aria-labelledby="modal-modal-title"
              // aria-describedby="modal-modal-description"
            >
              <Box className="modal_cmt_post">
                <div className="body_top_item5">
                  <Link to="/login" className="post_detail">
                    <img
                      className="img_company"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu1rHFVKfQUJJELrxv_GkP___edS_EoiDjg8W_9NFH0Q&s"
                      alt=""
                    />
                    <div className="post_title">
                      <h5 className="home_name_company">
                        Công ty TNHH Thức Bùi
                      </h5>
                      <p>Được tài trợ</p>{" "}
                    </div>
                  </Link>
                  <div className="post_detail_home">
                    {" "}
                    <ReadMore text={longText} />
                  </div>

                  <img
                    className="img_post"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbVAfrqNk2EtEhre_GStV9vvqw4FUoMJ3ygpMqHdmtgt3TRztRIMULhzTH9qr5Zq2AIes&usqp=CAU"
                    alt=""
                  />
                  <div className="">
                    <div className="total_like_cmt">
                      <div className="total_like">
                        <AiFillHeart />
                        <p>1.2k</p>
                      </div>
                      <p>5 Bình luận</p>
                    </div>
                    <div className="act_post">
                      <div className="item_act">
                        <LikeButton className="item_like_cmt_send" />
                      </div>
                      <div className="item_act">
                        <button className="item_act_post">
                          {" "}
                          <FaRegComment className="item_like_cmt_send" /> Bình
                          luận
                        </button>
                      </div>

                      <div className="item_act">
                        <Link to="/chatbox">
                          <button className="item_act_post">
                            <TbSend className="item_like_cmt_send" /> Gửi tin
                            nhắn
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <ScrollList />
                  <div className="newfeed_input_cmt">
                    <img
                      className="newfeed_avt_cmt"
                      src="https://www.w3schools.com/howto/img_avatar2.png"
                      alt=""
                    />
                    <input className="newfeed_input_cmt_detail" type="text" />
                  </div>
                </div>
              </Box>
            </Modal>

            <div className="item_act">
              <Link to="/chatbox">
                <button className="item_act_post">
                  <TbSend className="item_like_cmt_send" /> Gửi tin nhắn
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
