import { BsSearch } from "react-icons/bs";
import "./Search.css";
import avt_company from "../../images/avt_company.jpg";
import company_1 from "../../images/company_1.jpg";
import company_2 from "../../images/company_2.jpg";
import company_3 from "../../images/company_3.jpg";
function Search() {
  return (
    <div className="search_layout">
      <div className="search_center">
        <div className="search_partner">
          <input
            className="body_top_search"
            type="text"
            placeholder="Bạn đang cần tìm đối tác?"
          />
          <button className="search_icon">
            <BsSearch />
            <p>Tìm kiếm</p>
          </button>
        </div>
      </div>
      <div className="search_center_field">
        <h4>Bộ lọc</h4>
        <div>
          <select
            class="form-select form-select-sm mb-3"
            id="city"
            aria-label=".form-select-sm"
          >
            <option value="" selected>
              Chọn tỉnh thành
            </option>
          </select>

          <select
            class="form-select form-select-sm mb-3"
            id="district"
            aria-label=".form-select-sm"
          >
            <option value="" selected>
              Chọn quận huyện
            </option>
          </select>

          <select
            class="form-select form-select-sm"
            id="ward"
            aria-label=".form-select-sm"
          >
            <option value="" selected>
              Chọn phường xã
            </option>
          </select>
        </div>
      </div>
      <div>
        <h3 className="title_search_center">
          Doanh nghiệp có sản phẩm được yêu thích
        </h3>
      </div>
      <div className="search_suggest_company">
        <div>
          <div className="search_detail_company">
            <img
              className="avt_search_suggeset_company"
              src={avt_company}
              alt=""
            />
            <div className="search_title_company">
              <h5>Công ty Thức Bùi</h5>
              <p>Coder</p>
              <p>Được tài trợ</p>
            </div>
          </div>
          <div className="detail_company_search">
            <p>
              Thức Bùi sinh năm 2001, Thức Bùi sinh năm 2001Thức Bùi sinh năm
              2001quê quán Thái Bình
            </p>
            <div>
              <a href="">Gửi tin nhắn</a>
            </div>
          </div>
        </div>

        <div className="sd">
          <img className="search_suggest_company_img" src={company_1} alt="" />
          <img className="search_suggest_company_img" src={company_2} alt="" />
          <img className="search_suggest_company_img" src={company_3} alt="" />
        </div>
      </div>
      <div className="search_suggest_company">
        <div>
          <div className="search_detail_company">
            <img
              className="avt_search_suggeset_company"
              src={avt_company}
              alt=""
            />
            <div className="search_title_company">
              <h5>Công ty Thức Bùi</h5>
              <p>Coder</p>
              <p>Được tài trợ</p>
            </div>
          </div>
          <div className="detail_company_search">
            <p>
              Thức Bùi sinh năm 2001, Thức Bùi sinh năm 2001Thức Bùi sinh năm
              2001quê quán Thái Bình
            </p>
            <div>
              <a href="">Gửi tin nhắn</a>
            </div>
          </div>
        </div>

        <div className="sd">
          <img className="search_suggest_company_img" src={company_1} alt="" />
          <img className="search_suggest_company_img" src={company_2} alt="" />
          <img className="search_suggest_company_img" src={company_3} alt="" />
        </div>
      </div>
      <div>
        <h3 className="title_search_center">Có thể bạn quan tâm</h3>
      </div>
      <div className="search_suggest_company">
        <div>
          <div className="search_detail_company">
            <img
              className="avt_search_suggeset_company"
              src={avt_company}
              alt=""
            />
            <div className="search_title_company">
              <h5>Công ty Thức Bùi</h5>
              <p>Coder</p>
              <p>Được tài trợ</p>
            </div>
          </div>
          <div className="detail_company_search">
            <p>
              Thức Bùi sinh năm 2001, Thức Bùi sinh năm 2001Thức Bùi sinh năm
              2001quê quán Thái Bình
            </p>
            <div>
              <a href="">Gửi tin nhắn</a>
            </div>
          </div>
        </div>

        <div className="sd">
          <img className="search_suggest_company_img" src={company_1} alt="" />
          <img className="search_suggest_company_img" src={company_2} alt="" />
          <img className="search_suggest_company_img" src={company_3} alt="" />
        </div>
      </div>
      <div className="search_suggest_company">
        <div>
          <div className="search_detail_company">
            <img
              className="avt_search_suggeset_company"
              src={avt_company}
              alt=""
            />
            <div className="search_title_company">
              <h5>Công ty Thức Bùi</h5>
              <p>Coder</p>
              <p>Được tài trợ</p>
            </div>
          </div>
          <div className="detail_company_search">
            <p>
              Thức Bùi sinh năm 2001, Thức Bùi sinh năm 2001Thức Bùi sinh năm
              2001quê quán Thái Bình
            </p>
            <div>
              <a href="">Gửi tin nhắn</a>
            </div>
          </div>
        </div>

        <div className="sd">
          <img className="search_suggest_company_img" src={company_1} alt="" />
          <img className="search_suggest_company_img" src={company_2} alt="" />
          <img className="search_suggest_company_img" src={company_3} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Search;
