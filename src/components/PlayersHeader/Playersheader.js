import { Link} from "react-router-dom";
import "./Playersheader.css"


const Playersheader = (props) => {



    return (
        <div>
            <ul className="header__flex">
                <li className="flex__item">
                    <Link to="/Players/LeoMessi"><p>{props.name1}</p><span>#1</span></Link>
                </li>
                <li className="flex__item">
                    <Link to="/Players/CristianoRonaldo"><p>{props.name2}</p><span>#2</span></Link>
                </li>
                <li className="flex__item">
                    <Link to="/Players/ZinedineZidane"><p>{props.name3}</p><span>#3</span></Link>
                </li>
                <li className="flex__item">
                    <Link to="/Players/Ronaldo"><p>{props.name4}</p><span>#4</span></Link>
                </li>
                <li className="flex__item">
                    <Link to="/Players/Ronaldinho"><p>{props.name5}</p><span>#5</span></Link>
                </li>
                <li className="flex__item">
                    <Link to="/Players/Iniesta"><p>{props.name6}</p><span>#6</span></Link>
                </li>
                <li className="flex__item">
                    <Link to="/Players/Xavi"><p>{props.name7}</p><span>#7</span></Link>
                </li>
                <li className="flex__item">
                    <Link to="/Players/ThierryHenry"><p>{props.name8}</p><span>#8</span></Link>
                </li>
                <li className="flex__item">
                    <Link to="/Players/AlessandroDelPiero"><p>{props.name9}</p><span>#9</span></Link>
                </li>
                <li className="flex__item">
                    <Link to="/Players/FabioCannavaro"><p>{props.name10}</p><span>#10</span></Link>
                </li>
            </ul>

            
        </div>
    )
}

export default Playersheader
