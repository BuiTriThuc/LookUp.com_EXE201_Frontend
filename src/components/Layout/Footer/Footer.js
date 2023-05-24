import { TfiApple, TfiAndroid } from "react-icons/tfi";

import "./Footer.css";
function Footer() {
  return (
    <div className="Footer">
      <div className="Footer_Item_Top">
        <a className="Footer_Item" href="">
          Privacy Policy
        </a>
        <a className="Footer_Item" href="">
          introduce
        </a>
        <a className="Footer_Item" href="">
          Register
        </a>
        <a className="Footer_Item" href="">
          Contact LookUp.com
        </a>
        <a className="Footer_Item" href="">
          Suport
        </a>
      </div>
      <div className="Description">
        <h3 className="Footer_Detail">technology company LookUp.com</h3>
        <p className="Footer_Detail">
          Head office: Lot E2a-7, D1 Street, Long Thanh My, City. Thu Duc, City.
          Ho Chi Minh City
        </p>
        <p className="Footer_Detail"> ĐKKD-MST number: 0312578469</p>
        <div className="Footer_Contact">
          <p className="Footer_Detail">Phone number: 0987654321</p>
          <p className="Footer_Detail">Email: gm@lookup.com</p>
        </div>
        <div className="Footer_Download">
          <p>Download application</p>
          <TfiApple className="Footer_Detail" />
          <TfiAndroid className="Footer_Detail" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
