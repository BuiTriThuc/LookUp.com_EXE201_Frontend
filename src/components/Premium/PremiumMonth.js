import React from "react";
import "./PremiumYear.css";

import paypalIcon from "../../images/paypalIcon.png";
import momoIcon from "../../images/momoIcon.png";
import masterCard from "../../images/masterCard.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./PremiumMonth.css";
import { padding } from "@mui/system";

export default function PremiumMonth() {
  return (
    <div className="premiumYear">
      <div className="premiumyear_center">
        <div>
          <h4 className="premiumyear_top_title">Bạn đã chọn</h4>
          <Link className="premiumyear_change_package" to="/morepremium">
            Thay đổi gói
          </Link>
          <div className="premiummonth_top">
            <div className="premiummonth_top_item">
              <h2 className="premiumyear_center_title">Gói premium tháng</h2>
            </div>
            <p className="premium_top_rule">Áp dụng điều khoản và điều kiện</p>
          </div>
          <div className="premiumyear_title">
            <h4 className="premiumyear_top_title">Đăng ký</h4>
            <p>Tự động gia hạn hằng tháng, hủy bất cứ lúc nào</p>
          </div>
        </div>
        <div className="premiummonth_bottom">
          <div className="premium_bottom_detail">
            <h3 className="premiumyear_bottom_title">
              Đăng ký bằng thẻ tin dụng hoặc ví
            </h3>
            <h5 className="premiumyear_bottom_price">290.000 vnđ / tháng*</h5>
            <p>
              *Áp dụng cho năm đầu tiên kể từ lúc đăng ký, sau đó là 290.000 vnđ
              / năm
            </p>
          </div>
          <div className="premium_bottom_payment">
            <Link to="/payment">
              {" "}
              <div className="premium_bottom_payment_paypel">
                <h3 className="payment_name">
                  Ví Momo{" "}
                  <AiOutlineArrowRight
                    style={{
                      color: "black",
                      marginLeft: "600px",
                      marginTop: "20px",
                      position: "absolute",
                    }}
                  />
                </h3>
                <img
                  style={{
                    width: "30px",
                    height: "30px",
                    position: "relative",
                  }}
                  src={momoIcon}
                  alt=""
                />{" "}
              </div>{" "}
            </Link>
            <div className="line"> </div>

            <Link to="/payment">
              {" "}
              <div className="premium_bottom_payment_paypel">
                <h3 className="payment_name">
                  Paypal{" "}
                  <AiOutlineArrowRight
                    style={{
                      color: "black",

                      marginLeft: "618px",
                      marginTop: "20px",
                      position: "absolute",
                    }}
                  />
                </h3>
                <img
                  style={{ width: "120px", height: "30px" }}
                  src={paypalIcon}
                  alt=""
                />{" "}
              </div>{" "}
            </Link>

            <div className="line"> </div>
            <Link to="/payment">
              {" "}
              <div className="premium_bottom_payment_visa">
                <h3 className="payment_name">Thẻ tín dụng hoặc thẻ ghi nợ</h3>
                <img
                  style={{ width: "50px", height: "30px" }}
                  src={masterCard}
                  alt=""
                />
                <AiOutlineArrowRight
                  style={{
                    color: "black",

                    width: "20px",
                    height: "20px",
                    marginLeft: "627px",
                    position: "absolute",
                  }}
                />
              </div>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
