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
import {useEffect} from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CreatePost from "./CreatePost/CreatePost";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getPost } from "../actions/postActions";
import ScrollList from "./scroll";

// ReadMore Text
const ReadMore = ({ text }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleReadMore = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      {text.length > 200 ? (
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
function Home() {

  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.user);
  const { error, posts } = useSelector((state) => state.posts);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openPic, setOpenPic] = useState(false);
  const handleOpenPic = () => setOpenPic(true);
  const handleClosePic = () => setOpenPic(false);

  useEffect(() => {
    if (error) {
      dispatch(clearErrors(error))
    }

    dispatch(getPost())
  }, [dispatch, error])

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

          <Link to="/register" className="body_top_button_register">
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
            <div className="body_top_item5">
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
                <ReadMore text={post?.content} />
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
                                <FaRegComment className="item_like_cmt_send" />{" "}
                                Bình luận
                              </button>
                            </div>

                            <div className="item_act">
                              <Link to="/chatbox">
                                <button className="item_act_post">
                                  <TbSend className="item_like_cmt_send" /> Gửi
                                  tin nhắn
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
                          <input
                            className="newfeed_input_cmt_detail"
                            type="text"
                          />
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
          ))}

        {/* <div className="body_top_item5">
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
            className="img_post"
            src="https://i.pinimg.com/originals/39/88/85/398885df3f6e523828d80cf867a77039.jpg"
            alt=""
          />
          <div>
            <div className="total_like_cmt">
              <div className="total_like">
                <AiFillLike />
                <p>1.2k</p>
              </div>
              <p>50 Bình luận</p>
            </div>
            <div className="act_post">
              <div className="item_act">
                <AiOutlineLike className="item_like_cmt_send" />
                <h5 className="item_act_post">yêu Thích</h5>
              </div>
              <div className="item_act">
                <FaRegComment className="item_like_cmt_send" />
                <h5 className="item_act_post">Bình luận</h5>
              </div>
              <div className="item_act">
                <TbSend className="item_like_cmt_send" />
                <h5 className="item_act_post">Gửi tin nhắn</h5>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <div className="body_top_item3">
        <img
          className="body_top_item3_img_ads"
          src="https://images.squarespace-cdn.com/content/v1/53883795e4b016c956b8d243/1570626134360-FQODKCRQHC9ZEJCRNHN0/chup-anh-profile-cong-ty-kpmg-3.jpg?format=1000w"
          alt=""
        />
        <Link to="./login" className="body_top_item3_detail_ads">
          <img
            className="img_company2"
            src="https://i.pinimg.com/originals/39/88/85/398885df3f6e523828d80cf867a77039.jpg"
            alt=""
          />
          <div>
            <h5 className="home_name_company">Công ty Thức Bùi</h5>
            <p>Công nghệ thông tin</p>
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
        <Link to="/" style={{ marginLeft: 90, marginTop: -25 }}>
          LookUp.com
        </Link>
      </div>
    </div>
  );
}
export default Home;
