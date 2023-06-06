import React, { useRef, useEffect } from "react";
import "./scroll.css";
import "./Home.css";

import { Link, useParams } from "react-router-dom";
import { FaRegComment } from "react-icons/fa";
import { TbSend } from "react-icons/tb";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "./Home.css";
import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrors,
  createComment,
  dislikePost,
  getPost,
  getPostDetail,
  likePost,
} from "../actions/postActions";
import io, { Socket } from "socket.io-client";
import toast, { Toaster } from "react-hot-toast";
import { addComment } from "./../reducers/postReducers";

const ReadMore = ({ text }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleReadMore = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      {text?.length > 200 ? (
        expanded ? (
          <div>{text}</div>
        ) : (
          <div>
            {text?.slice(0, 200)}...{" "}
            <button onClick={toggleReadMore}>Read More</button>
          </div>
        )
      ) : (
        <div>{text}</div>
      )}
    </div>
  );
};

const ScrollList = () => {
  const listRef = useRef(null);

  const dispatch = useDispatch();
  const { loading, success, postDetail, error } = useSelector(
    (state) => state.postDetail
  );
  const { user } = useSelector((state) => state.user);
  const { postComment, success: addSuccess } = useSelector((state) => state.addComment);

  

  const [open, setOpen] = React.useState(false);
  const [socket, setSocket] = useState();
  const [liked, setLiked] = useState(false);
  const [likedPost, setLikedPost] = useState([]);
  const [content, setContent] = useState("");

  useEffect(() => {
    const newSocket = io("http://localhost:8001");
    setSocket(newSocket);
  

    return () => {
      newSocket.disconnect(); // Clean up the socket connection when the component unmounts
    };
  }, [setSocket, postDetail, dispatch]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openPic, setOpenPic] = React.useState(false);
  const handleOpenPic = () => setOpenPic(true);
  const handleClosePic = () => setOpenPic(false);

  useEffect(() => {
    if (postDetail?.likes?.includes(user._id)) {
      setLikedPost(postDetail);
    }
  }, [postDetail, user]);

  const LikeButton = ({ postId }) => {
    const handleClick = () => {
      if (likedPost === postDetail) {
        dislikePostSubmit(postId, user._id);
      } else {
        likePostSubmit(postId, user._id);
      }
    };
    return (
      <button
        onClick={handleClick}
        className={likedPost === postDetail ? "liked" : "like"}
      >
        <AiOutlineHeart className="item_like_cmt_send" icon={AiOutlineHeart} />
        <div className="item_act_post">{liked ? "Yêu thích" : "Yêu thích"}</div>
      </button>
    );
  };

  // New comment

  const likePostSubmit = (postId, userId) => {
    dispatch(likePost(postId, userId));
  };

  const dislikePostSubmit = (postId, userId) => {
    dispatch(dislikePost(postId, userId));
  };

  const addCommentSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.set("content", content);
    dispatch(createComment(user._id, postDetail._id, content))
  };

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }

    if (addSuccess) {
      setContent("")
    }

    if (socket) {
      socket.on("addComment", () => {
        dispatch(getPostDetail(postDetail._id))
      })
    }
  }, [dispatch, error, postDetail, socket]);

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
          overflow: "scroll",
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
              <h5 className="home_name_company">{postDetail?.user?.name}</h5>
              <p>Được tài trợ</p>{" "}
            </div>
          </Link>
          <div className="post_detail_home">
            {" "}
            <ReadMore text={postDetail?.content} />
          </div>

          {postDetail?.images?.map((image) => (
            <img
              onClick={handleOpenPic}
              className="img_post"
              src={image}
              alt=""
            />
          ))}

          <Modal open={openPic} onClose={handleClosePic}>
            <Box className="modal_img_post">
              {postDetail?.images?.map((image) => (
                <img
                  onClick={handleOpenPic}
                  className="img_post_modal"
                  src={image}
                  alt=""
                />
              ))}
            </Box>
          </Modal>

          <div>
            <div className="total_like_cmt">
              <div className="total_like">
                <p>
                  {" "}
                  <AiFillHeart /> {postDetail?.likes?.length}
                </p>
              </div>
              <p>{postDetail?.comments?.length} Bình luận</p>
            </div>
            <div className="act_post">
              <div className="act_post_item_scroll">
                <div className="item_act">
                  <LikeButton
                    className="item_like_cmt_send"
                    postId={postDetail._id}
                  />
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


              {postDetail.comments?.map((comment) => (

                <div className="newfeed_list_cmt">
                  <img
                    className="newfeed_avt_cmt"
                    src="https://www.w3schools.com/howto/img_avatar2.png"
                    alt=""
                  />
                  <div className="newfeed_cmt_content">
                    <h5>Công ty Thức</h5>
                    <p>{comment.content}</p>
                  </div>
                </div>
              ))}
              <div className="newfeed_input_cmt">
                <img
                  className="newfeed_avt_cmt"
                  src="https://www.w3schools.com/howto/img_avatar2.png"
                  alt=""
                />
                <form onSubmit={addCommentSubmit}>
                  <input
                    className="newfeed_input_cmt_detail"
                    name="content"
                    type="text"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollList;
