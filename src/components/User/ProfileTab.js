import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { AiOutlinePlusCircle } from "react-icons/ai";
import avt_company from "../../images/avt_company.jpg";
import certificate from "../../images/certificate.jpg";
import Box from "@mui/material/Box";
import { MdPublic } from "react-icons/md";
import { BiPhone } from "react-icons/bi";
import { AiFillCheckCircle, AiFillLike, AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { TbSend } from "react-icons/tb";
import xemaydien from "../../images/xemaydien.jpg";

import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaSortAmountDownAlt } from "react-icons/fa";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

import "./ProfileTab.css";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Open Child Modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function BasicTabs() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Bài viết" {...a11yProps(0)} />
          <Tab label="Giới thiệu" {...a11yProps(1)} />
          <Tab label="Sản phẩm" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className="profile_tab_post">
          <div className="profile_tab_post_left">
            <div className="profile_tab_post_left_detail">
              <h4 className="profile_tab_post_left_detail_title">Mô tả ngắn</h4>
              <p className="profile_tab_post_left_detail_des">
                Trong cuộc kháng chiến chống thực dân Pháp, những địa danh như
                Dương Hòa, Hòa Mỹ... là nơi ghi dấu bao chiến công oanh liệt
              </p>
            </div>
            <div className="profile_tab_post_left_contact">
              <h4>Thông tin liên hệ</h4>
              <MdPublic />
              <Link> www.website.com</Link>
              <p>
                <BiPhone /> 085659778
              </p>
              <p>
                <MdOutlineEmail /> buitrithuc@gmail.com
              </p>
            </div>
            <div className="profile_tab_post_left_premium">
              <h6>
                <AiOutlineCheckCircle /> Trải nghiệm tính năng cao cấp với gói
                premim miễn phí
              </h6>
            </div>
          </div>
          <div className="profile_tab_post_center">
            <div className="profile_tab_post_center_filter_post">
              <p>Bài viết</p>
              <p>
                Lọc <FaSortAmountDownAlt />
              </p>
            </div>
            <div className="profile_tab_post_center_post">
              <div className="post_detail">
                <img
                  className="img_company"
                  src="https://i.pinimg.com/originals/39/88/85/398885df3f6e523828d80cf867a77039.jpg"
                  alt=""
                />
                <div className="post_title">
                  <h3>Thuc Bui</h3>
                  <p>Được tài trợ</p>{" "}
                </div>
              </div>
              <h6>Nội dung bài viết...</h6>

              <Button onClick={handleOpen}>
                {" "}
                <img
                  className="img_post"
                  src="https://i.pinimg.com/originals/39/88/85/398885df3f6e523828d80cf867a77039.jpg"
                  alt=""
                />
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
              >
                <Box sx={{ ...style, width: 400 }}>
                  <img
                    className="img_popup"
                    src="https://i.pinimg.com/originals/39/88/85/398885df3f6e523828d80cf867a77039.jpg"
                    alt=""
                  />
                </Box>
              </Modal>
              <div>
                <div className="total_like_cmt">
                  <div className="total_like">
                    <AiFillLike />
                    <p>1.2k</p>
                  </div>
                  <p>50 Bình luận</p>
                </div>
                <div className="act_post">
                  <div className="item_act">
                    <AiOutlineLike className="item_like_cmt_send" />
                    <h5 className="item_act_post">yêu Thích</h5>
                  </div>
                  <div className="item_act">
                    <FaRegComment className="item_like_cmt_send" />
                    <h5 className="item_act_post">Bình luận</h5>
                  </div>
                  <div className="item_act">
                    <TbSend className="item_like_cmt_send" />
                    <h5 className="item_act_post">Gửi tin nhắn</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile_tab_post_center_post">
              <div className="post_detail">
                <img
                  className="img_company"
                  src="https://i.pinimg.com/originals/39/88/85/398885df3f6e523828d80cf867a77039.jpg"
                  alt=""
                />
                <div className="post_title">
                  <h3>Thuc Bui</h3>
                  <p>Được tài trợ</p>{" "}
                </div>
              </div>
              <h6>Nội dung bài viết...</h6>

              <Button onClick={handleOpen}>
                {" "}
                <img
                  className="img_post"
                  src="https://i.pinimg.com/originals/39/88/85/398885df3f6e523828d80cf867a77039.jpg"
                  alt=""
                />
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
              >
                <Box sx={{ ...style, width: 400 }}>
                  <img
                    className="img_popup"
                    src="https://i.pinimg.com/originals/39/88/85/398885df3f6e523828d80cf867a77039.jpg"
                    alt=""
                  />
                </Box>
              </Modal>
              <div>
                <div className="total_like_cmt">
                  <div className="total_like">
                    <p>
                      <AiFillLike /> 1.2k
                    </p>
                  </div>
                  <p>50 Bình luận</p>
                </div>
                <div className="act_post">
                  <div className="item_act">
                    <h5 className="item_act_post">
                      <AiOutlineLike className="item_like_cmt_send" /> yêu Thích
                    </h5>
                  </div>
                  <div className="item_act">
                    <FaRegComment className="item_like_cmt_send" />
                    <h5 className="item_act_post">Bình luận</h5>
                  </div>
                  <div className="item_act">
                    <TbSend className="item_like_cmt_send" />
                    <h5 className="item_act_post">Gửi tin nhắn</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile_tab_post_center_post">
              <div className="post_detail">
                <img
                  className="img_company"
                  src="https://i.pinimg.com/originals/39/88/85/398885df3f6e523828d80cf867a77039.jpg"
                  alt=""
                />
                <div className="post_title">
                  <h3>Thuc Bui</h3>
                  <p>Được tài trợ</p>{" "}
                </div>
              </div>
              <h6>Nội dung bài viết...</h6>

              <Button onClick={handleOpen}>
                {" "}
                <img
                  className="img_post"
                  src="https://i.pinimg.com/originals/39/88/85/398885df3f6e523828d80cf867a77039.jpg"
                  alt=""
                />
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
              >
                <Box sx={{ ...style, width: 400 }}>
                  <img
                    className="img_popup"
                    src="https://i.pinimg.com/originals/39/88/85/398885df3f6e523828d80cf867a77039.jpg"
                    alt=""
                  />
                </Box>
              </Modal>
              <div>
                <div className="total_like_cmt">
                  <div className="total_like">
                    <AiFillLike />
                    <p>1.2k</p>
                  </div>
                  <p>50 Bình luận</p>
                </div>
                <div className="act_post">
                  <div className="item_act">
                    <AiOutlineLike className="item_like_cmt_send" />
                    <h5 className="item_act_post">yêu Thích</h5>
                  </div>
                  <div className="item_act">
                    <FaRegComment className="item_like_cmt_send" />
                    <h5 className="item_act_post">Bình luận</h5>
                  </div>
                  <div className="item_act">
                    <TbSend className="item_like_cmt_send" />
                    <h5 className="item_act_post">Gửi tin nhắn</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="profile_right">
            <div className="profile_right_top">
              <h6 className="profile_right_top_title">Sản phẩm nổi bật</h6>
              <div className="profile_right_top_prouct">
                <div className="product_item">
                  {" "}
                  <img
                    className="profile_right_img_product"
                    src={xemaydien}
                    alt=""
                  />
                  <p>Xe máy điện</p>
                </div>
                <div className="product_item">
                  {" "}
                  <img
                    className="profile_right_img_product"
                    src={xemaydien}
                    alt=""
                  />
                  <p>Xe máy điện</p>
                </div>
                <div className="product_item">
                  {" "}
                  <img
                    className="profile_right_img_product"
                    src={xemaydien}
                    alt=""
                  />
                  <p>Xe máy điện</p>
                </div>
              </div>
              <Link className="profile_product_viewmore">Xem thêm</Link>
            </div>

            <div className="profile_right_center">
              <h5>Mọi người cũng tìm kiếm</h5>
              <div>
                <div className="newfeed_right_ads_profile">
                  <div className="newfeed_company">
                    <img
                      className="newfeed_left_avt_img_right"
                      src={avt_company}
                      alt=""
                    />
                    <div className="newfeed_detail_company">
                      <p>Công ty</p>
                      <h6>Ngành nghề</h6>
                    </div>
                  </div>
                  <div className="newfeed_act_company">
                    <div className="newfeed_icon_action1">
                      <AiOutlinePlusCircle />
                      <h6 className="newfeed_action_right">Theo dõi</h6>
                    </div>
                    <div className="newfeed_icon_action">
                      <h6 className="newfeed_action_right">Tìm hiểu thêm</h6>
                    </div>
                  </div>
                  <div className="newfeed_company">
                    <img
                      className="newfeed_left_avt_img_right"
                      src={avt_company}
                      alt=""
                    />
                    <div className="newfeed_detail_company">
                      <p>Công ty</p>
                      <h6>Ngành nghề</h6>
                    </div>
                  </div>
                  <div className="newfeed_act_company">
                    <div className="newfeed_icon_action1">
                      <AiOutlinePlusCircle />
                      <h6 className="newfeed_action_right">Theo dõi</h6>
                    </div>
                    <div className="newfeed_icon_action">
                      <h6 className="newfeed_action_right">Tìm hiểu thêm</h6>
                    </div>
                  </div>
                  <div className="newfeed_company">
                    <img
                      className="newfeed_left_avt_img_right"
                      src={avt_company}
                      alt=""
                    />
                    <div className="newfeed_detail_company">
                      <p>Công ty</p>
                      <h6>Ngành nghề</h6>
                    </div>
                  </div>
                  <div className="newfeed_act_company">
                    <div className="newfeed_icon_action1">
                      <AiOutlinePlusCircle />
                      <h6 className="newfeed_action_right">Theo dõi</h6>
                    </div>
                    <div className="newfeed_icon_action">
                      <h6 className="newfeed_action_right">Tìm hiểu thêm</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="profile_right_bottom">
                <div>
                  <img
                    className="profile_right_bottom_img_ads"
                    src={xemaydien}
                    alt=""
                  />
                  <div className="profile_right_bottom_ads_detail">
                    <img
                      className="newfeed_left_avt_img_right"
                      src={avt_company}
                      alt=""
                    />
                    <div className="profile_ads_detail_company">
                      <h6>Công ty Bùi Trí Thức</h6>
                      <p>Ngành nghề</p>
                      <p>Được tài trợ</p>
                      <Link className="profile_right_bottom_ads_senmess">
                        Gửi tin nhắn!
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="profile_introduction">
          <div className="profile_introduction_text">
            <h4>Giới thiệu</h4>
            <p>
              Kinh doanh cũng tốt. Quảng cáo cũng chẳng phải là xấu xa. Nhưng
              đây không phải chỗ cho chúng. Wikipedia không dành cho quảng cáo.
              Wikipedia là một thứ gì đó đặc biệt. Nó cũng giống như một thư
              viện hay một công viên công cộng. Nó giống như một ngôi đền dành
              cho tâm hồn. Đó là nơi để tất cả chúng ta có thể đến để suy nghĩ,
              để học hỏi và chia sẻ kiến thức với người khác. Khi mới tạo ra
              Wikipedia, tôi đã có thể biến nó thành một công ty thương mại với
              các biểu ngữ quảng cáo, nhưng rồi tôi lại quyết định làm nên một
              điều khác biệt. Chúng tôi đã luôn nỗ lực làm việc trong suốt những
              năm tháng qua để giữ cho nó luôn tươm tất. Chúng tôi dùng toàn bộ
              số tiền có được để phục vụ cho sứ mệnh của chúng ta, và không hề
              để phí phạm một đồng nào.
            </p>
          </div>
          <div className="profile_introduction_infomation">
            <h4>Thông tin liên hệ</h4>
            <MdPublic />
            <Link> www.website.com</Link>
            <p>
              <BiPhone /> 085659778
            </p>
            <p>
              <MdOutlineEmail /> buitrithuc@gmail.com
            </p>
            <p>
              <TbSend /> Gửi tin nhắn
            </p>
          </div>
          <div className="profile_introductiob_certificate">
            <h4>Giấy chứng nhận</h4>
            <div>
              <img src={certificate} alt="" />
              <img src={certificate} alt="" />
              <img src={certificate} alt="" />
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="profile_product">
          <div className="profile_product_left">
            <h5>Sản phẩm nổi bật</h5>
            <div className="profile_product_left_hightlight">
              <div className="product_hightlight_item">
                <img
                  className="product_img_hightlight"
                  src={xemaydien}
                  alt=""
                />
                <p>xe máy điện</p>{" "}
              </div>

              <div className="product_hightlight_item">
                <img
                  className="product_img_hightlight"
                  src={xemaydien}
                  alt=""
                />
                <p>xe máy điện</p>{" "}
              </div>
              <div className="product_hightlight_item">
                <img
                  className="product_img_hightlight"
                  src={xemaydien}
                  alt=""
                />
                <p>xe máy điện</p>{" "}
              </div>
              <div className="product_hightlight_item">
                <img
                  className="product_img_hightlight"
                  src={xemaydien}
                  alt=""
                />
                <p>xe máy điện</p>{" "}
              </div>
              <div className="product_hightlight_item">
                <img
                  className="product_img_hightlight"
                  src={xemaydien}
                  alt=""
                />
                <p>xe máy điện</p>{" "}
              </div>
              <div className="product_hightlight_item">
                <img
                  className="product_img_hightlight"
                  src={xemaydien}
                  alt=""
                />
                <p>xe máy điện</p>{" "}
              </div>
            </div>
            <div className="all_product_profile">
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  <h5>Tất cả sản phẩm</h5>
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="newproduct"
                    control={<Radio />}
                    label="Sản phẩm mới"
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Danh mục 1"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Danh mục 2"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Tất cả sản phẩm"
                  />
                </RadioGroup>
              </FormControl>
              <div className="profile_new_product">
                <div> </div>
                <div className="product_hightlight_item">
                  <img
                    className="product_img_hightlight"
                    src={xemaydien}
                    alt=""
                  />
                  <p>xe máy điện</p>{" "}
                </div>
                <div className="product_hightlight_item">
                  <img
                    className="product_img_hightlight"
                    src={xemaydien}
                    alt=""
                  />
                  <p>xe máy điện</p>{" "}
                </div>
                <div className="product_hightlight_item">
                  <img
                    className="product_img_hightlight"
                    src={xemaydien}
                    alt=""
                  />
                  <p>xe máy điện</p>{" "}
                </div>
                <div className="product_hightlight_item">
                  <img
                    className="product_img_hightlight"
                    src={xemaydien}
                    alt=""
                  />
                  <p>xe máy điện</p>{" "}
                </div>
              </div>
              <div className="profile_new_product">
                <div> </div>
                <div className="product_hightlight_item">
                  <img
                    className="product_img_hightlight"
                    src={xemaydien}
                    alt=""
                  />
                  <p>xe máy điện</p>{" "}
                </div>
                <div className="product_hightlight_item">
                  <img
                    className="product_img_hightlight"
                    src={xemaydien}
                    alt=""
                  />
                  <p>xe máy điện</p>{" "}
                </div>
                <div className="product_hightlight_item">
                  <img
                    className="product_img_hightlight"
                    src={xemaydien}
                    alt=""
                  />
                  <p>xe máy điện</p>{" "}
                </div>
                <div className="product_hightlight_item">
                  <img
                    className="product_img_hightlight"
                    src={xemaydien}
                    alt=""
                  />
                  <p>xe máy điện</p>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="profile_product_right">
            <div className="profile_product_right_top">
              <h5>Mọi người cũng tìm kiếm</h5>
              <div>
                <div className="newfeed_right_ads_profile">
                  <div className="newfeed_company">
                    <img
                      className="newfeed_left_avt_img_right"
                      src={avt_company}
                      alt=""
                    />
                    <div className="newfeed_detail_company">
                      <p>Công ty</p>
                      <h6>Ngành nghề</h6>
                    </div>
                  </div>
                  <div className="newfeed_act_company">
                    <div className="newfeed_icon_action1">
                      <AiOutlinePlusCircle />
                      <h6 className="newfeed_action_right">Theo dõi</h6>
                    </div>
                    <div className="newfeed_icon_action">
                      <h6 className="newfeed_action_right">Tìm hiểu thêm</h6>
                    </div>
                  </div>
                  <div className="newfeed_company">
                    <img
                      className="newfeed_left_avt_img_right"
                      src={avt_company}
                      alt=""
                    />
                    <div className="newfeed_detail_company">
                      <p>Công ty</p>
                      <h6>Ngành nghề</h6>
                    </div>
                  </div>
                  <div className="newfeed_act_company">
                    <div className="newfeed_icon_action1">
                      <AiOutlinePlusCircle />
                      <h6 className="newfeed_action_right">Theo dõi</h6>
                    </div>
                    <div className="newfeed_icon_action">
                      <h6 className="newfeed_action_right">Tìm hiểu thêm</h6>
                    </div>
                  </div>
                  <div className="newfeed_company">
                    <img
                      className="newfeed_left_avt_img_right"
                      src={avt_company}
                      alt=""
                    />
                    <div className="newfeed_detail_company">
                      <p>Công ty</p>
                      <h6>Ngành nghề</h6>
                    </div>
                  </div>
                  <div className="newfeed_act_company">
                    <div className="newfeed_icon_action1">
                      <AiOutlinePlusCircle />
                      <h6 className="newfeed_action_right">Theo dõi</h6>
                    </div>
                    <div className="newfeed_icon_action">
                      <h6 className="newfeed_action_right">Tìm hiểu thêm</h6>
                    </div>
                  </div>
                </div>
              </div>
              <Link className="profile_product_viewmore_product">Xem thêm</Link>
            </div>

            <div className="profile_product_right_bottom">
              <div>
                <img
                  className="profile_right_bottom_img_ads"
                  src={xemaydien}
                  alt=""
                />
                <div className="profile_right_bottom_ads_detail">
                  <img
                    className="newfeed_left_avt_img_right"
                    src={avt_company}
                    alt=""
                  />
                  <div className="profile_ads_detail_company">
                    <h6>Công ty Bùi Trí Thức</h6>
                    <p>Ngành nghề</p>
                    <p>Được tài trợ</p>
                    <Link className="profile_right_bottom_ads_senmess">
                      Gửi tin nhắn!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TabPanel>
    </Box>
  );
}
