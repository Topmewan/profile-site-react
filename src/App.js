//Components
import Intro from "./components/intro/Intro";
import About from './components/about/About';
import PortfolioList from "./components/portfolioList/PortfolioList";
import Form from "./components/form/Form";

function App() {
  return (
    <div>
      <Intro/>
        <About/>
        <PortfolioList/>
        <Form/>
    </div>
  );
}

export default App;
