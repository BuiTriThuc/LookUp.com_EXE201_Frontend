import { TfiApple, TfiAndroid } from "react-icons/tfi";
import { Layout } from "antd";
import "./Footer.css";
import {
  DribbbleOutlined,
  TwitterOutlined,
  InstagramOutlined,
  GithubOutlined,
} from "@ant-design/icons";

function Footer() {
  const { Footer: AntFooter } = Layout;

  return (
        <div className="Footer">
          <div className="Footer_Item_Top">
            <a className="Footer_Item" href="">
              Privacy Policy
            </a>
            <a className="Footer_Item" href="">
              Introduce
            </a>
            <a className="Footer_Item" href="">
              Register
            </a>
            <a className="Footer_Item" href="">
              Contact LookUp.com
            </a>
            <a className="Footer_Item" href="">
              Support
            </a>
          </div>       
          <div className="Description">
            <h3 className="Footer_Detail">technology company LookUp.com</h3>
            <p className="Footer_Detail">
              Head office: Lot E2a-7, D1 Street, Long Thanh My, City. Thu Duc,
              City. Ho Chi Minh City
            </p>
            <p className="Footer_Detail"> ĐKKD-MST number: 0312578469</p>
            <div className="Footer_Contact">
              <p className="Footer_Detail">Phone number: 0987654321</p>
              <p className="Footer_Detail">Email: gm@lookup.com</p>
            </div>
            <div className="Footer_Download">
              <p>Download application</p><br />
              <TfiApple className="Icon_Detail" />
              <TfiAndroid className="Icon_Detail" />                
            </div>
            <div className="Footer_Item_Top footer-menu">
                <ul>
                  <li className="nav-item">
                  <DribbbleOutlined />
                  </li>
                </ul>
                <ul>
                  <li className="nav-item">
                  <TwitterOutlined />
                  </li>
                </ul>
                <ul>
                  <li className="nav-item">
                  <InstagramOutlined />
                  </li>
                </ul>
                <ul>
                  <li className="nav-item">
                  <GithubOutlined />
                  </li>
                </ul>
              </div> 
          </div>
        </div>
  );
}

export default Footer;
