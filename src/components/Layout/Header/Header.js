import HeaderPage from "../../../images/HeaderPage.png";
import "./Header.css";
import { HiTranslate } from "react-icons/hi";

function Header() {
  return (
    <div>
      <div className="header_top">
        <a className="header_lookup" href="">
          LookUp.com
        </a>
        <div>
          {" "}
          <HiTranslate />
          <a className="header_help" href="">
            Trợ giúp
          </a>
        </div>
      </div>
      <div className="header_body">
        <img className="header_img" src={HeaderPage} alt="" />
        <h3 className="header_title">
          Khám phá và kết nối với các doanh nghiệp <br /> địa phương trong khu
          vực của bạn
        </h3>
      </div>
    </div>
  );
}

export default Header;