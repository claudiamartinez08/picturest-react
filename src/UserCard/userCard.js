import "./userCard.css"

const UserCard = ({user}) => {

    return (
        <div>
            {user && 
            <div className="userCard">
            <img className="avatarImgCard" src={user.avatar} />
            <p className="userNameCard">{user.firstName + user.secondName}</p>
            <p className="userName2">{"@" + user.username}</p>
            <p className="followers">{user.following + " following"}</p>
            </div>
            }
        </div>
        
    )
}

export default UserCard;