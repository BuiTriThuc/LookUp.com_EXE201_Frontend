import './Chatbot.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <span className="logo">Lama chat</span>
            <div className="user">
                <img className="img_navbar" src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <span>John</span>
                <button className='button_user'>logout</button>
            </div>
        </div>
    )
}

export default Navbar;