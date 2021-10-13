//Components
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Form from "./components/form/Form";
import Topbar from "./components/topbar/Topbar";
import Card from "./components/cards/Card";
import './app.scss';
import {useState} from "react";
import Menu from "./components/menu/Menu";

function App() {
    const [menuOpen,setMenuOpen] = useState(false);


  return (
    <div>
        <div className="app">
            <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <div className="sections">
                <Intro/>
                <Portfolio/>
                <Card/>
                <Form/>
            </div>
        </div>
    </div>
  );
}

export default App;
