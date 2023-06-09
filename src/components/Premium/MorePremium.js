import React from "react";
import "./MorePremium.css";
import { AiOutlineCheck } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function MorePremium() {
  return (
    <div className="morepremium">
      <div>
        <h4 className="premiumyear_top_title">Gói hiện tại</h4>
        <div className="morepremium_top">
          <div className="morepremium_top_item">
            <h2 className="morepremium_free">Gói miễn phí</h2>
          </div>
          <p className="morepremium_top_rule">
            Tìm kiếm các doanh nghiệp trong khu vực, đăng bài viết và trao đổi
            thông tin
          </p>
        </div>
        <div>
          <h4 className="premiumyear_top_title">Các gói có sẵn</h4>
        </div>
      </div>

      <div className="morepremium_bottom">
        <div className="morepremium_bottom_left">
          <div className="morepremium_bottom_left_item">
            <h4 className="morepremium_title_bottom">Gói premium tháng</h4>
          </div>
          <div className="morepremium_benefit">
            <p>
              {" "}
              <AiOutlineCheck /> Tăng khả năng hiển thị
            </p>
            <p>
              {" "}
              <AiOutlineCheck /> Tìm kiếm nâng cao
            </p>
            <p>
              {" "}
              <AiOutlineCheck /> Nhiều cơ hội tiếp thị hơn
            </p>
            <p>
              {" "}
              <AiOutlineCheck /> Truy cập nội dung độc quyền
            </p>
          </div>
          <p className="morepremium_free_month">
            Miễn phí 01 tháng trong năm đầu tiên!
          </p>
          <div className="bottom_line_premium"></div>
          <h3 className="morepremium_price">259.000 vnđ / tháng</h3>
          <Link to="/premiummonth">
            {" "}
            <button className="morepremium_btn_regis"> Đăng ký ngay </button>
          </Link>
        </div>

        <div className="morepremium_bottom_right">
          <div className="morepremium_bottom_right_item">
            <h4 className="morepremium_title_bottom_right">Gói premium năm </h4>
          </div>
          <div className="morepremium_benefit">
            <p>
              {" "}
              <AiOutlineCheck /> Tăng khả năng hiển thị
            </p>
            <p>
              {" "}
              <AiOutlineCheck /> Tìm kiếm nâng cao
            </p>
            <p>
              {" "}
              <AiOutlineCheck /> Nhiều cơ hội tiếp thị hơn
            </p>
            <p>
              {" "}
              <AiOutlineCheck /> Truy cập nội dung độc quyền
            </p>
          </div>
          <p className="morepremium_free_month">
            Miễn phí 03 tháng trong năm đầu tiên!
          </p>
          <div className="bottom_line_premium"></div>

          <h3 className="morepremium_price">2.249.000 vnđ / năm*</h3>
          <Link to="/premiumyear">
            {" "}
            <button className="morepremium_btn_regis_right">
              {" "}
              Đăng ký ngay{" "}
            </button>{" "}
          </Link>
          <p className="morepremium_right_bottom_apply">
            *Áp dụng trong năm đầu tiên kể từ lúc đăng ký, sau đó là 2.999.000
            vnđ / năm
          </p>
        </div>
      </div>
    </div>
  );
}
