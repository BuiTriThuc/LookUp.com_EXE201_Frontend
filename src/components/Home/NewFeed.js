import React from "react";
import "./NewFeed.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import avt_company from "../../images/avt_company.jpg";
import { BsSearch } from "react-icons/bs";
import HeaderPage from "../../images/HeaderPage.png";
import { AiFillCheckCircle, AiFillLike, AiOutlineLike } from "react-icons/ai";
import Example from "./CreatePost/CreatePost";
import { Link } from "react-router-dom";
import { FaRegComment } from "react-icons/fa";
import { TbSend } from "react-icons/tb";

function NewFeed() {
  return (
    <div className="newfeed">
      <div className="akjd">
        <div className="newfeed_left">
          <div className="verification">
            <img
              className="newfeed_left_bg_img"
              src="https://images2.thanhnien.vn/uploaded/dieutrang.qc/2020_11_30/cp/cp-viet-nam-1_RNFL.jpg?width=500"
              alt=""
            />
            <img className="newfeed_left_avt_img" src={avt_company} alt="" />
            <p>Công ty TNHH Đức Thịnh</p>
            <h7>Đã được xác minh</h7>
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
          <Example />
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
              <h5>Doanh nghiệp Thịnh Đ</h5>
            </div>
            <h6>Doanh nghiệp sản xuất oto </h6>
            <a href="">xem them</a>
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
            <a href="">xem them</a>
            <img
              className="img_detail_company"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA9Wq_sT32keRA4HQ-EpBPBPlrPmo8DMMzLg&usqp=CAU"
              alt=""
            />
          </div>
        </div>
        <Link to="/login"> Xem them</Link>

        <div className="body_top_item5">
          <div className="post_detail">
            <img
              className="img_company"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPHRvtFUvNT9Rrpz2HE4gu05hPPg8m7DweCg&usqp=CAU"
              alt=""
            />
            <div className="post_title">
              <h4>TNHH Quốc Định</h4>
              <p>Được tài trợ</p>{" "}
            </div>
          </div>
          <h6>
            Quốc Định - Nhà sản xuất & bán buôn Giày Dép thời trang nam/ nữ/ trẻ
            em cho các công ty, cửa hàng, ki ốt, shop giày dép trên toàn quốc,..
            gồm: Giày da, giày tây.
          </h6>

          <img
            className="img_post"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ZTH0-_ojyaKLm__wAvfBucJjWBP7iO1qZQ&usqp=CAU"
            alt=""
          />
          <div>
            <div className="total_like_cmt">
              <div className="total_like">
                <AiFillLike />
                <p>1.7k</p>
              </div>
              <p>56 Bình luận</p>
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJHLAn7aObzLlhQuB55mQIapxCOMFAMZNxrA&usqp=CAU"
              alt=""
            />
            <div className="post_title">
              <h3>Lộc Trời</h3>
              <p>Được tài trợ</p>{" "}
            </div>
          </div>
          <h6>Nội dung bài viết...</h6>

          <img
            className="img_post"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3wzSYC3tWClXLUdWeuA6h-s9l8rWAp8wN_g&usqp=CAU"
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
          <a href="">LookUp.com</a>
        </div>
      </div>
    </div>
  );
}

export default NewFeed;
