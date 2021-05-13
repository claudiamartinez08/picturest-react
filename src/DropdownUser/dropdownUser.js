import "./dropdownUser.css"

const DropdownUser = () => {
    return (
        <div className="listContainer">
            <ul className="dropList">
                <li className="userName">John Doe</li>
                <li>Update profile</li>
                <li>My boards</li>
                <li>My pins</li>
                <li>Log out</li>
            </ul>
        </div>
    )

}
export default DropdownUser;