import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

import "./Search.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getDistrict, getProvide, getWard } from "../actions/provideAction";
function SearchDemo() {
  const dispatch = useDispatch();
  const { provides, districts, wards } = useSelector(
    (state) => state.getProvide
  );

  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");

  useEffect(() => {
    dispatch(getProvide());
  }, [dispatch]);

  const handleOnChangeProvide = (e) => {
    const selectedCode = Number(e.target.value);
    const selectedProvide = provides.find(
      (provide) => provide.code === selectedCode
    );
    if (selectedProvide) {
      setCity(selectedProvide.name);
    }
    dispatch(getDistrict(selectedCode));
  };

  const handleOnChangeDistrict = (e) => {
    const selectedCode = Number(e.target.value);
    const selectedDistrict = districts.find(
      (district) => district.code === selectedCode
    );
    if (selectedDistrict) {
      setDistrict(selectedDistrict.name);
    }
    dispatch(getWard(selectedCode));
  };

  return (
    <div className="search_layout">
      <div className="search_center_field">
        <h4
          style={{
            fontWeight: "bold",
            padding: "20px",
            fontSize: "30px",
            paddingBottom: "20px",
          }}
        >
          Bộ lọc
        </h4>
        <div className="select_search_layout">
          <div style={{ marginBottom: "30px" }}>
            {" "}
            <label style={{ fontWeight: "bold" }} for="">
              Khu Vực
            </label>
            <select
              style={{
                paddingLeft: "10px",
                paddingRight: "10px",
                marginLeft: "101px",
                width: "170px",
                height: "35px",
                borderRadius: "20px",
              }}
              name="city"
              onChange={handleOnChangeProvide}
            >
              <optgroup label="">
                <option value="">Tỉnh, Thành phố</option>
                {provides &&
                  provides.length > 0 &&
                  provides.map((provide) => (
                    <option key={provide.code} value={provide.code}>
                      {provide.name}
                    </option>
                  ))}
              </optgroup>
            </select>
            <select
              style={{
                paddingLeft: "10px",
                marginLeft: "20px",
                width: "256px",
                height: "35px",
                borderRadius: "20px",
              }}
              name="district"
              onChange={handleOnChangeDistrict}
            >
              <optgroup label=" ">
                <option value="">Quận, huyện</option>
                {districts &&
                  districts.length > 0 &&
                  districts.map((dis) => (
                    <option value={dis.code} key={dis.code}>
                      {dis.name}
                    </option>
                  ))}
              </optgroup>
            </select>
            <select
              style={{
                paddingLeft: "10px",
                paddingRight: "10px",
                marginLeft: "20px",
                width: "256px",
                height: "35px",
                borderRadius: "20px",
              }}
              name="ward"
              onChange={(e) => setWard(e.target.value)}
            >
              <optgroup label=" ">
                <option value="">Phường, xã</option>
                {wards &&
                  wards.length > 0 &&
                  wards.map((war) => (
                    <option value={war.name} key={war.code}>
                      {war.name}
                    </option>
                  ))}
              </optgroup>
            </select>{" "}
          </div>
          <div style={{ marginBottom: "30px" }}>
            {" "}
            <label style={{ fontWeight: "bold" }} for="">
              Lĩnh vực
            </label>
            <input
              style={{
                paddingLeft: "10px",
                paddingRight: "10px",
                marginLeft: "100px",
                width: "265px",
                height: "35px",
                borderRadius: "20px",
              }}
              type="text"
            />
            <input
              style={{
                paddingLeft: "10px",
                paddingRight: "10px",
                marginLeft: "20px",
                width: "438px",
                height: "35px",
                borderRadius: "20px",
                position: "relative",
                border: "0.2px solid black",
              }}
              placeholder="Tìm kiếm"
              type="text"
            />
            <FiSearch
              style={{
                position: "absolute",
                marginLeft: "-25px",
                marginTop: "10px",
              }}
            />
          </div>
          <div style={{ marginBottom: "30px" }}>
            {" "}
            <label style={{ fontWeight: "bold" }} for="">
              Doanh nghiệp
            </label>
            <select
              style={{
                paddingLeft: "10px",
                paddingRight: "10px",
                marginLeft: "61px",
                width: "170px",
                height: "35px",
                borderRadius: "20px",
              }}
              name=""
              id=""
            >
              <optgroup label="">
                <option value="">Quy mô</option>
              </optgroup>
            </select>
            <select
              style={{
                paddingLeft: "10px",
                paddingRight: "10px",
                marginLeft: "20px",
                width: "256px",
                height: "35px",
                borderRadius: "20px",
              }}
              name=""
              id=""
            >
              <optgroup label=" ">
                <option value="">Loại hình</option>
              </optgroup>
            </select>
          </div>
          <div style={{ marginBottom: "30px" }}>
            {" "}
            <label style={{ fontWeight: "bold" }} for="">
              Sản phẩm
            </label>
            <input
              style={{
                paddingLeft: "10px",
                paddingRight: "10px",
                marginLeft: "92px",
                width: "445px",
                height: "35px",
                borderRadius: "20px",
                border: "0.2px solid black",
                position: "relative",
              }}
              placeholder="Tìm kiếm"
              type="text"
            />
            <FiSearch
              style={{
                position: "absolute",
                marginLeft: "-25px",
                marginTop: "10px",
              }}
            />
          </div>
          <div style={{ marginBottom: "30px" }}>
            {" "}
            <label style={{ fontWeight: "bold" }} for="">
              Ngôn ngữ
            </label>
            <select
              style={{
                paddingLeft: "10px",
                paddingRight: "10px",
                marginLeft: "92px",
                width: "170px",
                height: "35px",
                borderRadius: "20px",
              }}
              name=""
              id=""
            >
              <optgroup label="">
                <option value="">Tiếng Việt</option>
              </optgroup>
            </select>
          </div>
        </div>
        <Link to="/">
          {" "}
          <button
            style={{
              backgroundColor: "#2187FF",
              width: "200px",
              height: "40px",
              color: "white",
              borderRadius: "175px !important",
            }}
          >
            Áp dụng
          </button>{" "}
        </Link>
      </div>

      <div className="text_center_search">
        <Link
          style={{
            textDecoration: "underline",
            color: "black",
            fontSize: "15px",
            opacity: "0.7",
          }}
        >
          {" "}
          Xem thêm...
        </Link>
        <h3 className="title_search_center">
          Doanh nghiệp có sản phẩm được yêu thích
        </h3>
      </div>
      <div className="search_suggest_company">
        <div>
          <div className="search_detail_company">
            <img
              className="avt_search_suggeset_company"
              src="data:image/png;base64,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"
              alt=""
            />
            <div className="search_title_company">
              <h5>Honda Việt Nam</h5>
              <p>Doanh nghiệp oto</p>
              <p>Được tài trợ</p>
            </div>
          </div>
          <div className="detail_company_search">
            <p>
              Lĩnh vực kinh doanh: Sản xuât và Lắp ráp ô tô Địa điểm làm việc:
              huyện Gia Viễn cách nhà máy số 1: 500m
            </p>
            <div>
              <button
                style={{
                  backgroundColor: "#2187FF",
                  backgroundColor: "#2187FF",
                  color: "white",
                  fontSize: "15px",
                }}
              >
                Gửi tin nhắn
              </button>
            </div>
          </div>
        </div>

        <div className="sd">
          <img
            className="search_suggest_company_img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTYpA7fcFVlkp0wQ1OTm1Ca3BxbXcSM00T9Q&usqp=CAU"
            alt=""
          />
          <img
            className="search_suggest_company_img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb71AQG8cLw79M7KrULsxmwt5h8DW1e-e_8w&usqp=CAU"
            alt=""
          />
          <img
            className="search_suggest_company_img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4VORNXVKvjpIGiNm1UOWq2wUsDgbFvKW-iA&usqp=CAU"
            alt=""
          />
        </div>
      </div>
      <div className="search_suggest_company">
        <div>
          <div className="search_detail_company">
            <img
              className="avt_search_suggeset_company"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwmiLiTJ_ApvkzNs3_7jaAIF9QVz7OFurc8Q&usqp=CAU"
              alt=""
            />
            <div className="search_title_company">
              <h5>Huyndai Việt Nam</h5>
              <p>Coder</p>
              <p>Được tài trợ</p>
            </div>
          </div>
          <div className="detail_company_search">
            <p>
              Ngành nghề: lắp ráp ô tô Công Ty Tnhh Mtv Kc Motors Vina Quy mô:
              Đang cập nhật Địa chỉ: Công Ty Tnhh Mtv Kc Motors Vina Công ty KC
              MOTORS,
            </p>
            <div>
              <button
                style={{
                  backgroundColor: "#2187FF",
                  color: "white",
                  fontSize: "15px",
                  borderRadius: "5px !important",
                }}
              >
                Gửi tin nhắn
              </button>
            </div>
          </div>
        </div>

        <div className="sd">
          <img
            className="search_suggest_company_img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzYn3n5DplnaaxKuyMGlP_YswgSGFBYsV9vA&usqp=CAU"
            alt=""
          />
          <img
            className="search_suggest_company_img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZAZfe2v0gCj3yKAwz4Dzj8dYAQTVPhI4HTg&usqp=CAU"
            alt=""
          />
          <img
            className="search_suggest_company_img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgXioJMyS3OGDUxCNoEu0wc5BPWbXIbwf30w&usqp=CAU"
            alt=""
          />
        </div>
      </div>
      <div className="text_center_search">
        <Link
          style={{
            textDecoration: "underline",
            color: "black",
            fontSize: "15px",
            opacity: "0.7",
          }}
        >
          {" "}
          Xem thêm...
        </Link>
        <h3 className="title_search_center">Bạn có thể quan tâm</h3>
      </div>
      <div className="search_suggest_company">
        <div>
          <div className="search_detail_company">
            <img
              className="avt_search_suggeset_company"
              src="data:image/png;base64,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"
              alt=""
            />
            <div className="search_title_company">
              <h5>Công ty TNHH Trường Hải</h5>
              <p>Coder</p>
              <p>Được tài trợ</p>
            </div>
          </div>
          <div className="detail_company_search">
            <p>
              ông ty ôtô Trường Hải (THACO) được thành lập vào ngày 29/04/1997.
              Người sáng lập là ông Trần Bá Dương, hiện là Chủ tịch Hội đồng
              Quản trị THACO.
            </p>
            <button
              style={{
                backgroundColor: "#2187FF",
                backgroundColor: "#2187FF",
                color: "white",
                fontSize: "15px",
              }}
            >
              Gửi tin nhắn
            </button>
          </div>
        </div>

        <div className="sd">
          <img
            className="search_suggest_company_img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_kmzAc2GFYPZJU5uptLrv0XEJYwvpQ5EQuQ&usqp=CAU"
            alt=""
          />
          <img
            className="search_suggest_company_img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnGuk1T1uJGQBpUaxT8oqg9VGxsnYDPaqnEQ&usqp=CAU"
            alt=""
          />
          <img
            className="search_suggest_company_img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzWaHwvd6oQb_3WqSeeWcljQIfCBwPhgwMkw&usqp=CAU"
            alt=""
          />
        </div>
      </div>
      <div className="search_suggest_company">
        <div>
          <div className="search_detail_company">
            <img
              className="avt_search_suggeset_company"
              src="data:image/png;base64,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"
              alt=""
            />
            <div className="search_title_company">
              <h5>Công ty TNHH Vĩnh Thịnh</h5>
              <p>Doanh nghiệp ô tô</p>
              <p>Được tài trợ</p>
            </div>
          </div>
          <div className="detail_company_search">
            <p>
              Công ty Cổ Phần Ô Tô Vĩnh Thịnh (gọi tắt “Hino Vĩnh Thịnh”, “Hino
              Bình Dương”), là đại lý bán hàng và dịch vụ ủy quyền của Công ty
              Liên Doanh
            </p>
            <div>
              <button
                style={{
                  backgroundColor: "#2187FF",
                  backgroundColor: "#2187FF",
                  color: "white",
                  fontSize: "15px",
                }}
              >
                Gửi tin nhắn
              </button>
            </div>
          </div>
        </div>

        <div className="sd">
          <img
            className="search_suggest_company_img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4hrabjDBqsOFYf-zT8GU_GKEHVJWcg__2Rw&usqp=CAU"
            alt=""
          />
          <img
            className="search_suggest_company_img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu-W3TG72_ov7_EhKdsACUa0GYrwTn1OziZA&usqp=CAU"
            alt=""
          />
          <img
            className="search_suggest_company_img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcBHSNj5bPeR5XfO7OenKr5f5den6zcGk4sg&usqp=CAU"
            alt=""
          />
        </div>
      </div>
      <Link
        style={{
          color: "black",
          opacity: "0.8",
          fontSize: "15px",
          textDecoration: "underline",
        }}
      >
        Xem thêm...
      </Link>
    </div>
  );
}

export default SearchDemo;
