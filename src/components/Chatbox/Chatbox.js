import Sidebar from "./Sidebar";
import Chat from "./Chat";
import './Chatbot.css';
import Input from "./Input";

const Chatbox = () => {
  return (
    <div className="home_chat">
      <div className="container_chat">
        <Sidebar />
        <Chat />
        
      </div>
    </div>
  )
}

export default Chatbox;
