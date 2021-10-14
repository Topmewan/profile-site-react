//Components
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Form from "./components/form/Form";
import Topbar from "./components/topbar/Topbar";
import Skills from "./components/cards/Skills";
import './app.scss';
import {useState} from "react";
import Menu from "./components/menu/Menu";
import AlertState from "./components/form/AlertState";

function App() {
    const [menuOpen,setMenuOpen] = useState(false);


  return (
    <div>
        <div className="app">
            <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <div className="sections">
                <Intro menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                <Portfolio menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                <Skills menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                <AlertState>
                    <Form menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                </AlertState>
            </div>
        </div>
    </div>
  );
}

export default App;
