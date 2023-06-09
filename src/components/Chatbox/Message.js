import  Messages  from './Messages';

const Message = () => {
    return (
        <div className='message_item'>
            <div className='messageInfo_item'>
                <img className="avt_img"
                    src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="" 
                />
                <span>just now</span>
            </div>
            <div className='messageContent'>
                <p>Hello</p>
                <img src="" alt="" />
            </div>
        </div>
    )
}

export default Message;