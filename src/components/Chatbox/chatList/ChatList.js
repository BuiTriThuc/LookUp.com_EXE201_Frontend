import React, { Component } from "react";
import "./chatList.css";
import ChatListItems from "./ChatListItems";

export default class ChatList extends Component {
  allChatUsers = [
    {
      image:
        "https://i.vietgiaitri.com/2020/5/12/co-minh-hieu-duoc-fan-de-cu-di-thi-hoa-hau-trang-phuc-dan-toc-da-hoi-da-san-sang-97b-4926756.jpeg",
      id: 1,
      name: "Cô Minh Hiếu",
      active: true,
      isOnline: true,
    },
    {
      image:
        "https://s.memehay.com/files/posts/20210515/toan-bo-loi-ran-day-cua-huan-hoa-hong-huan-rose.jpg",
      id: 2,
      name: "Huấn Rose",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://i1.sndcdn.com/avatars-000633718875-g3ioy4-t500x500.jpg",
      id: 3,
      name: "Diễm My Quận Cam",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://s.memehay.com/files/posts/20201022/tran-duc-bo-nung-niu-noi-khong-chiu.jpg",
      id: 4,
      name: "Trần Đức Bo",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://yck.vn/data/avatars/o/0/169.jpg?1645498526",
      id: 5,
      name: "Tiến Bịp",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",
      id: 6,
      name: "Kayley Mellor",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://www.paintingcontest.org/components/com_djclassifieds/assets/images/default_profile.png",
      id: 7,
      name: "Hasan Mcculloch",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://auraqatar.com/projects/Anakalabel/media//vesbrand/designer4.jpg",
      id: 8,
      name: "Autumn Mckee",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSM6p4C6imkewkCDW-9QrpV-MMAhOC7GnJcIQ&usqp=CAU",
      id: 9,
      name: "Allen Woodley",
      active: false,
      isOnline: true,
    },
    {
      image: "https://pbs.twimg.com/profile_images/770394499/female.png",
      id: 10,
      name: "Manpreet David",
      active: false,
      isOnline: true,
    },
  ];
  constructor(props) {
    super(props);
    this.state = {
      allChats: this.allChatUsers,
    };
  }
  render() {
    return (
      <div className="main__chatlist">
        <div className="chatlist__heading">
          <h2>Chats</h2>
          <button className="btn-nobg">
            <i className="fa fa-ellipsis-h"></i>
          </button>
        </div>
        <div className="chatList__search">
          <div className="search_wrap">
            <input type="text" placeholder="Search Here" required />
            <button className="search-btn">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
        <div className="chatlist__items">
          {this.state.allChats.map((item, index) => {
            return (
              <ChatListItems
                name={item.name}
                key={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
