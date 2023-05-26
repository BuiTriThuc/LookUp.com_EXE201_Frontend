import bgcompany from "../../images/bgcompany.jpg";
import avt_company from "../../images/avt_company.jpg";

import "./Profile.css";
function Profile() {
  return (
    <div className="profile">
      <div className="profile_top">
        <div className="img_profile">

          <img className="profile_top_center_avt" src={avt_company} alt="" />
          <img className="profile_top_bgr" src={bgcompany} alt="" />
        </div>
        <div className="profile_top_center"></div>
      </div>
    </div>
  );
}

export default Profile;
