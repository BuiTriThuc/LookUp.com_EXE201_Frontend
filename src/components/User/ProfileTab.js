import { AiOutlinePlusCircle } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import { AiFillLike } from "react-icons/ai";
import "react-dropdown/style.css";
import { FaRegComment } from "react-icons/fa";
import { TbSend } from "react-icons/tb";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ScrollList from "../Home/ScrollList";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrors,
  dislikePost,
  getPost,
  getPostDetail,
  getPostProfile,
  likePost,
} from "../actions/postActions";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import avt_company from "../../images/avt_company.jpg";
import certificate from "../../images/certificate.jpg";
import { MdPublic } from "react-icons/md";
import { BiPhone } from "react-icons/bi";
import xemaydien from "../../images/xemaydien.jpg";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaSortAmountDownAlt } from "react-icons/fa";
import io, { Socket } from "socket.io-client";

import "./ProfileTab.css";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import PostPictures10 from "../Home/Post/PostPictures_10";
import PostPictures2 from "../Home/Post/PostPictures_2";
import PostPictures3 from "../Home/Post/PostPictures_3";
import PostPictures4 from "../Home/Post/PostPictures_4";
import CreatePost from "../Home/CreatePost/CreatePost";
import ThreeDotMenu from "../Home/threeDotMenu/ThreeDotMenu";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

// function ChildModal() {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <React.Fragment>
//       <Button onClick={handleOpen}>Open Child Modal</Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="child-modal-title"
//         aria-describedby="child-modal-description"
//       >
//         <Box sx={{ ...style, width: 200 }}>
//           <h2 id="child-modal-title">Text in a child modal</h2>
//           <p id="child-modal-description">
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//           </p>
//           <Button onClick={handleClose}>Close Child Modal</Button>
//         </Box>
//       </Modal>
//     </React.Fragment>
//   );
// }
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
// Animation Like button333333

export default function BasicTabs() {
  const dispatch = useDispatch();
  const { loading, error, posts } = useSelector((state) => state.posts);
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const [socket, setSocket] = useState();
  const [likedPost, setLikedPost] = useState([]);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const newSocket = io("http://localhost:8001");
    setSocket(newSocket);

    return () => {
      newSocket.disconnect(); // Clean up the socket connection when the component unmounts
    };
  }, [setSocket]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = (id) => {
    setOpen(true);
    dispatch(getPostDetail(id));
  };
  const handleClose = () => setOpen(false);

  const [openPic, setOpenPic] = React.useState(false);
  // const handleOpenPic = () => setOpenPic(true);
  // const handleClosePic = () => setOpenPic(false);

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }

    if (socket) {
      socket.on("likedPost", () => {
        dispatch(getPostProfile(user._id));
      });
      socket.on("dislikedPost", () => {
        dispatch(getPostProfile(user._id));
      });
    }

    dispatch(getPostProfile(user._id));
  }, [dispatch, error, user, socket]);

  useEffect(() => {
    if (isAuthenticated && posts.length > 0) {
      const likedPostsData = posts.filter((post) =>
        post.likes.includes(user._id)
      );
      setLikedPost(likedPostsData.map((post) => post._id));
    }
  }, [isAuthenticated, posts, user]);

  const LikeButton = ({ postId }) => {
    const handleClick = () => {
      if (likedPost.includes(postId)) {
        dislikePostSubmit(postId, user._id);
      } else {
        likePostSubmit(postId, user._id);
      }
    };
    return (
      <button
        onClick={handleClick}
        className={likedPost.includes(postId) ? "liked" : "like"}
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

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Bài viết" {...a11yProps(0)} />
          <Tab label="Giới thiệu" {...a11yProps(1)} />
          <Tab label="Sản phẩm" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel
        value={value}
        index={0}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <div className="profile_tab_post">
          <div className="profile_tab_post_left">
            <div className="profile_tab_post_left_top">
              {" "}
              <h4 className="profile_tab_post_left_detail_title">Mô tả ngắn</h4>
              <p className="profile_tab_post_left_detail_des">
                Công ty TNHH LookUp thành lập vào 10-8-2001 tọa lạc tại thành
                phố Hồ Chí Minh. Công ty chuyên sản xuất, sửa chữa về phần mềm
                <Link to="/editprofile">
                  <button
                    style={{
                      width: "232px",
                      height: "32px",
                      backgroundColor: "#F3F3F3",
                      marginTop: "10px",
                      marginBottom: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    Chỉnh sửa
                  </button>
                </Link>
              </p>
              <div className="profile_tab_post_left_contact">
                <h4
                  style={{
                    marginTop: "10px",
                    paddingBottom: "10px",
                    fontWeight: "bold",
                  }}
                >
                  Thông tin liên hệ
                </h4>
                <p style={{ padding: "1px" }}>
                  {" "}
                  <MdPublic />
                  <Link> www.website.com</Link>
                </p>

                <p style={{ padding: "1px" }}>
                  <BiPhone /> {user.phoneNumber}
                </p>
                <p style={{ padding: "1px" }}>
                  <MdOutlineEmail /> {user.email}
                  <Link to="/editprofile">
                    <button
                      style={{
                        width: "232px",
                        height: "32px",
                        backgroundColor: "#F3F3F3",
                        marginTop: "10px",
                        marginBottom: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      Chỉnh sửa
                    </button>
                  </Link>
                </p>
              </div>
              <div className="profile_tab_post_left_premium">
                <h6>
                  <AiOutlineCheckCircle style={{ color: "#C67700" }} /> Trải
                  nghiệm tính năng cao cấp với gói premim miễn phí
                </h6>
              </div>{" "}
            </div>
            <div className="profiletab_letf_img_all">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "15px 10px 10px 10px",
                }}
              >
                <h6 style={{ fontWeight: "bold" }}>Hình ảnh</h6>
                <Link to="#">Tất cả ảnh</Link>
              </div>
              <div className="profiletab_letf_img_all_item">
                <img
                  className="profiletab_letf_img_all_item_img"
                  src="http://res.cloudinary.com/dakfojmaz/image/upload/v1686450047/yx1tnqev1snqdgnsmlcq.jpg"
                  alt=""
                />
                <img
                  className="profiletab_letf_img_all_item_img"
                  src="http://res.cloudinary.com/dakfojmaz/image/upload/v1686331846/zoefeyripe0t5nrwzcff.jpg"
                  alt=""
                />
                <img
                  className="profiletab_letf_img_all_item_img"
                  src="http://res.cloudinary.com/dakfojmaz/image/upload/v1686331846/mxppfh3zqgas4476mujs.jpg"
                  alt=""
                />
                <img
                  className="profiletab_letf_img_all_item_img"
                  src="http://res.cloudinary.com/dakfojmaz/image/upload/v1686331408/xvrpefba8jr40ore5ruc.jpg"
                  alt=""
                />
                <img
                  className="profiletab_letf_img_all_item_img"
                  src="http://res.cloudinary.com/dakfojmaz/image/upload/v1686331413/avzomz0qikhsczpjsexh.jpg"
                  alt=""
                />
                <img
                  className="profiletab_letf_img_all_item_img"
                  src="http://res.cloudinary.com/dakfojmaz/image/upload/v1686331407/qv9pcqquev8cvdxgkiej.jpg"
                  alt=""
                />
                <img
                  className="profiletab_letf_img_all_item_img"
                  src="http://res.cloudinary.com/dakfojmaz/image/upload/v1686331287/q4pc6qeevvisk1ex9iom.jpg"
                  alt=""
                />
                <img
                  className="profiletab_letf_img_all_item_img"
                  src="http://res.cloudinary.com/dakfojmaz/image/upload/v1686237145/taewzxaq3wfymd7iabtz.jpg"
                  alt=""
                />
                <img
                  className="profiletab_letf_img_all_item_img"
                  src="http://res.cloudinary.com/dakfojmaz/image/upload/v1686237146/mbaaq4lidjmiencss0nj.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="profile_tab_post_center">
            <div className="profile_tab_post_center_filter_post">
              <p>Bài viết</p>
              <p>
                Lọc <FaSortAmountDownAlt />
              </p>
            </div>
            <div className="create_post">
              <CreatePost />
            </div>
            {posts &&
              posts.map((post) => (
                <div className="body_top_item5" key={post._id}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    {" "}
                    <Link to="/profile" className="post_detail">
                      <img
                        className="img_company"
                        src={post.user?.image}
                        alt=""
                      />

                      <div className="post_title">
                        <h5
                          className="home_name_company"
                          style={{ fontWeight: "bold" }}
                        >
                          {post.user?.name}
                        </h5>
                        <p>Được tài trợ</p>{" "}
                      </div>
                    </Link>
                    <div>
                      <ThreeDotMenu />
                    </div>{" "}
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
                          <img className="img_post" src={image} alt="" />
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
                        <PostPictures10
                          imgSrc={post.images}
                          postId={post._id}
                        />
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
                      <p>{post.comments.length} Bình luận</p>
                    </div>
                    <div className="act_post_profile">
                      <div className="item_act">
                        <LikeButton
                          className="item_like_cmt_send"
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

                      <Modal open={open} onClose={handleClose}>
                        <Box className="modal_cmt_post">
                          <ScrollList />
                        </Box>
                      </Modal>

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
                </div>
              ))}
          </div>

          <div className="profile_right">
            <div className="profile_right_top">
              <h6 className="profile_right_top_title">Sản phẩm nổi bật</h6>
              <div className="profile_right_top_prouct">
                <div className="product_item">
                  {" "}
                  <img
                    className="profile_right_img_product"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-heCmZNipWZD1qXDCo8ZrhfCurDHGTIjGcg&usqp=CAU"
                    alt=""
                  />
                  <p>Tư vấn marketing</p>
                </div>
                <div className="product_item">
                  {" "}
                  <img
                    className="profile_right_img_product"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq7zwLSbKAKVNEyAYULDjcBfNL0WfGPT2_-w&usqp=CAU"
                    alt=""
                  />
                  <p>Giải pháp marketing</p>
                </div>
                <div className="product_item">
                  {" "}
                  <img
                    className="profile_right_img_product"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9ZGDMRdnXjSk9i1krkRAvSAexQUxqNYgjtw&usqp=CAU"
                    alt=""
                  />
                  <p>Marketing đúng hướng</p>
                </div>
              </div>
              <Link className="profile_product_viewmore">Xem thêm...</Link>
            </div>

            <div className="profile_right_center">
              <h5
                style={{
                  marginLeft: "10px",
                  paddingBottom: "10px",
                  fontWeight: "bold",
                  paddingTop: "20px",
                }}
              >
                Mọi người cũng tìm kiếm
              </h5>
              <div>
                <div className="newfeed_right_ads_profile">
                  <div className="newfeed_company">
                    <img
                      className="newfeed_left_avt_img_right"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH4EaP_iIshxaOz4hAcaCmRR8dxG9ke5Eydg&usqp=CAU"
                      alt=""
                    />
                    <div className="newfeed_detail_company">
                      <p>Công ty TNHH Đại Phong</p>
                      <h6 style={{ opacity: "0.8", fontSize: "14px" }}>
                        May mặc
                      </h6>
                    </div>
                  </div>
                  <div className="newfeed_act_company">
                    <div className="newfeed_icon_action1">
                      <AiOutlinePlusCircle style={{ marginLeft: "3px" }} />
                      <h6 className="newfeed_action_right">Theo dõi</h6>
                    </div>
                    <div className="newfeed_icon_action">
                      <h6 className="newfeed_action_right">Tìm hiểu thêm</h6>
                    </div>
                  </div>
                  <div className="newfeed_company">
                    <img
                      className="newfeed_left_avt_img_right"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA_9ZPougu6hdi2LFHqNOWQ_E_TTCk-Xt7rw&usqp=CAU"
                      alt=""
                    />
                    <div className="newfeed_detail_company">
                      <p>Doanh Nghiệp Duy</p>
                      <h6 style={{ opacity: "0.8", fontSize: "14px" }}>
                        Nông Sản
                      </h6>
                    </div>
                  </div>
                  <div className="newfeed_act_company">
                    <div className="newfeed_icon_action1">
                      <AiOutlinePlusCircle />
                      <h6 className="newfeed_action_right">Theo dõi</h6>
                    </div>
                    <div className="newfeed_icon_action">
                      <h6 className="newfeed_action_right">Tìm hiểu thêm</h6>
                    </div>
                  </div>
                  <div className="newfeed_company">
                    <img
                      className="newfeed_left_avt_img_right"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxgLx1-Ypw2fli3wMk4cUcw4dLyALIggTlbw&usqp=CAU"
                      alt=""
                    />
                    <div className="newfeed_detail_company">
                      <p>Công ty Thái Thiện</p>
                      <h6 style={{ opacity: "0.8", fontSize: "14px" }}>
                        Máy móc
                      </h6>
                    </div>
                  </div>
                  <div
                    style={{
                      paddingBottom: "20px",
                    }}
                    className="newfeed_act_company"
                  >
                    <div className="newfeed_icon_action1">
                      <AiOutlinePlusCircle />
                      <h6 className="newfeed_action_right">Theo dõi</h6>
                    </div>
                    <div className="newfeed_icon_action">
                      <h6 className="newfeed_action_right">Tìm hiểu thêm</h6>
                    </div>
                  </div>
                  <div className="boderbottomcompany"></div>
                  <Link className="profile_product_viewmore">Xem thêm...</Link>
                </div>
              </div>
            </div>
            <div className="profile_right_bottom">
              <div>
                <img
                  className="profile_right_bottom_img_ads"
                  src={xemaydien}
                  alt=""
                />
                <div className="profile_right_bottom_ads_detail">
                  <img
                    className="newfeed_left_avt_img_right"
                    src={avt_company}
                    alt=""
                  />
                  <div className="profile_ads_detail_company">
                    <h6>Công ty Bùi Trí Thức</h6>
                    <p style={{ fontSize: "13px", opacity: "0.8" }}>
                      Phương tiện
                    </p>
                    <p style={{ fontSize: "13px" }}>Được tài trợ</p>
                    <Link>
                      <button className="profile_right_bottom_ads_senmess">
                        {" "}
                        Gửi tin nhắn!
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="profile_introduction">
          <div className="profile_introduction_text">
            <h4>Giới thiệu</h4>
            <p>
              Thân em như tấm lụa đào Giá tiền trăm triệu đố chàng nào mua. 👓
              LookUp chỉ vài trăm nghìn, Nhanh tay thì nắm voucher của năm😌 🇻🇳
              LookUp - Trang mạng xã hội đặc biệt chuyên giúp kết nối các doanh
              nghiệp Việt Nam. Từ đó, doanh nghiệp có thể dễ dàng, thuận tiện
              tìm kiếm đối tác làm ăn và khách hàng tiềm năng để phục vụ cho nhu
              cầu công việc. 🇻🇳 Với đội ngũ thuần Việt, LookUp hiểu được những
              khó khăn và thử thách các doanh nghiệp đang gặp phải trong việc
              tìm kiếm thủ công nguồn khách hàng và đối tác uy tín. Chính vì
              thế, với quy mô hệ thống thông tin dữ liệu đạt chuẩn quốc tế,
              LookUp đã sẵn sàng phục vụ quý doanh nghiệp "mở rộng vòng tròn bạn
              bè" trong giai đoạn phục hồi kinh tế hiện nay. 🇻🇳 Chào mừng và cảm
              ơn bạn đã chọn LookUp👓!
            </p>
          </div>
          <div className="profile_introduction_infomation">
            <h4>Thông tin liên hệ</h4>
            <MdPublic />
            <Link> www.website.com</Link>
            <p>
              <BiPhone /> 085659778
            </p>
            <p>
              <MdOutlineEmail /> buitrithuc@gmail.com
            </p>
            <p>
              <TbSend /> Gửi tin nhắn
            </p>
          </div>
          <div className="profile_introductiob_certificate">
            <h4>Giấy chứng nhận</h4>
            <div>
              <img src={certificate} alt="" />
              <img src={certificate} alt="" />
              <img src={certificate} alt="" />
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="profile_product">
          <div className="profile_product_left">
            <h5>Sản phẩm nổi bật</h5>
            <div className="profile_product_left_hightlight">
              <div className="product_hightlight_item">
                <img
                  className="product_img_hightlight"
                  src={xemaydien}
                  alt=""
                />
                <p>xe máy điện</p>{" "}
              </div>

              <div className="product_hightlight_item">
                <img
                  className="product_img_hightlight"
                  src={xemaydien}
                  alt=""
                />
                <p>xe máy điện</p>{" "}
              </div>
              <div className="product_hightlight_item">
                <img
                  className="product_img_hightlight"
                  src={xemaydien}
                  alt=""
                />
                <p>xe máy điện</p>{" "}
              </div>
              <div className="product_hightlight_item">
                <img
                  className="product_img_hightlight"
                  src={xemaydien}
                  alt=""
                />
                <p>xe máy điện</p>{" "}
              </div>
              <div className="product_hightlight_item">
                <img
                  className="product_img_hightlight"
                  src={xemaydien}
                  alt=""
                />
                <p>xe máy điện</p>{" "}
              </div>
              <div className="product_hightlight_item">
                <img
                  className="product_img_hightlight"
                  src={xemaydien}
                  alt=""
                />
                <p>xe máy điện</p>{" "}
              </div>
            </div>
            <div className="all_product_profile">
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  <h5>Tất cả sản phẩm</h5>
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="newproduct"
                    control={<Radio />}
                    label="Sản phẩm mới"
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Danh mục 1"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Danh mục 2"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Tất cả sản phẩm"
                  />
                </RadioGroup>
              </FormControl>
              <div className="profile_new_product">
                <div> </div>
                <div className="product_hightlight_item">
                  <img
                    className="product_img_hightlight"
                    src={xemaydien}
                    alt=""
                  />
                  <p>xe máy điện</p>{" "}
                </div>
                <div className="product_hightlight_item">
                  <img
                    className="product_img_hightlight"
                    src={xemaydien}
                    alt=""
                  />
                  <p>xe máy điện</p>{" "}
                </div>
                <div className="product_hightlight_item">
                  <img
                    className="product_img_hightlight"
                    src={xemaydien}
                    alt=""
                  />
                  <p>xe máy điện</p>{" "}
                </div>
                <div className="product_hightlight_item">
                  <img
                    className="product_img_hightlight"
                    src={xemaydien}
                    alt=""
                  />
                  <p>xe máy điện</p>{" "}
                </div>
              </div>
              <div className="profile_new_product">
                <div> </div>
                <div className="product_hightlight_item">
                  <img
                    className="product_img_hightlight"
                    src={xemaydien}
                    alt=""
                  />
                  <p>xe máy điện</p>{" "}
                </div>
                <div className="product_hightlight_item">
                  <img
                    className="product_img_hightlight"
                    src={xemaydien}
                    alt=""
                  />
                  <p>xe máy điện</p>{" "}
                </div>
                <div className="product_hightlight_item">
                  <img
                    className="product_img_hightlight"
                    src={xemaydien}
                    alt=""
                  />
                  <p>xe máy điện</p>{" "}
                </div>
                <div className="product_hightlight_item">
                  <img
                    className="product_img_hightlight"
                    src={xemaydien}
                    alt=""
                  />
                  <p>xe máy điện</p>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="profile_product_right">
            <div className="profile_product_right_top">
              <h5>Mọi người cũng tìm kiếm</h5>
              <div>
                <div className="newfeed_right_ads_profile">
                  <div className="newfeed_company">
                    <img
                      className="newfeed_left_avt_img_right"
                      src={avt_company}
                      alt=""
                    />
                    <div className="newfeed_detail_company">
                      <p>Công ty</p>
                      <h6>Ngành nghề</h6>
                    </div>
                  </div>
                  <div className="newfeed_act_company">
                    <div className="newfeed_icon_action1">
                      <AiOutlinePlusCircle />
                      <h6 className="newfeed_action_right">Theo dõi</h6>
                    </div>
                    <div className="newfeed_icon_action">
                      <h6 className="newfeed_action_right">Tìm hiểu thêm</h6>
                    </div>
                  </div>
                  <div className="newfeed_company">
                    <img
                      className="newfeed_left_avt_img_right"
                      src={avt_company}
                      alt=""
                    />
                    <div className="newfeed_detail_company">
                      <p>Công ty</p>
                      <h6>Ngành nghề</h6>
                    </div>
                  </div>
                  <div className="newfeed_act_company">
                    <div className="newfeed_icon_action1">
                      <AiOutlinePlusCircle />
                      <h6 className="newfeed_action_right">Theo dõi</h6>
                    </div>
                    <div className="newfeed_icon_action">
                      <h6 className="newfeed_action_right">Tìm hiểu thêm</h6>
                    </div>
                  </div>
                  <div className="newfeed_company">
                    <img
                      className="newfeed_left_avt_img_right"
                      src={avt_company}
                      alt=""
                    />
                    <div className="newfeed_detail_company">
                      <p>Công ty</p>
                      <h6>Ngành nghề</h6>
                    </div>
                  </div>
                  <div className="newfeed_act_company">
                    <div className="newfeed_icon_action1">
                      <AiOutlinePlusCircle />
                      <h6 className="newfeed_action_right">Theo dõi</h6>
                    </div>
                    <div className="newfeed_icon_action">
                      <h6 className="newfeed_action_right">Tìm hiểu thêm</h6>
                    </div>
                  </div>
                </div>
              </div>
              <Link className="profile_product_viewmore_product">Xem thêm</Link>
            </div>

            <div className="profile_product_right_bottom">
              <div>
                <img
                  className="profile_right_bottom_img_ads"
                  src={xemaydien}
                  alt=""
                />
                <div className="profile_right_bottom_ads_detail">
                  <img
                    className="newfeed_left_avt_img_right"
                    src={avt_company}
                    alt=""
                  />
                  <div className="profile_ads_detail_company">
                    <h6>Công ty Bùi Trí Thức</h6>
                    <p>Ngành nghề</p>
                    <p>Được tài trợ</p>
                    <Link className="profile_right_bottom_ads_senmess">
                      Gửi tin nhắn!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TabPanel>
    </Box>
  );
}
