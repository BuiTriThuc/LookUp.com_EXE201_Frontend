import React, { useRef, useEffect } from "react";
import "./scroll.css";
import "./Home.css";
import { BiLike } from "react-icons/bi";

import { Link } from "react-router-dom";
import { FaRegComment } from "react-icons/fa";
import { TbSend } from "react-icons/tb";
import { AiFillLike } from "react-icons/ai";
import "./Home.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrors,
  createComment,
  dislikePost,
  getPostDetail,
  likePost,
} from "../actions/postActions";
import io, { Socket } from "socket.io-client";

const ReadMore = ({ text }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleReadMore = () => {
    setExpanded(!expanded);
  };

  const renderContent = () => {
    if (text?.length > 200) {
      if (expanded) {
        return <div dangerouslySetInnerHTML={{ __html: text }} />;
      } else {
        const truncatedText = `${text.slice(0, 200)}...`;
        return (
          <div>
            <p dangerouslySetInnerHTML={{ __html: truncatedText }} />
            <button onClick={toggleReadMore}>Read More</button>
          </div>
        );
      }
    } else {
      return <div dangerouslySetInnerHTML={{ __html: text }} />;
    }
  };

  return <div>{renderContent()}</div>;
};

const ScrollListCmt = () => {
  const listRef = useRef(null);

  const dispatch = useDispatch();
  const { loading, success, postDetail, error } = useSelector(
    (state) => state.postDetail
  );
  const { postComment, success: addSuccess } = useSelector(
    (state) => state.addComment
  );
  const { user } = useSelector((state) => state.user);
  const [socket, setSocket] = useState();

  useEffect(() => {
    const newSocket = io("http://localhost:8001");
    setSocket(newSocket);

    return () => {
      newSocket.disconnect(); // Clean up the socket connection when the component unmounts
    };
  }, [setSocket, postDetail, dispatch]);

  console.log(postDetail);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [likedPost, setLikedPost] = useState([]);
  const [liked, setLiked] = useState(false);
  const [content, setContent] = useState("");

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
        <BiLike className="item_like_cmt_send" icon={BiLike} />
        <div className="item_act_post">{liked ? "Yêu thích" : "Yêu thích"}</div>
      </button>
    );
  };

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
    dispatch(createComment(user._id, postDetail._id, content));
  };

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }

    if (addSuccess) {
      setContent("");
    }

    if (socket) {
      socket.on("addComment", () => {
        dispatch(getPostDetail(postDetail._id));
      });
    }
  }, [dispatch, error, postDetail, socket, addSuccess]);

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
        <div
          style={{
            width: "551px",
            backgroundColor: "white",
            marginTop: "20px",
          }}
        >
          <Link to="/login" className="post_detail">
            <img className="img_company" src={postDetail?.user?.image} alt="" />
            <div to="/login" className="post_title">
              <h5 className="home_name_company">{postDetail?.user?.name}</h5>
              <p>Được tài trợ</p>{" "}
            </div>
          </Link>
          <div className="post_detail_home">
            {" "}
            <ReadMore text={postDetail?.content?.replace(/<br \/>/g, "<br>")} />
          </div>

          <div>
            <div className="total_like_cmt">
              <div className="total_like">
                <p>
                  {" "}
                  <AiFillLike style={{ color: "#0066FF" }} />{" "}
                  {postDetail?.likes?.length}
                </p>
              </div>
              <p>{postDetail?.comments?.length} Bình luận</p>
            </div>
            <div className="act_post">
              <div className="act_post_item_scroll">
                <div className="item_act">
                  <LikeButton
                    className="item_like_cmt_send"
                    postId={postDetail?._id}
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

              {postDetail?.comments?.map((comment) => (
                <div className="newfeed_list_cmt">
                  <img
                    className="newfeed_avt_cmt"
                    src={comment.author.image}
                    alt=""
                  />
                  <div className="newfeed_cmt_content">
                    <h5>{comment.author.name}</h5>
                    <p>{comment.content}</p>
                  </div>
                </div>
              ))}

              <div className="newfeed_input_cmt">
                <img className="newfeed_avt_cmt" src={user?.image} alt="" />
                <form onSubmit={addCommentSubmit}>
                  <input
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="newfeed_input_cmt_detail"
                    type="text"
                    required
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

export default ScrollListCmt;
