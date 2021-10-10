import './PortfolioList.css'
import Portfolio from "../portfolio/Portfolio";


const PortfolioList = () => {
    return (
        <div className='pl'>
            <div className="pl-texts">
                <h1 className="pl-title">Portfolio</h1>
                <p className="pl-desc">
                    This is my portfolio.
                </p>
            </div>

            <div className="ol-list">
                <Portfolio/>
                <Portfolio/>
                <Portfolio/>
                <Portfolio/>
            </div>

        </div>
    );
}

export default PortfolioList;