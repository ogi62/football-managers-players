import "./ManagerBio.css"

const ManagerBio = (props) => {
    return (
        <div className="manager__bio">

            <div className="bio__info">
                <img src={props.pic} alt="" />
                <div className="information">
                    <h2>{props.name}</h2>
                    <p>{props.date}</p>
                    <p>Year active:<span>{props.active}</span></p>
                    <p>Clubs Managed: <div className="clubs">{props.clubs}</div></p>
                </div>
            </div>

            <div className="bio__description">
                <div className="manager__description">
                    <p>{props.description}</p>
                </div>
                <div className="manager__titles">
                    <ul className='titles__list'>
                        <li>
                            World Cup: <span>{props.worldCup}</span>
                        </li>

                        <li>
                            Leagues:<span>{props.clubsLeagues}</span>
                        </li>
                        <li>
                            Champions League: <span>{props.clubsChampionsLeague}</span>,
                            (runners-up) <span>{props.CLRunnersUp}</span>
                        </li>
                        <li>
                            Uefa Cup/Europa League: <span>{props.clubsEuropaLeague}</span>,
                            (runners-up)<span>{props.ELRunnersUp}</span>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ManagerBio
