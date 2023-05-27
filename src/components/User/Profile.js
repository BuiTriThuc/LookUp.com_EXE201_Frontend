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
          <img
            class="img_bg"
            src="https://vietnamarch.com.vn/wp-content/uploads/2020/07/background-co-dia-chi-cong-ty-1.jpg"
            alt=""
          />
          <img
            class="img_avt"
            src="https://employer.jobsgo.vn/uploads/media/img/202004/human_resource_3635714430_avatar.png"
            alt=""
          />
        </div>
        <div class="profile_des">
          <div>
            <h3>Công ty Bùi Thức</h3>
            <p>Lập Trình</p>
            <p>Hồ Chí Minh</p>
            <Link>500 Lượt theo dõi </Link>
          </div>
          <div class="action">
            <div class="follow">Theo dõi </div>
            <div class="sendmess">Gửi tin nhắn</div>
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
