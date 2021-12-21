import "./Player.css"
import ReactPlayer from 'react-player/lazy'


const Player = (props) => {
    return (
        <>
        <div className="container__info">
            <div className="info">
                <h2>{props.name}</h2>
                <img src={props.pic} alt={props.name} />
            </div>
            <div className="titles">
                <p>World Cups: <span>{props.worldCup}</span></p>
                <p>Champions Leagues: <span>{props.championsLeague}</span></p>
                <p>Leagues: <span>{props.league}</span></p>
                <p>Ballon d'Or: <span>{props.ballon}</span></p>
                <p>Club statistic</p>
                <p>Played:  <span>{props.played}</span> Goals: <span>{props.goals}</span></p>
                <p>International statistic</p>
                <p>Played: <span>{props.intPl}</span> Goals: <span>{props.intGl}</span></p>
            </div>
        </div>
        
        <div className="description">
            <p>
                {props.description}
            </p>
            <p>
                {props.achievements}
            </p>
        </div>

        <div className="video">
        <ReactPlayer url={props.video} width={"100%"}  height={"30rem"}/>
        </div>
        
        </>
        
    )
}

export default Player
