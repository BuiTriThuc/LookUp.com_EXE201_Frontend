import React from "react";
import "./NewFeed.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import HeaderPage from "../../images/HeaderPage.png";
import avt_company from "../../images/avt_company.jpg";
import { AiFillCheckCircle, AiFillLike, AiOutlineLike } from "react-icons/ai";
import Example from "./CreatePost/CreatePost";
import { Link } from "react-router-dom";
import { FaRegComment } from "react-icons/fa";
import { TbSend } from "react-icons/tb";
import { useSelector } from "react-redux";

function NewFeed() {

  const { loading, isAuthenticated, user } = useSelector((state) => state.user)
  return (
    <div className="newfeed">
      <div className="akjd">
        <div className="newfeed_left">
          <div className="verification">
            <img className="newfeed_left_bg_img" src={HeaderPage} alt="" />
            <img className="newfeed_left_avt_img" src={avt_company} alt="" />
            <p>Công ty TNHH Bùi Trí Thức</p>
            <h6>Đã được xác minh</h6>
          </div>
          <div className="body_top_item1_detai">
            <AiFillCheckCircle className="check_icon" />
            <p>Trải nghiệm tính năng cao cấp với gói Premium miễn phí!</p>
          </div>
        </div>
        <div className="body_top_item4">
          <h6 className="title_event">
            Sự kiện đang diễn ra <br /> có thể bạn quan tâm
          </h6>
          <div className="event_detail">
            <img
              className="img_event"
              src="https://cdn.mos.cms.futurecdn.net/V6LCHNxfSPT2Sxpr4bAzD.jpg"
              alt=""
            />
          </div>
          <div className="date_time_event">
            <p className="title_event">Đồ ăn thức uống</p>
            <p className="title_event">Ngày 10 tháng 7 năm 2023</p>
          </div>
          <div className="envent_detail_more">
            <a href=""> Tìm hiểu thêm</a>
          </div>

          <div className="event_detail">
            <img
              className="img_event"
              src="https://cdn.mos.cms.futurecdn.net/V6LCHNxfSPT2Sxpr4bAzD.jpg"
              alt=""
            />
          </div>
          <div className="date_time_event">
            <p className="title_event">Đồ ăn thức uống</p>
            <p className="title_event">Ngày 10 tháng 7 năm 2023</p>
          </div>
          <div className="envent_detail_more">
            <a href=""> Tìm hiểu thêm</a>
          </div>
          <div className="event_detail">
            <img
              className="img_event"
              src="https://cdn.mos.cms.futurecdn.net/V6LCHNxfSPT2Sxpr4bAzD.jpg"
              alt=""
            />
          </div>
          <div className="date_time_event">
            <p className="title_event">Đồ ăn thức uống</p>
            <p className="title_event">Ngày 10 tháng 7 năm 2023</p>
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
          <Example />
        </div>
        <h3 className="title_post">Bài viết được đề xuất</h3>

        <div className="post_suggested">
          <div className="post_suggested_item">
            <div className="avt_name_company">
              <img
                className="newfeed_left_avt_img_center"
                src={avt_company}
                alt=""
              />
              <p>Tên công ty</p>
            </div>
            <h6>Mô tả ngắn về công ty </h6>
            <a href="">xem them</a>
            <img className="img_detail_company" src={avt_company} alt="" />
          </div>
          <div className="post_suggested_item">
            <div className="avt_name_company">
              <img
                className="newfeed_left_avt_img_center"
                src={avt_company}
                alt=""
              />
              <p>Tên công ty</p>
            </div>
            <h6>Mô tả ngắn về công ty </h6>
            <a href="">xem them</a>
            <img className="img_detail_company" src={avt_company} alt="" />
          </div>
        </div>
        <Link to="/login"> Xem them</Link>

        <div className="body_top_item5">
          <div className="post_detail">
            <img
              className="img_company"
              src="https://i.pinimg.com/originals/39/88/85/398885df3f6e523828d80cf867a77039.jpg"
              alt=""
            />
            <div className="post_title">
              <h3>Thuc Bui</h3>
              <p>Được tài trợ</p>{" "}
            </div>
          </div>
          <h6>Nội dung bài viết...</h6>

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
        </div>
        <div className="body_top_item5">
          <div className="post_detail">
            <img
              className="img_company"
              src="https://i.pinimg.com/originals/39/88/85/398885df3f6e523828d80cf867a77039.jpg"
              alt=""
            />
            <div className="post_title">
              <h3>Thuc Bui</h3>
              <p>Được tài trợ</p>{" "}
            </div>
          </div>
          <h6>Nội dung bài viết...</h6>

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
        </div>

        <div className="status_suggest"></div>
      </div>
      <div className="newfeed_right">
        <div className="newfeed_right_ads">
          <h4>Thêm vào bảng tin của bạn</h4>
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
        <div className="body_top_item44">
          <img
            className="body_top_item3_img_ads"
            src="https://i.pinimg.com/originals/39/88/85/398885df3f6e523828d80cf867a77039.jpg"
            alt=""
          />
          <div className="body_top_item3_detail_ads">
            <img
              className="img_company2"
              src="https://i.pinimg.com/originals/39/88/85/398885df3f6e523828d80cf867a77039.jpg"
              alt=""
            />
            <div>
              <h3>Công ty Thức Bùi</h3>
              <p>Coder</p>
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
          <a href="">LookUp.com</a>
        </div>
      </div>
    </div>
  );
}

export default NewFeed;
