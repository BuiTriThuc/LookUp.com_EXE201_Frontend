import React, { useEffect, useState } from "react";
import bgImg from "../assets/img1.jpg";
import { useForm } from "react-hook-form";
import { MDBCheckbox } from "mdb-react-ui-kit";
import "./login.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";
import { clearErrors } from "../reducers/userReducers";
import GoogleButton from "react-google-button";

export default function LoginForm() {
  const {
    formState: {},
  } = useForm();

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");

  const handleValidation = (event) => {
    let formIsValid = true;

    if (!loginEmail.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formIsValid = false;
      setemailError("Email Not Valid");
      return false;
    } else {
      setemailError("");
      formIsValid = true;
    }

    if (!loginPassword.match(/^[a-zA-Z]{6,22}$/)) {
      formIsValid = false;
      setpasswordError(
        "Only Letters and length must best min 6 Chracters and Max 22 Chracters"
      );
      return false;
    } else {
      setpasswordError("");
      formIsValid = true;
    }

    return formIsValid;
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
    // handleValidation();
  };

  console.log("Check co vao login ko: ", location.pathname);

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }

    if (isAuthenticated === true) {
      navigate(redirect);
    }
  }, [dispatch, error, isAuthenticated, navigate, redirect]);
  return (
    <section>
      <div className="register">
        <div className="col-1">
          <h2 style={{ fontWeight: "bold" }} className="text-center">
            Chào mừng trở lại
          </h2>

          <GoogleButton
            className="btn_google"
            onClick={() => {
              console.log("Google button clicked");
            }}
          />

          <form id="form" className="flex flex-col" onSubmit={loginSubmit}>
            <input
              type="email"
              className="form-control"
              id="EmailInput"
              name="EmailInput"
              aria-describedby="emailHelp"
              placeholder="Email của bạn"
              value={loginEmail}
              onChange={(event) => setLoginEmail(event.target.value)}
            />
            <small id="passworderror" className="text-danger form-text">
              {emailError}
            </small>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Mật khẩu của bạn"
              value={loginPassword}
              onChange={(event) => setLoginPassword(event.target.value)}
            />
            <small id="passworderror" className="text-danger form-text">
              {passwordError}
            </small>
            <div className="d-flex justify-content-between mx-4 mb-4">
              <MDBCheckbox
                // style={{ paddingLeft: "0rem !important" }}

                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Giữ tôi đăng nhập"
              />
              <br />
              <Link to="/forgotpassword">
                <p>Quên mật khẩu?</p>
              </Link>
            </div>
            <input type="submit" value="Login" className="btn" />

            <div className="striped">
              <p className="striped-line text-center">
                -----------------------------
              </p>
            </div>
          </form>
          <p className="no_account_regis">
            Bạn chưa có tài khoản?{" "}
            <Link to="/register">
              <p className="loginform_regis">Đăng ký</p>
            </Link>
          </p>
        </div>
        <div className="col-2">
          <img src={bgImg} alt="" />
        </div>
      </div>
    </section>
  );
}
