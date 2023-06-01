import React, { useEffect, useState } from "react";
import bgImg from "../assets/img1.jpg";
import { useForm } from "react-hook-form";
import { MDBCheckbox } from "mdb-react-ui-kit";
import "./login.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";
import { clearErrors } from "../reducers/userReducers";

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
    dispatch(login(loginEmail, loginPassword))
    // handleValidation();
  };

  console.log('Check co vao login ko: ', location.pathname);

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }

    if (isAuthenticated === true) {
      navigate(redirect)
    }
  }, [dispatch, error, isAuthenticated, navigate, redirect])
  return (
    <section>
      <div className="register">
        <div className="col-1">
          <h2>Welcome Back</h2>

          <button className="logingg">
            <svg
              className="active"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="35px"
              height="18px"
              viewBox="0 0 50 40"
            >
              <g>
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                ></path>
                <path
                  fill="#4285F4"
                  d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                ></path>
                <path
                  fill="#FBBC05"
                  d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                ></path>
                <path
                  fill="#34A853"
                  d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                ></path>
                <path fill="none" d="M0 0h48v48H0z"></path>
              </g>
            </svg>
            <span class="icon-loading" z-index="1"></span>{" "}
            <span>Sign in with Google</span>
          </button>

          <form id="form" className="flex flex-col" onSubmit={loginSubmit}>
            <input
              type="email"
              className="form-control"
              id="EmailInput"
              name="EmailInput"
              aria-describedby="emailHelp"
              placeholder="Enter email"
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
              placeholder="Password"
              value={loginPassword}
              onChange={(event) => setLoginPassword(event.target.value)}
            />
            <small id="passworderror" className="text-danger form-text">
              {passwordError}
            </small>
        
              <input type="submit" value="Login" className="btn" />
    

            <div className="striped">
              <span className="striped-line">-----------------------------</span>
            </div>
            <div className="d-flex justify-content-between mx-4 mb-4">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Remember me"
              />
              <Link to="/resetpassword">Forgot password?</Link>
            </div>
          </form>

          <p>Bạn chưa có tài khoản?</p>
        </div>
        <div className="col-2">
          <img src={bgImg} alt="" />
        </div>
      </div>
    </section>
  );
}
