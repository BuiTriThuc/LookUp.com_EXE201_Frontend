import { Link } from "react-router-dom";

function NewPassword() {
  return (
    <section className="section-center ">
      <form className="text center">
        <h4>Đặt lại mật khẩu</h4>
        <p class="text-center">Vui lòng tạo 1 mật khẩu mới</p>
        <br />
        <div>
          <input
            type="password"
            className="form-input"
            placeholder="Mật khẩu mới"
          />
        </div>
        <br />
        <div>
          <input
            type="password"
            className="form-input"
            placeholder="Xác nhận mật khẩu mới"
          />
        </div>
        <div className="text-center d-grid gap-2">
          <br />
          <Link to="/profile">
            {" "}
            <button type="button" className="btn btn-primary">
              Đặt lại mật khẩu
            </button>
          </Link>
        </div>
        <br />
      </form>
    </section>
  );
}

export default NewPassword;
