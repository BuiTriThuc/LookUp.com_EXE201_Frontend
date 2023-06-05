import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FormRegister.css";
import { Link, useNavigate } from "react-router-dom";
import flagVN from "../assets/vietnam.png";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, register } from "../actions/userActions";
import toast, { Toaster } from 'react-hot-toast';

const FormRegister = ({ addItem }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, error } = useSelector((state) => state.user)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [categoryBusiness, setCategoryBusiness] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");
  const [address, setAddress] = useState("");

  const notifySuccess = () => {
    toast.success("Register success", {
      duration: 3000,
      position: "top-center"
    })
    setTimeout(() => {
      navigate("/")
    }, 3000)
  }

  const registerSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("email", email);
    formData.set("password", password);
    formData.set("confirmPassword", confirmPassword);
    formData.set("phoneNumber", phoneNumber);
    formData.set("description", description);
    formData.set("name", name);
    formData.set("categoryBusiness", categoryBusiness);
    formData.set("city", city);
    formData.set("district", district);
    formData.set("ward", ward);
    formData.set("address", address);
    dispatch(register(formData)); 
  }

  useEffect(() => {
    if (error) {
      clearErrors(error)
    }

    if (isAuthenticated) {
      notifySuccess()
    }
  }, [error, notifySuccess, isAuthenticated])

  return (
    <section className="section-center">
      <form onSubmit={registerSubmit}>
        <h4>Tạo tài khoản</h4>
        <div>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            placeholder="Địa chỉ Email"
          />
        </div>
        <br />
        <div>
          <input
            type="password"
            id="pass"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mật khẩu"
            className="form-input"
            minlength="8"
            required
          />
        </div>
        <br />
        <div>
          <input
            type="password"
            id="pass"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Xác nhận Mật khẩu"
            className="form-input"
            minlength={6}
            required
          />
        </div>
        <br />
        <h4>Thông tin doanh nghiệp</h4>

        <div>
          <input
            type="text "
            name="nameBusiness"
            className="form-input"
            placeholder="Tên doanh nghiệp"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <br />
        <div>
          <input
            type="text "
            className="form-input"
            name="categoryBusiness"
            value={categoryBusiness}
            onChange={(e) => setCategoryBusiness(e.target.value)}
            placeholder="Lĩnh vực kinh doanh"
          />
        </div>
        <br />
        <div className="row">
          <div className="col-12">
            <input 
              type="text"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)} 
              className="form-input" 
              placeholder="Số nhà, tên đường" />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-4">
            <select id="inputState" class="form-control" name="city" onChange={(e) => setCity(e.target.value)}>
              <option selected>Tỉnh</option>
              <option value="Ho Chi Minh City">Ho Chi Minh City</option>
            </select>
          </div>
          <div className="col-4">
            <select id="inputState" class="form-control" name="district" onChange={(e) => setDistrict(e.target.value)}>
              <option selected>Quận, huyện</option>
              <option value="Quan 3">Quan 3</option>
            </select>
          </div>
          <div className="col-4">
            <select id="inputState" class="form-control" name="ward" onChange={(e) => setWard(e.target.value)}>
              <option selected>Phường, xã</option>
              <option value="Phuong 2">Phuong 2</option>
            </select>
          </div>
        </div>
        <br />
        <h5>Thông tin liên hệ</h5>
        <br />
        <div className="row">
          <div className="col-4">
            <select id="inputState" className="form-control">
              <option selected>
                <img src={flagVN} alt="" />
                +84
              </option>
              <option>......</option>
            </select>
          </div>
          <div className="col-6">
            <input
              type="text"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="form-input"
              placeholder="Số điện thoại"
            />
          </div>
        </div>
        <br />
        <div class="form-group">
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Mô tả doanh nghiệp"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
            Trong Khi tạo một tài khoản trang web: Tôi đồng ý tuân thủ thuận
            thành viên Lookup.com sẵn sàng nhận email từ các thành viên và dịch
            vụ của Lookup.com
          </p>
        </div>
        <br />

        <button
          type="submit"
          class="btn btn-primary"
          data-toggle="button"
          aria-pressed="false"
          autocomplete="off"
        >
          Đăng ký
        </button>
      </form>
      <Toaster />
    </section>
  );
};

export default FormRegister;
