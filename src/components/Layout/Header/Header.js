import { Link } from "react-router-dom";
import HeaderPage from "../../../images/HeaderPage.png";
import "./Header.css";
import { AiFillHome } from "react-icons/ai";
import { MdWorkspacePremium } from "react-icons/md";
import Dropdown from "./Dropdown";
import Badges from "./Badge";

function Header() {
  return (
    <div>
      <div className="header_top">
        <a className="header_lookup" href="">
          LookUp.com
        </a>
        <Link>
          {" "}
          <AiFillHome className="icon_header" />
        </Link>

        <Link>
          {" "}
          <MdWorkspacePremium className="icon_header" />
        </Link>
        <Link>
          {""}
          <Badges />
        </Link>
        <div>
          <Dropdown />
        </div>
        <div>
        <Link className="header_help" to="/newfeed">
            New Feed
          </Link>
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
