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
            <h4 className="profile_tab_post_left_detail_title">Mô tả ngắn</h4>
            <p className="profile_tab_post_left_detail_des">
              Công ty TNHH LookUp thành lập vào 10-8-2001 tọa lạc tại thành phố
              Hồ Chí Minh. Công ty chuyên sản xuất, sửa chữa về phần mềm
            </p>

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
                  src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/349309855_773882454349006_3774558434519076602_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=f8vJ21Sx9DYAX_k9gHj&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfC3DQwGWpuGWOEm6pOxMIZd9AywbOszDIyhGD95jiO6WQ&oe=6475843D"
                  alt=""
                />
                <div className="post_title">
                  <h3>LookUp</h3>
                  <p>Được tài trợ</p>{" "}
                </div>
              </div>
              <h6>
                LookUp - Trang mạng xã hội đặc biệt chuyên giúp kết nối các
                doanh nghiệp Việt Nam. Từ đó, doanh nghiệp có thể dễ dàng, thuận
                tiện tìm kiếm đối tác làm ăn và khách hàng tiềm năng
              </h6>

              <Button onClick={handleOpen}>
                {" "}
                <img
                  className="img_post"
                  src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/349309855_773882454349006_3774558434519076602_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=f8vJ21Sx9DYAX_k9gHj&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfC3DQwGWpuGWOEm6pOxMIZd9AywbOszDIyhGD95jiO6WQ&oe=6475843D"
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
                  src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/349309855_773882454349006_3774558434519076602_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=f8vJ21Sx9DYAX_k9gHj&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfC3DQwGWpuGWOEm6pOxMIZd9AywbOszDIyhGD95jiO6WQ&oe=6475843D"
                  alt=""
                />
                <div className="post_title">
                  <h3>LookUp</h3>
                  <p>Được tài trợ</p>{" "}
                </div>
              </div>
              <h6>
                Với đội ngũ thuần Việt, LookUp hiểu được những khó khăn và thử
                thách các doanh nghiệp đang gặp phải trong việc tìm kiếm thủ
                công nguồn khách hàng và đối tác uy tín.
              </h6>

              <Button onClick={handleOpen}>
                {" "}
                <img
                  className="img_post"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShg57WQsbqxHOuGq_HsFx3PBEGOhTEt9D2xQ&usqp=CAU"
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
                  src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/349309855_773882454349006_3774558434519076602_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=f8vJ21Sx9DYAX_k9gHj&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfC3DQwGWpuGWOEm6pOxMIZd9AywbOszDIyhGD95jiO6WQ&oe=6475843D"
                  alt=""
                />
                <div className="post_title">
                  <h3>LookUp</h3>
                  <p>Được tài trợ</p>{" "}
                </div>
              </div>
              <h6>
                Thân em như tấm lụa đào Giá tiền trăm triệu đố chàng nào mua. 👓
                LookUp chỉ vài trăm nghìn, Nhanh tay thì nắm voucher của năm😌
              </h6>

              <Button onClick={handleOpen}>
                {" "}
                <img
                  className="img_post"
                  src="https://gumlet.assettype.com/theceo%2Fimport%2F2020%2F06%2FStartup-india-mission-empowering-entrepreneurs.jpg?w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true"
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
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-heCmZNipWZD1qXDCo8ZrhfCurDHGTIjGcg&usqp=CAU"
                    alt=""
                  />
                  <p>Tư vấn marketing</p>
                </div>
                <div className="product_item">
                  {" "}
                  <img
                    className="profile_right_img_product"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq7zwLSbKAKVNEyAYULDjcBfNL0WfGPT2_-w&usqp=CAU"
                    alt=""
                  />
                  <p>Giải pháp marketing</p>
                </div>
                <div className="product_item">
                  {" "}
                  <img
                    className="profile_right_img_product"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9ZGDMRdnXjSk9i1krkRAvSAexQUxqNYgjtw&usqp=CAU"
                    alt=""
                  />
                  <p>Marketing đúng hướng</p>
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
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH4EaP_iIshxaOz4hAcaCmRR8dxG9ke5Eydg&usqp=CAU"
                      alt=""
                    />
                    <div className="newfeed_detail_company">
                      <p>Công ty TNHH Đại Phong</p>
                      <h6>May mặc</h6>
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
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA_9ZPougu6hdi2LFHqNOWQ_E_TTCk-Xt7rw&usqp=CAU"
                      alt=""
                    />
                    <div className="newfeed_detail_company">
                      <p>Doanh Nghiệp Duy</p>
                      <h6>Nông Sản</h6>
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
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxgLx1-Ypw2fli3wMk4cUcw4dLyALIggTlbw&usqp=CAU"
                      alt=""
                    />
                    <div className="newfeed_detail_company">
                      <p>Công ty Thái Thiện</p>
                      <h6>Máy móc</h6>
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
                      <p>Phương tiện</p>
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
              Thân em như tấm lụa đào Giá tiền trăm triệu đố chàng nào mua. 👓
              LookUp chỉ vài trăm nghìn, Nhanh tay thì nắm voucher của năm😌 🇻🇳
              LookUp - Trang mạng xã hội đặc biệt chuyên giúp kết nối các doanh
              nghiệp Việt Nam. Từ đó, doanh nghiệp có thể dễ dàng, thuận tiện
              tìm kiếm đối tác làm ăn và khách hàng tiềm năng để phục vụ cho nhu
              cầu công việc. 🇻🇳 Với đội ngũ thuần Việt, LookUp hiểu được những
              khó khăn và thử thách các doanh nghiệp đang gặp phải trong việc
              tìm kiếm thủ công nguồn khách hàng và đối tác uy tín. Chính vì
              thế, với quy mô hệ thống thông tin dữ liệu đạt chuẩn quốc tế,
              LookUp đã sẵn sàng phục vụ quý doanh nghiệp "mở rộng vòng tròn bạn
              bè" trong giai đoạn phục hồi kinh tế hiện nay. 🇻🇳 Chào mừng và cảm
              ơn bạn đã chọn LookUp👓!
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
