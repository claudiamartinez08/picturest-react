import logo from "../assets/logo.png";
import "./Logo.css"

const Logo = () => {
    return (
        <div className="logoAll">
        <img className="imagen" src={logo}/>
        <p className="appName">Picturest</p>

        </div>
    
    )
}
export default Logo