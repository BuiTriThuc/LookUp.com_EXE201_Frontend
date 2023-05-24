

import { useState } from "react";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const Form = ({ addItem }) => {
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
    <section className='section-center'>
      <form onSubmit={handleSubmit}>
        <h4>Information about Company</h4>
        <br />
        <div>
          <input
            type="text "
            className="form-input"
            placeholder="Name coporation"
            value={newItemName}
            onChange={(event) => setNewItemName(event.target.value)}
          />
        </div>
        <br />
        <div>
          <input
            type="text "
            className="form-input"
            placeholder="Linh Vuc Kinh Doanh"
          />
        </div>
        <br />
        <div className="row">
          <div className="col-4">
            <input type="text " className="form-input" placeholder="Major" />
          </div>
          <div className="col-8">
            <input type="text " className="form-input" placeholder="Street" />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-4">
            <select id="inputState" class="form-control">
              <option selected>Provinces</option>
              <option>Ho Chi Minh City</option>
            </select>
          </div>
          <div className="col-4">
            <select id="inputState" class="form-control">
              <option selected>City</option>
              <option>Ho Chi Minh City</option>
            </select>
          </div>
          <div className="col-4">
            <select id="inputState" class="form-control">
              <option selected>District</option>
              <option>Ho Chi Minh City</option>
            </select>
          </div>
        </div>
        <br />
        <p>Information Contacts</p>
        <br />
        <div className="row">
          <div className="col-4">
            <select id="inputState" className="form-control">
              <option selected>+84</option>
              <option>......</option>
            </select>
          </div>
          <div className="col-6">
            <input type="text " className="form-input" placeholder="Number" />
          </div>
        </div>
        <br />
        <div class="form-group">
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Description"
            rows="3"
          ></textarea>
        </div>
        <br />

        <div class="input-group">
          <div class="input-group-prepend">
            <div class="input-group-text">
              <input
                type="checkbox" aria-label="Radio button for following text input"
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
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="button"
          aria-pressed="false"
          autocomplete="off"
        >
          Register
        </button>
      </form>
    </section>
  );
};
export default Form;