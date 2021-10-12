//Components
import Intro from "./components/intro/Intro";
import About from './components/about/About';
import PortfolioList from "./components/portfolioList/PortfolioList";
import Form from "./components/form/Form";
import Topbar from "./components/topbar/Topbar";

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
                <About/>
                <PortfolioList/>
                <Form/>
            </div>
        </div>
    </div>
  );
}

export default App;
