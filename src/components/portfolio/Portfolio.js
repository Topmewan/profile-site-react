import './Portfolio.scss';
import {portfolio} from "../../data";


export default function Portfolio() {


    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <div className="portfolio-container">
                {portfolio.map((d) => (
                    <div className="item">
                        <img
                            src={d.img}
                            alt=""
                        />
                        <h3>{d.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}
