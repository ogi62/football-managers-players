import { Link} from "react-router-dom";
import "./Managersheader.css"


const Managersheader = (props) => {



    return (
        <div>
            <ul className="header__flex">
                <li className="flex__item">
                    <Link to="/Managers/SirAlexFerguson"><p>{props.name1}</p><span>#1</span></Link>
                </li>
                <li className="flex__item">
                    <Link to="/Managers/JoseMourinho"><p>{props.name2}</p><span>#2</span></Link>
                </li>
                <li className="flex__item">
                    <Link to="/Managers/PepGuardiola"><p>{props.name3}</p><span>#3</span></Link>
                </li>
                <li className="flex__item">
                    <Link to="/Managers/CarloAncelotti"><p>{props.name4}</p><span>#4</span></Link>
                </li>
                <li className="flex__item">
                    <Link to="/Managers/VicenteDelBosque"><p>{props.name5}</p><span>#5</span></Link>
                </li>
                <li className="flex__item">
                    <Link to="/Managers/JurgenKlopp"><p>{props.name6}</p><span>#6</span></Link>
                </li>
                <li className="flex__item">
                    <Link to="/Managers/ZinedineZidane"><p>{props.name7}</p><span>#7</span></Link>
                </li>
                <li className="flex__item">
                    <Link to="/Managers/MarcelloLippi"><p>{props.name8}</p><span>#8</span></Link>
                </li>
                <li className="flex__item">
                    <Link to="/Managers/ArseneWenger"><p>{props.name9}</p><span>#9</span></Link>
                </li>
                <li className="flex__item">
                    <Link to="/Managers/JuppHeynckes"><p>{props.name10}</p><span>#10</span></Link>
                </li>
            </ul>


        </div>
    )
}

export default Managersheader