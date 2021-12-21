import { Route, Routes } from "react-router"
import Manager from "../components/Manager/Manager"
import Managersheader from "../components/ManagersHeader/Managersheader"
import SirAlex from "../images/managers/ferguson.jpg"
import Jose from "../images/managers/jose.jpg"
import Pep from "../images/managers/pep.jpg"
import Carlo from "../images/managers/carlo.jpg"
import DelBosque from "../images/managers/delbosque.jpg"
import Klopp from "../images/managers/klopp.jpeg"
import Zidan from "../images/managers/zidan.jpg"
import Lippi from "../images/managers/lippi.jpg"
import Wenger from "../images/managers/wenger.jpg"
import Jupp from "../images/managers/heynckes.jpg"
import { useContext } from "react"
import { FootballContext } from "../context/context"


const Managers = () => {

  //use created context
  const { managers } = useContext(FootballContext)

  return (
    <>
      <Managersheader
        name1="Sir Alex Ferguson"
        name2="Jose Mourinho"
        name3="Pep Guardiola"
        name4="Carlo Ancelotti"
        name5="Vicente Del Bosque"
        name6="Jurgen Klopp"
        name7="Zinedine Zidane"
        name8="Marcello Lippi"
        name9="Arsene Wenger"
        name10="Jupp Heynckes"
      />

      <Routes>

        <Route
          path="SirAlexFerguson"
          element={<Manager
            name={managers[0].name}
            pic={SirAlex}
            date={managers[0].date}
            active={managers[0].active}
            description={managers[0].description}
            clubs={managers[0].clubs}
            worldCup={managers[0].worldCup}
            clubsLeagues={managers[0].clubsLeagues}
            clubsChampionsLeague={managers[0].clubsChampionsLeague}
            clubsEuropaLeague={managers[0].clubsEuropaLeague}
            CLRunnersUp={managers[0].CLRunnersUp}
            ELRunnersUp={managers[0].ELRunnersUp}
            video={managers[0].video}
            played={managers[0].played}
            win={managers[0].win}
            draw={managers[0].draw}
            lose={managers[0].lose}
            percentage={managers[0].percentage}
          />} />
        {/* 2 */}
        <Route
          path="JoseMourinho"
          element={<Manager
            name={managers[1].name}
            pic={Jose}
            date={managers[1].date}
            active={managers[1].active}
            description={managers[1].description}
            clubs={managers[1].clubs}
            worldCup={managers[1].worldCup}
            clubsLeagues={managers[1].clubsLeagues}
            clubsChampionsLeague={managers[1].clubsChampionsLeague}
            clubsEuropaLeague={managers[1].clubsEuropaLeague}
            CLRunnersUp={managers[1].CLRunnersUp}
            ELRunnersUp={managers[1].ELRunnersUp}
            video={managers[1].video}
            played={managers[1].played}
            win={managers[1].win}
            draw={managers[1].draw}
            lose={managers[1].lose}
            percentage={managers[1].percentage}
          />} />
        {/* 3 */}
        <Route
          path="PepGuardiola"
          element={<Manager
            name={managers[2].name}
            pic={Pep}
            date={managers[2].date}
            active={managers[2].active}
            description={managers[2].description}
            clubs={managers[2].clubs}
            worldCup={managers[2].worldCup}
            clubsLeagues={managers[2].clubsLeagues}
            clubsChampionsLeague={managers[2].clubsChampionsLeague}
            clubsEuropaLeague={managers[2].clubsEuropaLeague}
            CLRunnersUp={managers[2].CLRunnersUp}
            ELRunnersUp={managers[2].ELRunnersUp}
            video={managers[2].video}
            played={managers[2].played}
            win={managers[2].win}
            draw={managers[2].draw}
            lose={managers[2].lose}
            percentage={managers[2].percentage}
          />} />
        {/* 4 */}
        <Route
          path="CarloAncelotti"
          element={<Manager
            name={managers[3].name}
            pic={Carlo}
            date={managers[3].date}
            active={managers[3].active}
            description={managers[3].description}
            clubs={managers[3].clubs}
            worldCup={managers[3].worldCup}
            clubsLeagues={managers[3].clubsLeagues}
            clubsChampionsLeague={managers[3].clubsChampionsLeague}
            clubsEuropaLeague={managers[3].clubsEuropaLeague}
            CLRunnersUp={managers[3].CLRunnersUp}
            ELRunnersUp={managers[3].ELRunnersUp}
            video={managers[3].video}
            played={managers[3].played}
            win={managers[3].win}
            draw={managers[3].draw}
            lose={managers[3].lose}
            percentage={managers[3].percentage}
          />} />
        {/* 5 */}
        <Route
          path="VicenteDelBosque"
          element={<Manager
            name={managers[4].name}
            pic={DelBosque}
            date={managers[4].date}
            active={managers[4].active}
            description={managers[4].description}
            clubs={managers[4].clubs}
            worldCup={managers[4].worldCup}
            clubsLeagues={managers[4].clubsLeagues}
            clubsChampionsLeague={managers[4].clubsChampionsLeague}
            clubsEuropaLeague={managers[4].clubsEuropaLeague}
            CLRunnersUp={managers[4].CLRunnersUp}
            ELRunnersUp={managers[4].ELRunnersUp}
            video={managers[4].video}
            played={managers[4].played}
            win={managers[4].win}
            draw={managers[4].draw}
            lose={managers[4].lose}
            percentage={managers[4].percentage}
          />} />
        {/* 6 */}
        <Route
          path="JurgenKlopp"
          element={<Manager
            name={managers[5].name}
            pic={Klopp}
            date={managers[5].date}
            active={managers[5].active}
            description={managers[5].description}
            clubs={managers[5].clubs}
            worldCup={managers[5].worldCup}
            clubsLeagues={managers[5].clubsLeagues}
            clubsChampionsLeague={managers[5].clubsChampionsLeague}
            clubsEuropaLeague={managers[5].clubsEuropaLeague}
            CLRunnersUp={managers[5].CLRunnersUp}
            ELRunnersUp={managers[5].ELRunnersUp}
            video={managers[5].video}
            played={managers[5].played}
            win={managers[5].win}
            draw={managers[5].draw}
            lose={managers[5].lose}
            percentage={managers[5].percentage}
          />} />
        {/* 7 */}
        <Route
          path="ZinedineZidane"
          element={<Manager
            name={managers[6].name}
            pic={Zidan}
            date={managers[6].date}
            active={managers[6].active}
            description={managers[6].description}
            clubs={managers[6].clubs}
            worldCup={managers[6].worldCup}
            clubsLeagues={managers[6].clubsLeagues}
            clubsChampionsLeague={managers[6].clubsChampionsLeague}
            clubsEuropaLeague={managers[6].clubsEuropaLeague}
            CLRunnersUp={managers[6].CLRunnersUp}
            ELRunnersUp={managers[6].ELRunnersUp}
            video={managers[6].video}
            played={managers[6].played}
            win={managers[6].win}
            draw={managers[6].draw}
            lose={managers[6].lose}
            percentage={managers[6].percentage}
          />} />
        {/* 8 */}
        <Route
          path="MarcelloLippi"
          element={<Manager
            name={managers[7].name}
            pic={Lippi}
            date={managers[7].date}
            active={managers[7].active}
            description={managers[7].description}
            clubs={managers[7].clubs}
            worldCup={managers[7].worldCup}
            clubsLeagues={managers[7].clubsLeagues}
            clubsChampionsLeague={managers[7].clubsChampionsLeague}
            clubsEuropaLeague={managers[7].clubsEuropaLeague}
            CLRunnersUp={managers[7].CLRunnersUp}
            ELRunnersUp={managers[7].ELRunnersUp}
            video={managers[7].video}
            played={managers[7].played}
            win={managers[7].win}
            draw={managers[7].draw}
            lose={managers[7].lose}
            percentage={managers[7].percentage}
          />} />
        {/* 9 */}
        <Route
          path="ArseneWenger"
          element={<Manager
            name={managers[8].name}
            pic={Wenger}
            date={managers[8].date}
            active={managers[8].active}
            description={managers[8].description}
            clubs={managers[8].clubs}
            worldCup={managers[8].worldCup}
            clubsLeagues={managers[8].clubsLeagues}
            clubsChampionsLeague={managers[8].clubsChampionsLeague}
            clubsEuropaLeague={managers[8].clubsEuropaLeague}
            CLRunnersUp={managers[8].CLRunnersUp}
            ELRunnersUp={managers[8].ELRunnersUp}
            video={managers[8].video}
            played={managers[8].played}
            win={managers[8].win}
            draw={managers[8].draw}
            lose={managers[8].lose}
            percentage={managers[8].percentage}
          />} />
        {/* 10 */}
        <Route
          path="JuppHeynckes"
          element={<Manager
            name={managers[9].name}
            pic={Jupp}
            date={managers[9].date}
            active={managers[9].active}
            description={managers[9].description}
            clubs={managers[9].clubs}
            worldCup={managers[9].worldCup}
            clubsLeagues={managers[9].clubsLeagues}
            clubsChampionsLeague={managers[9].clubsChampionsLeague}
            clubsEuropaLeague={managers[9].clubsEuropaLeague}
            CLRunnersUp={managers[9].CLRunnersUp}
            ELRunnersUp={managers[9].ELRunnersUp}
            video={managers[9].video}
            played={managers[9].played}
            win={managers[9].win}
            draw={managers[9].draw}
            lose={managers[9].lose}
            percentage={managers[9].percentage}
          />} />

      </Routes>

    </>
  )
}

export default Managers
