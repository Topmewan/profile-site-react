import './Contact.css';
import phone from '../../img/phone-volume.svg';
import linkedin from '../../img/linkedin.svg';
import github from '../../img/github.svg';
import email from '../../img/envelope-alt.svg';
import location from '../../img/map-marker.svg';

const Contact = () => {
    return (
        <div className='c'>
            <div className="c-bg">

                <div className="c-wrapper">
                    <div className="c-left">
                        <h1 className="c-title">Contacts</h1>
                            <div className="c-info">
                                <div className="c-info-item">
                                    <img
                                        src={phone}
                                        alt={phone}
                                        className="c-icon"
                                    />
                                    +7 931 336 21 50
                                </div>
                                <div className="c-info-item">
                                    <img
                                        src={email}
                                        alt=""
                                        className="c-icon"
                                    />
                                    anon8733@gmail.com
                                </div>
                                <div className="c-info-item">
                                    <a className='c-icon'href="https://www.linkedin.com/in/denis-gareev-b9a303212" target='-_blank'>
                                        <img  src={linkedin} alt=""/>
                                    </a>

                                </div>
                                <div className="c-info-item">
                                    <a href="https://github.com/Topmewan" className="c-icon" target='-_blank'>
                                        <img
                                            src={github}
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <div className="c-info-item">
                                        <img
                                            src={location}
                                            alt=""
                                            className="c-icon"
                                        />
                                    Saint Petersburg, Russia
                                </div>
                            </div>

                    </div>
                    <div className="c-right">

                    </div>
                </div>
            </div>




        </div>

    );
}

export default Contact;