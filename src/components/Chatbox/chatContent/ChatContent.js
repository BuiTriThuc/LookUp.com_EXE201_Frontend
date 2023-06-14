import React, { Component, createRef } from "react";

import "./chatContent.css";
import Avatar from "../chatList/Avatar";
import ChatItem from "./ChatItem";
import { MDBIcon } from "mdb-react-ui-kit";

export default class ChatContent extends Component {
  messagesEndRef = createRef(null);
  chatItms = [
    {
      key: 1,
      image:
        "https://mof.com.vn/wp-content/uploads/hot-girl-linda-la-ai-2.jpg",
      type: "",
      msg: "Hi Linda, Xin chào cả nhà?",
    },
    {
      key: 2,
      image:
        "https://i.vietgiaitri.com/2020/5/12/co-minh-hieu-duoc-fan-de-cu-di-thi-hoa-hau-trang-phuc-dan-toc-da-hoi-da-san-sang-97b-4926756.jpeg",
      type: "other",
      msg: "Chào bạn Rất vui được gặp.",
    },
    {
      key: 3,
      image:
        "https://i.vietgiaitri.com/2020/5/12/co-minh-hieu-duoc-fan-de-cu-di-thi-hoa-hau-trang-phuc-dan-toc-da-hoi-da-san-sang-97b-4926756.jpeg",
      type: "other",
      msg: "Bạn khỏe không?",
    },
    {
      key: 4,
      image:
        "https://mof.com.vn/wp-content/uploads/hot-girl-linda-la-ai-2.jpg",
      type: "",
      msg: "Mình khỏe.",
    },
    {
      key: 5,
      image:
        "https://i.vietgiaitri.com/2020/5/12/co-minh-hieu-duoc-fan-de-cu-di-thi-hoa-hau-trang-phuc-dan-toc-da-hoi-da-san-sang-97b-4926756.jpeg",
      type: "other",
      msg: "Tối nay đi chơi ha?",
    },
    {
      key: 6,
      image:
        "https://mof.com.vn/wp-content/uploads/hot-girl-linda-la-ai-2.jpg",
      type: "",
      msg: "Dứt lun!",
    },
    {
      key: 7,
      image:
        "https://i.vietgiaitri.com/2020/5/12/co-minh-hieu-duoc-fan-de-cu-di-thi-hoa-hau-trang-phuc-dan-toc-da-hoi-da-san-sang-97b-4926756.jpeg",
      type: "other",
      msg: "8h nha",
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      chat: this.chatItms,
      msg: "",
    };
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  componentDidMount() {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode == 13) {
        if (this.state.msg != "") {
          this.chatItms.push({
            key: 1,
            type: "",
            msg: this.state.msg,
            image:
              "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
          });
          this.setState({ chat: [...this.chatItms] });
          this.scrollToBottom();
          this.setState({ msg: "" });
        }
      }
    });
    this.scrollToBottom();
  }
  onStateChange = (e) => {
    this.setState({ msg: e.target.value });
  };

  render() {
    return (
      <div className="main__chatcontent">
        <div className="content__header">
          <div className="blocks">
            <div className="current-chatting-user">
              <Avatar
                isOnline="active"
                image="https://i.vietgiaitri.com/2020/5/12/co-minh-hieu-duoc-fan-de-cu-di-thi-hoa-hau-trang-phuc-dan-toc-da-hoi-da-san-sang-97b-4926756.jpeg"
              />
              <p>Cô Minh Hiếu</p> <br/ >
              <span>online</span>
            </div>
    
          </div>

          <div className="blocks">
            <div className="settings">
              <button className="btn-nobg">
                <MDBIcon icon="phone" />
              </button>
            </div>
          </div>
        </div>
        <div className="content__body">
          <div className="chat__items">
            {this.state.chat.map((itm, index) => {
              return (
                <ChatItem
                  animationDelay={index + 2}
                  key={itm.key}
                  user={itm.type ? itm.type : "me"}
                  msg={itm.msg}
                  image={itm.image}
                />
              );
            })}
            <div ref={this.messagesEndRef} />
          </div>
        </div>
        <div className="content__footer">
          <div className="sendNewMessage">
            <button className="addFiles">
              <i className="fa fa-plus"></i>
            </button>
            <input
              type="text"
              placeholder="Type a message here"
              onChange={this.onStateChange}
              value={this.state.msg}
            />
            <button className="btnSendMsg" id="sendMsgBtn">
              <i className="fa fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
