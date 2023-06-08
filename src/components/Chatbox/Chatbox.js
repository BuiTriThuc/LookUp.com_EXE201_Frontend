import Sidebar from "./Sidebar";
import Chat from "./Chat";
import './Chatbot.css';

const Chatbox = () => {
  return (
    <div className="home">
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  )
}

export default Chatbox;
