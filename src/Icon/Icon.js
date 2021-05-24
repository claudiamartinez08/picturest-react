import DropdownUser from "../DropdownUser/dropdownUser"
import "./Icon.css"
import { useState } from "react";



const Icon = ({user}) => {
    const [isClicked, setIsClicked] = useState(false);
    const onClick = () => setIsClicked(!isClicked);

    return (
        <div className="user">
            
            <img className="avatarImg" src={user?.avatar}/>
            <p onClick={onClick} className="arrow">⌄</p>
            {isClicked && <DropdownUser/>}
        </div>
        
    )
}

export default Icon;