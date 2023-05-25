import { useState } from "react";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FormRegister.css";
import { Link } from "react-router-dom";
import flagVN from "../assets/vietnam.png";

const FormRegister = ({ addItem }) => {
  const [newItemName, setNewItemName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItemName) {
      toast.error("please provide value");
      return;
    }
    addItem(newItemName);
    setNewItemName("");
  };

  return (
    <section className="section-center">
      <form onSubmit={handleSubmit}>
        <h4>Tạo tài khoản</h4>
        <div>
          <input
            type="text "
            className="form-input"
            placeholder="Địa chỉ Email"
          />
        </div>
        <br />
        <div>
        <input 
              type="password" id="pass" name="password"
              placeholder="Mật khẩu"
              className="form-input"
              minlength="8" required />
        </div>
        <br />
        <div>
          <input 
              type="password" id="pass" name="password"
              placeholder="Xác nhận Mật khẩu"
              className="form-input"
              minlength="8" required />
        </div>
        <br />
        <h4>Thông tin doanh nghiệp</h4>
        
        <div>
          <input
            type="text "
            className="form-input"
            placeholder="Tên doanh nghiệp"
            value={newItemName}
            onChange={(event) => setNewItemName(event.target.value)}
          />
        </div>
        <br />
        <div>
          <input
            type="text "
            className="form-input"
            placeholder="Lĩnh vực kinh doanh"
          />
        </div>
        <br />
        <div className="row">
          <div className="col-4">
            <input type="text " className="form-input" placeholder="Số nhà" />
          </div>
          <div className="col-8">
            <input type="text " className="form-input" placeholder="Tên đường" />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-4">
            <select id="inputState" class="form-control">
              <option selected>Tỉnh</option>
              <option>Ho Chi Minh City</option>
            </select>
          </div>
          <div className="col-4">
            <select id="inputState" class="form-control">
              <option selected>Thành phố</option>
              <option>Ho Chi Minh City</option>
            </select>
          </div>
          <div className="col-4">
            <select id="inputState" class="form-control">
              <option selected>Quận&huyện</option>
              <option>Ho Chi Minh City</option>
            </select>
          </div>
        </div>
        <br />
        <h5>Thông tin liên hệ</h5>
        <br />
        <div className="row">
          <div className="col-4">
            <select id="inputState" className="form-control">
            
              <option selected ><img src={flagVN} alt="" />+84</option>
              <option>......</option>
            </select>
          </div>
          <div className="col-6">
            <input type="text " className="form-input" placeholder="Số điện thoại" />
          </div>
        </div>
        <br />
        <div class="form-group">
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Mô tả doanh nghiệp"
            rows="3"
          ></textarea>
        </div>
        <br />

        <div class="input-group">
          <div class="input-group-prepend">
            <div class="input-group-text">
              <input
                type="checkbox"
                aria-label="Radio button for following text input"
              />
            </div>
          </div>
          <p>
            {" "}
            Trong Khi tạo một tài khoản trang web: Tôi đồng ý tuân thủ thuận
            thành viên Lookup.com sẵn sàng nhận email từ các thành viên và dịch
            vụ của Lookup.com
          </p>
        </div>
        <br />
        <Link to="/newfeed">
          <button
            type="button"
            class="btn btn-primary"
            data-toggle="button"
            aria-pressed="false"
            autocomplete="off"
          >
            Đăng ký
          </button>
        </Link>
      </form>
    </section>
  );
};

export default FormRegister;
