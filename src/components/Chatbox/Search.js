



const Search = () => {
    return (
        <div class='search'>
            <div className="searchForm">
                <input type="text" placeholder="find a user"/>
            </div>
            <div className="userChat">
                <img className="user_chat" src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  alt ="" />
                <div className="userChatInfo">
                    <span>Jane</span>
                </div>
            </div>
        </div>
    )
}

export default Search;