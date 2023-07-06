import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Profile.css";
import { IoChatbubblesOutline } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";
import bg_profile from "../../images/bg_profile.png";

import ProfileTab from "./ProfileTab";

function Profile() {
  const { user } = useSelector((state) => state.user);
  return (
    <div className="profile">
      <div className="img_des">
        <div>
          <img className="img_bg" src={bg_profile} alt="" />
          <img className="img_avt" src={user?.image} alt="" />
        </div>
        <div className="profile_des">
          <div>
            <h3 style={{ fontWeight: "bold" }}>{user?.name}</h3>
            <p style={{ marginTop: "7px" }}>{user.categoryBusiness}</p>
            <p>{user.city}</p>
            <Link>500 Lượt theo dõi </Link>
          </div>
          <div className="action">
            <div className="follow">
              <CiCirclePlus /> Theo dõi{" "}
            </div>
            <Link to="/chatbox">
              <div className="sendmess">
                <IoChatbubblesOutline /> Gửi tin nhắn
              </div>
            </Link>
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
