import ReactPlayer from 'react-player/lazy'
import "./ManagerExtra.css"

const ManagerExtra = (props) => {
    return (
        <div className="extra">
                <div className="extra__video">
                    <ReactPlayer url={props.video} />
                </div>
                <div className="extra__stats">
                    <p>Played: <span>{props.played}</span></p>
                    <p>Win: <span>{props.win}</span></p>
                    <p>Draw: <span>{props.draw}</span></p>
                    <p>Lose: <span>{props.lose}</span></p>
                    <p>Win %: <span>{props.percentage}</span></p>
                </div>
            </div>
    )
}

export default ManagerExtra
