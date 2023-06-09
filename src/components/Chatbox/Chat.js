import Cam from "../assets/cam.png";
import Add from "../assets/add.png";
import More from "../assets/more.png";
import Message from "./Message";
import Input from "./Input";

const Chat = () => {
    return (
        <div className="chat">
            <div className='chatInfo'>
                <span>Jane</span>
                <div className="chatIcons">
                <img src={Cam} alt="" />
                <img src={Add} alt="" />
                <img src={More} alt="" />
            </div>
            </div>
            <div className="messages_box">
            <Message />
            </div>
            <div className="type_chat">
            <Input/> 
            </div> 
             
            
        </div>
    )
}

export default Chat;