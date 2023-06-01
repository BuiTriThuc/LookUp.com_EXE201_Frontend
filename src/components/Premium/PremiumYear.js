import React from "react";
import "./PremiumYear.css";
import { BsPaypal } from "react-icons/bs";
import { FaCcMastercard, FaCcVisa } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function PremiumYear() {
  return (
    <div className="premiumYear">
      <div className="premiumyear_center">
        <div>
          <h4>Bạn đã chọn</h4>
          <div className="premiumyear_top">
            <div className="premiumyear_top_item">
              <h2>Gói premium năm</h2>
            </div>
            <p className="premium_top_rule">Áp dụng điều khoản và điều kiện</p>
          </div>
          <div className="premiumyear_title">
            <h4>Đăng ký</h4>
            <p>Tự động gia hạn hằng tháng, hủy bất cứ lúc nào</p>
          </div>
        </div>
        <div className="premiumyear_bottom">
          <div className="premium_bottom_detail">
            <h3>Đăng ký bằng thẻ tin dụng hoặc ví</h3>
            <h5>2.249.000 vnđ / năm*</h5>
            <p>
              *Áp dụng cho năm đầu tiên kể từ lúc đăng ký, sau đó là 2.999.000
              vnđ / năm
            </p>
          </div>
          <div className="premium_bottom_payment">
            <div className="premium_bottom_payment_paypel">
              <h3>
                <BsPaypal /> Paypal <AiOutlineArrowRight className="arrow" />
              </h3>
            </div>
            <div className="line"> </div>
            <div className="premium_bottom_payment_visa">
              <h3>Thẻ tín dụng hoặc thẻ ghi nợ</h3>
              <FaCcVisa /> <FaCcMastercard />{" "}
              <AiOutlineArrowRight className="arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
