import { Link } from "react-router-dom";
import HeaderPage from "../../../images/HeaderPage.png";
import "./Header.css";
import { AiFillHome } from "react-icons/ai";
import { MdWorkspacePremium } from "react-icons/md";
import Dropdown from "./Dropdown";
import Badges from "./Badge";
import { useSelector } from "react-redux";

function Header() {
  const { isAuthenticated } = useSelector((state) => state.user);
  
  return (
    <div>
      {isAuthenticated && isAuthenticated === true ? (
        <div className="header_top">
        <Link className="header_lookup" to="/">
          LookUp.com
        </Link>
        <Link to="/newfeed">
          {" "}
          <AiFillHome className="icon_header" />
        </Link>

        <Link to="/premium">
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
          
        </div>
      </div>
      ) : ""}
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
