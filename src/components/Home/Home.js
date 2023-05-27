import { AiFillCheckCircle, AiFillLike, AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { TbSend } from "react-icons/tb";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { Button, Container, Row, Col } from "react-bootstrap";

import "./Home.css";
function Home() {
  return (
    <div className="body_top">
      <div className="body_left">
        <div className="body_top_item1">
          <div className="body_top_item1_welcome"> Chào mừng bạn đến với</div>
          <a className="body_top_item1_lookup" href="">
            LookUp.com
          </a>
          <div className="body_top_item1_detai">
            <AiFillCheckCircle className="check_icon" />
            <p>Trải nghiệm tính năng cao cấp với gói Premium miễn phí!</p>
          </div>

          <Link to="/register">
            <button className="body_top_button_register">Đăng ký ngay!</button>
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
            <BsSearch />
            <p>Tìm kiếm</p>
          </Link>
        </div>

        <div className="body_top_item2">
          <h3 className="home_title_center">
            Bạn đang cần tìm đối tác, khách hàng? Đăng ký miễn phí ngay tại
            LookUp.com!
          </h3>
          <Link to="/register">
            <button className="body_top_button_register">Đăng ký ngay!</button>
          </Link>
          <div className="have_account">
            <p>Bạn đã có tài khoản?</p>
            <Link to="/login">Đăng nhập</Link>
          </div>
        </div>

        <div className="body_top_item5">
          <div className="post_detail">
            <img
              className="img_company"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu1rHFVKfQUJJELrxv_GkP___edS_EoiDjg8W_9NFH0Q&s"
              alt=""
            />
            <div className="post_title">
              <h5>Công ty TNHH Hoàng Nam</h5>
              <p>Được tài trợ</p>{" "}
            </div>
          </div>
          <p>
            Thành lập từ năm 1994, Công ty TNHH Tin Học Hoàng Nam là một trong
            những công ty hàng đầu tại Tp. HCM trong lĩnh vực bán lẻ phần cứng
            công nghệ thông tin.
          </p>

          <img
            className="img_post"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbVAfrqNk2EtEhre_GStV9vvqw4FUoMJ3ygpMqHdmtgt3TRztRIMULhzTH9qr5Zq2AIes&usqp=CAU"
            alt=""
          />
          <div>
            <div className="total_like_cmt">
              <div className="total_like">
                <AiFillLike />
                <p>1.2k</p>
              </div>
              <p>5 Bình luận</p>
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShr3aX5CPlr7HFAO5ibk2tjUy3mjk5CjUnHA&usqp=CAU"
              alt=""
            />
            <div className="post_title">
              <h5>Công ty TNHH Hoàng Nam</h5>
              <p>Được tài trợ</p>{" "}
            </div>
          </div>
          <p>
            Công ty TNHH Đầu tư Phát triển Công nghệ Việt Thanh chuyên kinh
            doanh xe đạp điện, xe máy điện, linh kiện xe điện nhập khẩu trực
            tiếp từ các hãng nổi tiếng trên thế giới
          </p>

          <img
            className="img_post"
            src="https://xedientot.vn/images/product/xe-dap-dien-osakar-alpha-sport_c074b984.jpg"
            alt=""
          />
          <div>
            <div className="total_like_cmt">
              <div className="total_like">
                <AiFillLike />
                <p>1k</p>
              </div>
              <p>55 Bình luận</p>
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqRnrpd6owDBeWCa-JZ-WkvhSSkAGl1e4qMw&usqp=CAU"
              alt=""
            />
            <div className="post_title">
              <h5>Doanh Nghiệp Trọng Nhân</h5>
              <p>Được tài trợ</p>{" "}
            </div>
          </div>
          <p>
            Doanh nghiệp Trọng Nhân được ra đời năm 1998 chúng tôi là một trong
            những doanh nghiệp đi đầu tiền về lĩnh vực áp dụng công nghệ vào đồ
            ăn thức uống
          </p>

          <img
            className="img_post"
            src="https://vietluat.vn/wp-content/uploads/2020/02/thanh-lap-cong-ty-nganh-cong-nghe-thuc-pham-2020.jpg"
            alt=""
          />
          <div>
            <div className="total_like_cmt">
              <div className="total_like">
                <AiFillLike />
                <p>3k</p>
              </div>
              <p>78 Bình luận</p>
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
      </div>
      <div className="body_top_item3">
        <img
          className="body_top_item3_img_ads"
          src="https://images.squarespace-cdn.com/content/v1/53883795e4b016c956b8d243/1570626134360-FQODKCRQHC9ZEJCRNHN0/chup-anh-profile-cong-ty-kpmg-3.jpg?format=1000w"
          alt=""
        />
        <div className="body_top_item3_detail_ads">
          <img
            className="img_company2"
            src="https://i.pinimg.com/originals/39/88/85/398885df3f6e523828d80cf867a77039.jpg"
            alt=""
          />
          <div>
            <h5>Công ty Nam Tiến</h5>
            <p>Công nghệ thông tin</p>
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
  );
}
export default Home;
