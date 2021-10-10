//Components
import Intro from "./components/intro/Intro";
import About from './components/about/About';
import PortfolioList from "./components/portfolioList/PortfolioList";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div>
      <Intro/>
        <About/>
        <PortfolioList/>
      <Contact/>
    </div>
  );
}

export default App;
