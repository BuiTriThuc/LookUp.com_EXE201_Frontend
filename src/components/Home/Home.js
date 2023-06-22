import { AiOutlineHeart, AiFillLike } from "react-icons/ai";
import { BiLike } from "react-icons/bi";

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
import PostPictures10 from "./Post/PostPictures_10";
import PostPictures2 from "./Post/PostPictures_2";
import PostPictures3 from "./Post/PostPictures_3";
import PostPictures4 from "./Post/PostPictures_4";
import ThreeDotMenu from "./threeDotMenu/ThreeDotMenu";

// ReadMore Text
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
      const likedPostsData = posts?.filter((post) =>
        post.likes?.includes(user?._id)
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
              src="https://cdnmedia.baotintuc.vn/Upload/DMDnZyELa7xUDTdLsa19w/files/2022/11/1611/lien-doan-ld-161122.jpg"
              alt=""
            />
          </div>
          <div className="date_time_event">
            <p className="title_event">Lễ Vinh danh doanh nghiệp</p>
            <h6 className="title_event_day">Ngày 10 tháng 7 năm 2023</h6>
          </div>
          <div>
            <Link
              className="envent_detail_more"
              to="https://baotintuc.vn/xa-hoi/vinh-danh-doanh-nghiep-tieu-bieu-vi-nguoi-lao-dong-20221116174259025.htm"
            >
              Tìm hiểu thêm
            </Link>
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
            <p className="title_event_day">Ngày 23 tháng 9 năm 2023</p>
          </div>
          <div>
            <Link
              className="envent_detail_more"
              to="https://congthuong.vn/ngay-hoi-khoi-nghiep-vietnam-startup-day-2022-thuc-day-he-sinh-thai-khoi-nghiep-218100.html"
            >
              Tìm hiểu thêm
            </Link>
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
            <p className="title_event_day">Ngày 26 tháng 7 năm 2023</p>
          </div>
          <div>
            <Link
              className="envent_detail_more"
              to="https://www.dienmayxanh.com/khuyen-mai/ngay-vang-thang-dep-11-11-giam-cuc-soc-den-49-1129548"
            >
              Tìm hiểu thêm
            </Link>
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

          <Link to="/search" className="search_icon">
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
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Link to="/profile" className="post_detail">
                  <img className="img_company" src={post.user?.image} alt="" />
                  <div to="/login" className="post_title">
                    <h5
                      className="home_name_company"
                      style={{ fontWeight: "bold", fontSize: "16px" }}
                    >
                      {post.user?.name}
                    </h5>
                    <p style={{ fontSize: "13px", opacity: "0.9" }}>
                      Được tài trợ
                    </p>{" "}
                  </div>
                </Link>
                <div>
                  <ThreeDotMenu />
                </div>
              </div>
              <div className="post_detail_home">
                {" "}
                <ReadMore text={post.content.replace(/<br \/>/g, "<br>")} />
              </div>

              {(() => {
                if (post.images?.length === 1) {
                  return post.images.map((image) => (
                    <Link to={`/viewImage/${post._id}`}>
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
                  return (
                    <PostPictures2 imgSrc={post.images} postId={post._id} />
                  );
                } else if (post.images?.length === 3) {
                  return (
                    <PostPictures3 imgSrc={post.images} postId={post._id} />
                  );
                } else if (post.images?.length === 4) {
                  return (
                    <PostPictures4 imgSrc={post.images} postId={post._id} />
                  );
                } else if (post.images?.length >= 5) {
                  return (
                    <PostPictures10 imgSrc={post.images} postId={post._id} />
                  );
                }
              })()}

              <div>
                <div className="total_like_cmt">
                  <div className="total_like">
                    <p className="total_like_icon_post">
                      {" "}
                      <AiFillLike
                        style={{
                          color: "blue",
                          width: "20px",
                          height: "20px",
                          marginRight: "2px",
                        }}
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
