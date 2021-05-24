import "./Header.css"
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import Logo from "../Logo/Logo";

const Header = ({user}) => {
    return (
        <div className="header">
           <Logo />
           <Button letter="Home"/>
           <Icon user={user} className="user"/>
           
        </div>
    
    )
    };
        
export default Header;