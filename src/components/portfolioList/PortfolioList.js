import './PortfolioList.css'
import Portfolio from "../portfolio/Portfolio";
import {portfolio} from "../../data";


const PortfolioList = () => {
    return (
        <div className='pl'>
            <div className="pl-texts">
                <h1 className="pl-title">Portfolio</h1>
                <p className="pl-desc">
                    This is my portfolio.
                </p>
            </div>

            <div className="pl-list">
                {portfolio.map((item) => (
                    <Portfolio
                        key ={item.id}
                        img={item.img}
                        link={item.link}
                    />))}


            </div>
        </div>
    );
}

export default PortfolioList;