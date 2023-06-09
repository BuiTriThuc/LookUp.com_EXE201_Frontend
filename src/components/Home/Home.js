import {
  AiFillLike,
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineLike,
} from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { TbSend } from "react-icons/tb";
import { Link } from "react-router-dom";
import { BsPatchCheck, BsSearch } from "react-icons/bs";
import "./Home.css";
import { useState } from "react";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CreatePost from "./CreatePost/CreatePost";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrors,
  dislikePost,
  getPost,
  getPostDetail,
  likePost,
} from "../actions/postActions";
import ScrollList from "./ScrollList";
import io, { Socket } from "socket.io-client";
import toast, { Toaster } from "react-hot-toast";
import PostPictures_10 from "./Post/PostPictures_10";
import PostPictures_2 from "./Post/PostPictures_2";
import PostPictures_3 from "./Post/PostPictures_3";
import PostPictures_4 from "./Post/PostPictures_4";

// ReadMore Text
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
            {text.slice(0, 200)}...{" "}
            <button onClick={toggleReadMore}>Read More</button>
          </div>
        )
      ) : (
        <div>{text}</div>
      )}
    </div>
  );
};

function Home() {
  const dispatch = useDispatch();

  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { error, posts } = useSelector((state) => state.posts);

  const [socket, setSocket] = useState();
  const [liked, setLiked] = useState(false);
  const [likedPost, setLikedPost] = useState([]);

  const notifySuccess = () => {
    toast.success("Create post success!", {
      position: "top-center",
      duration: 5000,
    });
  };

  useEffect(() => {
    const newSocket = io("http://localhost:8001");
    setSocket(newSocket);

    return () => {
      newSocket.disconnect(); // Clean up the socket connection when the component unmounts
    };
  }, [setSocket]);

  const [open, setOpen] = useState(false);
  const handleOpen = (id) => {
    setOpen(true);
    dispatch(getPostDetail(id));
  };
  const handleClose = () => setOpen(false);

  const [openPic, setOpenPic] = useState(false);
  const handleOpenPic = () => setOpenPic(true);
  const handleClosePic = () => setOpenPic(false);

  useEffect(() => {
    if (error) {
      dispatch(clearErrors(error));
    }

    if (socket) {
      socket.on("postCreated", (newPost) => {
        // Dispatch the getPost action to update the posts
        dispatch(getPost());
        notifySuccess();
      });
      socket.on("likedPost", () => {
        dispatch(getPost());
      });
      socket.on("dislikedPost", () => {
        dispatch(getPost());
      });
    }
    dispatch(getPost());
  }, [dispatch, error, socket]);

  useEffect(() => {
    if (isAuthenticated && posts?.length > 0) {
      const likedPostsData = posts.filter((post) =>
        post.likes?.includes(user._id)
      );
      setLikedPost(likedPostsData.map((post) => post._id));
    }
  }, [isAuthenticated, posts, user]);

  const LikeButton = ({ postId }) => {
    const handleClick = () => {
      if (likedPost?.includes(postId)) {
        dislikePostSubmit(postId, user._id);
      } else {
        likePostSubmit(postId, user._id);
      }
    };
    return (
      <button
        onClick={handleClick}
        className={likedPost?.includes(postId) ? "liked" : "like"}
      >
        <AiOutlineHeart className="item_like_cmt_send" icon={AiOutlineHeart} />
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

  const longText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum magna et risus commodo, vitae lacinia lectus sodales. In maximus sem et tristique aliquam. Nulla tincidunt massa ut dui eleifend, in viverra velit ultrices. Nam dictum facilisis nulla, id ullamcorper orci vulputate vel. Fusce aliquet magna eget felis finibus vestibulum. Suspendisse potenti. Mauris consectetur elit a turpis semper commodo. Phasellus non velit id mauris efficitur lacinia. Nulla facilisi. Nam eget aliquet felis. In maximus elementum purus id auctor. Nullam ut congue leo, vitae mattis felis.";
  return (
    <div className="body_top">
      <div className="body_left">
        <div className="body_top_item1">
          <div className="body_top_item1_welcome"> Chào mừng bạn đến với</div>
          <a className="body_top_item1_lookup" href="">
            LookUp.com
          </a>

          <div className="body_top_item1_detai">
            <BsPatchCheck className="check_icon" />
            <p>Trải nghiệm tính năng cao cấp với gói Premium miễn phí!</p>
          </div>

          <Link to="/premium" className="body_top_button_register">
            Đăng ký ngay!
          </Link>
        </div>
        <div className="body_top_item4">
          <h6 className="title_event_top">
            Sự kiện đang diễn ra <br /> có thể bạn quan tâm
          </h6>
          <div className="event_detail">
            <img
              className="img_event"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF1MWV61opat6RSVZcenC0GDQA1PTRw_OrZw&usqp=CAU"
              alt=""
            />
          </div>
          <div className="date_time_event">
            <p className="title_event">Lễ Vinh danh doanh nghiệp</p>
            <h6 className="title_event">Ngày 10 tháng 7 năm 2023</h6>
          </div>
          <div className="envent_detail_more">
            <Link to="/login">Tìm hiểu thêm</Link>
          </div>

          <div className="event_detail">
            <img
              className="img_event"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU3WERkFfaMVl6MpEufmG7mvN4moJsLIv9QQ&usqp=CAU"
              alt=""
            />
          </div>
          <div className="date_time_event">
            <p className="title_event">Ngày hội startup</p>
            <p className="title_event">Ngày 23 tháng 9 năm 2023</p>
          </div>
          <div className="envent_detail_more">
            <Link to="/login">Tìm hiểu thêm</Link>
          </div>
          <div className="event_detail">
            <img
              className="img_event"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUfktjaNs-2Yak9ZgqNmrgtkuCkEov2oxTRVSu6UX5-ZAr4JN8R9Ez4atpp_JrFAMSYRc&usqp=CAU"
              alt=""
            />
          </div>
          <div className="date_time_event">
            <p className="title_event">Ngày vàng khuyến mãi</p>
            <p className="title_event">Ngày 26 tháng 7 năm 2023</p>
          </div>
          <div className="envent_detail_more">
            <Link to="/login">Tìm hiểu thêm</Link>
          </div>
        </div>
      </div>
      <div className="body_center">
        <div className="search_partner">
          <input
            className="body_top_search"
            type="text"
            placeholder="Bạn đang cần tìm đối tác?"
          />

          <Link to="/login" className="search_icon">
            <BsSearch className="search_Home" /> <p> Tìm kiếm</p>
          </Link>
        </div>

        {isAuthenticated && isAuthenticated === true ? (
          <div className="create_post">
            <CreatePost />
          </div>
        ) : (
          <div className="body_top_item2">
            <h3 className="home_title_center">
              Bạn đang cần tìm đối tác, khách hàng? Đăng ký miễn phí ngay tại
              LookUp.com!
            </h3>
            <Link to="/register" className="body_top_button_register">
              Đăng ký ngay!
            </Link>
            <div className="have_account">
              <p>Bạn đã có tài khoản?</p>
              <Link to="/login">Đăng nhập</Link>
            </div>
          </div>
        )}

        {posts &&
          posts.map((post) => (
            <div className="body_top_item5" key={post._id}>
              <Link to="/login" className="post_detail">
                <img
                  className="img_company"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu1rHFVKfQUJJELrxv_GkP___edS_EoiDjg8W_9NFH0Q&s"
                  alt=""
                />
                <div to="/login" className="post_title">
                  <h5 className="home_name_company">{post.user?.name}</h5>
                  <p>Được tài trợ</p>{" "}
                </div>
              </Link>
              <div className="post_detail_home">
                {" "}
                <ReadMore text={post.content} />
              </div>

              {(() => {
                if (post.images?.length === 1) {
                  return post.images.map((image) => (
                    <Link to="/viewimage">
                      {" "}
                      <img
                        onClick={handleOpenPic}
                        className="img_post"
                        src={image}
                        alt=""
                      />
                    </Link>
                  ));
                } else if (post.images?.length === 2) {
                  return <PostPictures_2 imgSrc={post.images} />;
                } else if (post.images?.length === 3) {
                  return <PostPictures_3 imgSrc={post.images} />;
                } else if (post.images?.length === 4) {
                  return <PostPictures_4 imgSrc={post.images} />;
                } else if (post.images?.length >= 5) {
                  return <PostPictures_10 imgSrc={post.images} />;
                }
              })()}

              <Modal open={openPic} onClose={handleClosePic}>
                <Box className="modal_img_post">
                  {post.images.map((image) => (
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
                      <AiFillHeart
                        style={{ color: "red", width: "15px", height: "15px" }}
                      />{" "}
                      {post.likes?.length}
                    </p>
                  </div>
                  <p>{post.comments?.length} Bình luận</p>
                </div>
                <div className="act_post">
                  <div className="act_post_item_scroll">
                    <div className="item_act">
                      <LikeButton
                        className="item_like_cmt_send liked"
                        postId={post._id}
                      />
                    </div>

                    <div className="item_act">
                      <button
                        onClick={() => handleOpen(post._id)}
                        className="item_act_post"
                      >
                        <FaRegComment className="item_like_cmt_send" /> Bình
                        luận
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

                  <Modal open={open} onClose={handleClose}>
                    <Box className="modal_cmt_post">
                      <ScrollList />
                    </Box>
                  </Modal>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="body_top_item3">
        <img
          className="body_top_item3_img_ads"
          src="https://media.doanhnhantrevietnam.vn/files/content/2022/03/22/doanh-nhan-tre-vietnam-mua-dich-thuc-an-nhanh-len-ngoi-hinh-anh-2-1051.jpg"
          alt=""
        />
        <Link to="./login" className="body_top_item3_detail_ads">
          <img
            className="img_company2"
            src="https://i.pinimg.com/originals/39/88/85/398885df3f6e523828d80cf867a77039.jpg"
            alt=""
          />
          <div>
            <h5 className="home_name_company">Công ty TNHH Thịnh</h5>
            <p>Thức ăn nhanh</p>
          </div>
        </Link>
        <div className="suport">
          <div className="suport_left">
            <Link className="suport_detail" href="">
              {" "}
              Giới thiệu
            </Link>
            <Link className="suport_detail" href="">
              Chính sách
            </Link>
            <Link className="suport_detail" href="">
              Tải ứng dụng
            </Link>
          </div>
          <div className="suport_right">
            <Link className="suport_detail" href="">
              Liên hệ
            </Link>
            <Link className="suport_detail" href="">
              Trợ giúp
            </Link>
            <Link className="suport_detail" href="">
              Xem thêm
            </Link>
          </div>
        </div>
        <Link to="/" style={{ marginLeft: 90, marginTop: "-53px" }}>
          LookUp.com
        </Link>
      </div>
      <Toaster />
    </div>
  );
}
export default Home;
