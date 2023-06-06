import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Profile.css";
import ProfileTab from "./ProfileTab";

function Profile() {
  const { user } = useSelector((state) => state.user);
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
            <h3>{user.name}</h3>
            <p>{user.categoryBusiness}</p>
            <p>{user.city}</p>
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
