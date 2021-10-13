import './topbar.scss';
import { LinkedIn,GitHub,Person,} from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">
                        resume.
                    </a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>+8 931 336 21 50</span>
                    </div>
                    <div className="itemContainer">
                        <a href="https://www.linkedin.com/in/denis-gareev-b9a303212" target='_blank' rel='noreferrer'>
                            <LinkedIn className="icon" />
                        </a>
                    </div>
                    <div className="itemContainer">
                        <a href="https://github.com/Topmewan" target='_blank' rel='noreferrer'>
                            <GitHub className="icon" />
                        </a>

                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}