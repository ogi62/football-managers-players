import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Managers from './pages/Managers';
import Players from './pages/Players';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Error from "./components/Error/Error"
import Manager from './components/Manager/Manager';
import Player from './components/Player/Player';
import {GlobalProvider} from "./context/GlobalState"

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <div className="App">
          <Header />

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Managers" element={<Managers />} >
              <Route path="/Managers/SirAlexFerguson" element={<Manager />} />
              <Route path="/Managers/JoseMourinho" element={<Manager />} />
              <Route path="/Managers/PepGuardiola" element={<Manager />} />
              <Route path="/Managers/CarloAncelotti" element={<Manager />} />
              <Route path="/Managers/VicenteDelBosque" element={<Manager />} />
              <Route path="/Managers/JurgenKlopp" element={<Manager />} />
              <Route path="/Managers/ZinedineZidane" element={<Manager />} />
              <Route path="/Managers/MarcelloLippi" element={<Manager />} />
              <Route path="/Managers/ArseneWenger" element={<Manager />} />
              <Route path="/Managers/JuppHeynckes" element={<Manager />} />
            </Route>
            <Route exact path="/Players" element={<Players />} >
              <Route path="/Players/LeoMessi" element={<Player />} />
              <Route path="/Players/CristianoRonaldo" element={<Player />} />
              <Route path="/Players/ZinedineZidane" element={<Player />} />
              <Route path="/Players/Ronaldo" element={<Player />} />
              <Route path="/Players/Ronaldinho" element={<Player />} />
              <Route path="/Players/Iniesta" element={<Player />} />
              <Route path="/Players/Xavi" element={<Player />} />
              <Route path="/Players/ThierryHenry" element={<Player />} />
              <Route path="/Players/AlessandroDelPiero" element={<Player />} />
              <Route path="/Players/FabioCannavaro" element={<Player />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </GlobalProvider>


  );
}

export default App;
