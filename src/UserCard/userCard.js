import avatar from "../assets/avatar.png"
import "./userCard.css"

const UserCard = () => {
    return (
        <div className="userCard">
            <img className="avatarImgCard" src={avatar} />
            <p className="userNameCard">John Doe</p>
            <p className="userName2">@johnny12</p>
            <p className="followers">14 following</p>
        </div>
        
    )
}

export default UserCard;