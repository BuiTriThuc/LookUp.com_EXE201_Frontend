import { BsPatchCheck, BsSearch, BsShare } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";
import { HiOutlineLockClosed } from "react-icons/hi";
import { AiOutlineCheck } from "react-icons/ai";

import "./Premium.css";
import { Link } from "react-router-dom";
function Premium() {
  return (
    <div className="premium">
      <div className="premium_top">
        <div className="premium_top_item">
          <BsPatchCheck className="icon_premium" />
          <h3 className="premium_title_top">
            Đăng ký ngay để trải nghiệm gói Premium miễn <br></br>phí trong
            tháng đầu tiên!
            <div className="morepremium_benefit_premium">
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
          </h3>
        </div>
        <div className="premium_btn">
          <Link to="/morepremium" className="premium_more">
            {" "}
            Tìm hiểu thêm
          </Link>
          <Link
            style={{ color: "white" }}
            to="/morepremium"
            className="premium_regis"
          >
            {" "}
            Đăng ký ngay
          </Link>
        </div>
      </div>
      <h3 className="premium_title">Lý do dùng gói Premium?</h3>

      <div className="premium_center">
        <div className="premium_center_top">
          <div className="premium_center_top_left">
            <h5 className="premium_title_center">
              <IoEyeOutline /> Tăng khả năng hiển thị
            </h5>
            <h3>
              Giúp doanh nghiệp tăng khả năng hiển thị trong danh bạ, giúp khách
              hàng và đối tác tiềm năng dễ dàng tìm kiếm hơn
            </h3>
          </div>
          <div className="premium_center_top_right">
            <h5 className="premium_title_center">
              <BsSearch /> Tìm kiếm nâng cao
            </h5>
            <h3>
              Cung cấp cho doanh nghiệp khả năng tìm kiếm nâng cao, phù hợp với
              nhu cầu của doanh nghiệp
            </h3>
          </div>
        </div>
        <div className="premium_center_bottom">
          <div className="premium_center_bottom_left">
            <h5 className="premium_title_center">
              <BsShare /> Nhiều cơ hội tiếp thị hơn
            </h5>
            <h3>
              Mang đến cho doanh nghiệp nhiều cơ hội tiếp thị hơn: khả năng tạo
              và quản lý danh sách riêng, đăng ảnh và video cũng như chạy các
              chiến dịch quảng cáo trên nền tảng
            </h3>
          </div>
          <div className="premium_center_bottom_right">
            <h5 className="premium_title_center">
              <HiOutlineLockClosed /> Truy cập nội dung độc quyền
            </h5>

            <h3>
              Mang đến cho doanh nghiệp nhiều cơ hội tiếp thị hơn: khả năng tạo
              và quản lý danh sách riêng, đăng ảnh và video cũng như chạy các
              chiến dịch quảng cáo trên nền tảng
            </h3>
          </div>
        </div>
      </div>
      <h3 className="premium_title">Chọn gói Premium của bạn</h3>

      <div className="premium_bottom">
        <div className="premium_bottom_left">
          <div className="premium_bottom_left_item">
            <h4 className="premium_title_center_thang">Gói Premium tháng*</h4>
            <h3>259.000 vnđ / tháng**</h3>
            <Link to="/premiummonth">
              {" "}
              <button className="btn_premium">Đăng ký ngay</button>
            </Link>
          </div>
          <p className="premium_detail">
            *Miễn phí 01 tháng trong năm đầu tiên kể từ lúc đăng ký<br></br>
            **Tương đương 3.108.000 vnđ / năm
          </p>
        </div>
        <div className="premium_bottom_right">
          <div className="premium_bottom_right_item">
            <h4 className="premium_title_center_nam">Gói Premium Năm*</h4>
            <h6 className="gachngang">2.999.000 vnđ / năm</h6>
            <h3>2.249.000 vnđ / năm</h3>
            <Link to="/premiumyear">
              {" "}
              <button className="btn_premium_nam">Đăng ký ngay</button>
            </Link>
            <p className="premium_detail">
              *Miễn phí 03 tháng trong năm đầu tiên kể từ lúc đăng ký, sau đó là
              2.999.000 vnđ / năm
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Premium;
