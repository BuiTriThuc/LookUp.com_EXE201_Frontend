import Img from "../assets/img.png";
import Attach from "../assets/attach.png";

const Input = () => {
    return (
        <div className="input_chat">
            <input type="text" placeholder="Type something..." className="input_chat" />
            <div className="send_chat">
                <img src={Attach} alt="" />
                <input type="file" style={{display: "none"}} id="file" />
                <label htmlFor="file">
                    <img src={Img} alt="" className="img_chat" />
                </label>
                <button className='btn_chat' >Send</button>
            </div>
        </div>
    )
}

export default Input;