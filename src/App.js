//Components
import Intro from "./components/intro/Intro";
import About from './components/about/About';
import PortfolioList from "./components/portfolioList/PortfolioList";
import Form from "./components/form/Form";
import Topbar from "./components/topbar/Topbar";

import './app.scss';
import {useState} from "react";

function App() {
    const [menuOpen,setMenuOpen] = useState()
  return (
    <div>
        <div className="app">
            <Topbar/>
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
