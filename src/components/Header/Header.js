import { Link } from "react-router-dom"
import "./Header.css"

const Header = () => {
    return (
        <div className="header">
            <ul className="flex">
                <li className="flex__items">
                    <Link to="/">Home</Link>
                </li>
                <li className="flex__items">
                    <Link to="/Managers/SirAlexFerguson">Managers</Link>
                </li>
                <li className="flex__items">
                    <Link to="/Players/LeoMessi">Players</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header
