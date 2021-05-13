import avatar from "../assets/avatar.png"
import DropdownUser from "../DropdownUser/dropdownUser"
import "./Icon.css"
import { useState } from "react";


const Icon = () => {
    const [isClicked, setIsClicked] = useState(false);
    return (
        <div className="user"
        >
            <img className="avatarImg" src={avatar}/>
            <p   onClick={() => setIsClicked(true)} className="arrow">⌄</p>
            {isClicked && <DropdownUser/>}
        </div>
        
    )
}

export default Icon;