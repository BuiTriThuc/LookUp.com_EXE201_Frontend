import React, { useEffect } from "react";
import "./Chatbox.css";
import { FiSend } from "react-icons/fi";
import logo from "../assets/logo.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
export default function Chatbox() {
  const BOT_IMG = "../assets/bot.png";
  const PERSON_IMG = "../assets/user.png";
  const BOT_NAME = "LookUp";
  const PERSON_NAME = "User";
  const prompts = [["hi", "hey", "hello", "good morning", "good afternoon"]];
  const replies = [["Hello!", "Hi!", "Hey!", "Hi there!", "Howdy"]];
  const alternative = [
    `Chúng tôi sẽ cố gắng giải đáp nhanh nhất có thể. Bạn có thể ghé qua fanpage theo đường link ${(
      <a href="https://www.facebook.com/profile.php?id=100093181562017"></a>
    )} để được giải đáp`,
  ];
  const robot = ["How do you do, fellow human", "I am not a bot"];
  useEffect(() => {
    const msgerForm = document.querySelector(".msger-inputarea");
    const msgerInput = document.querySelector(".msger-input");
    const msgerChat = document.querySelector(".msger-chat");

    const handleSubmit = (event) => {
      event.preventDefault();
      const msgText = msgerInput.value;
      if (!msgText) return;
      msgerInput.value = "";
      addChat(PERSON_NAME, PERSON_IMG, "right", msgText);
      output(msgText);
    };

    msgerForm.addEventListener("submit", handleSubmit);

    function output(input) {
      let product;
      let text = input
        .toLowerCase()
        .replace(/[^\w\s]/gi, "")
        .replace(/[\d]/gi, "")
        .trim();
      text = text
        .replace(/ a /g, " ")
        .replace(/i feel /g, "")
        .replace(/whats/g, "what is")
        .replace(/please /g, "")
        .replace(/ please/g, "")
        .replace(/r u/g, "are you");
      if (compare(prompts, replies, text)) {
        product = compare(prompts, replies, text);
      } else if (text.match(/thank/gi)) {
        product = "You're welcome!";
      } else if (text.match(/(robot|bot|robo)/gi)) {
        product = robot[Math.floor(Math.random() * robot.length)];
      } else {
        product = alternative[Math.floor(Math.random() * alternative.length)];
      }
      const delay = input.split(" ").length * 100;
      setTimeout(() => {
        addChat(BOT_NAME, BOT_IMG, "left", product);
      }, delay);
    }

    function compare(promptsArray, repliesArray, string) {
      let reply;
      let replyFound = false;
      for (let x = 0; x < promptsArray.length; x++) {
        for (let y = 0; y < promptsArray[x].length; y++) {
          if (promptsArray[x][y] === string) {
            let replies = repliesArray[x];
            reply = replies[Math.floor(Math.random() * replies.length)];
            replyFound = true;
            break;
          }
        }
        if (replyFound) {
          break;
        }
      }
      return reply;
    }

    function addChat(name, img, side, text) {
      const msgHTML = `
      <div class="msg ${side}-msg">
      <div class="msg-img" style="background-image: url(${img})"></div>
        <div class="msg-bubble">
          <div class="msg-info">
            <div class="msg-info-name">${name}</div>
            <div class="msg-info-time">${formatDate(new Date())}</div>
          </div>
          <div class="msg-text">${text}</div>
        </div>
      </div>
    `;
      msgerChat.insertAdjacentHTML("beforeend", msgHTML);

      msgerChat.scrollTop += 500;
    }

    function get(selector, root = document) {
      return root.querySelector(selector);
    }

    function formatDate(date) {
      const h = "0" + date.getHours();
      const m = "0" + date.getMinutes();
      return `${h.slice(-2)}:${m.slice(-2)}`;
    }

    function random(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }

    return () => {
      msgerForm.removeEventListener("submit", handleSubmit);
    };
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="content">
        <section className="msger">
          <header className="msger-header">
            <div className="msger-header-title">
              <img style={{ marginRight: "3px" }} src={logo} alt="" srcSet="" />{" "}
              <p> LookUp</p>
            </div>
          </header>
          <div
            style={{
              height: "580px",
              overflowY: "scroll",
              overflowX: "hidden !important",
              overflow: "scroll",
            }}
          >
            <main className="msger-chat">
              <div class="msg left-msg">
                <div
                  className="msg-img"
                  style={{
                    backgroundImage: `url("http://res.cloudinary.com/dakfojmaz/image/upload/v1686627532/gl1p1rkqvwkdqero0h6h.png")`,
                  }}
                ></div>
                <div class="msg-bubble">
                  <div class="msg-info">
                    <div class="msg-info-name">LookUp</div>
                    {/* <div class="msg-info-time">12:45</div> */}
                  </div>
                  <div class="msg-text">
                    Chào bạn, chào mừng bạn đến với nền tảng kết nối doanh
                    nghiệp LookUp. Chúng tôi có thể hỗ trợ gì cho bạn? 😄
                  </div>
                </div>
              </div>
              {/* <div class="msg right-msg">
                <div
                  class="msg-img"
                  style={{
                    backgroundImage: `url("http://res.cloudinary.com/dakfojmaz/image/upload/v1686477801/wlkiarmagfl8t41cchx9.jpg")`,
                  }}
                ></div>
                <div class="msg-bubble">
                  <div class="msg-info">
                    <div class="msg-info-name">User</div>
                    <div class="msg-info-time">12:46</div>
                  </div>

                  <div class="msg-text"></div>
                </div>
              </div> */}
            </main>
          </div>
          <form className="msger-inputarea">
            <input
              style={{ color: "white" }}
              type="text"
              className="msger-input"
              placeholder="Enter your message..."
            />
            <button type="submit" className="msger-send-btn">
              <FiSend style={{ width: "30px", height: "30px" }} />
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
