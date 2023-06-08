import { Link } from "react-router-dom";

function OTP() {
  return (
    <section className="section-center">
      <form>
        <h4>Nhập mã OTP</h4>
        <div>
          <input
            type="email"
            className="form-input"
            placeholder="Nhập mã OTP gồm 6 số"
          />
        </div>
        <br />
        <div className="text-center d-grid gap-2 ">
          <Link to="/resetpassword">
            {" "}
            <button type="button" className="btn btn-primary ">
              Đặt lại mật khẩu
            </button>{" "}
          </Link>
        </div>
        <br />
      </form>
    </section>
  );
}

export default OTP;
