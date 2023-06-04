import React, { useEffect } from "react";
import "./NewFeed.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";
import CreatePost from "./CreatePost/CreatePost";
import { Link } from "react-router-dom";
import { FaRegComment } from "react-icons/fa";
import { TbSend } from "react-icons/tb";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "./Home.css";
import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ScrollList from "./scroll";
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

function NewFeed() {
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
    <div className="newfeed">
      <div className="akjd">
        <div className="body_top_item1">
          <div className="body_top_item1_welcome"> Chào mừng bạn đến với</div>
          <a className="body_top_item1_lookup" href="">
            LookUp.com
          </a>
          <div className="body_top_item1_detai">
            <AiFillCheckCircle className="check_icon" />
            <p>Trải nghiệm tính năng cao cấp với gói Premium miễn phí!</p>
          </div>

          <Link to="/premium">
            <button className="body_top_button_register">Đăng ký ngay!</button>
          </Link>
        </div>
        <div className="body_top_item4">
          <h6 className="title_event">
            Sự kiện đang diễn ra <br /> có thể bạn quan tâm
          </h6>
          <div className="event_detail">
            <img
              className="img_event"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHS3ivXsR6GBX8bOUFarwsQUMhTLxqFUv72A&usqp=CAU"
              alt=""
            />
          </div>
          <div className="date_time_event">
            <p className="title_event">Tudum của netflix</p>
            <p className="title_event">Ngày 12 tháng 7 năm 2023</p>
          </div>
          <div className="envent_detail_more">
            <a href=""> Tìm hiểu thêm</a>
          </div>

          <div className="event_detail">
            <img
              className="img_event"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH2o0X6i3pbWOocBmTptM24V3ILJGibP0L4w&usqp=CAU"
              alt=""
            />
          </div>
          <div className="date_time_event">
            <p className="title_event">Đổi mới sáng tạo tài chinh</p>
            <p className="title_event">Ngày 21 tháng 9 năm 2023</p>
          </div>
          <div className="envent_detail_more">
            <a href=""> Tìm hiểu thêm</a>
          </div>
          <div className="event_detail">
            <img
              className="img_event"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn7YVHeHuwahXJN2Vk2rKE0YuBs33GFyjBu5hO5-mjvfiGhPnOU3ypNhF4o-t61dpdtx0&usqp=CAU"
              alt=""
            />
          </div>
          <div className="date_time_event">
            <p className="title_event">Đặc quyền bất động sản</p>
            <p className="title_event">Ngày 30 tháng 7 năm 2023</p>
          </div>
          <div className="envent_detail_more">
            <a href=""> Tìm hiểu thêm</a>
          </div>
        </div>
      </div>

      <div className="newfeed_center">
        <div className="search_partner">
          <input
            className="body_top_search"
            type="text"
            placeholder="Bạn đang cần tìm đối tác?"
          />

          <Link to="/search" className="search_icon">
            <BsSearch />
            <p>Tìm kiếm</p>
          </Link>
        </div>
        <div className="create_post">
          <CreatePost />
        </div>
        <h3 className="title_post">Bài viết được đề xuất</h3>

        <div className="post_suggested">
          <div className="post_suggested_item">
            <div className="avt_name_company">
              <img
                className="newfeed_left_avt_img_center"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqTSLCBDqDPzNbLzX_-pT4McxmUnr2S81elQ&usqp=CAU"
                alt=""
              />
              <h5>Doanh nghiệp LookUp</h5>
            </div>
            <h6>Kết nối doanh nghiệp </h6>
            <Link to="/profile">xem thêm</Link>
            <img
              className="img_detail_company"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmwNh3fg6RZTPcfVA5TtcxeVe_YMrc8a4Hmg&usqp=CAU"
              alt=""
            />
          </div>
          <div className="post_suggested_item">
            <div className="avt_name_company">
              <img
                className="newfeed_left_avt_img_center"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT569bIqU9eLZ5mjEzf0OIsPUW84G9nWO7OIg&usqp=CAU"
                alt=""
              />
              <h5>Công ty TNHH Đạt</h5>
            </div>
            <h6>Mô tả ngắn về công ty </h6>
            <a href="">Xem thêm</a>
            <img
              className="img_detail_company"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA9Wq_sT32keRA4HQ-EpBPBPlrPmo8DMMzLg&usqp=CAU"
              alt=""
            />
          </div>
        </div>
        <Link to="/login"> Xem thêm</Link>

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

              <Modal
                open={open}
                onClose={handleClose}
                // aria-labelledby="modal-modal-title"
                // aria-describedby="modal-modal-description"
              >
                <Box className="modal_cmt_post">
                  <ScrollList />
                </Box>
              </Modal>
            </div>
          </div>
        </div>

        <div className="status_suggest"></div>
      </div>
      <div className="newfeed_right">
        <div className="newfeed_right_ads">
          <h4>Thêm vào bảng tin của bạn</h4>
          <div className="newfeed_company">
            <img
              className="newfeed_left_avt_img_right"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzZSLkrGIH6PTfiVD0icqUsYBYpW1SyQBoFw&usqp=CAU"
              alt=""
            />
            <div className="newfeed_detail_company">
              <p>Thịnh Phát</p>
              <h6>Nông sản</h6>
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyuvWhw7O6a3N0TS-LB0bDH4kQSUwo7WbqGg&usqp=CAU"
              alt=""
            />
            <div className="newfeed_detail_company">
              <p>Gia Hân</p>
              <h6>Máy móc</h6>
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROxOA4aOGZ6fZpGSdmGqewTwLdNLiJdLlcqw&usqp=CAU"
              alt=""
            />
            <div className="newfeed_detail_company">
              <p>Bảo Châu</p>
              <h6>Công nghệ</h6>
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
        <div className="body_top_item44">
          <img
            className="body_top_item3_img_ads"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOmJ7O0aIvo4G-xH6ik4ireJk7vd2MkQwNDQ&usqp=CAU"
            alt=""
          />
          <div className="body_top_item3_detail_ads">
            <img
              className="img_company2"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4qN-71U4VcG1Jrf6BOOzLWnlzz4IcE9cPJg&usqp=CAU"
              alt=""
            />
            <div>
              <h5>Công ty TNHH Thái Lộc</h5>
              <p>Marketing</p>
            </div>
          </div>
          <div className="suport">
            <div className="suport_left">
              <a className="suport_detail" href="">
                {" "}
                Giới thiệu
              </a>
              <a className="suport_detail" href="">
                Chính sách
              </a>
              <a className="suport_detail" href="">
                Tải ứng dụng
              </a>
            </div>
            <div className="suport_right">
              <a className="suport_detail" href="">
                Liên hệ
              </a>
              <a className="suport_detail" href="">
                Trợ giúp
              </a>
              <a className="suport_detail" href="">
                Xem thêm
              </a>
            </div>
          </div>
          <Link to="/" style={{ marginLeft: 90, marginTop: -25 }}>
            LookUp.com
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NewFeed;
