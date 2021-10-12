import './topbar.scss';
import {LinkedIn,GitHub,Person,Mail} from '@material-ui/icons';

const Topbar = () => {
    return (
        <div className='topbar'>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className='logo'>genius.</a>
                    <div className="itemContainer">
                        <Person className='icon'/>
                        <span>+7 931 336 21 50</span>
                    </div>
                    <div className="itemContainer">
                        <LinkedIn className='icon'/>
                        {/*<span>+7 931 336 21 50</span>*/}
                    </div>
                    <div className="itemContainer">
                        <GitHub className='icon'/>
                        {/*<span>+7 931 336 21 50</span>*/}
                    </div>
                    <div className="itemContainer">
                        <Mail className='icon'/>
                        <span>anon8733@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger">
                        <span className="line1"></span>
                        <span className="line1"></span>
                        <span className="line1"></span>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Topbar;