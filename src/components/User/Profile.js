import bgcompany from "../../images/bgcompany.jpg";
import avt_company from "../../images/avt_company.jpg";
import { Link } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { TbMessages } from "react-icons/tb";

import "./Profile.css";
import ProfileTab from "./ProfileTab";
function Profile() {
  return (
    <div className="profile">
      <div class="img_des">
        <div>
          <img class="img_bg" src={bgcompany} alt="" />
          <img class="img_avt" src={avt_company} alt="" />
        </div>
        <div class="profile_des">
          <div>
            <h3>Công ty Bùi Thức</h3>
            <p>Ngành nghề</p>
            <p>Tỉnh, thành phố, quận huyện</p>
            <Link>500 Lượt theo dõi </Link>
          </div>
          <div class="action">
            <div class="follow">Theo doi</div>
            <div class="sendmess">Gui tin nhan</div>
          </div>
        </div>
      </div>
      <div className="profile_center_tab">
        <ProfileTab />
      </div>
    </div>
  );
}

export default Profile;
