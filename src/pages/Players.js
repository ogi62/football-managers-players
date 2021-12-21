import { Route, Routes } from "react-router"
import Player from "../components/Player/Player"
import Playersheader from "../components/PlayersHeader/Playersheader"
import Messi from "../images/players/leomessi.jpg"
import Ronaldo from "../images/players/cristiano.jpg"
import Zidan from "../images/players/zidan.jpg"
import Zuba from "../images/players/zuba2.jpg"
import Ronaldinho from "../images/players/ronaldinho.jpg"
import Iniesta from "../images/players/iniesta.jpeg"
import Xavi from "../images/players/xavi.jpg"
import Henry from "../images/players/henry.jpg"
import DelPiero from "../images/players/delpiero.jpg"
import Cannavaro from "../images/players/cannavaro.jpg"
import { useContext } from "react"
import { FootballContext } from "../context/context"

const Players = () => {

    //use created context
    const { players } = useContext(FootballContext)

    return (
        <>
            <Playersheader
                name1="Leo Messi"
                name2="Cristiano Ronaldo"
                name3="Zinedine Zidane"
                name4="Ronaldo"
                name5="Ronaldinho"
                name6="Iniesta"
                name7="Xavi"
                name8="Thierry Henry"
                name9="Alessandro Del Piero"
                name10="Fabio Cannavaro"
            />

            <Routes>

                <Route path="LeoMessi" element={<Player
                    name={players[0].name}
                    pic={Messi}
                    worldCup={players[0].worldCup}
                    championsLeague={players[0].championsLeague}
                    league={players[0].league}
                    ballon={players[0].ballon}
                    played={players[0].played}
                    goals={players[0].goals}
                    intPl={players[0].intPl}
                    intGl={players[0].intGl}
                    video={players[0].video}
                    description={players[0].description}
                    achievements={players[0].achievements}
                />}
                />
                {/* 2 */}
                <Route path="CristianoRonaldo" element={<Player
                    name={players[1].name}
                    pic={Ronaldo}
                    worldCup={players[1].worldCup}
                    championsLeague={players[1].championsLeague}
                    league={players[1].league}
                    ballon={players[1].ballon}
                    played={players[1].played}
                    goals={players[1].goals}
                    intPl={players[1].intPl}
                    intGl={players[1].intGl}
                    video={players[1].video}
                    description={players[1].description}
                    achievements={players[1].achievements}
                />}
                />
                {/* 3 */}
                <Route path="ZinedineZidane" element={<Player
                    name={players[2].name}
                    pic={Zidan}
                    worldCup={players[2].worldCup}
                    championsLeague={players[2].championsLeague}
                    league={players[2].league}
                    ballon={players[2].ballon}
                    played={players[2].played}
                    goals={players[2].goals}
                    intPl={players[2].intPl}
                    intGl={players[2].intGl}
                    video={players[2].video}
                    description={players[2].description}
                    achievements={players[2].achievements}
                />}
                />
                {/* 4 */}
                <Route path="Ronaldo" element={<Player
                    name={players[3].name}
                    pic={Zuba}
                    worldCup={players[3].worldCup}
                    championsLeague={players[3].championsLeague}
                    league={players[3].league}
                    ballon={players[3].ballon}
                    played={players[3].played}
                    goals={players[3].goals}
                    intPl={players[3].intPl}
                    intGl={players[3].intGl}
                    video={players[3].video}
                    description={players[3].description}
                    achievements={players[3].achievements}
                />}
                />
                {/* 5 */}
                <Route path="Ronaldinho" element={<Player
                    name={players[4].name}
                    pic={Ronaldinho}
                    worldCup={players[4].worldCup}
                    championsLeague={players[4].championsLeague}
                    league={players[4].league}
                    ballon={players[4].ballon}
                    played={players[4].played}
                    goals={players[4].goals}
                    intPl={players[4].intPl}
                    intGl={players[4].intGl}
                    video={players[4].video}
                    description={players[4].description}
                    achievements={players[4].achievements}
                />}
                />
                {/* 6 */}
                <Route path="Iniesta" element={<Player
                    name={players[5].name}
                    pic={Iniesta}
                    worldCup={players[5].worldCup}
                    championsLeague={players[5].championsLeague}
                    league={players[5].league}
                    ballon={players[5].ballon}
                    played={players[5].played}
                    goals={players[5].goals}
                    intPl={players[5].intPl}
                    intGl={players[5].intGl}
                    video={players[5].video}
                    description={players[5].description}
                    achievements={players[5].achievements}
                />}
                />
                {/* 7 */}
                <Route path="Xavi" element={<Player
                    name={players[6].name}
                    pic={Xavi}
                    worldCup={players[6].worldCup}
                    championsLeague={players[6].championsLeague}
                    league={players[6].league}
                    ballon={players[6].ballon}
                    played={players[6].played}
                    goals={players[6].goals}
                    intPl={players[6].intPl}
                    intGl={players[6].intGl}
                    video={players[6].video}
                    description={players[6].description}
                    achievements={players[6].achievements}
                />}
                />
                {/* 8 */}
                <Route path="ThierryHenry" element={<Player
                    name={players[7].name}
                    pic={Henry}
                    worldCup={players[7].worldCup}
                    championsLeague={players[7].championsLeague}
                    league={players[7].league}
                    ballon={players[7].ballon}
                    played={players[7].played}
                    goals={players[7].goals}
                    intPl={players[7].intPl}
                    intGl={players[7].intGl}
                    video={players[7].video}
                    description={players[7].description}
                    achievements={players[7].achievements}
                />}
                />
                {/* 9 */}
                <Route path="AlessandroDelPiero" element={<Player
                    name={players[8].name}
                    pic={DelPiero}
                    worldCup={players[8].worldCup}
                    championsLeague={players[8].championsLeague}
                    league={players[8].league}
                    ballon={players[8].ballon}
                    played={players[8].played}
                    goals={players[8].goals}
                    intPl={players[8].intPl}
                    intGl={players[8].intGl}
                    video={players[8].video}
                    description={players[8].description}
                    achievements={players[8].achievements}
                />}
                />
                {/* 10 */}
                <Route path="FabioCannavaro" element={<Player
                    name={players[9].name}
                    pic={Cannavaro}
                    worldCup={players[9].worldCup}
                    championsLeague={players[9].championsLeague}
                    league={players[9].league}
                    ballon={players[9].ballon}
                    played={players[9].played}
                    goals={players[9].goals}
                    intPl={players[9].intPl}
                    intGl={players[9].intGl}
                    video={players[9].video}
                    description={players[9].description}
                    achievements={players[9].achievements}
                />}
                />

            </Routes>

        </>
    )
}

export default Players
